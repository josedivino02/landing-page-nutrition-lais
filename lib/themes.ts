export type ThemeId = 'verde' | 'azul' | 'cinza';

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
  /** CSS color shown in the picker swatch */
  swatch: string;
  /** Background color used by the dynamic favicon */
  faviconColor: string;
}

export const THEMES: readonly Theme[] = [
  {
    id: 'verde',
    name: 'Verde Natural',
    description: 'Fresco, saudável e orgânico — o clássico da nutrição.',
    swatch: '#3FA34D',
    faviconColor: '#3FA34D',
  },
  {
    id: 'azul',
    name: 'Azul Trust',
    description: 'Médico, confiável e profissional — ideal para clínicas.',
    swatch: '#2563EB',
    faviconColor: '#2563EB',
  },
  {
    id: 'cinza',
    name: 'Cinza Premium',
    description: 'Sofisticado, moderno e minimalista — visual de clínica premium.',
    swatch: '#475569',
    faviconColor: '#475569',
  },
] as const;

export const DEFAULT_THEME: ThemeId = 'verde';

export const STORAGE_KEY_THEME = 'nutri-theme';
export const STORAGE_KEY_MODE = 'nutri-mode';

export function isThemeId(value: unknown): value is ThemeId {
  return value === 'verde' || value === 'azul' || value === 'cinza';
}

export function getTheme(id: ThemeId): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0]!;
}

/**
 * Generate a data URL for an SVG favicon themed with the given color.
 * Uses the same mark as public/icon.svg so the visual identity is consistent.
 */
export function buildFaviconDataUrl(color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="16" fill="${color}"/><path d="M32 14c-7 0-12 4.5-12 11 0 4 2 7 4 9l-2 8 8-4c1 0.3 2 0.5 2 0.5s1-0.2 2-0.5c7-2 12-7 12-13 0-6.5-5-11-12-11z" fill="#fff"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Update every <link rel="icon"> tag to point at a themed SVG data URL.
 * Browsers only pick up favicon changes when the href value actually changes,
 * so we always set both href attributes fresh.
 */
export function applyThemeFavicon(id: ThemeId): void {
  if (typeof document === 'undefined') return;
  const theme = getTheme(id);
  const href = buildFaviconDataUrl(theme.faviconColor);

  document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']").forEach((link) => {
    link.setAttribute('href', href);
  });
}