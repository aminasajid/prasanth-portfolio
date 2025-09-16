import React from 'react';

function Header() {
  return (
    <header className="hidden lg:block px-4 md:px-[100px] pt-[40px] md:pt-[57px] pb-[20px] md:pb-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Left Menu */}
        <div className="flex gap-[30px] md:gap-[53px] font-syne text-[#555] text-base md:text-xl font-bold tracking-[-0.4px] md:tracking-[-0.64px]">
          <p>Home</p>
          <p>Works</p>
        </div>

        {/* Center Title */}
        <div className="text-black text-[16px] md:text-[20px] font-bold tracking-[0.8px] md:tracking-[1.2px]">
          UI UX DESIGNER
        </div>

        {/* Right Menu */}
        <div className="flex gap-[30px] md:gap-[53px] font-syne text-[#555] text-base md:text-xl font-bold tracking-[-0.4px] md:tracking-[-0.64px]">
          <p>Service</p>
          <p>Contact</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
