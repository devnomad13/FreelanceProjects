import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import TeamSection from '@/components/about/TeamSection';

export const metadata = {
  title: 'About Us - Jalalabad Mutton Restaurant Story',
  description: 'Learn about Jalalabad Mutton\'s journey, our family recipes, and commitment to authentic Punjabi cuisine. Serving the best mutton in Jalalabad since 1995.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}