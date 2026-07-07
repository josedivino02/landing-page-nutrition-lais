// Site & brand
export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Nutrição Laís',
  description:
    'Transforme sua alimentação e alcance seus objetivos com acompanhamento nutricional personalizado. Emagrecimento, hipertrofia, reeducação alimentar e nutrição clínica.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nutricaolais.com.br',
  locale: 'pt-BR',
  author: 'Nutrição Laís',
} as const;

// Contact
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

// Navigation
export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
] as const;

// Benefits
export const BENEFITS = [
  {
    icon: 'Apple',
    title: 'Plano alimentar personalizado',
    description: 'Dieta adaptada à sua rotina, preferências e objetivos individuais.',
  },
  {
    icon: 'Salad',
    title: 'Educação alimentar',
    description: 'Aprenda a fazer escolhas conscientes e mantenha resultados para sempre.',
  },
  {
    icon: 'Dumbbell',
    title: 'Ganho de massa muscular',
    description: 'Estratégias nutricionais para hipertrofia aliada ao seu treino.',
  },
  {
    icon: 'Scale',
    title: 'Emagrecimento saudável',
    description: 'Perda de peso sustentável sem dietas restritivas ou efeito sanfona.',
  },
  {
    icon: 'HeartPulse',
    title: 'Mais qualidade de vida',
    description: 'Mais energia, disposição e saúde para aproveitar o que importa.',
  },
  {
    icon: 'Stethoscope',
    title: 'Acompanhamento contínuo',
    description: 'Suporte próximo com ajustes periódicos para garantir seus resultados.',
  },
] as const;

// How it works
export const STEPS = [
  {
    number: '01',
    title: 'Agendamento',
    description: 'Escolha o melhor dia e horário para sua consulta, presencial ou online.',
  },
  {
    number: '02',
    title: 'Avaliação',
    description: 'Anamnese completa, avaliação física, bioimpedância e análise de exames.',
  },
  {
    number: '03',
    title: 'Plano alimentar',
    description: 'Você recebe um plano alimentar individualizado, com lista de substituições.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Consultas de retorno periódicas com ajustes e suporte via WhatsApp.',
  },
] as const;

// Services
export const SERVICES = [
  {
    icon: 'Stethoscope',
    title: 'Nutrição Clínica',
    description: 'Tratamento nutricional para diabetes, hipertensão, colesterol e doenças metabólicas.',
  },
  {
    icon: 'Scale',
    title: 'Emagrecimento',
    description: 'Programa estruturado para perda de peso saudável e duradoura.',
  },
  {
    icon: 'Dumbbell',
    title: 'Hipertrofia',
    description: 'Protocolos para ganho de massa muscular com performance e saúde.',
  },
  {
    icon: 'Zap',
    title: 'Nutrição Esportiva',
    description: 'Nutrição específica para atletas amadores e profissionais.',
  },
  {
    icon: 'Baby',
    title: 'Gestantes',
    description: 'Acompanhamento nutricional seguro e saudável em todas as fases da gestação.',
  },
  {
    icon: 'Users',
    title: 'Idosos',
    description: 'Cuidado nutricional voltado para longevidade, imunidade e qualidade de vida.',
  },
  {
    icon: 'BookOpen',
    title: 'Reeducação Alimentar',
    description: 'Mudança de hábitos alimentares com acompanhamento profissional.',
  },
  {
    icon: 'Video',
    title: 'Consulta Online',
    description: 'Atendimento por videochamada com a mesma qualidade do presencial.',
  },
  {
    icon: 'Building2',
    title: 'Consulta Presencial',
    description: 'Atendimento em consultório equipado com toda a estrutura necessária.',
  },
] as const;

// Differentials
export const DIFFERENTIALS = [
  'Atendimento humanizado e individualizado',
  'Plano alimentar 100% personalizado',
  'Suporte via WhatsApp durante todo o acompanhamento',
  'Avaliação física completa em todas as consultas',
  'Bioimpedância para acompanhar sua evolução',
  'Atualização constante baseada em evidências',
  'Atendimento presencial e online',
  'Estratégias para diferentes perfis e objetivos',
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Mariana Souza',
    role: 'Emagreceu 12kg em 5 meses',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
    rating: 5,
    text: 'A Laís mudou completamente minha relação com a comida. Perdi 12kg sem passar fome e hoje tenho energia para tudo. O atendimento é incrível!',
  },
  {
    name: 'Ricardo Almeida',
    role: 'Ganhou 8kg de massa muscular',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces',
    rating: 5,
    text: 'Treinava há anos e não conseguia evoluir. Com o plano da Laís, ganhei 8kg de massa magra em 6 meses. Profissional diferenciada.',
  },
  {
    name: 'Camila Ferreira',
    role: 'Gestante — gestação saudável',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces',
    rating: 5,
    text: 'Tive uma gestação tranquila e sem inchaço. Laís me acompanhou mês a mês com todo cuidado. Recomendo de olhos fechados!',
  },
  {
    name: 'Pedro Henrique',
    role: 'Tratamento de diabetes',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
    rating: 5,
    text: 'Minha hemoglobina glicada melhorou muito depois de seguir o plano. Laís é muito atenciosa e explica tudo com clareza.',
  },
  {
    name: 'Beatriz Lima',
    role: 'Reeducação alimentar',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces',
    rating: 5,
    text: 'Hoje como de tudo com equilíbrio. Aprendi a ler rótulos e a montar pratos saudáveis. Mudou minha vida!',
  },
  {
    name: 'Felipe Costa',
    role: 'Atleta amador',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
    rating: 5,
    text: 'Minha performance na corrida melhorou absurdamente. Laís entende do esporte e ajusta tudo com precisão.',
  },
] as const;

