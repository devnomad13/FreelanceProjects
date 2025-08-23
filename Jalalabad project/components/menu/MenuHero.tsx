import { Badge } from '@/components/ui/badge';

export default function MenuHero() {
  return (
    <section className="bg-gradient-to-br from-red-900 via-red-800 to-amber-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="bg-amber-500 text-red-900 mb-4 text-sm font-medium px-4 py-1">
          AUTHENTIC PUNJABI CUISINE
        </Badge>
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Our Delicious Menu
        </h1>
        <p className="text-xl text-amber-100 max-w-2xl mx-auto">
          Savor the authentic flavors of Punjab with our carefully crafted mutton dishes
        </p>
      </div>
    </section>
  );
}