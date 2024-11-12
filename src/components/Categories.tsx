import React from 'react';

const categories = [
  {
    title: 'Hombre',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/catalog/men'
  },
  {
    title: 'Mujer',
    image: 'https://images.unsplash.com/photo-1600872167946-851e3d3c0723?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/catalog/women'
  },
  {
    title: 'Niños',
    image: 'https://images.unsplash.com/photo-1581044777875-c31eafacdbc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/catalog/kids'
  }
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestras Categorías</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <a
            key={category.title}
            href={category.link}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}