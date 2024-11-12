import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
}

export default function ProductCard({ image, name, price, category }: ProductCardProps) {
  return (
    <div className="bg-gray-400 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <span className="text-sm text-indigo-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
        <p className="text-gray-600 mt-2">{price.toFixed(2)} €</p>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}