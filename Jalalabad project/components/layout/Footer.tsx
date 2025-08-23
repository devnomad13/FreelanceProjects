import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-red-950 to-red-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-red-900 font-bold">JM</span>
              </div>
              <div>
                <h3 className="text-lg font-playfair font-bold text-white">Jalalabad Mutton</h3>
                <p className="text-sm text-amber-200">ਜਲਾਲਾਬਾਦ ਮਟਨ</p>
              </div>
            </div>
            <p className="text-amber-200 text-sm mb-4">
              Authentic Punjabi mutton dishes prepared with traditional recipes and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <div className="text-sm">
                  <p>Main Market Street</p>
                  <p>Jalalabad, Punjab 152024</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-sm">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-sm">info@jalalabadmutton.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-400" />
                <span>Daily: 11:00 AM - 10:00 PM</span>
              </div>
              <p className="text-amber-200 mt-3">
                Special hours during festivals and occasions. Call ahead for confirmation.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/menu" className="block hover:text-white transition-colors">Our Menu</Link>
              <Link href="/order" className="block hover:text-white transition-colors">Order Online</Link>
              <Link href="/track" className="block hover:text-white transition-colors">Track Your Order</Link>
              <Link href="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-200 text-sm">
              © 2025 Jalalabad Mutton. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}