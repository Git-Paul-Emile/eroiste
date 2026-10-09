'use client'

import { ArrowUpRight, ArrowUp } from 'lucide-react'
import logoSvg from '../../imports/logo_1-1.png'

type Page = 'home' | 'studio' | 'e.venture' | 'blog' | 'work' | 'quote' | 'erocore' | 'design' | 'animation' | 'software' | 'ai-blockchain' | 'analytics'

interface FooterProps {
  onPageChange?: (page: Page) => void
}

export function Footer({ onPageChange }: FooterProps = {}) {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Travail', page: 'work' as Page },
    { label: 'Manifeste', page: 'blog' as Page },
    { label: 'Notre Royaume', page: 'studio' as Page },
    { label: 'E.venture', page: 'estudio' as Page },
    { label: 'Ero Core™', page: 'erocore' as Page },
    { label: 'Nous piquer', href: '#contact' }
  ]

  const fonctionsLinks = [
    { label: 'Design & Expérience', page: 'design' as Page },
    { label: 'Ingénierie & Tech', page: 'software' as Page },
    { label: 'Brand & Direction', page: 'animation' as Page },
    { label: 'Stratégie', page: 'analytics' as Page },
    { label: 'Cybersécurité', page: 'ai-blockchain' as Page },
  ]

  const socialLinks = [
    { label: 'TWITTER', href: '#' },
    { label: 'INSTAGRAM', href: '#' },
    { label: 'LINKEDIN', href: '#' }
  ]

  const handleNavClick = (link: { label: string; page?: Page; href?: string }) => {
    if (link.page && onPageChange) {
      onPageChange(link.page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (link.href === '#contact') {
      if (onPageChange) {
        onPageChange('quote')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (link.href) {
      const element = document.querySelector(link.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#161616] text-[#6D6D6D] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">

          {/* Left - Logo Globe */}
          <div className="lg:col-span-1">
            <button
              onClick={() => {
                if (onPageChange) {
                  onPageChange('home')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="w-[54px] h-[54px] relative hover:opacity-70 transition-opacity duration-300"
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 54 54">
                <circle cx="27" cy="27" r="26.5" stroke="#6D6D6D" />
                <ellipse cx="27" cy="27" rx="13.5" ry="26.5" stroke="#6D6D6D" />
                <path d="M 0.5 27 L 53.5 27" stroke="#6D6D6D" />
                <path d="M 27 0.5 L 27 53.5" stroke="#6D6D6D" />
                <ellipse cx="27" cy="27" rx="26.5" ry="13.5" stroke="#6D6D6D" />
              </svg>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="lg:col-span-5 flex items-center">
            <button
              onClick={() => {
                if (onPageChange) {
                  onPageChange('home')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={logoSvg}
                alt="Eroiste"
                className="w-auto opacity-85"
                style={{ height: '300px' }}
              />
            </button>
          </div>

          {/* Right - Navigation columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* Nav links */}
            <nav className="flex flex-col gap-[12px]">
              <p className="text-xs uppercase tracking-widest text-[#444] mb-1">Navigation</p>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-[16px] font-medium text-left hover:text-[#1B5BFF] transition-colors duration-200"
                  
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Fonctions links */}
            <nav className="flex flex-col gap-[12px]">
              <p className="text-xs uppercase tracking-widest text-[#444] mb-1">Fonctions</p>
              {fonctionsLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-[16px] font-medium text-left hover:text-[#1B5BFF] transition-colors duration-200"
                  
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-xs uppercase tracking-widest text-[#444] mb-1">Réseaux</p>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-2.5 hover:text-[#1B5BFF] transition-colors duration-200"
                >
                  <span className="text-base font-bold uppercase" >
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-[9px] h-[9px] text-[#FFFCF1] group-hover:text-[#1B5BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#6D6D6D] mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          <p className="text-base font-bold uppercase" >
            © {currentYear} Eroïste 2026
          </p>

          <p className="text-base font-bold uppercase text-center" >
           AFRICAN LOVER
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1 hover:text-[#1B5BFF] transition-colors duration-200"
          >
            <span className="text-base font-bold uppercase text-right" >
              GO ALL THE WAY UP
            </span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}
