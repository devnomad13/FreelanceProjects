'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star, Clock, Users, Flame } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  {
    id: 1,
    name: 'Jalalabad Special Mutton Curry',
    price: 299,
    originalPrice: 349,
    description: 'Our signature slow-cooked mutton curry with aromatic spices and tender meat pieces',
    cookTime: '45 mins',
    serves: '2-3 people',
    spiceLevel: 'Medium',
    rating: 4.9,
    reviews: 89,
    isSpecial: true,
    isBestSeller: true,
    ingredients: ['Fresh mutton', 'Traditional spices', 'Onions', 'Tomatoes', 'Yogurt']
  },
  {
    id: 2,
    name: 'Punjabi Mutton Karahi',
    price: 329,
    description: 'Traditional karahi-style mutton cooked with bell peppers and onions',
    cookTime: '40 mins',
    serves: '2-3 people',
    spiceLevel: 'High',
    rating: 4.7,
    reviews: 67,
    ingredients: ['Mutton pieces', 'Bell peppers', 'Ginger-garlic', 'Green chilies', 'Coriander']
  },
  {
    id: 3,
    name: 'Mutton Rogan Josh',
    price: 349,
    description: 'Rich and flavorful mutton curry with Kashmiri spices and yogurt',
    cookTime: '50 mins',
    serves: '2-3 people',
    spiceLevel: 'Medium',
    rating: 4.8,
    reviews: 45,
    ingredients: ['Tender mutton', 'Kashmiri chilies', 'Fennel', 'Cardamom', 'Bay leaves']
  }
];

const getSpiceIcon = (level: string) => {
  switch (level) {
    case 'Low':
      return <Flame className="h-4 w-4 text-green-500" />;
    case 'Medium':
      return <Flame className="h-4 w-4 text-yellow-500" />;
    case 'High':
      return <Flame className="h-4 w-4 text-red-500" />;
    default:
      return <Flame className="h-4 w-4 text-yellow-500" />;
  }
};

export default function MenuItems() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-red-900 mb-4">
            Our Signature Mutton Dishes
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Each dish is prepared with love using traditional recipes and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-xl group">
              <CardHeader className="relative bg-gradient-to-br from-red-100 to-amber-100 p-0">
                <div className="aspect-video bg-gradient-to-br from-red-200 to-amber-200 flex items-center justify-center text-6xl">
                  🍛
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.isSpecial && (
                    <Badge className="bg-red-900 text-amber-100 font-medium">
                      SPECIAL
                    </Badge>
                  )}
                  {item.isBestSeller && (
                    <Badge className="bg-amber-500 text-red-900 font-medium">
                      BEST SELLER
                    </Badge>
                  )}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg">
                  <div className="text-xl font-bold text-red-900">₹{item.price}</div>
                  {item.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">₹{item.originalPrice}</div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(item.rating) 
                          ? 'fill-amber-400 text-amber-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600">({item.reviews} reviews)</span>
                </div>

                <h3 className="font-playfair text-xl font-bold text-red-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-red-700" />
                    <span className="text-gray-600">{item.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-red-700" />
                    <span className="text-gray-600">{item.serves}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getSpiceIcon(item.spiceLevel)}
                    <span className="text-gray-600">{item.spiceLevel}</span>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <h4 className="font-semibold text-red-900 text-sm mb-2">Key Ingredients:</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.ingredients.map((ingredient, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full border"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link href={`/order?item=${item.id}`} className="w-full">
                  <Button className="w-full bg-red-900 hover:bg-red-800 text-amber-100 font-semibold py-2 shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all">
                    Order Now - ₹{item.price}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-amber-200 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-red-900 mb-4">
              Can't Decide? Try Our Special!
            </h3>
            <p className="text-gray-700 mb-6">
              Our Jalalabad Special Mutton Curry is the perfect introduction to our authentic Punjabi flavors.
            </p>
            <Link href="/order?item=1">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-red-900 font-bold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Order Special Now - ₹299
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}