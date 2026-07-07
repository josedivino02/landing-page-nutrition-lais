import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(80, 'Nome muito longo'),
  email: z.string().email('E-mail inválido'),
  phone: z
    .string()
    .min(10, 'Telefone inválido')
    .max(15, 'Telefone inválido')
    .regex(/^[\d\s()+-]+$/, 'Telefone inválido'),
  goal: z.string().min(1, 'Selecione um objetivo'),
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(500, 'Mensagem muito longa'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const GOALS = [
  { value: 'emagrecimento', label: 'Emagrecimento' },
  { value: 'hipertrofia', label: 'Hipertrofia / Ganho de massa' },
  { value: 'reeducacao', label: 'Reeducação alimentar' },
  { value: 'clinica', label: 'Nutrição clínica' },
  { value: 'esportiva', label: 'Nutrição esportiva' },
  { value: 'gestante', label: 'Gestante' },
  { value: 'idoso', label: 'Idoso' },
  { value: 'outro', label: 'Outro' },
] as const;