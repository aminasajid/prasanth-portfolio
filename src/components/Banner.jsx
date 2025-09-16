"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Banner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    const neutralBg = '#F0F0F0';

    // Do not override page background on mount; keep default white so banner looks separate
    // Disable background transitions on small screens (mobile)
    const isDesktopOrTablet = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktopOrTablet) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom 85%',
      onEnter: () => {
        // When banner is in view, restore page background to white so banner stands out
        gsap.to([document.documentElement, document.body], { backgroundColor: '#FFFFFF', duration: 0.5, ease: 'power2.out' });
      },
      onEnterBack: () => {
        gsap.to([document.documentElement, document.body], { backgroundColor: '#FFFFFF', duration: 0.5, ease: 'power2.out' });
      },
      onLeave: () => {
        // no-op; other sections will take over
      },
      onLeaveBack: () => {
        // When fully scrolled back above banner, keep page background white
        gsap.to([document.documentElement, document.body], { backgroundColor: '#FFFFFF', duration: 0.5, ease: 'power2.out' });
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F0F0F0] px-3 md:px-20 rounded-[30px] overflow-hidden flex flex-col justify-between will-change-transform animate-fade-in">
      {/* Top Content */}
      <div className="pt-8 lg:pt-24 z-10 relative will-change-transform animate-fade-up">
        <span className="text-[#555] text-xl font-bold uppercase block mb-4">
          Nothing Is Perfect, So
        </span>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-10">
          <div className="text-black text-[48px]  md:text-[82px] font-bold tracking-[-2.56px] md:tracking-[-3.28px] leading-16 md:leading-normal">
            Innovate.
          </div>
          <div className="text-black text-[48px] md:text-[82px] font-bold tracking-[-2.56px] md:tracking-[-3.28px] leading-16 md:leading-normal">
            Iterate.
          </div>
          <div className="bg-black w-fit text-white pl-5 pr-10 rounded-2xl text-[48px] md:text-[82px] font-bold tracking-[-2px] md:tracking-[-3.28px] leading-16 md:leading-normal">
            Inspire.
          </div>
        </div>
      </div>

      {/* PRASANTH block with controlled vertical spacing */}
      <div className="relative w-full  pt-[40px] md:pt-[80px] bottom-0 md:bottom-[-70px] z-0 will-change-transform animate-fade-up" style={{ animationDelay: '120ms' }}>
        <span className="text-[#667085] text-sm md:text-xl font-bold uppercase tracking-[0.8px] block mb-2">
        Hey,I AM
        </span>

        <div className="text-black text-[56px] md:text-[210px] font-bold leading-[50px] md:leading-[189px] tracking-[2.24px] md:tracking-[-8.4px] whitespace-nowrap">
          PRASANTH
        </div>
      </div>

      {/* Spacer only if needed for extra breathing room */}
      <div className='py-[10px]'></div>
    </section>
  );
}

export default Banner;
