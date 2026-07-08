'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { DEFAULT_THEME, STORAGE_KEY_THEME, isThemeId, type ThemeId } from '@/lib/themes';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeId;
  mode: ThemeMode;
  setTheme: (id: ThemeId) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Inline script to apply theme before paint to prevent FOUC.
 * Mounted via dangerouslySetInnerHTML in <head>.
 */
export const THEME_INIT_SCRIPT = `
(function() {
  try {
    var theme = localStorage.getItem('${STORAGE_KEY_THEME}');
    var valid = ['verde', 'azul', 'cinza'];
    if (!theme || valid.indexOf(theme) === -1) theme = 'verde';
    document.documentElement.setAttribute('data-theme', theme);
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