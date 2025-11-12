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
      <div className="hidden lg:block space-y-6">
        {/* Row 1 - Flexible widths based on image */}
        <div className="flex justify-center gap-6 flex-wrap">
          {images.slice(0, 3).map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden flex-shrink-0"
              style={{
                minHeight: '250px',
                maxWidth: '400px',
                width: 'auto',
                background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}33 100%)`,
              }}
            >
              <img
                src={img}
                alt={`Screen ${idx + 1}`}
                className="h-full w-auto object-contain rounded-2xl max-h-[450px]"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Flexible widths */}
        <div className="flex justify-center gap-6 flex-wrap">
          <div
            className="relative rounded-3xl overflow-hidden flex-shrink-0"
            style={{
              minHeight: '200px',
              maxWidth: '380px',
              width: 'auto',
              background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}33 100%)`,
            }}
          >
            <img src={images[3]} alt="Screen 4" className="h-full w-auto object-contain rounded-2xl max-h-[400px]" />
          </div>
          <div
            className="relative rounded-3xl overflow-hidden flex-shrink-0"
            style={{
              minHeight: '200px',
              maxWidth: '380px',
              width: 'auto',
              background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}33 100%)`,
            }}
          >
            <img src={images[4]} alt="Screen 5" className="h-full w-auto object-contain rounded-2xl max-h-[400px]" />
          </div>
          <div
            className="relative rounded-3xl overflow-hidden flex-shrink-0"
            style={{
              minHeight: '300px',
              maxWidth: '420px',
              width: 'auto',
              background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}44 100%)`,
            }}
          >
            <img src={images[5]} alt="Screen 6" className="h-full w-auto object-contain rounded-2xl max-h-[450px]" />
          </div>
        </div>

        {/* Row 3 - Full width */}
        <div
          className="relative rounded-3xl overflow-hidden w-full"
          style={{
            minHeight: '350px',
            background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}55 100%)`,
          }}
        >
          <img src={images[6]} alt="Screen 7" className="w-full h-auto object-contain rounded-2xl" />
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <div className="relative flex items-center justify-center mb-6">
          {images.slice(startIdx, startIdx + 1).map((img, idx) => (
            <div key={idx} className="relative w-full h-64 rounded-3xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}33 100%)` }}>
              <Image src={img} alt={`Screen ${startIdx + 1}`} fill className="object-contain p-4" />
            </div>
          ))}
        </div>

        {/* Prev / Next buttons below */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={startIdx === 0}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed border border-gray-100"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6.96945 12.5306L14.4695 20.0306C14.5391 20.1002 14.6219 20.1555 14.7129 20.1932C14.8039 20.2309 14.9015 20.2503 15.0001 20.2503C15.0986 20.2503 15.1962 20.2309 15.2872 20.1932C15.3783 20.1555 15.461 20.1002 15.5307 20.0306C15.6004 19.9609 15.6556 19.8781 15.6934 19.7871C15.7311 19.6961 15.7505 19.5985 15.7505 19.4999C15.7505 19.4014 15.7311 19.3038 15.6934 19.2128C15.6556 19.1217 15.6004 19.039 15.5307 18.9693L8.56039 11.9999L15.5307 5.03055C15.6714 4.88982 15.7505 4.69895 15.7505 4.49993C15.7505 4.30091 15.6714 4.11003 15.5307 3.9693C15.39 3.82857 15.1991 3.74951 15.0001 3.74951C14.801 3.74951 14.6102 3.82857 14.4695 3.9693L6.96945 11.4693C6.89971 11.539 6.84442 11.6217 6.80668 11.7127C6.76895 11.8038 6.74951 11.9014 6.74951 11.9999C6.74951 12.0985 6.76895 12.1961 6.80668 12.2871C6.84442 12.3782 6.89971 12.4609 6.96945 12.5306Z" fill="black" />
            </svg>
          </button>
          
          <span className="text-sm text-black/60 font-medium">
            {startIdx + 1} / {images.length}
          </span>
          
          <button
            onClick={handleNext}
            disabled={startIdx >= images.length - 1}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed border border-gray-100"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.0306 12.5306L9.53055 20.0306C9.46087 20.1002 9.37815 20.1555 9.2871 20.1932C9.19606 20.2309 9.09847 20.2503 8.99993 20.2503C8.90138 20.2503 8.8038 20.2309 8.71276 20.1932C8.62171 20.1555 8.53899 20.1002 8.4693 20.0306C8.39962 19.9609 8.34435 19.8781 8.30663 19.7871C8.26892 19.6961 8.24951 19.5985 8.24951 19.4999C8.24951 19.4014 8.26892 19.3038 8.30663 19.2128C8.34435 19.1217 8.39962 19.039 8.4693 18.9693L15.4396 11.9999L8.4693 5.03055C8.32857 4.88982 8.24951 4.69895 8.24951 4.49993C8.24951 4.30091 8.32857 4.11003 8.4693 3.9693C8.61003 3.82857 8.80091 3.74951 8.99993 3.74951C9.19895 3.74951 9.38982 3.82857 9.53055 3.9693L17.0306 11.4693C17.1003 11.539 17.1556 11.6217 17.1933 11.7127C17.2311 11.8038 17.2505 11.9014 17.2505 11.9999C17.2505 12.0985 17.2311 12.1961 17.1933 12.2871C17.1556 12.3782 17.1003 12.4609 17.0306 12.5306Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WireframeStyle2
