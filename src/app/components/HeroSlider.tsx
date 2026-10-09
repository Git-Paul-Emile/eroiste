'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const slides = [
  {
    id: 0,
    title: "Concevoir l'Afrique de demain.",
    tag: "Design & Expérience Digitale",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=90",
  },
  {
    id: 1,
    title: "Système d'abord, IA ensuite.",
    tag: "Stratégie & Transformation",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=90",
  },
  {
    id: 2,
    title: "Une marque qui ne se voit pas.",
    tag: "Brand & Direction Artistique",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=90",
  },
  {
    id: 3,
    title: "Des systèmes qui tiennent la charge.",
    tag: "Ingénierie & Technologie",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=90",
  },
  {
    id: 4,
    title: "Bâtir les réseaux numériques africains.",
    tag: "Cybersécurité & Résilience",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=90",
  },
]

const N = slides.length
const VISIBLE = 2       // cards shown on each side of center
const CARD_W = 240
const CARD_H = 370
const SPREAD = 230      // horizontal gap between card centers
const TILT = 42         // rotateY degrees per step
const SCALE_DECAY = 0.14
const Z_DECAY = 85
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const DURATION = 1050

/** Shortest circular offset from active to slide i */
function circularOffset(i: number, active: number): number {
  let d = i - active
  while (d > Math.floor(N / 2)) d -= N
  while (d < -Math.ceil(N / 2)) d += N
  return d
}

function getStyle(offset: number) {
  const abs = Math.abs(offset)
  const scale = Math.max(0.15, 1 - abs * SCALE_DECAY)
  const rotateY = -offset * TILT
  const translateX = offset * SPREAD
  const translateZ = -abs * Z_DECAY
  const opacity = abs > VISIBLE ? 0 : Math.max(0, 1 - abs * 0.27)
  return { scale, rotateY, translateX, translateZ, opacity }
}

interface HeroSliderProps {
  onNavigateToQuote?: () => void
}

export function HeroSlider({ onNavigateToQuote }: HeroSliderProps = {}) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [noTransition, setNoTransition] = useState<Set<number>>(new Set())
  const isAnimating = useRef(false)
  const prevActive = useRef(0)
  const dragStartX = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const go = useCallback((delta: number) => {
    if (isAnimating.current) return
    isAnimating.current = true

    const prev = prevActive.current
    const next = ((prev + delta) % N + N) % N

    // Detect slides that need to teleport (offset jump > 1 due to wrap)
    const teleport = new Set<number>()
    slides.forEach((_, i) => {
      const oldOff = circularOffset(i, prev)
      const newOff = circularOffset(i, next)
      if (Math.abs(newOff - oldOff) > 1) teleport.add(i)
    })

    if (teleport.size > 0) {
      setNoTransition(teleport)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setNoTransition(new Set()))
      )
    }

    prevActive.current = next
    setActive(next)
    setTimeout(() => { isAnimating.current = false }, DURATION + 100)
  }, [])

  // Autoplay
  useEffect(() => {
    if (isPaused) return
    const t = setTimeout(() => go(1), 4000)
    return () => clearTimeout(t)
  }, [active, isPaused, go])

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const onPointerDown = (e: React.PointerEvent) => { dragStartX.current = e.clientX }
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return
    const dx = e.clientX - dragStartX.current
    dragStartX.current = null
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
  }
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
  }

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000', userSelect: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,91,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* 3D stage — upper portion */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{
          perspective: '1100px',
          perspectiveOrigin: '50% 50%',
          width: '100%',
          height: CARD_H + 60,
          marginTop: '6vh',
        }}
      >
        {/* Card anchor — all cards are absolutely positioned relative to this */}
        <div style={{ position: 'relative', width: CARD_W, height: CARD_H }}>
          {slides.map((slide, i) => {
            const offset = circularOffset(i, active)
            const { scale, rotateY, translateX, translateZ, opacity } = getStyle(offset)
            const zIndex = 10 - Math.abs(offset)
            const suppressed = noTransition.has(i)
            const isCenter = offset === 0

            return (
              <div
                key={slide.id}
                onClick={() => {
                  if (offset !== 0 && !isAnimating.current) {
                    go(offset > 0 ? 1 : -1)
                  }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: CARD_W,
                  height: CARD_H,
                  borderRadius: 26,
                  overflow: 'hidden',
                  zIndex,
                  opacity,
                  cursor: offset !== 0 ? 'pointer' : 'default',
                  transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
                  transition: suppressed
                    ? 'none'
                    : `transform ${DURATION}ms ${EASING}, opacity ${DURATION}ms ${EASING}`,
                  willChange: 'transform, opacity',
                  boxShadow: isCenter
                    ? '0 40px 120px rgba(0,0,0,0.95), 0 0 0 0.5px rgba(255,255,255,0.06)'
                    : '0 20px 60px rgba(0,0,0,0.7)',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    pointerEvents: 'none',
                  }}
                />
                {/* Bottom text gradient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px 18px 18px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                  }}
                >
                  <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 9,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: 5,
                    fontFamily: 'JetBrains Mono, monospace',
                  }}>
                    {slide.tag}
                  </p>
                  <h3 style={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.35,
                    fontFamily: 'Inter, sans-serif',
                    margin: 0,
                  }}>
                    {slide.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom bar — title left, dots right */}
      <div
        className="relative z-10 w-full flex items-end justify-between mt-10 mb-10"
        style={{
          maxWidth: 1100,
          padding: '0 32px',
          gap: 24,
        }}
      >
        {/* Title — left, editorial */}
        <h1
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(26px, 3.6vw, 52px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            margin: 0,
            flex: 1,
          }}
        >
          Concevoir & construire<br />
          les organisations{' '}
          <span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}>
            africaines de demain
          </span>
        </h1>

        {/* Dots — right, vertically centered with title */}
        <div className="flex items-center gap-2 flex-shrink-0 pb-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = circularOffset(i, active)
                if (diff !== 0) go(diff)
              }}
              style={{
                height: 2,
                width: i === active ? 32 : 12,
                background: i === active ? '#fff' : 'rgba(255,255,255,0.22)',
                border: 'none',
                borderRadius: 2,
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
