import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">JOS-EQUITACIÓN</span>
            </div>
            <p className="mt-4 text-gray-400">
              Tu tienda especializada en ropa y equipamiento ecuestre de alta calidad.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition">Catálogo</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog?category=hombre" className="text-gray-400 hover:text-white transition">Hombre</Link></li>
              <li><Link to="/catalog?category=mujer" className="text-gray-400 hover:text-white transition">Mujer</Link></li>
              <li><Link to="/catalog?category=ninos" className="text-gray-400 hover:text-white transition">Niños</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">diego.sanchezhere@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JOS-EQUITACIÓN. Esta es una página web Educativa que se ha realizado con esa unica intención. Todas las fotos pertenecen a <strong>horze.es</strong> el autor de la web no tiene ningun derecho de autor.</p>
        </div>
      </div>
    </footer>
  );
}