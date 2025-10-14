import React, { useRef } from 'react'

function SolutionsGrid({ solutions = [], accent = '#613CEB' }) {
  if (!solutions.length) return null
  const scrollRef = useRef(null)

  const scrollByCard = (direction) => {
    const container = scrollRef.current
    if (!container) return
    const firstChild = container.firstElementChild
    const cardWidth = firstChild ? firstChild.getBoundingClientRect().width : container.clientWidth * 0.8
    container.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' })
  }

  return (
    <div className='mt-16'>
      <div className='mb-5'>
        <h3 className="text-black/60 text-2xl font-bold leading-9">Solution</h3>
        <h3 className="text-4xl md:text-5xl font-bold leading-[48px]" style={{ color: accent }}>
          What we built
        </h3>
      </div>

      {/* Responsive layout */}
      <div className='relative'>
        <div
          ref={scrollRef}
          className='flex md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth'
        >
          {solutions.map((s, i) => (
            <div
              key={i}
              className="self-stretch h-[400px] rounded-[24px] overflow-hidden bg-white shadow-sm snap-start shrink-0 md:shrink min-w-[85%] xs:min-w-[75%] sm:min-w-[60%] md:min-w-0"
            >
              {s.image && (
                <img
                  src={s.image}
                  alt={s.title || 'Solution image'}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Prev/Next buttons for small screens */}
        <div className='md:hidden mt-4 flex justify-end gap-4'>
          <button
            type='button'
            onClick={() => scrollByCard(-1)}
            className='w-12 h-12 relative bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 active:scale-95 transition-all'
            aria-label='Previous'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path d="M6.96945 12.5306L14.4695 20.0306C14.54 20.1 14.62 20.16 14.71 20.19C14.8 20.23 14.9 20.25 15 20.25C15.1 20.25 15.2 20.23 15.29 20.19C15.38 20.15 15.46 20.1 15.53 20.03C15.6 19.96 15.66 19.88 15.69 19.79C15.73 19.7 15.75 19.6 15.75 19.5C15.75 19.4 15.73 19.3 15.69 19.21C15.66 19.12 15.6 19.04 15.53 18.97L8.56 12L15.53 5.03C15.67 4.89 15.75 4.7 15.75 4.5C15.75 4.3 15.67 4.11 15.53 3.97C15.39 3.83 15.2 3.75 15 3.75C14.8 3.75 14.61 3.83 14.47 3.97L6.97 11.47C6.9 11.54 6.84 11.62 6.81 11.71C6.77 11.8 6.75 11.9 6.75 12C6.75 12.1 6.77 12.2 6.81 12.29C6.84 12.38 6.9 12.46 6.97 12.53Z" fill="black" />
            </svg>
          </button>
          <button
            type='button'
            onClick={() => scrollByCard(1)}
            className='w-12 h-12 relative bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 active:scale-95 transition-all'
            aria-label='Next'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path d="M17.03 12.53L9.53 20.03C9.46 20.1 9.38 20.16 9.29 20.19C9.2 20.23 9.1 20.25 9 20.25C8.9 20.25 8.8 20.23 8.71 20.19C8.62 20.15 8.54 20.1 8.47 20.03C8.4 19.96 8.34 19.88 8.31 19.79C8.27 19.7 8.25 19.6 8.25 19.5C8.25 19.4 8.27 19.3 8.31 19.21C8.34 19.12 8.4 19.04 8.47 18.97L15.44 12L8.47 5.03C8.33 4.89 8.25 4.7 8.25 4.5C8.25 4.3 8.33 4.11 8.47 3.97C8.61 3.83 8.8 3.75 9 3.75C9.2 3.75 9.39 3.83 9.53 3.97L17.03 11.47C17.1 11.54 17.16 11.62 17.19 11.71C17.23 11.8 17.25 11.9 17.25 12C17.25 12.1 17.23 12.2 17.19 12.29C17.16 12.38 17.1 12.46 17.03 12.53Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SolutionsGrid
