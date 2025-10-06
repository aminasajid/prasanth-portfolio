import React from 'react'

function Pill({ icon, label, accent = '#613CEB' }) {
  return (
    <div className="pl-4 pr-6 py-2.5 rounded-[32px] inline-flex justify-center items-center gap-1" style={{ backgroundColor: accent + '14' }}>
      <div className="w-8 h-8 relative overflow-hidden">
        {icon}
      </div>
      <div className="justify-start text-black text-base font-normal leading-normal">{label}</div>
    </div>
  )
}

export default Pill


