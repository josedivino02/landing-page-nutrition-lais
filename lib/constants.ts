// Site & brand (technical config, not translated)
export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Nutrição Laís',
  description:
    'Transforme sua alimentação e alcance seus objetivos com acompanhamento nutricional personalizado. Emagrecimento, hipertrofia, reeducação alimentar e nutrição clínica.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nutricaolais.com.br',
  locale: 'pt-BR',
  author: 'Nutrição Laís',
} as const;

// Contact (technical config, not translated)
export const CONTACT = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999',
  phone: process.env.NEXT_PUBLIC_PHONE || '+55 11 99999-9999',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contato@nutricaolais.com.br',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'https://instagram.com/',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || '',
} as const;

// Address
export const ADDRESS = {
  street: process.env.NEXT_PUBLIC_ADDRESS_STREET || 'Av. Paulista, 1000',
  city: process.env.NEXT_PUBLIC_ADDRESS_CITY || 'São Paulo',
  state: process.env.NEXT_PUBLIC_ADDRESS_STATE || 'SP',
  zip: process.env.NEXT_PUBLIC_ADDRESS_ZIP || '01310-100',
  country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || 'BR',
} as const;

// Professional
export const PROFESSIONAL = {
  name: 'Laís Silva',
  crn: 'CRN-3 12345/P',
  experience: '8+ anos de experiência',
  patients: '+2.000 pacientes atendidos',
  rating: 4.9,
  ratingCount: 247,
} as const;

// Benefits — translation keys instead of hardcoded strings
export const BENEFITS = [
  { icon: 'Apple', key: 'plan' },
  { icon: 'Salad', key: 'education' },
  { icon: 'Dumbbell', key: 'muscle' },
  { icon: 'Scale', key: 'weight' },
  { icon: 'HeartPulse', key: 'quality' },
  { icon: 'Stethoscope', key: 'followup' },
] as const;

// How it works
export const STEPS = [
  { number: '01', icon: 'Calendar', key: 'schedule' },
  { number: '02', icon: 'ClipboardCheck', key: 'assessment' },
  { number: '03', icon: 'ChefHat', key: 'plan' },
  { number: '04', icon: 'TrendingUp', key: 'followup' },
] as const;

// Services
export const SERVICES = [
  { icon: 'Stethoscope', key: 'clinical' },
  { icon: 'Scale', key: 'weight' },
  { icon: 'Dumbbell', key: 'muscle' },
  { icon: 'Zap', key: 'sports' },
  { icon: 'Baby', key: 'pregnant' },
  { icon: 'Users', key: 'elderly' },
  { icon: 'BookOpen', key: 'reeducation' },
  { icon: 'Video', key: 'online' },
  { icon: 'Building2', key: 'inperson' },
] as const;

// Differentials (list)
export const DIFFERENTIAL_LIST = [1, 2, 3, 4, 5, 6, 7, 8] as const;

// Testimonials — only image/name are static; text is translated
export const TESTIMONIALS = [
  { avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces', key: 'mariana' },
  { avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces', key: 'ricardo' },
  { avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces', key: 'camila' },
  { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces', key: 'pedro' },
  { avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces', key: 'beatriz' },
  { avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces', key: 'felipe' },
] as const;

// Before/After
export const BEFORE_AFTER = [
  { key: 'mariana', duration: '5 meses', result: '-12kg' },
  { key: 'ricardo', duration: '6 meses', result: '+8kg massa magra' },
  { key: 'beatriz', duration: '4 meses', result: 'Mais disposição' },
  { key: 'camila', duration: '9 meses', result: 'Gestação saudável' },
] as const;

// Plans — price & technical data static; description/features via translation
export const PLANS = [
  {
    key: 'single',
    price: 'R$ 280',
    period: 'consulta',
    highlight: false,
    featureCount: 6,
  },
  {
    key: 'monthly',
    price: 'R$ 350',
    period: 'mensal',
    highlight: true,
    featureCount: 7,
  },
  {
    key: 'premium',
    price: 'R$ 590',
    period: 'mensal',
    highlight: false,
    featureCount: 7,
  },
] as const;

// FAQ — static keys for each question
export const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'] as const;

// Hero stats
export const HERO_STATS = [
  { value: 8, suffix: '+', decimals: 0, key: 'experience' },
  { value: 2000, suffix: '+', decimals: 0, key: 'patients' },
  { value: 4.9, suffix: '/5', decimals: 1, key: 'rating' },
] as const;

// Trust badges
export const TRUST_BADGES = [
  { labelKey: 'crn', value: PROFESSIONAL.crn },
  { labelKey: 'experience', value: '8+ anos' },
  { labelKey: 'patients', value: '+2.000' },
  { labelKey: 'rating', value: '4.9/5' },
] as const;

// Partners (placeholders)
export const PARTNERS = [
  'Academia Corpo & Saúde',
  'Clínica VitaPlus',
  'Studio Move',
  'Espaço Bem-Estar',
  'Performance Center',
  'Vida Ativa',
] as const;

// Goals (form options) — keys used in dropdown
export const FORM_GOAL_KEYS = [
  'emagrecimento',
  'hipertrofia',
  'reeducacao',
  'clinica',
  'esportiva',
  'gestante',
  'idoso',
  'outro',
] as const;

// Hero image (placeholder Unsplash) — currently unused, replaced by ImagePlaceholder
// export const HERO_IMAGE = 'https://images.unsplash.com/...';

// About image — currently unused, replaced by ImagePlaceholder
// export const ABOUT_IMAGE = 'https://images.unsplash.com/...';

// Before/After placeholder images — currently unused, replaced by ImagePlaceholder
// export const BEFORE_AFTER_PLACEHOLDERS = [...] as const;