
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import SchedulingSection from '@/components/SchedulingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <SchedulingSection />
      <Footer />
    </div>
  );
};

export default Index;
