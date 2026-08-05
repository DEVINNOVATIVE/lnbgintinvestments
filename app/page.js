import Navbar from '@/components/Navbar';
import HeroModern from '@/components/HeroModern';
import Marquee from '@/components/Marquee';
import MissionModern from '@/components/MissionModern';
import ServicesBento from '@/components/ServicesBento';
import StatsBand from '@/components/StatsBand';
import WhyChooseModern from '@/components/WhyChooseModern';
import ExpertiseAccordion from '@/components/ExpertiseAccordion';
import CtaBand from '@/components/CtaBand';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero/> */}
      <HeroModern />
      <Marquee />
      <MissionModern />
      {/* <ServicesBento /> */}
        <Services/>
      <StatsBand />
      <WhyChooseModern />
      <ExpertiseAccordion />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  );
}
