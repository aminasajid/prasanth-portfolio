import React from 'react'

import Pill from './parts/Pill'
import FeatureRow from './parts/FeatureRow'
import NumberedProblem from './parts/NumberedProblem'
import KPIColumn from './parts/KPIColumn'
import SolutionsGrid from './parts/SolutionsGrid'
import ResultsTable from './parts/ResultsTable'
import TestimonialsSection from './parts/TestimonialsSection'
import InsightsList from './parts/InsightsList'
import KeyFeatures from './parts/KeyFeatures'
import WireframeStyle1 from './parts/WireframeStyle1'
import WireframeStyle2 from './parts/WireframeStyle2'
import WireframeStyle3 from './parts/WireframeStyle3'

function CaseStudyModal({ project }) {
  const accent = project?.caseStudy?.accent || project?.cardBgColor || '#613CEB'
  const title = project?.caseStudy?.title || project?.name || 'Project'
  const intro = project?.caseStudy?.intro || ''
  const features = Array.isArray(project?.caseStudy?.features)
    ? project.caseStudy.features
    : (Array.isArray(project?.features) ? project.features.map(f => ({ title: f, description: '' })) : [])
  const results = project?.caseStudy?.results
  const platforms = Array.isArray(project?.caseStudy?.platforms) ? project.caseStudy.platforms : []
  const solutions = Array.isArray(project?.caseStudy?.solutions) ? project.caseStudy.solutions : []
  const testimonials = Array.isArray(project?.caseStudy?.testimonials) ? project.caseStudy.testimonials : []
  const testimonialsConfig = project?.caseStudy?.testimonialsConfig || {}
  const insights = Array.isArray(project?.caseStudy?.insights?.items) ? project.caseStudy.insights.items : []
  const insightsTitle = project?.caseStudy?.insights?.title || 'Insights'
  const insightsSubtitle = project?.caseStudy?.insights?.subtitle || 'Key takeaways'
  const keyFeatures = Array.isArray(project?.caseStudy?.keyFeatures?.items) ? project.caseStudy.keyFeatures.items : []
  const keyFeaturesTitle = project?.caseStudy?.keyFeatures?.title || 'Key Features That Made the'
  const keyFeaturesSubtitle = project?.caseStudy?.keyFeatures?.subtitle || 'Difference'
  const wireframes = project?.caseStudy?.wireframes || null

  return (
    <section className="p-6 md:p-10" style={{ backgroundColor: accent }}>
      <div className="bg-white rounded-[32px] md:rounded-[80px] px-6 md:px-20 py-10 md:py-[100px]">
        <div>
          <h1 className="text-[32px] md:text-8xl font-bold leading-tight" style={{ color: accent }}>{title}</h1>
          {intro && (
            <h2 className="text-[22px] md:text-[40px] font-bold leading-10 mt-3 md:mt-6" style={{ color: accent }}>{intro}</h2>
          )}
        </div>

        {platforms.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12 mt-6">
            {platforms.map((p, i) => (
              <Pill 
                key={i} 
                accent={accent} 
                label={typeof p === 'string' ? p : p.label} 
                icon={typeof p === 'string' ? null : p.icon} 
              />
            ))}
          </div>
        )}

        {project?.detailsTitle && (
          <p className="text-black text-xl md:text-2xl leading-9">{project.detailsTitle}</p>
        )}

        {features.length > 0 && (
          <div className="mt-12">
            <p className="text-black text-2xl leading-9 mb-6">Features :</p>
            <div className='flex flex-col gap-6'>
              {features.map((f, i) => (
                <FeatureRow key={i} title={f.title || f} description={f.description} subtitle={f.subtitle} items={f.items} accent={accent} />
              ))}
            </div>
          </div>
        )}

        {Array.isArray(project?.caseStudy?.sections) && project.caseStudy.sections.length > 0 && (
          <div className='mt-16'>
            {project.caseStudy.sections.map((sec, idx) => (
              <div key={idx} className={idx === 0 ? '' : 'mt-10'}>
                {(() => {
                  const heading = sec.heading || ''
                  const words = heading.split(/\s+/)
                  const first = words.shift() || ''
                  const rest = words.join(' ')
                  return (
                    <>
                      <h3 className="text-black/60 text-2xl font-bold leading-9">{first}</h3>
                      <h3 className="text-4xl md:text-5xl font-bold leading-[48px]" style={{ color: accent }}>{rest || heading}</h3>
                      {sec.subtitle && (
                        <p className="mt-2 text-black/80 text-base leading-7 max-w-3xl">{sec.subtitle}</p>
                      )}
                    </>
                  )
                })()}
                {sec.type === 'bullets' && Array.isArray(sec.items) && (
                  <div className="mt-6">
                    <div className="self-stretch inline-flex flex-col justify-start items-start gap-6">
                      {sec.items.map((it, i) => (
                        <NumberedProblem key={i} index={i + 1} title={it.title} description={it.description} />
                      ))}
                    </div>
                  </div>
                )}
                {(!sec.type || sec.type === 'rich') && sec.description && (
                  <div className="mt-4 text-black/80 text-[15px] leading-7 max-w-3xl">{sec.description}</div>
                )}
              </div>
            ))}
          </div>
        )}

        <SolutionsGrid solutions={solutions} accent={accent} />
        {project?.caseStudy?.kpis && (
          <div className='mt-16'>
            <div className="w-full rounded-[20px] inline-flex justify-start items-start overflow-hidden gap-4 flex-wrap">
              <KPIColumn title="KPI" rows={(project.caseStudy.kpis.headers || [])} />
              <KPIColumn title="Before" rows={(project.caseStudy.kpis.before || [])} />
              <KPIColumn title="After" rows={(project.caseStudy.kpis.after || [])} />
              <KPIColumn title="Improvement" rows={(project.caseStudy.kpis.improvement || [])} />
            </div>
          </div>
        )}

        <ResultsTable results={results} accent={accent} />

        <TestimonialsSection items={testimonials} accent={accent} config={testimonialsConfig} />
        <KeyFeatures title={keyFeaturesTitle} subtitle={keyFeaturesSubtitle} items={keyFeatures} accent={accent} />
        <InsightsList title={insightsTitle} subtitle={insightsSubtitle} items={insights} accent={accent} />
        
        {/* Wireframes Section - Different styles for each project */}
        {wireframes && wireframes.style === 'style1' && (
          <WireframeStyle1 
            title={wireframes.title}
            subtitle={wireframes.subtitle}
            images={wireframes.images}
            bgColor={wireframes.bgColor || accent}
          />
        )}
        {wireframes && wireframes.style === 'style2' && (
          <WireframeStyle2 
            title={wireframes.title}
            subtitle={wireframes.subtitle}
            images={wireframes.images}
            bgColor={wireframes.bgColor || accent}
          />
        )}
        {wireframes && wireframes.style === 'style3' && (
          <WireframeStyle3 
            title={wireframes.title}
            subtitle={wireframes.subtitle}
            images={wireframes.images}
            bgColor={wireframes.bgColor || accent}
          />
        )}
      </div>
    </section>
  )
}

export default CaseStudyModal


