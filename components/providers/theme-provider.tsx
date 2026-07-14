'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  DEFAULT_THEME,
  STORAGE_KEY_THEME,
  STORAGE_KEY_MODE,
  applyThemeFavicon,
  isThemeId,
  type ThemeId,
} from '@/lib/themes';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeId;
  mode: ThemeMode;
  setTheme: (id: ThemeId) => void;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Inline script to apply theme + favicon + mode before paint to prevent FOUC.
 * Mounted via dangerouslySetInnerHTML in <head>.
 */
export const THEME_INIT_SCRIPT = `
(function() {
  try {
    var theme = localStorage.getItem('${STORAGE_KEY_THEME}');
    var mode = localStorage.getItem('${STORAGE_KEY_MODE}');
    var validThemes = ['verde', 'azul', 'cinza'];
    if (!theme || validThemes.indexOf(theme) === -1) theme = 'verde';
    if (mode !== 'light' && mode !== 'dark') {
      mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    if (mode === 'dark') {
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    }

    var colors = { verde: '#3FA34D', azul: '#2563EB', cinza: '#475569' };
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="16" fill="' + colors[theme] + '"/><path d="M32 14c-7 0-12 4.5-12 11 0 4 2 7 4 9l-2 8 8-4c1 0.3 2 0.5 2 0.5s1-0.2 2-0.5c7-2 12-7 12-13 0-6.5-5-11-12-11z" fill="#fff"/></svg>';
    var href = 'data:image/svg+xml,' + encodeURIComponent(svg);
    var links = document.querySelectorAll("link[rel*='icon']");
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('href', href);
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'verde');
  }
})();
`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);
  const [mode, setModeState] = useState<ThemeMode>('light');

  // Read from localStorage + system preference on mount (after hydration)
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEY_THEME);
      if (isThemeId(storedTheme)) {
        setThemeState(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
      }
      applyThemeFavicon(isThemeId(storedTheme) ? storedTheme : DEFAULT_THEME);

      const storedMode = localStorage.getItem(STORAGE_KEY_MODE);
      let nextMode: ThemeMode;
      if (storedMode === 'light' || storedMode === 'dark') {
        nextMode = storedMode;
      } else {
        nextMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      setModeState(nextMode);
      if (nextMode === 'dark') {
        document.documentElement.setAttribute('data-theme-mode', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme-mode');
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    try {
      localStorage.setItem(STORAGE_KEY_THEME, id);
      document.documentElement.setAttribute('data-theme', id);
      applyThemeFavicon(id);
    } catch {
      /* ignore */
    }
  }, []);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    try {
      localStorage.setItem(STORAGE_KEY_MODE, next);
      if (next === 'dark') {
        document.documentElement.setAttribute('data-theme-mode', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme-mode');
      }
    } catch {
      /* ignore */
    }
  }, []);

  const toggleMode = useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }, [mode, setMode]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}