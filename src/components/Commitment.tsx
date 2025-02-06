/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronRightIcon,  } from "lucide-react";
import React, { useState } from "react";
// import { Card } from "./ui/card";
import Image from "next/image";

interface Image {
  url: string;
  category: string;
}

const industryImages: Image[] = [
  {
    url: "https://stankungu.github.io/ke-portfolio/images/pic-1.jpg",
    category: "FRESH PRODUCE",
  },
  {
    url: "https://stankungu.github.io/ke-portfolio/images/pic-3.jpg",
    
    category: "FRESH PRODUCE",
  },
  {
    url: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "RETAIL & SUPERMARKETS",
  },
  {
    url: "https://stankungu.github.io/ke-portfolio/images/pic-7.jpg",
   
    category: "FOOD AND BEVERAGE",
  },
  {
    url: "https://stankungu.github.io/ke-portfolio/images/pic-6.jpg",
    category: "FOOD AND BEVERAGE",
  },
  {
    url: "https://stankungu.github.io/ke-portfolio/images/meat%20industry.avif",
   
    category: "MEAT",
  },
 
];

const categories = ["ALL", "FOOD AND BEVERAGE", "FRESH PRODUCE", "RETAIL & SUPERMARKETS", "MEAT"];

const Commitment = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const handleImageClick = (index: number) => {
    setSelectedImage(industryImages[index]);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleNext = () => {
    const filteredImages = activeCategory === "ALL"
      ? industryImages
      : industryImages.filter((img) => img.category === activeCategory);

    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section className="px-10 py-20 bg-slate-800  text-white" id="work">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-coral-500 c-title">
          COMMITMENT TO QUALITY AND COMPLIANCE
        </h2>
        <div className="text-center mb-12   mt-10  c-description">
          We adhere to all health, safety, and food-grade logistics standards. We have regular vehicle maintenance and staff training to ensure operational excellence.
        </div>
        <p className="text-center mb-8 c-p">This is a snippet of the industries we serve.</p>

        {/* Industry Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0); // Reset index
              }}
              className={`px-4 py-2 rounded ${
                activeCategory === category ? "bg-coral-500 text-white" : "text-white hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-5">
          {industryImages
            .filter((img) => activeCategory === "ALL" || img.category === activeCategory)
            .map((img, index) => (
              <div
                key={index}
                className="aspect-w-10 aspect-h-5 overflow-hidden  cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                
                <img
                  src={img.url}
                  alt="Industry"
                  className="object-cover w-90 h-60 transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col justify-center items-center">
          <div className="w-full max-w-2xl text-white">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-lg">{selectedImage?.category}</h2>
             
            </div>
            <div className="flex justify-center my-8">
              <img
                src={selectedImage?.url}
                alt="Selected"
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="flex justify-between space-x-4 pb-4">
            <button className="text-white text-2xl" onClick={handleCloseModal}>
                ×
              </button>
              <button className="bg-coral-500 text-white px-4 py-2 rounded" onClick={handleNext}>
              <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
           <a href="#services" className="text-coral-500 flex justify-center mt-2"><Image src="/arrow.png" alt="Arrow" width={50} height={50} /></a> 

    </section>
  );
};

export default Commitment;
