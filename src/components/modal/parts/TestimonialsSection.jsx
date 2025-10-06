import React from 'react'

function TestimonialsSection({ items = [], accent = '#613CEB', config = {} }) {
  if (!items.length) return null
  const title = config.title || 'HR & Team'
  const subtitle = config.subtitle || 'Feedback'

  const normalize = (item) => {
    if (typeof item === 'string') return { quote: item, author: '' }
    return {
      quote: item.quote || item.text || item.description || '',
      author: item.author || item.by || ''
    }
  }

  return (
    <div className='mt-16'>
      <div className='mb-5'>
        <h3 className="text-black/60 text-2xl font-bold leading-9">{title}</h3>
        <h3 className="text-5xl font-bold leading-[48px]" style={{ color: accent }}>{subtitle}</h3>
      </div>
      <div className="self-stretch inline-flex flex-col justify-start items-start gap-10">
        {items.map((raw, i) => {
          const t = normalize(raw)
          return (
            <div key={i} className="self-stretch px-8 py-10 rounded-3xl flex flex-col justify-start items-start gap-2.5" style={{ backgroundColor: accent + '0D' }}>
              <div className="self-stretch flex flex-col justify-center items-start gap-4">
                <div className="self-stretch justify-start text-black text-2xl font-bold leading-9">{t.quote}</div>
                {t.author && (
                  <div className="inline-flex justify-center items-center gap-2.5">
                    <div className="justify-center text-black text-xl font-medium leading-[30px]">{t.author}</div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TestimonialsSection


