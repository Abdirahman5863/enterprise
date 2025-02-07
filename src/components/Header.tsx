/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [particles, setParticles] = useState<Array<{ id: number; style: any }>>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Toggle Menu Clicked'); // Debugging
        setIsMenuOpen(!isMenuOpen);
        console.log('isMenuOpen:', !isMenuOpen); // Debugging to show updated state
    };

    const menuItems = ['HOME', 'ABOUT', 'WORK', 'SERVICES', 'CONTACT'];

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
                left: `${Math.random() * 50}%`,
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
        <header className="hero-background min-h-full relative text-white md:px-28 p-0">
            {/* Particles */}
            <div className="particles">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={particle.style}
                    />
                ))}
            </div>

            <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
                <Link href="/" className="text-l font-bold tracking-wider flex flex-col">
                    <span>KISANJI</span>
                    <span>ENTERPRISES</span>
                </Link>
                <div className="hidden md:flex space-x-12">
                    {menuItems.map((item) => (
                        <a
                            href={`#${item.toLowerCase()}`}
                            className={`relative group overflow-hidden ${item === 'HOME' ? 'text-coral-500' : 'text-white'}`}
                            key={item}
                        >
                            <span className="block transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full">
                                {item}
                            </span>
                            <span className="block absolute inset-0 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 text-coral-500">
                                {item}
                            </span>
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>
            
            {isMenuOpen && (
                <div className="absolute inset-0 bg-slate-400 bg-opacity-75 backdrop-blur-sm flex flex-col items-center justify-center z-50">
                    <button onClick={toggleMenu} className="text-white text-3xl absolute top-4 right-4 focus:outline-none">
                        <X className="w-8 h-8" />
                    </button>
                    {menuItems.map((item) => (
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="py-2 text-white w-full text-center "
                            key={item}
                            onClick={toggleMenu}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}

            {/* Hero Content */}
            <div className={`container mx-auto px-6 pt-32 pb-20 relative z-10 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative h-[200px]">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute w-full transition-opacity duration-500 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                            >
                                <h2 className="text-5xl font-bold mb-8 header-title">{slide.title}</h2>
                                <p className="text-xl leading-relaxed header-description">{slide.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Slider Controls */}
                    <button onClick={prevSlide} className="slider-arrow left-4">
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button onClick={nextSlide} className="slider-arrow right-4">
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
    );
};

export default Header;
