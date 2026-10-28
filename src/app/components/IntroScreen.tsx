'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface IntroScreenProps {
  onComplete: () => void
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Brand statements - chaque phrase avec un mot en accent
  const statements = [
    { 
      label: " ",
      text: "Nous créons des expériences",
      accent: "expériences"
    },
    { 
      label: "  ",
      text: "qui transforment les marques",
      accent: "transforment"
    },
    { 
      label: " ",
      text: "en Roi digitales",
      accent: "Roi"
    },
    { 
      label: " ",
      text: "Tech meets Art",
      accent: "Art"
    }
  ]

  // Empêcher le scroll pendant l'intro
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    // Timing pour chaque phrase - durée augmentée pour ~20 secondes total
    const phraseDuration = 4500 // 4.5 secondes par phrase
    const totalPhrases = statements.length
    const totalDuration = phraseDuration * totalPhrases + 2000 // +2s à la fin

    // Avancer les phrases
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => {
        if (prev < totalPhrases - 1) {
          return prev + 1
        }
        return prev
      })
    }, phraseDuration)

    // Fermer l'intro après la durée totale
    const timeout = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800) // Attendre la fin de l'animation de sortie
    }, totalDuration)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete, statements.length])

  // Fonction pour fermer l'intro
  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onComplete, 100)
  }

  // Fonction pour mettre en évidence le mot accent
  const renderTextWithAccent = (text: string, accentWord: string) => {
    const parts = text.split(accentWord)
    if (parts.length === 1) return text

    return (
      <>
        {parts[0]}
        <span className="text-[#1B5BFF] font-medium">{accentWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#191924] cursor-pointer"
          onClick={handleClose}
          style={{ pointerEvents: 'auto' }}
        >
          {/* Film Grain Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              opacity: 0.04,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Vignette Effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-4xl px-8">
            <AnimatePresence mode="wait">
              {statements.map((statement, index) => (
                index === currentPhrase && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="text-center"
                  >
                    {/* Label */}
                    <motion.div
                      initial={{ opacity: 0, letterSpacing: '0.2em' }}
                      animate={{ opacity: 0.5, letterSpacing: '0.4em' }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-[#F0EDE6] text-xs mb-8 tracking-[0.4em]"
                    >
                      {statement.label}
                    </motion.div>

                    {/* Main Statement */}
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl text-[#F0EDE6] font-light leading-tight tracking-tight"
                    >
                      {renderTextWithAccent(statement.text, statement.accent)}
                    </motion.h1>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="h-px bg-gradient-to-r from-transparent via-[#1B5BFF]/30 to-transparent mt-8 mx-auto"
                      style={{ width: '200px', transformOrigin: 'center' }}
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Progress Indicator */}
            <motion.div 
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {statements.map((_, index) => (
                <div
                  key={index}
                  className={`h-0.5 rounded-full transition-all duration-500 ${
                    index === currentPhrase 
                      ? 'w-12 bg-[#1B5BFF]' 
                      : index < currentPhrase 
                      ? 'w-6 bg-[#F0EDE6]/30' 
                      : 'w-6 bg-[#F0EDE6]/10'
                  }`}
                />
              ))}
            </motion.div>
          </div>

          {/* Click to Close Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 text-[#F0EDE6]/40 text-xs tracking-[0.3em] pointer-events-none"
          >
            <motion.span
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              CLIQUEZ N'IMPORTE OÙ POUR CONTINUER
            </motion.span>
          </motion.div>

          {/* Load Google Fonts */}
          <style dangerouslySetInnerHTML={{
            __html: `
            `
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}