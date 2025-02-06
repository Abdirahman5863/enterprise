/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Header = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [particles, setParticles] = useState<Array<{ id: number; style: any }>>([]);
  
    const slides = [
      {
        title: "MISSION STATEMENT",
        content: "To provide efficient, reliable, and environmentally responsible refrigerated transportation solutions, ensuring the integrity and freshness of every product we handle."
      },
      {
        title: "VISION",
        content: "To be Kenya's leading cold chain logistics provider, setting industry standards for quality and reliability."
      }
    ];
  
    useEffect(() => {
      // Generate random particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 4}s`
        }
      }));
      setParticles(newParticles);
    }, []);
  
    const nextSlide = () => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  return (
    <header className="hero-background min-h-[100vh] relative text-white">
        {/* Particles */}
        <div className="particles ">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={particle.style}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
          <h1 className="text-2xl font-bold tracking-wider">KISANJI ENTERPRISES</h1>
          <div className="hidden md:flex space-x-12">
            <a href="#home" className="nav-link active">HOME</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#work" className="nav-link">WORK</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative h-[200px] ">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-opacity duration-500 ${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h2 className="text-5xl font-bold mb-8">{slide.title}</h2>
                  <p className="text-xl leading-relaxed">{slide.content}</p>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <button 
              onClick={prevSlide}
              className="slider-arrow left-4"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="slider-arrow right-4"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Slider Dots */}
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

  )
}

export default Header