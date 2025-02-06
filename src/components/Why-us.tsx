/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <section className="py-24">
    <h2 className="why-choose-title">WHY CHOOSE US?</h2>
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16">
      <div className="why-choose-item">
        <Image 
          src="/experience.png" 
          alt="Experience" 
          width={128} 
          height={128} 
          className="why-choose-icon"
        />
        <h3 className="why-choose-item-title">EXPERIENCE</h3>
        <p className="why-choose-description">Years of expertise in cold-chain logistics.</p>
      </div>
      <div className="why-choose-item">
        <Image 
          src="/nation.png" 
          alt="Advanced Technology" 
          width={128} 
          height={128} 
          className="why-choose-icon"
        />
        <h3 className="why-choose-item-title">ADVANCED TECHNOLOGY</h3>
        <p className="why-choose-description">State-of-the-art tracking and temperature control systems.</p>
      </div>
      <div className="why-choose-item">
        <Image 
          src="/advanced.png" 
          alt="Nationwide Coverage" 
          width={128} 
          height={128} 
          className="why-choose-icon"
        />
        <h3 className="why-choose-item-title">NATIONWIDE COVERAGE</h3>
        <p className="why-choose-description">Extensive transport network for seamless delivery.</p>
      </div>
    </div>
  </section>

  )
}

export default WhyUs
