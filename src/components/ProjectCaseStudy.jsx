import React from 'react'
import Image from 'next/image'

function Metric({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-black/60">{label}</span>
      <span className="text-2xl font-bold leading-6">{value}</span>
    </div>
  )
}

function CaseCard({ item, accent }) {
  return (
    <div className="bg-white  p-5 md:p-6 shadow-sm border border-black/5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-xl font-bold leading-6 tracking-tight">{item.title}</h4>
        {item.badge && (
          <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: accent + '20', color: accent }}>
            {item.badge}
          </span>
        )}
      </div>
      {item.image && (
        <div className="relative w-full overflow-hidden rounded-xl border border-black/5">
          <Image src={item.image} alt={item.title} width={1200} height={628} className="w-full h-auto object-cover" />
        </div>
      )}
      <p className="text-[15px] leading-6 text-black/80">{item.summary}</p>
      {Array.isArray(item.tags) && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-black/[0.04] text-black/70 border border-black/10">{t}</span>
          ))}
        </div>
      )}
      {(Array.isArray(item.metrics) && item.metrics.length > 0) && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          {item.metrics.map((m, i) => (
            <Metric key={i} label={m.label} value={m.value} />
          ))}
        </div>
      )}
      {item.cta && (
        <div className="pt-2">
          <a href={item.cta.href || '#'} target={item.cta.target || '_self'} className="inline-flex items-center gap-2 px-4 h-10 rounded-full font-semibold text-sm text-black bg-black/[0.06] hover:bg-black/[0.08]">
            <span>{item.cta.label || 'View more'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
      )}
    </div>
  )
}

function ProjectCaseStudy({ project }) {
  const accent = project?.cardBgColor || '#613CEB'
  const title = project?.caseStudy?.title || `${project?.name || 'Project'}`
  const intro = project?.caseStudy?.intro || ''
  const items = Array.isArray(project?.caseStudy?.items) ? project.caseStudy.items : []
  const platforms = Array.isArray(project?.caseStudy?.platforms) ? project.caseStudy.platforms : []
  const features = Array.isArray(project?.caseStudy?.features)
    ? project.caseStudy.features
    : (Array.isArray(project?.features) ? project.features.map(f => ({ title: f, description: '' })) : [])
  const sections = Array.isArray(project?.caseStudy?.sections) ? project.caseStudy.sections : []

  const CheckBubble = () => (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: accent + '1A' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  )

  return (
    <div className="bg-white rounded-2xl">
      <div className="px-6 md:px-8 pt-8 md:pt-10">
        <div className="rounded-[28px] px-5 md:px-8 py-6 md:py-8 text-white" style={{ backgroundColor: accent }}>
          <div className="flex flex-col gap-3">
            <h3 className="text-[36px] md:text-[48px] font-extrabold leading-[1.05] tracking-tight">{title}</h3>
            {intro && <p className="text-white/90 text-lg md:text-xl">{intro}</p>}
            {platforms.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-1">
                {platforms.map((p, i) => (
                  <span key={i} className="inline-flex items-center gap-2 h-9 rounded-full bg-white/15 text-white px-3 text-sm font-semibold border border-white/20">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/80" />
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 py-6 md:py-8">
        {features.length > 0 && (
          <div className="mb-6 md:mb-8">
            <h4 className="text-black/80 font-bold text-lg md:text-xl">Features :</h4>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckBubble />
                <div>
                  <div className="font-bold text-black text-base md:text-[17px] leading-6">{f.title}</div>
                  {f.description && <p className="text-sm md:text-[13.5px] leading-6 text-black/70 max-w-[46ch]">{f.description}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              {items.map((item, idx) => (
                <CaseCard key={idx} item={item} accent={accent} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {sections.length > 0 && (
        <div className="px-6 md:px-8 pb-8 md:pb-12">
          {sections.map((sec, idx) => (
            <div key={idx} className={idx === 0 ? '' : 'mt-10 md:mt-12'}>
              {sec.heading && (
                <h4 className="text-[22px] md:text-2xl font-extrabold tracking-tight mb-3 md:mb-4" style={{ color: accent }}>{sec.heading}</h4>
              )}
              {sec.type === 'bullets' && Array.isArray(sec.items) && (
                <ol className="space-y-4 md:space-y-5 list-none">
                  {sec.items.map((it, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 h-8 w-8 md:h-9 md:w-9 rounded-full flex items-center justify-center font-extrabold text-white" style={{ backgroundColor: accent }}>{i + 1}</div>
                      <div>
                        <div className="font-bold text-black/90">{it.title}</div>
                        {it.description && (
                          <p className="text-sm md:text-[13.5px] leading-6 text-black/70 max-w-[72ch]">{it.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {(!sec.type || sec.type === 'rich') && (
                <div className="text-black/80 text-[15px] leading-7 max-w-3xl">{sec.description}</div>
              )}
              {sec.image && (
                <div className="mt-4 md:mt-6">
                  <Image src={sec.image} alt={sec.heading || 'Section image'} width={1600} height={900} className="w-full h-auto rounded-xl border border-black/5" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCaseStudy


