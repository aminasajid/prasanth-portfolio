import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ✅ Check icon
const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM32.5613 20.5613L22.0613 31.0613C21.9219 31.2007 21.7565 31.3114 21.5744 31.3868C21.3923 31.4623 21.1971 31.5012 21 31.5012C20.8029 31.5012 20.6077 31.4623 20.4256 31.3868C20.2435 31.3114 20.0781 31.2007 19.9388 31.0613L15.4388 26.5613C15.1573 26.2798 14.9992 25.898 14.9992 25.5C14.9992 25.102 15.1573 24.7202 15.4388 24.4387C15.7202 24.1573 16.102 23.9992 16.5 23.9992C16.8981 23.9992 17.2798 24.1573 17.5613 24.4387L21 27.8794L30.4388 18.4387C30.5781 18.2994 30.7436 18.1888 30.9257 18.1134C31.1078 18.038 31.3029 17.9992 31.5 17.9992C31.6971 17.9992 31.8923 18.038 32.0744 18.1134C32.2564 18.1888 32.4219 18.2994 32.5613 18.4387C32.7006 18.5781 32.8112 18.7436 32.8866 18.9257C32.962 19.1077 33.0008 19.3029 33.0008 19.5C33.0008 19.6971 32.962 19.8923 32.8866 20.0743C32.8112 20.2564 32.7006 20.4219 32.5613 20.5613Z" fill="white"/>
  </svg>
);

function ProjectDetails({ project }) {
  const resolvedTitle = project?.detailsTitle ?? "";
  const resolvedFeatures = project?.features ?? [];
  const resolvedImage = project?.detailsImage ?? "/images/loyatri-2.webp";
  const resolvedBg = project?.cardBgColor ?? '#613CEB';

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
      const el = sectionRef.current
      const q = gsap.utils.selector(el)

      // Keep body background in sync with details section visibility
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        end: 'bottom 60%',
        onEnter: () => {
          gsap.to([document.documentElement, document.body], { backgroundColor: resolvedBg, duration: 0.6, ease: 'power2.out' })
        },
        onEnterBack: () => {
          gsap.to([document.documentElement, document.body], { backgroundColor: resolvedBg, duration: 0.6, ease: 'power2.out' })
        },
        onLeaveBack: () => {
          // allow previous section to restore its color
        }
      })

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
    }, sectionRef)

    return () => ctx.revert()
  }, [resolvedBg])

  return (
    <section ref={sectionRef} className="text-white h-[638px] px-6 md:pl-20 pt-[59px] rounded-[80px] bg-[rgba(0,0,0,0.1)] overflow-hidden">
      {/* Title */}
      <h5 className="text-white font-redhat text-[32px] font-medium leading-[48px] tracking-[-0.32px] pr-6 md:pr-20">
        {resolvedTitle}
      </h5>

      <div className="flex flex-col md:flex-row justify-between items-start mt-10 h-full">
        {/* Left side (features) */}
        <div className="flex-1 flex items-center">
          <ul className="space-y-4">
            {resolvedFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4 text-white  text-xl font-bold  leading-[30px]">
                <span>{checkIcon}</span>
                <span className='font-redhat text-xl font-bold leading-[30px] tracking-[-0.4px]'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side (image) */}
        <div className="flex-1 flex justify-end items-end h-full">
          <Image
            src={resolvedImage}
            alt="HRMS Screen"
            width={400}
            height={800}
            className="rounded-xl object-contain h-full w-auto max-h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
