import React from 'react'

function NumberedProblem({ index, title, description }) {
  return (
    <div className="self-stretch inline-flex justify-start items-center gap-3">
      <div className="w-16 text-center text-black/20 text-8xl font-bold leading-[81.60px]">{index}</div>
      <div className="inline-flex flex-col justify-center items-start gap-1">
        <div className="text-black text-2xl font-bold leading-9">{title}</div>
        {description && <div className="text-black text-base leading-normal">{description}</div>}
      </div>
    </div>
  )
}

export default NumberedProblem


