import { Shield, Award, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'We source only the finest, freshest mutton from trusted local suppliers.',
    color: 'text-red-700'
  },
  {
    icon: Award,
    title: 'Traditional Recipes',
    description: 'Authentic Punjabi recipes passed down through generations of master chefs.',
    color: 'text-amber-600'
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Quick preparation and reliable delivery to get your food while it\'s hot.',
    color: 'text-red-700'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is prepared with care and passion for authentic Punjabi cuisine.',
    color: 'text-amber-600'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4">
            Why Choose Jalalabad Mutton?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the difference that quality ingredients, traditional methods, and passionate cooking make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all">
                <feature.icon className={`h-10 w-10 ${feature.color}`} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-red-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-900 to-amber-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
            Experience Authentic Punjab
          </h3>
          <p className="text-amber-100 text-lg mb-6 max-w-3xl mx-auto">
            From the bustling streets of Jalalabad to your dining table, we bring you the true essence of Punjabi hospitality and flavors that have been cherished for generations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span>Family-owned since 1995</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span>Over 10,000 satisfied customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span>Award-winning recipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}