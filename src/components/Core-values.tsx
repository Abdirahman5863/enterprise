
import Image from 'next/image'
import React from 'react'

const CoreValues = () => {
  return (
    <section className="py-24 bg-gray-50">
    <h2 className="core-values-title">CORE VALUES</h2>
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16">
      <div className="core-value-item">
        <Image 
          src="/reliability.png" 
          alt="Reliability" 
          width={96} 
          height={96} 
          className="core-value-icon"
        />
        <h3 className="core-value-title">RELIABILITY</h3>
        <p className="core-value-description">On-time and secure delivery of products.</p>
      </div>
      <div className="core-value-item">
        <Image 
          src="/quality.png" 
          alt="Quality Assurance" 
          width={96} 
          height={96} 
          className="core-value-icon"
        />
        <h3 className="core-value-title">QUALITY ASSURANCE</h3>
        <p className="core-value-description">Maintaining optimal temperature control at all stages of transport.</p>
      </div>
      <div className="core-value-item">
        <Image
          src="/customer.png" 
          alt="Customer Focus" 
          width={96} 
          height={96} 
          className="core-value-icon"
        />
        <h3 className="core-value-title">CUSTOMER FOCUS</h3>
        <p className="core-value-description">Tailored services to meet client-specific needs.</p>
      </div>
    </div>
  </section>

  )
}

export  default CoreValues

