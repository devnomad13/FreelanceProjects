'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Order Online', href: '/order' },
  { name: 'Track Order', href: '/track' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-amber-600 shadow-lg sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-red-900 font-bold text-xl">JM</span>
              </div>
              <div>
                <h1 className="text-xl font-playfair font-bold text-amber-100 group-hover:text-white transition-colors">
                  Jalalabad Mutton
                </h1>
                <p className="text-xs text-amber-200 font-medium">ਜਲਾਲਾਬਾਦ ਮਟਨ</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-amber-100 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-amber-100 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <div className="flex items-center text-amber-100 text-sm">
            <Phone className="h-4 w-4 mr-1" />
            <span className="font-medium">+91-XXXXXXXXXX</span>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-400 text-red-900 font-semibold shadow-lg hover:shadow-xl transition-all">
            Order Now
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-red-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-red-900 font-bold text-sm">JM</span>
                  </div>
                  <span className="text-amber-100 font-playfair font-bold">Jalalabad Mutton</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-amber-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-red-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-amber-100 hover:bg-red-800 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <div className="flex items-center text-amber-100">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="font-medium">+91-XXXXXXXXXX</span>
                  </div>
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-400 text-red-900 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}