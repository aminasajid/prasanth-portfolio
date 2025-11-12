import React from 'react'
import Image from 'next/image'

// Teal/Mint theme - Desktop dashboards layout (4 large screens)
function WireframeStyle3({ title, subtitle, images = [], bgColor = '#00D4AA' }) {
  return (
    <div className="mt-16 md:mt-20">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <p className="text-black/60 text-xl md:text-2xl font-medium mb-2">High Fidelity</p>
        <h3 className="text-3xl md:text-5xl font-bold" style={{ color: bgColor }}>
          {title || 'Wireframes'}
        </h3>
      </div>

      {/* Large container with grid of dashboards */}
      <div
        className="w-full rounded-3xl md:rounded-[48px] p-6 md:p-10 overflow-hidden"
        style={{ backgroundColor: '#F0F9F7' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {images.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
              style={{
                minHeight: idx === 0 || idx === 2 ? '350px' : '320px'
              }}
            >
              <img
                src={img}
                alt={`Dashboard ${idx + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WireframeStyle3

