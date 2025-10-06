"use client";

import React, { useEffect } from 'react'

function BaseModal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKeyDown)

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-100 animate-[fadeIn_200ms_ease-out]"
        onClick={() => onClose?.()}
      />

      <div className="relative w-full max-w-9xl px-3 md:px-4 opacity-100 animate-[slideUp_220ms_ease-out] max-h-[90vh] overflow-y-auto">
        <div className="relative rounded-[40px] md:rounded-[56px] overflow-hidden shadow-2xl">
          {children}
          <button
            type="button"
            aria-label="Close"
            onClick={() => onClose?.()}
            className="absolute top-3 right-3 md:top-4 md:right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow hover:bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BaseModal


