/* eslint-disable @next/next/no-img-element */
"use client";



import Header from "@/components/Header";
import About from "@/components/About";
import CoreValues from "@/components/Core-values";
import WhyUs from "@/components/Why-us";
import Commitment from "@/components/Commitment";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {



  return (
    <main className="min-h-screen">
      <Header />

      {/* About Section */}
      <About />

      {/* Core Values */}
      <CoreValues />

      {/* Why Choose Us Section */}
      <WhyUs />

      {/* Commitment Section */}
      <Commitment />

      {/* Services */}
      <Services />

      {/* Contact */}
      <Contact />

      {/* Footer */}

    </main>
  );
}