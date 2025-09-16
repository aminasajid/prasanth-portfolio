import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function ProjectCard({ project, imageSrc, bgColor = '#613CEB', linkText = 'Get a Sneak Peek', linkHref = '#', isVisible }) {
  const resolvedBg = project?.cardBgColor ?? bgColor;
  const resolvedImage = project?.cardImage ?? imageSrc ?? "/images/Loyatri.webp";
  const resolvedName = project?.name ?? 'LOYALTRI';
  const resolvedHeadline = project?.headline ?? 'Designed By HR for HR';
  const resolvedSubheading = project?.subheading ?? 'Core HRMS Platform';
  const resolvedLinkText = project?.linkText ?? linkText;
  const resolvedLinkHref = project?.linkHref ?? linkHref;

  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger)

    // Disable background/scroll effects on small screens
    const isDesktopOrTablet = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktopOrTablet) {
      return;
    }

    const ctx = gsap.context(() => {
      const sectionEl = sectionRef.current
      const q = gsap.utils.selector(sectionEl)

      // Initial state: hidden
      gsap.set(sectionEl, { autoAlpha: 0, y: 40 })
      gsap.set(q('h3, h2, p, a'), { autoAlpha: 0, y: 20 })

      // Background transition for the whole screen tied to this card visibility
      ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 90%',
        end: 'bottom 60%',
        onEnter: () => {
          gsap.to([document.documentElement, document.body], {
            backgroundColor: resolvedBg,
            duration: 0.6,
            ease: 'power2.out'
          })
        },
        onEnterBack: () => {
          gsap.to([document.documentElement, document.body], {
            backgroundColor: resolvedBg,
            duration: 0.6,
            ease: 'power2.out'
          })
        },
        onLeaveBack: () => {
          // When scrolling back above the card, let previous section (banner or prior card) own the color
          // Do nothing; Banner's trigger will re-apply its color
        }
      })

      // Reveal card when it enters viewport
      ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(sectionEl, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' })
          gsap.to(q('h3, h2, p, a'), { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.1, ease: 'power3.out' })
        },
        // ensure it hides when scrolling back up
        onLeaveBack: () => {
          gsap.set(sectionEl, { autoAlpha: 0, y: 40 })
          gsap.set(q('h3, h2, p, a'), { autoAlpha: 0, y: 20 })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [resolvedBg])

  return (
    <>

<section ref={sectionRef} className="text-white h-[555px] px-6 md:px-20 rounded-[80px] relative overflow-hidden will-change-transform" style={{ backgroundColor: resolvedBg }} data-bg-color={resolvedBg}>
  <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-20 h-full">

    {/* Left Side - Image */}
    <div className="flex-shrink-0 flex items-end h-full transition-base" style={{ transformOrigin: 'bottom center' }}>
      <Image
        src={resolvedImage}
        alt="HRMS Screen 1"
        width={400}
        height={800}
        className="rounded-xl object-contain"
      />
    </div>

    {/* Right Side - Text */}
    <div className="flex flex-col justify-center gap-6 text-center lg:text-left max-w-xl h-full will-change-transform">
      <h3 className='text-white font-bold text-[40px] leading-[100%] tracking-[-2px]'>{resolvedName}</h3>
      <h2 className='text-[rgba(0,0,0,0.6)] text-[80px] font-bold leading-[110%] tracking-[-4px]'>{resolvedHeadline}</h2>
      <p className='text-[rgba(0,0,0,0.6)] font-kamerik text-[40px] font-bold leading-[100%] tracking-[-1.2px]'>{resolvedSubheading}</p>

      <a
        href={resolvedLinkHref}
        className="flex flex-row items-center py-3 pl-6 pr-4 bg-white rounded-[66px] h-[64px] w-fit transition-base"
        style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)'; }}
      >
        <span className='text-black text-xl font-bold leading-[100%] tracking-[-0.6px]'>{resolvedLinkText}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="black" />
        </svg>
      </a>
    </div>
  </div>
</section>


    </>
  )
}

export default ProjectCard
