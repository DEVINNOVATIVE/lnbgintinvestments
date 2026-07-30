import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Expertise from '@/components/Expertise';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Expertise />
      <Contact />
      <Footer />
    </>
  );
}
