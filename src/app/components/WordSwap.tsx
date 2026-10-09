'use client'

import { useState, useEffect } from 'react'

interface WordSwapProps {
  words: string[]
  interval?: number
  className?: string
}

export function WordSwap({ words, interval = 2500, className = '' }: WordSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 400)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span
      className={`inline-block transition-all duration-400 ease-in-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-10px)'
      }}
    >
      {words[currentIndex]}
    </span>
  )
}
