import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dwb6e3dd55/bvertigo/36725_vdb_02.jpg?sw=680&q=70",
  },
  {
    id: 2,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dwcf559d93/horze/36050_DB_02.jpg?sw=680&q=70",
  },
  {
    id: 3,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw08c47731/bvertigo/36744_vdb_02.jpg?sw=680&q=70",
  },
  {
    id: 4,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dwf82b3969/bvertigo/36060_781_02.jpg?sw=680&q=70",
  },
  {
    id: 5,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw4b80d253/boss/DK8CZ_099_02.jpg?sw=680&q=70",
  },
  {
    id: 6,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dwac050cee/pikeur/311087_WH_4.jpg?sw=680&q=70",
  },
  {
    id: 7,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw329c6bd0/cavallo/337958_DB_1.jpg?sw=680&q=70&filename=db-ab-db-ab",
  },
  {
    id: 8,
    name: "Pantalón de Montar Premium",
    price: 49.99,
    category: "Hombre",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw58d2b0f2/pikeur/331745_BL_DB_2.jpeg?sw=680&q=70",
  },
  
  {
    id: 9,
    name: "Pantalón de Montar Premium",
    price: 59.99,
    category: "Mujer",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw5ddb4489/horze/CR90Z_357_02.jpg?sw=680&q=70",
  },
  {
    id: 10,
    name: "Pantalón de Montar Premium",
    price: 59.99,
    category: "Mujer",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw225173a5/horze/NMCUA_590_02.jpg?sw=680&q=70",
  },
  {
    id: 11,
    name: "Pantalón de Montar Premium",
    price: 59.99,
    category: "Mujer",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw65c0c7be/horze/36815_099_02.jpg?sw=680&q=70",
  },
  {
    id: 12,
    name: "Pantalón de Montar Premium",
    price: 59.99,
    category: "Mujer",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dwd56cd81b/horze/36961_db_02.jpg?sw=680&q=70",
  },
  {
    id: 13,
    name: "Pantalón de Montar Premium",
    price: 59.99,
    category: "Mujer",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw295bd25d/horze/WQF5Q_561_02.jpg?sw=680&q=70",
  },
  {
    id: 14,
    name: "Pantalón de Montar Premium",
    price: 59.99,
    category: "Mujer",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw52404df1/horze/36091_COLB_2.jpg?sw=680&q=70",
  },
  {
    id: 15,
    name: "Pantalón de Montar Premium",
    price: 59.99,
    category: "Mujer",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw5637edd1/bvertigo/2WWFY_090_02.jpg?sw=680&q=70",
  },
  {
    id: 16,
    name: "Chaqueta Rosa",
    price: 59.99,
    category: "Niños",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw9a2bd44a/horze/33602_BPI_1.jpg?sw=680&q=70&filename=rojo-remolacha-rojo-remolacha",
  },
  {
    id: 17,
    name: "Casco junior negro",
    price: 59.99,
    category: "Niños",
    image: "https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw3f6ca373/horze/30087_099_02.jpg?sw=680&q=70",
  },

];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Catálogo</h1>
        
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-4">
          {["Todos", "Hombre", "Mujer", "Niños"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}