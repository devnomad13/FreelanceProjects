import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuHero from '@/components/menu/MenuHero';
import MenuItems from '@/components/menu/MenuItems';

export const metadata = {
  title: 'Menu - Authentic Punjabi Mutton Dishes',
  description: 'Explore our delicious menu of authentic Punjabi mutton dishes at Jalalabad Mutton. Traditional recipes, fresh ingredients, and bold flavors.',
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        <MenuHero />
        <MenuItems />
      </main>
      <Footer />
    </>
  );
}