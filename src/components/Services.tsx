import { Box, Leaf, Navigation, Thermometer, Timer, Truck } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">SERVICES OFFERED</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-50 rounded-lg">
          <Thermometer className="w-12 h-12 mb-4 text-emerald-600" />
          <h3 className="text-xl font-bold mb-2">Refrigerated Transport</h3>
          <p>Temperature-controlled distribution for perishable goods.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <Box className="w-12 h-12 mb-4 text-emerald-600" />
          <h3 className="text-xl font-bold mb-2">Full Truckload (FTL)</h3>
          <p>Customized solutions for different cargo sizes.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <Truck className="w-12 h-12 mb-4 text-emerald-600" />
          <h3 className="text-xl font-bold mb-2">Less Than Truckload (LTL)</h3>
          <p>Cost-effective solutions for smaller shipments.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <Navigation className="w-12 h-12 mb-4 text-emerald-600" />
          <h3 className="text-xl font-bold mb-2">Last-Mile Delivery</h3>
          <p>Efficient distribution to end destinations.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <Timer className="w-12 h-12 mb-4 text-emerald-600" />
          <h3 className="text-xl font-bold mb-2">24/7 Tracking & Monitoring</h3>
          <p>Real-time GPS tracking and temperature monitoring systems.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <Leaf className="w-12 h-12 mb-4 text-emerald-600" />
          <h3 className="text-xl font-bold mb-2">Fleet and Technology</h3>
          <p>Sustainable fuel-efficient vehicles to minimize environmental impact.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services