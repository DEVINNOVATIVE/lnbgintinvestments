import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import MissionModern from '@/components/MissionModern';
import Stats from '@/components/Stats';
import ExpertiseAccordion from '@/components/ExpertiseAccordion';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero title="About Us" subtitle="Who We Are" bgImage="/assets/lnbg-meeting-2.jpg" />
      <MissionModern />
      <Stats />
      <ExpertiseAccordion />
      <CtaBand />
      <Footer />
    </>
  );
}
