import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero title="Contact Us" subtitle="Get In Touch" />
      <Contact />
      <Footer />
    </>
  );
}
