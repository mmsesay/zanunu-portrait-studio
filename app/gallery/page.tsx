'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'event', label: 'Event' },
    { id: 'commercial', label: 'Commercial' },
  ];

  // Sample gallery items - Replace with actual images
  const galleryItems = [
    { id: 1, category: 'wedding', title: 'Elegant Wedding Ceremony', image: '/zanunu-logo.jpg' },
    { id: 2, category: 'portrait', title: 'Professional Headshot', image: '/zanunu-logo.jpg' },
    { id: 3, category: 'event', title: 'Corporate Event', image: '/zanunu-logo.jpg' },
    { id: 4, category: 'wedding', title: 'Wedding Reception', image: '/zanunu-logo.jpg' },
    { id: 5, category: 'commercial', title: 'Product Photography', image: '/zanunu-logo.jpg' },
    { id: 6, category: 'portrait', title: 'Family Portrait', image: '/zanunu-logo.jpg' },
    { id: 7, category: 'event', title: 'Birthday Celebration', image: '/zanunu-logo.jpg' },
    { id: 8, category: 'wedding', title: 'Bridal Portrait', image: '/zanunu-logo.jpg' },
    { id: 9, category: 'commercial', title: 'Brand Photography', image: '/zanunu-logo.jpg' },
    { id: 10, category: 'portrait', title: 'Senior Portrait', image: '/zanunu-logo.jpg' },
    { id: 11, category: 'event', title: 'Anniversary Party', image: '/zanunu-logo.jpg' },
    { id: 12, category: 'wedding', title: 'Wedding Details', image: '/zanunu-logo.jpg' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Explore our portfolio of stunning photography work
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#800020] to-[#a03050] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No items found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200 capitalize">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#800020] to-[#a03050] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Own Gallery?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's capture your special moments and add them to our collection
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#800020] font-semibold rounded-lg hover:bg-[#e8d5a3] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Session
          </a>
        </div>
      </section>
    </div>
  );
}

