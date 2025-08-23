import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="border-2 border-amber-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-red-900 to-amber-700 text-white">
          <CardTitle className="font-playfair text-2xl">Visit Our Restaurant</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-red-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Address</h3>
              <p className="text-gray-700">
                Main Market Street<br />
                Jalalabad, Punjab 152024<br />
                India
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-red-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Phone</h3>
              <p className="text-gray-700">+91-XXXXXXXXXX</p>
              <p className="text-sm text-gray-600">Available daily from 11 AM to 10 PM</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-red-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Email</h3>
              <p className="text-gray-700">info@jalalabadmutton.com</p>
              <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-red-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Opening Hours</h3>
              <div className="text-gray-700 space-y-1">
                <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
                <p className="text-sm text-amber-600 font-medium">Open all days including festivals</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Calendar className="h-6 w-6 text-red-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Special Events</h3>
              <p className="text-gray-700">We cater for special occasions and festivals</p>
              <p className="text-sm text-gray-600">Contact us for bulk orders and events</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-r from-red-900 to-amber-700 rounded-xl p-6 text-white text-center">
        <h3 className="font-playfair text-xl font-bold mb-2">Find Us Easily</h3>
        <p className="text-amber-100 mb-4">
          We're located in the heart of Jalalabad's main market, easily accessible by all modes of transport.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="block font-medium">Near:</span>
            <span className="text-amber-200">Central Bus Stand</span>
          </div>
          <div>
            <span className="block font-medium">Landmark:</span>
            <span className="text-amber-200">Main Gurudwara</span>
          </div>
        </div>
      </div>
    </div>
  );
}