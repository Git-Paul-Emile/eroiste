'use client'

import { useEffect, useRef } from 'react'
import { HeroSlider } from './HeroSlider'
import { Clients } from './Clients'
import { Expertise } from './Expertise'
import { ToolsScroll } from './ToolsScroll'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'

interface HomeProps {
  onServiceClick: (service: string) => void
  onNavigateToWork: () => void
  onNavigateToBlog?: () => void
  onArticleClick?: (articleId: number) => void
}

function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.transform = `translateY(${centerY * speed}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])
  return ref
}

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-visible')
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} id={id} className="section-reveal">
      {children}
    </div>
  )
}

export function Home({
  onServiceClick,
  onNavigateToWork,
  onNavigateToBlog,
  onArticleClick,
}: HomeProps & { onNavigateToQuote?: () => void }) {
  return (
    <>
      <HeroSlider />

      <Section id="clients">
        <Clients />
      </Section>

      <Section id="expertise">
        <Expertise onServiceClick={onServiceClick} />
      </Section>

      <Section id="tools">
        <ToolsScroll />
      </Section>

      <Section id="manifeste">
        <Portfolio
          onNavigateToWork={onNavigateToBlog || onNavigateToWork}
          onArticleClick={onArticleClick}
        />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <style dangerouslySetInnerHTML={{
        __html: `
          .section-reveal {
            opacity: 0;
            transform: translateY(28px);
            transition:
              opacity 650ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform, opacity;
          }
          .section-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `
      }} />
    </>
  )
}
