import React, { useState } from 'react'
import Image from 'next/image'

function WireframeStyle2({ title, subtitle, images = [], bgColor = '#3366FF' }) {
  const [startIdx, setStartIdx] = useState(0)

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + 1, images.length - 1))
  }

  return (
    <div className="mt-16 md:mt-20 px-4 md:px-8">
      {/* Header */}
      <div className="mb-8 md:mb-12 text-center md:text-left">
        <p className="text-black/60 text-xl md:text-2xl font-medium mb-2">High Fidelity</p>
        <h3 className="text-3xl md:text-5xl font-bold" style={{ color: bgColor }}>
          {title || 'Wireframes'}
        </h3>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-6">
        {/* Row 1 */}
        {images.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl overflow-hidden"
            style={{
              minHeight: '250px',
              background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}33 100%)`,
            }}
          >
            <Image
              src={img}
              alt={`Screen ${idx + 1}`}
              fill
              className="object-contain rounded-2xl w-full"
            />
          </div>
        ))}

        {/* Row 2 */}
        <div
          className="relative rounded-3xl overflow-hidden col-span-1"
          style={{
            minHeight: '200px',
            background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}33 100%)`,
          }}
        >
          <Image src={images[3]} alt="Screen 4" fill className="object-contain  rounded-2xl" />
        </div>
        <div
          className="relative rounded-3xl overflow-hidden col-span-1"
          style={{
            minHeight: '200px',
            background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}33 100%)`,
          }}
        >
          <Image src={images[4]} alt="Screen 5" fill className="object-contain rounded-2xl" />
        </div>
        <div
          className="relative rounded-3xl overflow-hidden col-span-1 row-span-1"
          style={{
            minHeight: '300px',
            background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}44 100%)`,
          }}
        >
          <Image src={images[5]} alt="Screen 6" fill className="object-contain  rounded-2xl" />
        </div>

        {/* Row 3 */}
        <div
          className="relative rounded-3xl overflow-hidden col-span-3"
          style={{
            minHeight: '350px',
            background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}55 100%)`,
          }}
        >
          <Image src={images[6]} alt="Screen 7" fill className="object-contain rounded-2xl" />
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden relative flex items-center justify-center">
        {images.slice(startIdx, startIdx + 1).map((img, idx) => (
          <div key={idx} className="relative w-full h-64 rounded-3xl overflow-hidden">
            <Image src={img} alt={`Screen ${startIdx + 1}`} fill className="object-contain p-4" />
          </div>
        ))}

        {/* Prev / Next */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}

export default WireframeStyle2
