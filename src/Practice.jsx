import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // Make sure this imports your Tailwind CSS

const products = [
  {
    id: 1,
    name: "G2X 10 BB Mono & Bi-facial",
    description: "440 Wp-460 Wp 120 Cells",
    image: "path-to-image1",
  },
  {
    id: 2,
    name: "G2X 10 BB Mono PERC Bi-facial",
    description: "540 Wp-550 Wp 144 Cells",
    image: "path-to-image2",
  },
  // Add more products here
];

function Practice() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-yellow-500 min-h-screen">
      <header className="text-center py-5">
        <h1 className="text-4xl font-bold">ALL PRODUCTS</h1>
      </header>
      <nav className="flex justify-between items-center p-5 bg-black text-white">
        <div className="flex items-center space-x-3">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <span> / </span>
          <a href="#" className="hover:underline">
            ALL PRODUCTS
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <select className="bg-black text-white border p-2 rounded">
            <option>Type</option>
            <option>Type 1</option>
            <option>Type 2</option>
          </select>
          <select className="bg-black text-white border p-2 rounded">
            <option>Feature</option>
            <option>Feature 1</option>
            <option>Feature 2</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded shadow"
            data-aos="fade-up"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-3 text-lg font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <button className="mt-3 flex items-center text-yellow-500">
              <span>View</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5a7.5 7.5 0 107.5 7.5A7.508 7.508 0 0012 4.5zm0 12a4.5 4.5 0 114.5-4.5A4.505 4.505 0 0112 16.5zm0-10a5.488 5.488 0 00-5.5 5.5h-2A7.5 7.5 0 1112 19.5v-2A5.488 5.488 0 0017.5 12H12zm4 4h-8v-2h8z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;
