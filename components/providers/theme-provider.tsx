'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  DEFAULT_THEME,
  STORAGE_KEY_THEME,
  applyThemeFavicon,
  isThemeId,
  type ThemeId,
} from '@/lib/themes';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeId;
  mode: ThemeMode;
  setTheme: (id: ThemeId) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Inline script to apply theme + favicon before paint to prevent FOUC.
 * Mounted via dangerouslySetInnerHTML in <head>.
 */
export const THEME_INIT_SCRIPT = `
(function() {
  try {
    var theme = localStorage.getItem('${STORAGE_KEY_THEME}');
    var valid = ['verde', 'azul', 'cinza'];
    if (!theme || valid.indexOf(theme) === -1) theme = 'verde';
    document.documentElement.setAttribute('data-theme', theme);

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
  const [mode, setMode] = useState<ThemeMode>('light');

  // Read from localStorage on mount (after hydration)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_THEME);
      if (isThemeId(stored)) {
        setThemeState(stored);
        document.documentElement.setAttribute('data-theme', stored);
        applyThemeFavicon(stored);
      } else {
        applyThemeFavicon(DEFAULT_THEME);
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

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        if (next === 'dark') {
          document.documentElement.setAttribute('data-theme-mode', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme-mode');
        }
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleMode }}>
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