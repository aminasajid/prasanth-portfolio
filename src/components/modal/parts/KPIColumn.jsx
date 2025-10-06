import React from 'react'

function KPIColumn({ title, rows }) {
  return (
    <div className="flex-1 min-w-[200px] rounded-3xl outline outline-offset-[-1px] outline-[#e8e8e8] inline-flex flex-col justify-start items-start overflow-hidden">
      <div className="self-stretch h-24 px-[30px] py-10 border-b border-[#cdcdcd] inline-flex justify-center items-start gap-4">
        <div className="text-black text-[22.86px] font-medium leading-7">{title}</div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start">
        {rows.map((r, i) => (
          <div key={i} className="self-stretch h-20 px-[30px] border-b-[0.50px] border-[#e8e8e8] inline-flex justify-start items-center gap-2">
            <div className="text-black text-base leading-snug">{r}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KPIColumn


