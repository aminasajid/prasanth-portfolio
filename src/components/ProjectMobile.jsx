import React from 'react'
import Image from 'next/image'


// ✅ Check icon
const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z" fill="white"/>
</svg>
  );

function ProjectMobile({ project }) {
  const name = project?.name ?? ''
  const headline = project?.headline ?? ''
  const subheading = project?.subheading ?? ''
  const title = project?.detailsTitle ?? ''
  const features = project?.features ?? []
  const image = project?.cardImage ?? '/images/Loyatri.webp'
  const bg = project?.cardBgColor ?? '#613CEB'
  const resolvedLinkText = project?.linkText ?? 'Get a Sneak Peek';
  const resolvedLinkHref = project?.linkHref ?? '#';

  return (
    <section className="text-white overflow-hidden will-change-transform animate-fade-in">
      <div className="w-[80%] mx-auto will-change-transform animate-fade-up">
        <Image
          src={image}
          alt={name}
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="px-3 pt-[45px] pb-1 space-y-3 rounded-[48px] will-change-transform animate-fade-up"  style={{ backgroundColor: bg }}>
        <h3 className="text-white font-bold text-[32px] leading-[32px] tracking-[-0.96px]">{name}</h3>
        <h2 className="text-[rgba(0,0,0,0.6)] text-[40px] font-bold leading-[110%] tracking-[-2px]">{headline}</h2>
        <p className="text-[rgba(0,0,0,0.6)] font-kamerik text-2xl font-bold leading-[100%] tracking-[-.48px]">{subheading}</p>

        {title ? (
          <h5 className="mt-4 text-white text-base font-medium leading-6 tracking-[-0.08px]">{title}</h5>
        ) : null}

        {Array.isArray(features) && features.length > 0 ? (
          <ul className="mt-2 space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-white text-base font-semibold">
                <span>{checkIcon}</span>
                <span className='font-redhat font-base font-bold leading-6 tracking-[-0.32px]'>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}
           <a
        href={resolvedLinkHref}
        className="flex flex-row items-center gap-1 justify-center py-3 pl-6 pr-4 bg-white rounded-[66px] h-[64px] w-full"
      >
        <span className='text-black text-lg font-bold leading-[100%] tracking-[-0.54px]'>{resolvedLinkText}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="black" />
        </svg>
      </a>
      </div>
    </section>
  )
}

export default ProjectMobile


