"use client"
import React, { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useModal } from '@/hooks/useModal'

// Validation helpers
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneDigits = (s) => (s || '').replace(/[^0-9]/g, '')

export default function ConsultationModal() {
  const { isOpen, closeModal } = useModal()
  const overlayRef = useRef(null)
  const dialogRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')

  const initial = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    whatsapp: '',
    services: [],
    details: '',
  }

  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})

  // prevent background scroll
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = prev)
    }
  }, [isOpen])

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeModal])

  // focus trap
  useEffect(() => {
    if (!isOpen) return
    const dialog = dialogRef.current
    if (!dialog) return
    const focusable = dialog.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    function onKey(e) {
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    first?.focus()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  function onOverlayClick(e) {
    if (e.target === overlayRef.current) closeModal()
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox' && name === 'services') {
      setForm((f) => {
        const s = new Set(f.services)
        if (checked) s.add(value)
        else s.delete(value)
        return { ...f, services: Array.from(s) }
      })
      return
    }
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!emailRx.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    else if (phoneDigits(form.phone).length < 7)
      e.phone = 'Enter a valid phone number.'
    if (!form.services || form.services.length === 0)
      e.services = 'Select at least one service.'
    return e
  }

  async function onSubmit(e) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return
    setLoading(true)
    // simulate async submit
    await new Promise((r) => setTimeout(r, 900))
    console.log('Consultation Request', form)
    setLoading(false)
    setForm(initial)
    closeModal()
    setToast('Thank you! Your consultation request has been submitted successfully.')
    setTimeout(() => setToast(''), 5000)
  }

  if (!isOpen) return null

  const services = [
    'Website Development',
    'Branding & Identity',
    'SEO',
    'Google Ads',
    'Meta Ads',
    'Social Media Marketing',
    'AI Automation',
    'CRM Solutions',
    'Lead Generation',
    'Business Consulting',
    'E-commerce Solutions',
    'Other',
  ]

  return (
    <div
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      aria-hidden={!isOpen}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

      {/* dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        className="relative w-full max-w-3xl rounded-[24px] bg-[rgba(26,26,26,0.72)] border border-white/6 shadow-lg p-6 md:p-10 mx-4 transform transition-all scale-100"
        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close consultation dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:text-white focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 id="consultation-title" className="text-2xl font-bold text-white">
          Book Your Free Consultation
        </h3>
        <p className="mt-2 text-sm text-white/70">
          Tell us about your business and we'll contact you within 24 hours with a
          personalized growth strategy.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="col-span-2">
            <label className="text-sm font-medium text-white">Full Name *</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg bg-[#121212] border border-white/6 px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-[#B7F61C]/40"
              required
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-white">Company Name</label>
            <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-lg bg-[#121212] border border-white/6 px-3 py-2 text-white placeholder-white/50" />
          </div>

          <div>
            <label className="text-sm font-medium text-white">Email Address *</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 w-full rounded-lg bg-[#121212] border border-white/6 px-3 py-2 text-white placeholder-white/50" required />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-white">Phone Number *</label>
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="mt-1 w-full rounded-lg bg-[#121212] border border-white/6 px-3 py-2 text-white placeholder-white/50" required />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-white">WhatsApp Number</label>
            <input name="whatsapp" value={form.whatsapp} onChange={handleChange} type="tel" className="mt-1 w-full rounded-lg bg-[#121212] border border-white/6 px-3 py-2 text-white placeholder-white/50" />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium text-white">Services Required *</label>
            <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
              {services.map((s) => (
                <label key={s} className="inline-flex items-center gap-2 text-sm text-white">
                  <input
                    type="checkbox"
                    name="services"
                    value={s}
                    checked={form.services.includes(s)}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/10 bg-transparent text-[#B7F61C] focus:ring-0"
                  />
                  <span className="text-white/90">{s}</span>
                </label>
              ))}
            </div>
            {errors.services && <p className="mt-1 text-xs text-red-400">{errors.services}</p>}
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium text-white">Project Details</label>
            <textarea
              name="details"
              placeholder="Briefly describe your business and project requirements..."
              value={form.details}
              onChange={handleChange}
              className="mt-1 h-28 w-full rounded-lg bg-[#121212] border border-white/6 px-3 py-2 text-white placeholder-white/50"
            />
          </div>

          <div className="col-span-2 flex items-center justify-end gap-3">
            <button type="button" onClick={closeModal} className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 hover:text-white">
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-[#B7F61C] px-4 py-2 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="black" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : null}
              Book Free Consultation
            </button>
          </div>
        </form>

        {/* toast */}
        {toast && (
          <div className="absolute left-1/2 top-[-2.5rem] -translate-x-1/2 rounded-lg bg-[#1A1A1A] px-4 py-2 text-sm text-white shadow">{toast}</div>
        )}
      </div>
    </div>
  )
}
