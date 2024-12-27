'use client'

import { useCallback } from 'react'

interface ScrollDownButtonProps {
  targetId: string
}

export function ScrollDownButton({ targetId }: ScrollDownButtonProps) {
  const handleClick = useCallback(() => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [targetId])

  return (
    <button
      onClick={handleClick}
      className="h-12 w-12 mx-auto rounded-full bg-[#6B7FD7] flex items-center justify-center transition-transform hover:translate-y-1"
      aria-label="Scroll to next section"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  )
}

