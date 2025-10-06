import React, { useMemo, useRef } from 'react'

function ResultsTable({ results, accent = '#613CEB' }) {
  if (!results || !Array.isArray(results.columns) || !Array.isArray(results.rows)) return null

  const columnCount = Math.max(
    0,
    Array.isArray(results.columns) ? results.columns.length : 0,
    Array.isArray(results.rows) && results.rows[0] ? results.rows[0].length : 0
  )

  const colors = useMemo(() => {
    const provided = Array.isArray(results.colors) ? results.colors : []
    const fallback = ['#edf6ff', '#fff7f2', '#eaffef', '#f2efff']
    if (provided.length >= columnCount) return provided.slice(0, columnCount)
    // extend fallback to match columnCount
    const out = []
    for (let i = 0; i < columnCount; i++) out.push(provided[i] || fallback[i % fallback.length])
    return out
  }, [results.colors, columnCount])
  const scrollRef = useRef(null)
  const scrollByPanel = (direction) => {
    const container = scrollRef.current
    if (!container) return
    const firstChild = container.firstElementChild
    const panelWidth = firstChild ? firstChild.getBoundingClientRect().width : container.clientWidth * 0.9
    container.scrollBy({ left: direction * (panelWidth + 16), behavior: 'smooth' })
  }
  const heading = Array.isArray(results.heading) ? results.heading : ['Results', results.title || '']
  
  return (
    <div className='mt-16'>
      <div className='mb-5'>
        <h3 className="text-2xl font-bold leading-9" style={{ color: accent }}>{heading[0]}</h3>
        {heading[1] && <h3 className="text-4xl md:text-5xl font-bold leading-[48px]" style={{ color: accent }}>{heading[1]}</h3>}
      </div>
      {/* Small screens: horizontal scroll with controls; md+: grid without inner gaps */}
      <div className="w-full">
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex md:grid gap-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth max-w-full"
            style={{ gridTemplateColumns: `repeat(${Math.max(columnCount, 1)}, minmax(0, 1fr))` }}
          >
        {(() => {
          const rows = results.rows || []
          const byColumn = (colIndex) => rows.map(r => r[colIndex])
          const headerFor = (colIndex) => results.columns[colIndex] || (
            colIndex === 0 ? 'KPI' : colIndex === 1 ? 'Before' : colIndex === 2 ? 'After' : 'Improvement'
          )
          const columnClass = () => [
            'min-w-[80%] sm:min-w-[60%] md:min-w-0 inline-flex flex-col justify-start items-start',
            'snap-start',
            'border border-[#e8e8e8] rounded-[20px]'
          ].join(' ').trim()
          return (
            <>
              {Array.from({ length: columnCount }).map((_, colIdx) => (
                <div
                  key={colIdx}
                  className={columnClass()}
                  style={{ backgroundColor: colors[colIdx] }}
                >
                  <div className="self-stretch h-24 px-[30px] py-10 border-b border-[#cdcdcd] inline-flex justify-center items-start gap-4">
                    <div className="text-black text-[22.86px] font-medium leading-7">{headerFor(colIdx)}</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    {byColumn(colIdx).map((v, i) => (
                      <div key={i} className="self-stretch h-20 px-[30px] border-b-[0.50px] border-[#e8e8e8] inline-flex justify-start items-center gap-2">
                        {colIdx === 0 ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                              <path d="M12.2493 4.08324L5.24935 11.0832L2.04102 7.87491L2.86352 7.05241L5.24935 9.43241L11.4268 3.26074L12.2493 4.08324Z" fill="black"/>
                            </svg>
                            <div className="text-black text-base leading-snug">{v}</div>
                          </>
                        ) : (
                          <div className="text-black text-base leading-snug">{v}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )
        })()}
          </div>
          {/* Prev/Next for small screens */}
          <div className='md:hidden mt-4 flex justify-end gap-4'>
            <button
              type='button'
              onClick={() => scrollByPanel(-1)}
              className='w-12 h-12 relative bg-neutral-100 rounded-[48px] flex items-center justify-center hover:bg-neutral-200 active:scale-95 transition-all'
              aria-label='Previous'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.96945 12.5306L14.4695 20.0306C14.5391 20.1002 14.6219 20.1555 14.7129 20.1932C14.8039 20.2309 14.9015 20.2503 15.0001 20.2503C15.0986 20.2503 15.1962 20.2309 15.2872 20.1932C15.3783 20.1555 15.461 20.1002 15.5307 20.0306C15.6004 19.9609 15.6556 19.8781 15.6934 19.7871C15.7311 19.6961 15.7505 19.5985 15.7505 19.4999C15.7505 19.4014 15.7311 19.3038 15.6934 19.2128C15.6556 19.1217 15.6004 19.039 15.5307 18.9693L8.56039 11.9999L15.5307 5.03055C15.6714 4.88982 15.7505 4.69895 15.7505 4.49993C15.7505 4.30091 15.6714 4.11003 15.5307 3.9693C15.39 3.82857 15.1991 3.74951 15.0001 3.74951C14.801 3.74951 14.6102 3.82857 14.4695 3.9693L6.96945 11.4693C6.89971 11.539 6.84442 11.6217 6.80668 11.7127C6.76895 11.8038 6.74951 11.9014 6.74951 11.9999C6.74951 12.0985 6.76895 12.1961 6.80668 12.2871C6.84442 12.3782 6.89971 12.4609 6.96945 12.5306Z" fill="black"/>
              </svg>
            </button>
            <button
              type='button'
              onClick={() => scrollByPanel(1)}
              className='w-12 h-12 relative bg-neutral-100 rounded-[48px] flex items-center justify-center hover:bg-neutral-200 active:scale-95 transition-all'
              aria-label='Next'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.0306 12.5306L9.53055 20.0306C9.46087 20.1002 9.37815 20.1555 9.2871 20.1932C9.19606 20.2309 9.09847 20.2503 8.99993 20.2503C8.90138 20.2503 8.8038 20.2309 8.71276 20.1932C8.62171 20.1555 8.53899 20.1002 8.4693 20.0306C8.39962 19.9609 8.34435 19.8781 8.30663 19.7871C8.26892 19.6961 8.24951 19.5985 8.24951 19.4999C8.24951 19.4014 8.26892 19.3038 8.30663 19.2128C8.34435 19.1217 8.39962 19.039 8.4693 18.9693L15.4396 11.9999L8.4693 5.03055C8.32857 4.88982 8.24951 4.69895 8.24951 4.49993C8.24951 4.30091 8.32857 4.11003 8.4693 3.9693C8.61003 3.82857 8.80091 3.74951 8.99993 3.74951C9.19895 3.74951 9.38982 3.82857 9.53055 3.9693L17.0306 11.4693C17.1003 11.539 17.1556 11.6217 17.1933 11.7127C17.2311 11.8038 17.2505 11.9014 17.2505 11.9999C17.2505 12.0985 17.2311 12.1961 17.1933 12.2871C17.1556 12.3782 17.1003 12.4609 17.0306 12.5306Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsTable


