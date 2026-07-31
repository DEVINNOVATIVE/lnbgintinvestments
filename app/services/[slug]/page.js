import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/serviceData';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceDetail from '@/components/ServiceDetail';
import Footer from '@/components/Footer';

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
    const service = getServiceBySlug(params.slug);
    if (!service) return { title: 'Service Not Found' };
    return { title: `${service.title} | LNBIG INT Investments` };
}

export default function ServiceDetailPage({ params }) {
    const service = getServiceBySlug(params.slug);
    if (!service) notFound();

    return (
        <>
            <Navbar />
            <PageHero title={`${service.title} - LNBG INT INVESTMENTS`} check={true} />
            <ServiceDetail service={service} />
            <Footer />
        </>
    );
}
