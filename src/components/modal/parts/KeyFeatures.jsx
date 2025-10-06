import React from 'react'

function KeyFeatures({ title = 'Key Features', subtitle = 'Difference', items = [], accent = '#613CEB' }) {
  if (!Array.isArray(items) || items.length === 0) return null

  const features = items.slice(0, 6)

  const renderFeature = (f, idx) => (
    <div key={idx} className="pr-[30px] pt-[20px] md:pt-[60px] pb-5 border-t border-[#e8e8e8]">
      <div className="flex items-start gap-4 md:block md:gap-[60px]">
        <div className="shrink-0 text-4xl md:text-[80px] font-normal leading-[40px] md:leading-[80px]" style={{ color: accent }}>{String(idx + 1).padStart(2, '0')}</div>
        <div className="flex-1 md:mt-[60px]">
          <div className="text-black text-lg md:text-2xl font-bold leading-snug md:leading-[33.60px]">{f.title}</div>
          {f.description && (
            <div className="mt-2 text-[#555555] text-sm md:text-base leading-snug">{f.description}</div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="mt-16">
      <div className="flex flex-col justify-start items-start">
        {title && <div className="justify-center text-black/60 text-2xl font-bold leading-9">{title}</div>}
        {subtitle && <div className="justify-center text-5xl font-bold leading-[48px]" style={{ color: accent }}>{subtitle}</div>}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
        {features.map((f, i) => renderFeature(f, i))}
        {features.length < 6 && Array.from({ length: 6 - features.length }).map((_, i) => (
          <div key={`placeholder-${i}`} className="hidden md:block pr-[30px] pt-[60px] pb-5 border-t border-[#e8e8e8]"></div>
        ))}
      </div>
    </div>
  )
}

export default KeyFeatures


