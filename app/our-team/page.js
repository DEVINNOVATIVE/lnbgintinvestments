import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Team from '@/components/Team';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <PageHero title="Our Team" subtitle="Meet The Experts" check bgImage="/assets/lnbg-meeting-2.jpg" />
      <Team />
      <CtaBand />
      <Footer />
    </>
  );
}
