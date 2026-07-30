import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Mission from '@/components/Mission';
import StrategicConsulting from '@/components/StrategicConsulting';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero title="About Us" subtitle="Who We Are" />
      <Mission />
      <StrategicConsulting />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
