import { Calendar, Users, Award, Heart } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-red-900 mb-6">
              Our Journey Since 1995
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                What started as a small family kitchen in the heart of Jalalabad has grown into Punjab's most beloved mutton restaurant. Our story began when Sardar Balwant Singh decided to share his grandmother's secret mutton curry recipe with the world.
              </p>
              <p>
                For three generations, the Singh family has been perfecting the art of authentic Punjabi mutton cuisine. Every dish tells a story of tradition, love, and the rich culinary heritage of Punjab. We believe that food is not just nourishment, but a way to connect hearts and preserve culture.
              </p>
              <p>
                Today, under the leadership of his son Jasbir Singh, Jalalabad Mutton continues to serve the same authentic flavors that made us famous, while embracing modern conveniences like online ordering to serve you better.
              </p>
            </div>
          </div>

          {/* Story Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-200 to-amber-200 rounded-2xl aspect-square flex items-center justify-center text-8xl shadow-2xl">
              👨‍🍳
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-red-900 rounded-full px-4 py-2 font-bold shadow-lg">
              30+ Years
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Calendar, number: '30+', label: 'Years of Excellence' },
            { icon: Users, number: '10K+', label: 'Happy Customers' },
            { icon: Award, number: '5+', label: 'Local Awards' },
            { icon: Heart, number: '100%', label: 'Made with Love' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-red-100 to-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                <stat.icon className="h-8 w-8 text-red-700" />
              </div>
              <div className="text-2xl font-bold text-red-900">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="bg-gradient-to-r from-red-900 to-amber-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
            Our Mission & Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-amber-200 mb-2">Authenticity</h4>
              <p className="text-amber-100 text-sm">
                Preserving traditional Punjabi recipes and cooking methods passed down through generations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-200 mb-2">Quality</h4>
              <p className="text-amber-100 text-sm">
                Using only the finest ingredients and maintaining the highest standards in every dish we serve.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-200 mb-2">Community</h4>
              <p className="text-amber-100 text-sm">
                Serving our local community with warmth, respect, and the true spirit of Punjabi hospitality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}