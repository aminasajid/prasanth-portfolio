import React, { useRef } from 'react'

function WireframeStyle1({ title, subtitle, images = [], bgColor = '#613CEB' }) {
  const scrollRef = useRef(null)

  const scrollBy = (direction) => {
    const container = scrollRef.current
    if (!container) return
    const firstChild = container.firstElementChild
    const width = firstChild ? firstChild.getBoundingClientRect().width : container.clientWidth
    container.scrollBy({ left: direction * (width + 16), behavior: 'smooth' })
  }

  return (
    <div className="mt-16 md:mt-20">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <p className="text-black/60 text-xl md:text-2xl font-medium mb-2">High Fidelity</p>
        <h3 className="text-3xl md:text-5xl font-bold text-[#613CEB]" >
          {title || 'Wireframes'}
        </h3>
       
      </div>

      {/* Image container */}
      <div
        ref={scrollRef}
        className="
          flex md:grid
          md:grid-cols-3
          gap-6
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory scroll-smooth
          p-4 md:p-6 bg-[#EEEBFF] rounded-[64px]
        "
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="
              flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto
              snap-start
              relative
              rounded-3xl md:rounded-[40px]
              shadow-2xl
            "
          >
            <img
              src={img}
              alt={`Mobile screen ${idx + 1}`}
              className="w-full h-auto rounded-3xl md:rounded-[40px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons for small screens */}
      <div className="md:hidden flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 active:scale-95 transition-all"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path d="M12 16L6 10L12 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 active:scale-95 transition-all"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path d="M8 4L14 10L8 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default WireframeStyle1
