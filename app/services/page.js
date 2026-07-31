import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServicesListing from '@/components/ServicesListing';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Services | LNBG INT Investments',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <PageHero title="Service - LNBG INT INVESTMENTS" subtitle="What We Offer" />
      <ServicesListing />
      <Footer />
    </div>
  );
}
