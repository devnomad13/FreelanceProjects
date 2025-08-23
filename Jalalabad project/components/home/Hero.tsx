'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-700 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-4 border-amber-400 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-amber-400 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-amber-100 text-sm font-medium">(4.8/5 from 156+ reviews)</span>
          </div>
        </div>

        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          <span className="block">Jalalabad Mutton</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-amber-300 font-medium mt-2">
            ਜਲਾਲਾਬਾਦ ਮਟਨ
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-100 mb-6 font-medium max-w-3xl mx-auto leading-relaxed">
          Experience the authentic taste of Punjab's finest mutton dishes
        </p>

        <p className="text-lg text-amber-200 mb-8 max-w-2xl mx-auto">
          Traditional recipes passed down through generations, prepared with the freshest ingredients and cooked with love in the heart of Jalalabad, Punjab.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/order">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-red-900 font-bold px-8 py-3 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              Order Now Online
            </Button>
          </Link>
          <Link href="/menu">
            <Button size="lg" variant="outline" className="border-2 border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-red-900 font-semibold px-8 py-3 text-lg transition-all">
              View Our Menu
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-amber-100">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-amber-400" />
            <span className="font-medium">Jalalabad, Punjab</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-amber-400" />
            <span className="font-medium">Open Daily 11 AM - 10 PM</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-amber-400/30">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-900 font-bold text-xl">🥩</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-amber-200 text-sm">Premium quality mutton sourced daily from trusted local suppliers</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-amber-400/30">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-900 font-bold text-xl">👨‍🍳</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Traditional Recipes</h3>
            <p className="text-amber-200 text-sm">Authentic Punjabi cooking methods passed down through generations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-amber-400/30">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-900 font-bold text-xl">🚚</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
            <p className="text-amber-200 text-sm">Quick and reliable delivery service throughout Jalalabad</p>
          </div>
        </div>
      </div>
    </section>
  );
}