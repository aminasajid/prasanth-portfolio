import React from 'react';

function Header() {
  return (
    <header className="hidden lg:block px-0 xl:px-20 pt-10 md:pt-14 pb-5 md:pb-8">
      <nav className="flex items-center justify-between gap-8" aria-label="Main navigation">
        {/* Left Menu */}
        <div className="flex gap-8 lg:gap-12 xl:gap-[53px] font-syne text-[#555] text-lg lg:text-xl font-bold tracking-[-0.4px] lg:tracking-[-0.64px]">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <a href="#works" className="hover:text-black transition-colors">Works</a>
        </div>

        {/* Center Title */}
        <h1 className="text-black text-lg lg:text-xl font-bold tracking-[0.8px] lg:tracking-[1.2px] whitespace-nowrap">
          UI UX DESIGNER
        </h1>

        {/* Right Menu */}
        <div className="flex gap-8 lg:gap-12 xl:gap-[53px] font-syne text-[#555] text-lg lg:text-xl font-bold tracking-[-0.4px] lg:tracking-[-0.64px]">
          <a href="#service" className="hover:text-black transition-colors">Service</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
