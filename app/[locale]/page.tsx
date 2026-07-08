import { TopBar } from '@/components/ui/top-bar';
import { Navbar } from '@/components/header/navbar';
import { HeroSection } from '@/components/hero/hero-section';
import { TrustBadges } from '@/components/trust/trust-badges';
import { AboutSection } from '@/components/about/about-section';
import { BenefitsSection } from '@/components/benefits/benefits-section';
import { ServicesSection } from '@/components/services/services-section';
import { HowItWorksSection } from '@/components/how-it-works/how-it-works-section';
import { DifferentialsSection } from '@/components/differentials/differentials-section';
import { TestimonialsSection } from '@/components/testimonials/testimonials-section';
import { BeforeAfterSection } from '@/components/before-after/before-after-section';
import { PartnersSection } from '@/components/partners/partners-section';
import { PlansSection } from '@/components/plans/plans-section';
import { FaqSection } from '@/components/faq/faq-section';
import { ContactForm } from '@/components/forms/contact-form';
import { CtaSection } from '@/components/cta/cta-section';
import { Footer } from '@/components/footer/footer';
import { WhatsAppButton } from '@/components/whatsapp/whatsapp-button';
import { BackToTop } from '@/components/ui/back-to-top';

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="conteudo">
        <HeroSection />
        <TrustBadges />
        <AboutSection />
        <BenefitsSection />
        <ServicesSection />
        <HowItWorksSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <BeforeAfterSection />
        <PartnersSection />
        <PlansSection />
        <FaqSection />
        <ContactForm />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}