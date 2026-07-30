import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServicesIntro from '@/components/ServicesIntro';
import Services8 from '@/components/Services8';
import WhyChooseUs from '@/components/WhyChooseUs';
import RequestCallback from '@/components/RequestCallback';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero title="Our Services" subtitle="What We Offer" />
      <ServicesIntro />
      <Services8 />
      <WhyChooseUs />
      <RequestCallback />
      <Footer />
    </>
  );
}
