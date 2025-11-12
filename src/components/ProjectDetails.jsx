import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Render a check icon with configurable fill color
const CheckIcon = ({ fill = 'white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" fill="none">
    <path d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM32.5613 20.5613L22.0613 31.0613C21.9219 31.2007 21.7565 31.3114 21.5744 31.3868C21.3923 31.4623 21.1971 31.5012 21 31.5012C20.8029 31.5012 20.6077 31.4623 20.4256 31.3868C20.2435 31.3114 20.0781 31.2007 19.9388 31.0613L15.4388 26.5613C15.1573 26.2798 14.9992 25.898 14.9992 25.5C14.9992 25.102 15.1573 24.7202 15.4388 24.4387C15.7202 24.1573 16.102 23.9992 16.5 23.9992C16.8981 23.9992 17.2798 24.1573 17.5613 24.4387L21 27.8794L30.4388 18.4387C30.5781 18.2994 30.7436 18.1888 30.9257 18.1134C31.1078 18.038 31.3029 17.9992 31.5 17.9992C31.6971 17.9992 31.8923 18.038 32.0744 18.1134C32.2564 18.1888 32.4219 18.2994 32.5613 18.4387C32.7006 18.5781 32.8112 18.7436 32.8866 18.9257C32.962 19.1077 33.0008 19.3029 33.0008 19.5C33.0008 19.6971 32.962 19.8923 32.8866 20.0743C32.8112 20.2564 32.7006 20.4219 32.5613 20.5613Z" fill={fill}/>
  </svg>
)

function ProjectDetails({ project, mode = 'page', useAccentBackground = false }) {
  const resolvedTitle = project?.detailsTitle ?? "";
  const resolvedFeatures = project?.features ?? [];
  const resolvedImage = project?.detailsImage ?? "/images/loyatri-2.webp";
  const resolvedBg = project?.cardBgColor ?? '#613CEB';
  const isModal = mode === 'modal'

  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const el = sectionRef.current
      const q = gsap.utils.selector(el)

      const mm = gsap.matchMedia()

      // Desktop/Tablet behaviors
      mm.add('(min-width: 768px)', () => {
        if (!isModal) {
          // Keep body background in sync with details section visibility (page only)
          ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            end: 'bottom 65%',
            onEnter: () => {
              gsap.to([document.documentElement, document.body], { 
                backgroundColor: resolvedBg, 
                duration: 0.8, 
                ease: 'power2.inOut',
                overwrite: true 
              })
            },
            onEnterBack: () => {
              gsap.to([document.documentElement, document.body], { 
                backgroundColor: resolvedBg, 
                duration: 0.8, 
                ease: 'power2.inOut',
                overwrite: true 
              })
            }
          })
        }

        // Hide initially
        gsap.set(el, { autoAlpha: 0, y: 40 })
        gsap.set(q('h5'), { autoAlpha: 0, y: 20 })
        gsap.set(q('li'), { autoAlpha: 0, x: -16 })
        gsap.set(q('img'), { autoAlpha: 0, y: 20 })

        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' })
            gsap.to(q('h5'), { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' })
            gsap.to(q('li'), { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' })
            gsap.to(q('img'), { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' })
          },
          onLeaveBack: () => {
            gsap.set(el, { autoAlpha: 0, y: 40 })
            gsap.set(q('h5'), { autoAlpha: 0, y: 20 })
            gsap.set(q('li'), { autoAlpha: 0, x: -16 })
            gsap.set(q('img'), { autoAlpha: 0, y: 20 })
          }
        })

        return () => {}
      })

      // Small screens: reset site background to white to avoid leaks (page only)
      mm.add('(max-width: 767.98px)', () => {
        if (!isModal) {
          gsap.set([document.documentElement, document.body], { backgroundColor: '#FFFFFF' })

          return () => {
            gsap.set([document.documentElement, document.body], { backgroundColor: '#FFFFFF' })
          }
        }
        return () => {}
      })

      return () => mm.revert()
    }, sectionRef)

    return () => ctx.revert()
  }, [resolvedBg, isModal])

  const sectionBase = isModal
    ? "text-black bg-white h-auto max-h-[80vh] overflow-auto px-6 md:px-10 pt-8 rounded-[32px]"
    : "text-white h-[520px] px-6 md:pl-20 pt-[59px] rounded-[80px] overflow-hidden relative"

  const titleClass = isModal
    ? "font-redhat text-[28px] md:text-[32px] font-medium leading-[42px] md:leading-[48px] tracking-[-0.32px] pr-2 md:pr-10"
    : "text-white font-redhat text-[32px] font-medium leading-[48px] tracking-[-0.32px] pr-6 md:pr-20"

  const featureTextClass = isModal
    ? "font-redhat text-[18px] md:text-xl font-semibold leading-[28px] md:leading-[30px] tracking-[-0.4px]"
    : "font-redhat text-xl font-bold leading-[30px] tracking-[-0.4px]"

  return (
    <section ref={sectionRef} className={sectionBase} style={!isModal && useAccentBackground ? { backgroundColor: resolvedBg } : (!isModal ? { backgroundColor: 'rgba(0,0,0,0.1)' } : {})}>
      {(!isModal && useAccentBackground) && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0, 0, 0, 0.10)' }} />
      )}
      {/* Title */}
      <h5 className={titleClass + " relative z-[1]"} style={isModal ? { color: resolvedBg } : {}}>
        {resolvedTitle}
      </h5>

      <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-10 h-full relative z-[1]">
        {/* Left side (features) */}
        <div className="flex-1 flex items-start">
          <ul className="space-y-3 md:space-y-4">
            {resolvedFeatures.map((feature, idx) => (
              <li key={idx} className={"flex items-start gap-3 md:gap-4 " + (isModal ? "text-black" : "text-white") }>
                <span className="mt-1"><CheckIcon fill={isModal ? resolvedBg : 'white'} /></span>
                <span className={featureTextClass}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side (image) */}
        <div className="flex-1 flex justify-end items-end h-full mt-6 md:mt-0">
          <Image
            src={resolvedImage}
            alt="HRMS Screen"
            width={isModal ? 380 : 400}
            height={isModal ? 760 : 800}
            className={isModal ? "rounded-xl object-contain h-auto max-h-[60vh] w-auto" : "rounded-xl object-contain h-full w-auto max-h-full"}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
