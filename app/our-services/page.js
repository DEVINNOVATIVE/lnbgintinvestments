import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServicesIntro from '@/components/ServicesIntro';
import Services8 from '@/components/Services8';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero title="Our Services" subtitle="What We Offer" check bgImage="/assets/bn2-5-3.jpg" />
      <ServicesIntro />
      <Services8 />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
