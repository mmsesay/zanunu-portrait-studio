import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      image: '/zanunu-logo.jpg',
      rating: 5,
      text: 'Zanunu Studio captured our wedding day perfectly! Every moment was beautifully documented, and the photos exceeded our expectations. The team was professional, friendly, and made us feel so comfortable throughout the day.',
      service: 'Wedding Photography',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      image: '/zanunu-logo.jpg',
      rating: 5,
      text: 'We hired Zanunu for our company\'s product photography, and the results were outstanding. The attention to detail and creative vision helped elevate our brand. Highly recommend their commercial photography services!',
      service: 'Commercial Photography',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Event Coordinator',
      image: '/zanunu-logo.jpg',
      rating: 5,
      text: 'Working with Zanunu Studio was a pleasure. They captured our corporate event beautifully, and the turnaround time was impressive. The photos perfectly captured the energy and professionalism of our event.',
      service: 'Event Photography',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Family Client',
      image: '/zanunu-logo.jpg',
      rating: 5,
      text: 'Our family portrait session was amazing! The photographer made everyone feel at ease, especially the kids. The final prints are absolutely stunning, and we\'ll treasure them forever. Thank you, Zanunu!',
      service: 'Portrait Photography',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Bride',
      image: '/zanunu-logo.jpg',
      rating: 5,
      text: 'The wedding album we received from Zanunu is a masterpiece! The quality of the printing is exceptional, and the design is elegant. Every time we look through it, we relive our special day. Worth every penny!',
      service: 'Printing Services',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Artist',
      image: '/zanunu-logo.jpg',
      rating: 5,
      text: 'I needed high-quality canvas prints of my artwork, and Zanunu delivered beyond my expectations. The colors are vibrant, the detail is crisp, and the canvas quality is premium. I\'ll definitely be back for more prints!',
      service: 'Canvas Printing',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#800020] via-[#a03050] to-[#800020] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#d4af37] bg-clip-text text-transparent">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with Zanunu Studio
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37] transform hover:-translate-y-2"
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#d4af37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Service Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#800020] to-[#a03050] text-white text-xs font-semibold rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#800020]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '4.9/5', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#800020] to-[#d4af37] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#800020] to-[#a03050] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Happy Clients
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Experience the excellence that our clients rave about
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#800020] font-semibold rounded-lg hover:bg-[#e8d5a3] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

