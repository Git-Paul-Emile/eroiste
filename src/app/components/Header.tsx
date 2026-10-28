import image_logo_1_3 from '../../imports/logo_1-3.png'
import image_logo_1_4 from '../../imports/logo_1-4.png'
import image_logo_1_2 from '../../imports/logo_1-2.png'
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import logoLight from '../../imports/logo_1.png'
import logoDark from '../../imports/logo_4.png'
import logo2 from '../../imports/logo_2.svg'
import samsErpCover from '../../imports/media/sams-erp.jpg'
import agentTrackerCover from '../../imports/media/agent-tracker-wireframes.jpg'
import studiosKouratierCover from '../../imports/media/studios-kouratier.svg'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
  currentPage: 'home' | 'studio' | 'estudio' | 'about' | 'blog' | 'work' | 'quote' | 'design' | 'animation' | 'software' | 'ai-blockchain' | 'analytics' | 'erocore' | 'article'
  onPageChange: (page: 'home' | 'studio' | 'estudio' | 'about' | 'blog' | 'work' | 'quote' | 'design' | 'animation' | 'software' | 'ai-blockchain' | 'analytics' | 'erocore' | 'article') => void
}

export function Header({ isDark, onThemeToggle, currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isFunctionsOpen, setIsFunctionsOpen] = useState(false)
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
  const [isDarkBg, setIsDarkBg] = useState(true)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 80
      const maxScroll = 200

      setIsScrolled(scrollPosition > scrollThreshold)

      // Calculate scroll progress for backdrop intensity
      const progress = Math.min(scrollPosition / maxScroll, 1)
      setScrollProgress(progress)

      // Detect background color at current scroll position
      const elementAtScroll = document.elementFromPoint(window.innerWidth / 2, 100)
      if (elementAtScroll) {
        const bgColor = window.getComputedStyle(elementAtScroll).backgroundColor
        // Simple heuristic: if background is very light, use dark text
        const rgb = bgColor.match(/\d+/g)
        if (rgb) {
          const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3
          setIsDarkBg(brightness < 128)
        }
      }

      // Hide/show navbar based on scroll direction
      const scrollDelta = scrollPosition - lastScrollY

      if (scrollPosition < 80) {
        // Always show navbar at top
        setIsNavbarHidden(false)
      } else if (scrollDelta > 10) {
        // Scrolling down - hide navbar
        setIsNavbarHidden(true)
      } else if (scrollDelta < -10) {
        // Scrolling up - show navbar
        setIsNavbarHidden(false)
      }

      setLastScrollY(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const menuItems = [
    { label: 'Travail', page: 'work' as const },
    { label: 'Manifeste', page: 'blog' as const },
    { label: 'Notre Royaume', page: 'studio' as const },
    { label: 'E studio', page: 'estudio' as const },
    { label: 'Ero Core™', page: 'erocore' as const },
    { label: 'Nous piquer', page: 'home' as const, href: '#contact' }
  ]

  const functionItems = [
    { label: 'DESIGN & EXPÉRIENCE DIGITALE', page: 'design' as const },
    { label: 'INGÉNIERIE & TECHNOLOGIE', page: 'software' as const },
    { label: 'BRAND & DIRECTION ARTISTIQUE', page: 'animation' as const },
    { label: 'STRATÉGIE & TRANSFORMATION DIGITALE', page: 'analytics' as const },
    { label: 'CYBERSÉCURITÉ & RÉSILIENCE NUMÉRIQUE', page: 'ai-blockchain' as const },
  ]

  const serviceItems = [
    { label: 'Design UI/UX', page: 'design' as const },
    { label: 'Animation 3D', page: 'animation' as const },
    { label: 'Software Development', page: 'software' as const },
    { label: 'IA & Blockchain', page: 'ai-blockchain' as const },
    { label: 'Analytics', page: 'analytics' as const }
  ]

  const featuredWorks = [
    {
      title: 'SAMS ERP',
      category: 'Web & App · AI & Tech · 2025',
      image: samsErpCover
    },
    {
      title: 'Agent Tracker',
      category: 'Mobile · UX Design · 2025',
      image: agentTrackerCover
    },
    {
      title: 'Studios Kouratier',
      category: 'Branding · Identité visuelle · 2025',
      image: studiosKouratierCover,
      contain: true
    }
  ]

  const handleNavClick = (page: typeof currentPage | null, href?: string) => {
    setIsMenuOpen(false)
    
    if (page && page !== currentPage) {
      onPageChange(page)
    }
    
    if (href && (!page || page === 'home')) {
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, page && page !== currentPage ? 100 : 0)
    }
  }

  // Lock body scroll when menu is open and reset services dropdown
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setIsServicesOpen(false)
      setIsFunctionsOpen(false)
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Auto-scroll featured works when menu is open
  useEffect(() => {
    if (!isMenuOpen) return

    const interval = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % featuredWorks.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isMenuOpen, featuredWorks.length])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled
            ? 'rgba(10, 10, 20, 0.92)'
            : 'rgba(10, 10, 20, 0.75)',
          backdropFilter: 'blur(20px) saturate(1.6) brightness(0.9)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.6) brightness(0.9)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
          transform: isNavbarHidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 380ms cubic-bezier(0.16,1,0.3,1), background 400ms ease, backdrop-filter 400ms ease, box-shadow 400ms ease',
        }}
      >
        {/* Scroll progress indicator */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-600/30">
            <div
              className="h-full transition-all duration-300 ease-out bg-gray-400"
              style={{
                width: `${scrollProgress * 100}%`
              }}
            />
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className="flex items-center justify-between transition-all duration-400"
            style={{ height: isScrolled ? '56px' : '68px' }}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => onPageChange('home')}
                className="hover:opacity-75 transition-all duration-300"
              >
                <img
                  src={image_logo_1_3}
                  alt="Eroiste"
                  className="w-auto"
                  style={{
                    height: isScrolled ? '40px' : '48px',
                    transition: 'height 400ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              </button>
            </div>

            {/* Right : hamburger */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 transition-colors hover:bg-white/10 text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto overscroll-contain transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: '#191924',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Ambient background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#1B5BFF]/10 rounded-full blur-3xl"
            style={{
              transform: isMenuOpen ? 'scale(1)' : 'scale(0)',
              transition: 'transform 1s ease-out 0.2s'
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1B5BFF]/10 rounded-full blur-3xl"
            style={{
              transform: isMenuOpen ? 'scale(1)' : 'scale(0)',
              transition: 'transform 1s ease-out 0.3s'
            }}
          />
        </div>

        {/* Top bar with logo and close button */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <button
            onClick={() => onPageChange('home')}
            className="hover:opacity-80 transition-all duration-300"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.5s ease-out 0.1s'
            }}
          >
            <img
              src={logo2}
              alt="Eroiste"
              className="h-10 w-auto"
            />
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-gray-500 transition-colors duration-300 p-2"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
              transition: 'all 0.5s ease-out 0.1s'
            }}
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* Main menu content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left column: Main navigation */}
            <div className="lg:col-span-4">
              <div
                className="mb-6 uppercase tracking-wider text-gray-500"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out 0.2s'
                }}
              >
                Menu
              </div>
              <nav className="space-y-3">
                {menuItems.map((item, index) => (
                  <div
                    key={item.label}
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s ease-out ${0.3 + index * 0.1}s`
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(item.page, item.href)}
                      className="text-3xl lg:text-4xl font-medium text-[#F0EDE6] hover:text-[#1B5BFF] transition-colors duration-300 block"
                    >
                      {item.label}
                    </button>
                  </div>
                ))}

                {/* Fonctions Dropdown */}
                <div
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${0.3 + menuItems.length * 0.1}s`
                  }}
                >
                  <button
                    onClick={() => setIsFunctionsOpen(!isFunctionsOpen)}
                    className="text-3xl lg:text-4xl font-medium text-[#F0EDE6] hover:text-[#1B5BFF] transition-colors duration-300 flex items-center gap-2"
                  >
                    Fonctions
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${isFunctionsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Functions Submenu */}
                  <div
                    className={`mt-4 space-y-2 pl-6 overflow-hidden transition-all duration-300 ${isFunctionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {functionItems.map((func, idx) => (
                      <button
                        key={func.label}
                        onClick={() => handleNavClick(func.page)}
                        className="block text-left text-base lg:text-lg text-gray-400 hover:text-[#1B5BFF] transition-colors duration-300"
                        style={{
                          transitionDelay: isFunctionsOpen ? `${idx * 50}ms` : '0ms'
                        }}
                      >
                        {func.label}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            {/* Middle column: Project slider */}
            <div className="lg:col-span-4">
              <div
                className="mb-6 uppercase tracking-wider text-gray-500 text-xs"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out 0.4s'
                }}
              >
                Projets récents
              </div>
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'scale(1)' : 'scale(0.92)',
                  transition: 'all 0.6s ease-out 0.5s'
                }}
                onClick={() => handleNavClick('work')}
              >
                {/* Crossfade images */}
                {featuredWorks.map((work, index) => (
                  <img
                    key={work.title}
                    src={work.image}
                    alt={work.title}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ${work.contain ? 'object-contain p-8 pb-28 bg-white' : 'object-cover'} ${
                      index === currentWorkIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
                    {featuredWorks[currentWorkIndex].category}
                  </p>
                  <p className="text-xl font-light text-[#F0EDE6] mb-4 group-hover:text-[#1B5BFF] transition-colors duration-300">
                    {featuredWorks[currentWorkIndex].title}
                  </p>
                  {/* Dots */}
                  <div className="flex gap-2">
                    {featuredWorks.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrentWorkIndex(i) }}
                        className="transition-all duration-300"
                        style={{
                          height: 2,
                          width: i === currentWorkIndex ? 28 : 10,
                          background: i === currentWorkIndex ? '#1B5BFF' : 'rgba(255,255,255,0.3)',
                          borderRadius: 2,
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Contact info */}
            <div className="lg:col-span-4">
              <div
                className="mb-6 uppercase tracking-wider text-gray-500"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out 0.6s'
                }}
              >
                Contactez-nous
              </div>

              <div
                className="space-y-8"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out 0.7s'
                }}
              >
                {/* Email */}
                <div>
                  <div className="text-gray-500 mb-2 uppercase tracking-wide text-sm">Demandes - Emplois</div>
                  <a href="mailto:Parler@Eroiste.co" className="text-[#F0EDE6] hover:text-[#1B5BFF] transition-colors duration-300 text-lg">
                    Parler@Eroiste.co
                  </a>
                </div>

                {/* Address */}
                <div>
                  <div className="text-gray-500 mb-2 uppercase tracking-wide text-sm">Adresse</div>
                  <p className="text-[#F0EDE6] leading-relaxed">
                    Gabon - Congo - Côte d'Ivoire - Guinée
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="text-gray-500 mb-2 uppercase tracking-wide text-sm">Pour idées, projets ?</div>
                  <a href="tel:+242060000000" className="block text-[#F0EDE6] hover:text-[#1B5BFF] transition-colors duration-300 text-lg">
                    +242 06 00 00 00
                  </a>
                </div>

                {/* Social media */}
                <div>
                  <div className="flex space-x-4 mt-6">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F0EDE6] hover:border-[#1B5BFF] hover:text-[#1B5BFF] transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F0EDE6] hover:border-[#1B5BFF] hover:text-[#1B5BFF] transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F0EDE6] hover:border-[#1B5BFF] hover:text-[#1B5BFF] transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F0EDE6] hover:border-[#1B5BFF] hover:text-[#1B5BFF] transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            opacity: isMenuOpen ? 1 : 0,
            transition: 'opacity 0.5s ease-out 1s'
          }}
        >
          <div className="w-16 h-0.5 bg-white/30" />
        </div>
      </div>

      {/* CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          html {
            scroll-padding-top: 80px;
          }
        `
      }} />
    </>
  )
}