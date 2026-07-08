export type ThemeId = 'verde' | 'azul' | 'cinza';

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
  /** CSS color shown in the picker swatch */
  swatch: string;
}

export const THEMES: readonly Theme[] = [
  {
    id: 'verde',
    name: 'Verde Natural',
    description: 'Fresco, saudável e orgânico — o clássico da nutrição.',
    swatch: '#3FA34D',
  },
  {
    id: 'azul',
    name: 'Azul Trust',
    description: 'Médico, confiável e profissional — ideal para clínicas.',
    swatch: '#2563EB',
  },
  {
    id: 'cinza',
    name: 'Cinza Premium',
    description: 'Sofisticado, moderno e minimalista — visual de clínica premium.',
    swatch: '#475569',
  },
] as const;

export const DEFAULT_THEME: ThemeId = 'verde';

export const STORAGE_KEY_THEME = 'nutri-theme';
export const STORAGE_KEY_MODE = 'nutri-mode';

export function isThemeId(value: unknown): value is ThemeId {
  return value === 'verde' || value === 'azul' || value === 'cinza';
}