// Before/After gallery
export const BEFORE_AFTER = [
  {
    title: 'Emagrecimento — Mariana',
    description: 'Reeducação alimentar com foco em saúde metabólica.',
    duration: '5 meses',
    result: '-12kg',
  },
  {
    title: 'Hipertrofia — Ricardo',
    description: 'Protocolo para ganho de massa magra e performance.',
    duration: '6 meses',
    result: '+8kg massa magra',
  },
  {
    title: 'Reeducação — Beatriz',
    description: 'Mudança de hábitos e equilíbrio alimentar.',
    duration: '4 meses',
    result: 'Mais disposição',
  },
  {
    title: 'Gestação — Camila',
    description: 'Acompanhamento pré e pós-natal.',
    duration: '9 meses',
    result: 'Gestação saudável',
  },
] as const;

// Plans
export const PLANS = [
  {
    name: 'Consulta Individual',
    description: 'Ideal para quem quer começar ou tem um objetivo pontual.',
    price: 'R$ 280',
    period: 'consulta',
    features: [
      'Anamnese completa',
      'Avaliação física + bioimpedância',
      'Plano alimentar personalizado',
      'Lista de substituições',
      'Material de apoio',
      'Suporte via WhatsApp por 7 dias',
    ],
    highlight: false,
    cta: 'Agendar consulta',
  },
  {
    name: 'Acompanhamento Mensal',
    description: 'O plano mais procurado para resultados consistentes.',
    price: 'R$ 350',
    period: 'mensal',
    features: [
      'Tudo da Consulta Individual',
      'Consultas de retorno semanais',
      'Ajustes contínuos do plano',
      'Suporte ilimitado via WhatsApp',
      'Avaliação física mensal',
      'Relatórios de evolução',
      'Receitas exclusivas',
    ],
    highlight: true,
    badge: 'Mais escolhido',
    cta: 'Começar agora',
  },
  {
    name: 'Plano Premium',
    description: 'Para quem busca performance máxima e resultados rápidos.',
    price: 'R$ 590',
    period: 'mensal',
    features: [
      'Tudo do Acompanhamento Mensal',
      'Atendimento prioritário',
      'Acesso direto via WhatsApp',
      'Consultas extras sob demanda',
      'Análise de exames avançada',
      'Plano para viagens e eventos',
      'Suporte familiar incluso',
    ],
    highlight: false,
    cta: 'Quero o Premium',
  },
] as const;

// FAQ
export const FAQ = [
  {
    question: 'Como funciona a consulta?',
    answer:
      'A primeira consulta tem duração de aproximadamente 60 minutos. Realizamos uma anamnese completa, avaliação física com bioimpedância e, em até 5 dias úteis, você recebe o plano alimentar personalizado em PDF.',
  },
  {
    question: 'Quanto tempo dura o acompanhamento?',
    answer:
      'O tempo varia de acordo com seu objetivo. Em média, recomendamos no mínimo 3 meses para obter resultados consistentes. Muitos pacientes optam por continuar o acompanhamento por 6 a 12 meses.',
  },
  {
    question: 'Vocês aceitam convênio?',
    answer:
      'Não trabalhamos diretamente com convênios, mas emitimos recibo para reembolso. Consulte seu plano de saúde sobre cobertura para consultas com nutricionista.',
  },
  {
    question: 'Como funciona a consulta online?',
    answer:
      'A consulta online é feita por videochamada (Google Meet ou Zoom), com a mesma duração e qualidade da presencial. Você recebe o plano alimentar em PDF por e-mail após a consulta.',
  },
  {
    question: 'Como é montado o plano alimentar?',
    answer:
      'O plano é 100% personalizado, considerando seus exames, rotina, preferências alimentares, restrições e objetivos. Inclui lista de substituições para você ter flexibilidade no dia a dia.',
  },
  {
    question: 'Quantas consultas de retorno são necessárias?',
    answer:
      'Recomendamos retornos semanais no primeiro mês e quinzenais a partir do segundo mês. Tudo é ajustado de acordo com a sua evolução.',
  },
  {
    question: 'Atendo em quais regiões?',
    answer:
      'O consultório está localizado em São Paulo, com fácil acesso. Para clientes de outras cidades ou estados, oferecemos atendimento 100% online com a mesma qualidade.',
  },
  {
    question: 'Posso parcelar o pagamento?',
    answer:
      'Sim. Aceitamos cartão de crédito (até 6x sem juros), PIX, boleto e transferência bancária.',
  },
] as const;

// Trust badges
export const TRUST_BADGES = [
  { label: 'CRN Ativo', value: PROFESSIONAL.crn },
  { label: 'Experiência', value: '8+ anos' },
  { label: 'Pacientes atendidos', value: '+2.000' },
  { label: 'Avaliação média', value: '4.9/5' },
] as const;

// Hero image (placeholder Unsplash)
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=1400&fit=crop&q=80';

// About image
export const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&h=1100&fit=crop&q=80';