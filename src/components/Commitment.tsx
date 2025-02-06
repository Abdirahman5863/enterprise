
"use client"
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react'

const categories = ['ALL', 'FOOD AND BEVERAGE', 'FRESH PRODUCE', 'RETAIL & SUPERMARKETS', 'MEAT'];

const industryImages = [
  {
    url: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "FOOD AND BEVERAGE"
  },
  {
    url: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "MEAT"
  },
  {
    url: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "FRESH PRODUCE"
  },
  {
    url: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "FRESH PRODUCE"
  },
  {
    url: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "FOOD AND BEVERAGE"
  }
];

const Commitment = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <section className="py-20 bg-slate-800 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-coral-500">COMMITMENT TO QUALITY AND COMPLIANCE</h2>
      <p className="text-center mb-12 italic">
        We adhere to all health, safety, and food-grade logistics standards. We have regular vehicle maintenance and staff training to ensure operational excellence.
      </p>
      
      <p className="text-center mb-8">This is a snippet of the industries we serve.</p>
      
      {/* Industry Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded ${
              activeCategory === category 
                ? 'bg-coral-500 text-white' 
                : 'text-white hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
  
      {/* Industry Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {industryImages
          .filter(img => activeCategory === 'ALL' || img.category === activeCategory)
          .map((img, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <img
                src={img.url}
                alt={img.category}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
      </div>
    </div>
  </section>
  )
}

export default Commitment
