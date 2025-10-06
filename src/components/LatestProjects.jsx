import Image from 'next/image';
import React from 'react';

export default function LatestProjects() {
  return (
    <section className="w-full">
      {/* Projects Grid */}
      <div className="flex flex-col lg:flex-row  lg:h-[700px] gap-6 lg:gap-7 my-12 md:my-20">
        {/* Left Section - Veeble.com */}
        <article className="flex-1 rounded-[32px] lg:rounded-[48px] bg-[#1B7DDE] p-6 md:p-8 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div>
              <p className="text-white text-xl md:text-2xl font-medium leading-7 md:leading-9">
                Veeble.com
              </p>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[62.40px] mt-2">
                Hosting Made<br />Simple
              </h2>
            </div>
            <a 
              href="https://veeble.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 flex-shrink-0 hover:bg-white/30 transition-colors cursor-pointer"
              aria-label="Visit Veeble.com"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Website Preview - Aligned Left */}
          <div className="flex-1 flex items-end justify-start -ml-6 md:-ml-8 -mb-6 md:-mb-8">
            <Image
              src="/images/veeble.webp"
              alt="Veeble hosting platform"
              width={621}
              height={747}
              className="rounded-xl object-contain w-[85%] max-w-md lg:max-w-[500px]"
            />
          </div>
        </article>

        {/* Right Section - Extravelmoney.com */}
        <article className="flex-1 rounded-[32px] lg:rounded-[48px] bg-[linear-gradient(329deg,#0E51A0_-43.1%,#E31D1C_144.49%)] p-6 md:p-8 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div>
              <p className="text-white/80 text-sm md:text-base mb-2">
                Extravelmoney.com
              </p>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Forex and<br />Money Transfer<br />Easy with more<br />Savings
              </h2>
            </div>
            <a 
              href="https://extravelmoney.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 flex-shrink-0 hover:bg-white/30 transition-colors cursor-pointer"
              aria-label="Visit Extravelmoney.com"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Website Preview - Aligned Right */}
          <div className="flex-1 flex items-end justify-end -mr-6 md:-mr-8 -mb-6 md:-mb-8">
            <Image
              src="/images/extravelmoney.WEBP"
              alt="Extravelmoney forex platform"
              width={621}
              height={747}
              className="rounded-xl object-contain w-[85%] max-w-md lg:max-w-[500px]"
            />
          </div>
        </article>
      </div>

      {/* Call to Action */}
      <div className='mb-16 md:mb-24 px-4'>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-redhat text-center font-bold tracking-[-1.44px] 
                 bg-[linear-gradient(184deg,#000_-115.82%,rgba(0,0,0,0)_120.96%)] 
                 bg-clip-text text-transparent">
          Want more? Hit me up for a sneak peek!
        </h3>
      </div>
    </section>
  );
}