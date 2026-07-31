import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import AboutMission from '@/components/AboutMission';
import StrategicConsulting from '@/components/StrategicConsulting';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero title="About Us - LNBG INT INVESTMENTS" subtitle="Who We Are" />
      <AboutMission />
      <StrategicConsulting />
      <Services />
     
      <Footer />
    </>
  );
}
