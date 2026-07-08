'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionHeading } from '@/components/ui/section-heading';
import { contactFormSchema, FORM_GOAL_KEYS, type ContactFormValues } from '@/lib/schema';
import { FadeIn } from '@/components/animations/fade-in';
import { CONTACT } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';

export function ContactForm() {
  const t = useTranslations('form');
  const tWhatsapp = useTranslations('whatsapp');
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      goal: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: Integrar com EmailJS, Formspree ou API própria
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log('Contact form submission:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contato" className="section gradient-bg" aria-label="Formulário de contato">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            align="left"
          />

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white border border-ink-100 p-5 shadow-soft">
              <div className="text-sm font-semibold text-brand-700 uppercase tracking-wider mb-1">
                {t('whatsapp-label')}
              </div>
              <a
                href={formatWhatsAppLink(CONTACT.whatsapp, tWhatsapp('default-message'))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-ink-900 hover:text-brand-600 transition-colors"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className="rounded-2xl bg-white border border-ink-100 p-5 shadow-soft">
              <div className="text-sm font-semibold text-brand-700 uppercase tracking-wider mb-1">
                {t('email-label')}
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg font-semibold text-ink-900 hover:text-brand-600 transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-3xl bg-white border border-ink-100 shadow-elevated p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                  role="status"
                  aria-live="polite"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-4">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900">
                    {t('success-title')}
                  </h3>
                  <p className="mt-2 text-base text-ink-600 max-w-sm text-pretty">
                    {t('success-desc')}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('fields.name')}</Label>
                      <Input
                        id="name"
                        placeholder={t('fields.name-placeholder')}
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('fields.phone')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('fields.phone-placeholder')}
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600" role="alert">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('fields.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('fields.email-placeholder')}
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goal">{t('fields.goal')}</Label>
                    <select
                      id="goal"
                      aria-invalid={!!errors.goal}
                      {...register('goal')}
                      className="flex h-12 w-full rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm text-ink-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    >
                      <option value="">{t('fields.goal-placeholder')}</option>
                      {FORM_GOAL_KEYS.map((goal) => (
                        <option key={goal} value={goal}>
                          {t(`goals.${goal}`)}
                        </option>
                      ))}
                    </select>
                    {errors.goal && (
                      <p className="text-xs text-red-600" role="alert">
                        {errors.goal.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('fields.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('fields.message-placeholder')}
                      aria-invalid={!!errors.message}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        {t('sending')}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" aria-hidden="true" />
                        {t('submit')}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-ink-500 text-center">
                    {t.rich('consent', {
                      link: (chunks) => (
                        <a
                          href="#politica-privacidade"
                          className="underline hover:text-brand-600"
                        >
                          {chunks}
                        </a>
                      ),
                    })}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}