import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
          alt="Equestrian riding"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          JOS-EQUITACIÓN
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Descubre nuestra exclusiva colección de ropa ecuestre diseñada para jinetes de todas las edades.
          Calidad, estilo y comodidad para tu pasión por la equitación.
        </p>
        <div className="mt-10">
          <a
            href="/catalog"
            className="inline-block bg-indigo-600 px-8 py-3 text-white font-medium rounded-md hover:bg-indigo-700 transition"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
    </div>
  );
}