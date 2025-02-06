import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 core-value-title">SERVICES OFFERED</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src="/ref.png"
                alt="Refrigirated Transport"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 core-value-title">Refrigerated Transport</h3>
            <p className='core-value-description'>Temperature-controlled distribution for perishable goods.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src="/trank.png"
                alt="Full Truckload (FTL)"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 core-value-title">Full Truckload (FTL)</h3>
            <p className='core-value-description'>Customized solutions for different cargo sizes.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src="/trank.png"
                alt="Less Than Truckload (LTL)"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 core-value-title">Less Than Truckload (LTL)</h3>
            <p className='core-value-description'>Cost-effective solutions for smaller shipments.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src="/delivery.png"
                alt="Last-Mile Delivery"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 core-value-title">Last-Mile Delivery</h3>
            <p className='core-value-description'>Efficient distribution to end destinations.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src="/tracking.png"
                alt="24/7 Tracking & Monitoring"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 core-value-title">24/7 Tracking & Monitoring</h3>
            <p className='core-value-description'>Real-time GPS tracking and temperature monitoring systems.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src="/fuel.png"
                alt="Fleet and Technology"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 core-value-title">Fleet and Technology</h3>
            <p className='core-value-description'>Sustainable fuel-efficient vehicles to minimize environmental impact.</p>
          </div>
        </div>
        <a href="#contact" className="text-coral-500 flex justify-center"><Image src="/arrow.png" alt="Arrow" width={50} height={50} /></a> 
      </div>
    </section>
  );
};

export default Services;
