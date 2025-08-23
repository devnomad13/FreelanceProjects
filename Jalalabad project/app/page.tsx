import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedDish from '@/components/home/FeaturedDish';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedDish />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}