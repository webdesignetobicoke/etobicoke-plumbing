import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import OfficeTourSection from '@/components/sections/OfficeTourSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OfficeTourSection />
      <ContactSection />
    </main>
  );
}
