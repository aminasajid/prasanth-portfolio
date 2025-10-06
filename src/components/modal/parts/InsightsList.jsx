import React from 'react'

function InsightsList({ title = 'Insights', subtitle = 'Key takeaways', items = [], accent = '#613CEB' }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <div className='mt-16'>
      <div className='mb-5'>
        {title && <h3 className="text-black/60 text-2xl font-bold leading-9">{title}</h3>}
        {subtitle && <h3 className="text-4xl md:text-5xl font-bold leading-[48px]" style={{ color: accent }}>{subtitle}</h3>}
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {items.map((text, idx) => (
          <div key={idx} className="w-full px-8 py-10 rounded-3xl flex flex-col justify-start items-start gap-2.5" style={{ backgroundColor: accent + '0D' }}>
            <div className="w-full flex flex-col justify-center items-start gap-4">
              <div className="w-full text-black text-2xl font-bold leading-9">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InsightsList


