import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80"
          alt="Equestrian Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">JOS-EQUITACIÓN</h1>
            <p className="text-xl mb-8">La mejor equipación ecuestre para jinetes exigentes</p>
            <Link
              to="/catalog"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Ver Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Hombre",
              image: "https://www.zanahoriaequitacion.com/269-large_default/polo-blanco-de-equitacion-para-hombre.jpg",
              link: "/catalog/men",
            },
            {
              title: "Mujer",
              image: "https://www.bracomonteequestrian.com/wp-content/uploads/2023/07/BlueBreeches1-800x800.jpg",
              link: "/catalog/women",
            },
            {
              title: "Niños",
              image: "https://tiendahipicalcdc.es/50867-large_default/leggings-mini-ros-romee-nios.jpg",
              link: "/catalog//kids",
            },
          ].map((category) => (
            <div key={category.title} className="relative group cursor-pointer">
              <Link to={category.link}>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition rounded-lg flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Envío Gratuito</h3>
              <p className="text-gray-600">En pedidos superiores a 100€</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Garantía de Calidad</h3>
              <p className="text-gray-600">Productos de primera calidad</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">24-48 horas en península</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}