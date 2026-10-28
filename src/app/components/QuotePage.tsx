'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    serviceType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', interest: '', serviceType: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <section className="min-h-screen pt-20 bg-[#191924] relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#191924] to-black opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative py-16 lg:py-24">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#F0EDE6] leading-[0.9] tracking-tight font-light mb-6" style={{ letterSpacing: '-0.03em' }}>
            Une Audience avec le ROI ?
          </h1>
          <div className="w-16 h-px bg-[#1B5BFF] mx-auto mb-6" />
          <p className="text-[#8A8780] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Échangez avec l'une de notre équipe pour concrétiser un projet à venir ou accompagner vos besoins en transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left side - Contact Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-12">
            {/* Contact Info */}
            <div className="space-y-6 pt-6">
              <div>
                <p className="text-xs font-medium text-[#8A8780] mb-2 uppercase tracking-wider">EMAIL</p>
                <a href="mailto:parler@eroiste.co" className="text-[#F0EDE6] text-lg hover:text-[#1B5BFF] transition-colors">
                  parler@eroiste.co
                </a>
              </div>
              <div>
                <p className="text-xs font-medium text-[#8A8780] mb-2 uppercase tracking-wider">PHONE</p>
                <a href="tel:+242060000000" className="text-[#F0EDE6] text-lg hover:text-[#1B5BFF] transition-colors">
                  +242 06 00 00 00
                </a>
              </div>
              <div>
                <p className="text-xs font-medium text-[#8A8780] mb-2 uppercase tracking-wider">LOCATION</p>
                <p className="text-[#F0EDE6] text-lg">
                  Gabon - Congo - Côte d'Ivoire - Guinée
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-7 lg:pl-8">
            {isSubmitted ? (
              <div className="text-center py-20 px-8 border border-[rgba(212,255,0,0.2)] rounded-2xl bg-[rgba(212,255,0,0.02)]">
                <div className="w-20 h-20 rounded-full bg-[rgba(212,255,0,0.1)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-[#1B5BFF]" />
                </div>
                <h3 className="text-3xl font-light text-[#F0EDE6] mb-3">
                  Message sent successfully!
                </h3>
                <p className="text-[#8A8780] text-lg">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Full Name */}
                <div className="group">
                  <label htmlFor="name" className="block text-xs font-semibold text-[#8A8780] mb-4 uppercase tracking-widest">
                    FULL NAME <span className="text-[#1B5BFF]">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full bg-transparent border-0 border-b-2 ${errors.name ? 'border-red-500' : 'border-[rgba(240,237,230,0.12)]'} rounded-none px-0 py-4 text-[#F0EDE6] text-lg placeholder:text-[#444240] focus:border-[#1B5BFF] focus:ring-0 transition-all duration-300 group-hover:border-[rgba(240,237,230,0.25)]`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-3 text-sm text-red-400 flex items-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group">
                    <label htmlFor="email" className="block text-xs font-semibold text-[#8A8780] mb-4 uppercase tracking-widest">
                      EMAIL <span className="text-[#1B5BFF]">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-[rgba(240,237,230,0.12)]'} rounded-none px-0 py-4 text-[#F0EDE6] text-lg placeholder:text-[#444240] focus:border-[#1B5BFF] focus:ring-0 transition-all duration-300 group-hover:border-[rgba(240,237,230,0.25)]`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-3 text-sm text-red-400 flex items-center gap-1.5">
                        <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#8A8780] mb-4 uppercase tracking-widest">
                      PHONE <span className="text-[#1B5BFF]">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full bg-transparent border-0 border-b-2 ${errors.phone ? 'border-red-500' : 'border-[rgba(240,237,230,0.12)]'} rounded-none px-0 py-4 text-[#F0EDE6] text-lg placeholder:text-[#444240] focus:border-[#1B5BFF] focus:ring-0 transition-all duration-300 group-hover:border-[rgba(240,237,230,0.25)]`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="mt-3 text-sm text-red-400 flex items-center gap-1.5">
                        <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Interest and Service Type dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Je suis intéressé par */}
                  <div className="group">
                    <label htmlFor="interest" className="block text-xs font-semibold text-[#8A8780] mb-4 uppercase tracking-widest">
                      JE SUIS INTÉRESSÉ PAR
                    </label>
                    <div className="relative">
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => handleInputChange('interest', e.target.value)}
                        className="w-full bg-transparent border-0 border-b-2 border-[rgba(240,237,230,0.12)] rounded-none px-0 py-4 pr-8 text-[#F0EDE6] text-lg focus:border-[#1B5BFF] focus:ring-0 transition-all duration-300 appearance-none cursor-pointer group-hover:border-[rgba(240,237,230,0.25)]"
                      >
                        <option value="" className="bg-[#111111] text-[#8A8780]">Sélectionner...</option>
                        <option value="design" className="bg-[#111111] text-[#F0EDE6] py-2">Design & Expérience Digitale</option>
                        <option value="ingenierie" className="bg-[#111111] text-[#F0EDE6] py-2">Ingénierie & Technologie</option>
                        <option value="brand" className="bg-[#111111] text-[#F0EDE6] py-2">Brand & Direction Artistique</option>
                        <option value="strategie" className="bg-[#111111] text-[#F0EDE6] py-2">Stratégie & Transformation Digitale</option>
                        <option value="cybersecurite" className="bg-[#111111] text-[#F0EDE6] py-2">Cybersécurité & Résilience Numérique</option>
                        <option value="nous-rejoindre" className="bg-[#111111] text-[#F0EDE6] py-2">Nous rejoindre</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                          <path d="M1 1L7 7L13 1" stroke="#F0EDE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Type de prestation */}
                  <div className="group">
                    <label htmlFor="serviceType" className="block text-xs font-semibold text-[#8A8780] mb-4 uppercase tracking-widest">
                      TYPE DE PRESTATION
                    </label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => handleInputChange('serviceType', e.target.value)}
                        className="w-full bg-transparent border-0 border-b-2 border-[rgba(240,237,230,0.12)] rounded-none px-0 py-4 pr-8 text-[#F0EDE6] text-lg focus:border-[#1B5BFF] focus:ring-0 transition-all duration-300 appearance-none cursor-pointer group-hover:border-[rgba(240,237,230,0.25)]"
                      >
                        <option value="" className="bg-[#111111] text-[#8A8780]">Sélectionner...</option>
                        <option value="ponctuelle" className="bg-[#111111] text-[#F0EDE6] py-2">Ponctuelle</option>
                        <option value="coutume" className="bg-[#111111] text-[#F0EDE6] py-2">Coutume</option>
                        <option value="autres" className="bg-[#111111] text-[#F0EDE6] py-2">Autres</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                          <path d="M1 1L7 7L13 1" stroke="#F0EDE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#8A8780] mb-4 uppercase tracking-widest">
                    MESSAGE <span className="text-[#1B5BFF]">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full bg-transparent border-0 border-b-2 ${errors.message ? 'border-red-500' : 'border-[rgba(240,237,230,0.12)]'} rounded-none px-0 py-4 min-h-[140px] text-[#F0EDE6] text-lg placeholder:text-[#444240] focus:border-[#1B5BFF] focus:ring-0 resize-none transition-all duration-300 group-hover:border-[rgba(240,237,230,0.25)]`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-3 text-sm text-red-400 flex items-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-3 text-xs text-[#8A8780]">Minimum 10 characters</p>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between items-center pt-8 border-t border-[rgba(240,237,230,0.08)]">
                  <p className="text-sm text-[#8A8780]">
                    <span className="text-[#1B5BFF]">*</span> Required fields
                  </p>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1B5BFF] hover:bg-[#1B5BFF]/90 text-[#191924] font-semibold px-10 py-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-[#1B5BFF]/20 hover:shadow-xl hover:shadow-[#1B5BFF]/30 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#191924]" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Send Message</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
