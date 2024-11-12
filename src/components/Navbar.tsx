import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cyan-400 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-gray-800">JOS-EQUITACIÓN</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Inicio</Link>
            <Link to="/catalog" className="text-gray-700 hover:text-indigo-600 transition">Catálogo</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contacto</Link>
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600 cursor-pointer" />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Inicio</Link>
            <Link to="/catalog" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Catálogo</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
}