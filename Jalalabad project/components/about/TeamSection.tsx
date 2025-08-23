export default function TeamSection() {
  const team = [
    {
      name: 'Sardar Balwant Singh',
      role: 'Founder (1995)',
      description: 'Started the restaurant with his grandmother\'s secret recipe',
      icon: '👴🏽'
    },
    {
      name: 'Jasbir Singh',
      role: 'Current Owner & Head Chef',
      description: 'Continues the family tradition with modern innovations',
      icon: '👨🏽‍🍳'
    },
    {
      name: 'Harpreet Kaur',
      role: 'Kitchen Manager',
      description: 'Ensures every dish meets our quality standards',
      icon: '👩🏽‍🍳'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-red-900 mb-4">
            The People Behind Our Success
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the passionate team that brings authentic Punjabi flavors to your table every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-red-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all text-6xl">
                {member.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-red-900 mb-1">
                {member.name}
              </h3>
              <p className="text-amber-600 font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-amber-50 rounded-2xl p-8">
          <h3 className="font-playfair text-2xl font-bold text-red-900 mb-4">
            Family Recipe, Modern Service
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            While we've embraced modern technology for ordering and delivery, our commitment to traditional cooking methods and authentic flavors remains unchanged. Every dish is prepared with the same care and attention as it was 30 years ago, ensuring that each bite takes you on a journey to the heart of Punjab.
          </p>
        </div>
      </div>
    </section>
  );
}