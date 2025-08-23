'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Star, Clock, Users } from 'lucide-react';

export default function FeaturedDish() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-red-900 text-amber-100 mb-4 text-sm font-medium px-4 py-1">
            OUR SIGNATURE DISH
          </Badge>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4">
            Famous Jalalabad Mutton Curry
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our signature mutton curry that has been delighting taste buds for decades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-amber-100 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-red-200 to-amber-200 rounded-xl flex items-center justify-center text-6xl shadow-inner">
                🍛
              </div>
              
              <div className="absolute -top-4 -right-4 bg-amber-500 text-red-900 rounded-full px-4 py-2 font-bold shadow-lg">
                ₹299
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-red-900 text-amber-100 rounded-full px-3 py-1 text-sm font-medium shadow-lg">
                Best Seller
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-gray-600 ml-2">(4.9/5 from 89 reviews)</span>
            </div>

            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-red-900 mb-4">
              Slow-Cooked Mutton Curry
            </h3>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Tender mutton pieces slow-cooked in aromatic spices including cardamom, cinnamon, and our secret blend of Punjabi masalas. Served with fresh naan or rice, this dish represents the authentic flavors of Punjab.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-red-700" />
                <span className="text-gray-700">45 mins cooking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-red-700" />
                <span className="text-gray-700">Serves 2-3 people</span>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
              <h4 className="font-semibold text-red-900 mb-2">Ingredients Highlights:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Fresh mutton from local farms</li>
                <li>• Traditional Punjabi spice blend</li>
                <li>• Slow-cooked for 3+ hours</li>
                <li>• No artificial colors or preservatives</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/order" className="flex-1">
                <Button className="w-full bg-red-900 hover:bg-red-800 text-amber-100 font-semibold text-lg py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Order Now - ₹299
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-amber-100 font-semibold text-lg py-3 transition-all">
                  View Full Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}