'use client'

import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { VentureStudio } from './components/VentureStudio'
import { EStudio } from './components/EStudio'
import { Blog } from './components/Blog'
import { ArticleDetail } from './components/ArticleDetail'
import { Work } from './components/Work'
import { QuotePage } from './components/QuotePage'
import { DesignService } from './components/services/DesignService'
import { AnimationService } from './components/services/AnimationService'
import { SoftwareService } from './components/services/SoftwareService'
import { AIBlockchainService } from './components/services/AIBlockchainService'
import { AnalyticsService } from './components/services/AnalyticsService'
import { Footer } from './components/Footer'
import { IntroScreen } from './components/IntroScreen'
import { EroCore } from './components/EroCore'

type Page =
  | 'home' | 'studio' | 'estudio' | 'blog' | 'work' | 'quote' | 'erocore'
  | 'design' | 'animation' | 'software' | 'ai-blockchain' | 'analytics'
  | 'article'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [currentArticleId, setCurrentArticleId] = useState<number | null>(null)
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const introSeen = localStorage.getItem('introSeen')
    if (introSeen === 'true') {
      setShowIntro(false)
      setIntroComplete(true)
    }
  }, [])

  const handleIntroComplete = () => {
    setIntroComplete(true)
    localStorage.setItem('introSeen', 'true')
  }

  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  // Global scroll-reveal for [data-reveal] elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
        }
      }),
      { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    )
    const attach = () => {
      document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    }
    attach()
    // Re-attach on page changes
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { observer.disconnect(); mo.disconnect() }
  }, [])

  const handleArticleClick = (articleId: number) => {
    setCurrentArticleId(articleId)
    setCurrentPage('article')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePageChange = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Intro Screen */}
      {showIntro && !introComplete && (
        <IntroScreen onComplete={handleIntroComplete} />
      )}

      {/* Header */}
      <Header
        isDark={true}
        onThemeToggle={() => {}}
        currentPage={currentPage as any}
        onPageChange={handlePageChange as any}
      />

      {/* Main content */}
      <main className="relative">
        {currentPage === 'home' && (
          <Home
            onServiceClick={(service) => handlePageChange(service as Page)}
            onNavigateToWork={() => handlePageChange('work')}
            onNavigateToBlog={() => handlePageChange('blog')}
            onArticleClick={handleArticleClick}
          />
        )}
        {currentPage === 'studio' && (
          <VentureStudio onNavigateToQuote={() => handlePageChange('quote')} />
        )}
        {currentPage === 'estudio' && <EStudio onNavigateToQuote={() => handlePageChange('quote')} />}
        {currentPage === 'blog' && (
          <Blog onArticleClick={handleArticleClick} />
        )}
        {currentPage === 'article' && currentArticleId !== null && (
          <ArticleDetail
            articleId={currentArticleId}
            onBack={() => handlePageChange('blog')}
          />
        )}
        {currentPage === 'work' && (
          <Work onNavigateToContact={() => handlePageChange('quote')} />
        )}
        {currentPage === 'quote' && <QuotePage />}
        {currentPage === 'erocore' && (
          <EroCore onNavigateToQuote={() => handlePageChange('quote')} />
        )}
        {currentPage === 'design' && (
          <DesignService onNavigate={(s) => handlePageChange(s as Page)} />
        )}
        {currentPage === 'animation' && (
          <AnimationService onNavigate={(s) => handlePageChange(s as Page)} />
        )}
        {currentPage === 'software' && (
          <SoftwareService onNavigate={(s) => handlePageChange(s as Page)} />
        )}
        {currentPage === 'ai-blockchain' && (
          <AIBlockchainService onNavigate={(s) => handlePageChange(s as Page)} />
        )}
        {currentPage === 'analytics' && (
          <AnalyticsService onNavigate={(s) => handlePageChange(s as Page)} />
        )}
      </main>

      {/* Footer */}
      <Footer onPageChange={handlePageChange as any} />

      <style dangerouslySetInnerHTML={{
        __html: `
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        html, body {
          font-family: 'Inter', system-ui, sans-serif;
        }

        h1, h2 {
          font-weight: 700;
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #191924; }
        ::-webkit-scrollbar-thumb { background: #2a2a3a; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #1B5BFF; }

        /* Global scroll-reveal for non-home pages */
        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 600ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Smooth page entry */
        main > * {
          animation: pageEnter 500ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes pageEnter {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
        `
      }} />
    </div>
  )
}
