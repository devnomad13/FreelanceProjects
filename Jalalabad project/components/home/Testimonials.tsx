import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajveer Singh',
    location: 'Jalalabad',
    rating: 5,
    comment: 'The best mutton curry I\'ve ever had! Reminds me of my grandmother\'s cooking. The spices are perfectly balanced.',
    date: '2 weeks ago'
  },
  {
    name: 'Simran Kaur',
    location: 'Fazilka',
    rating: 5,
    comment: 'Ordered for a family gathering and everyone loved it. The meat was so tender and flavorful. Will definitely order again!',
    date: '1 month ago'
  },
  {
    name: 'Amarjit Singh',
    location: 'Ferozepur',
    rating: 5,
    comment: 'Fast delivery and amazing taste! The authentic Punjabi flavors are exactly what I was looking for.',
    date: '3 weeks ago'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the families who love our authentic Punjabi mutton dishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-100 hover:border-amber-300 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-red-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-red-900">4.8/5</span>
            <span className="text-gray-700">from 156+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}