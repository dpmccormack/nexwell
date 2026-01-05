'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const specialties = [
  'Orthopedics',
  'Cardiology',
  'Behavioral Health',
  'Gastroenterology',
  'OB/GYN',
  'Primary Care',
  'Urology',
  'Dermatology',
  'Other',
]

const challenges = [
  'Revenue Cycle',
  'Technology',
  'Compliance',
  'Growth',
  'Other',
]

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    specialty: '',
    challenge: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-teal to-deep-teal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Focus on What Matters Most?
          </h2>
          <p className="text-xl text-white/80">
            Let&apos;s discuss how NexWell can support your practice&apos;s growth.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-deep-teal mb-2">Thank You!</h3>
            <p className="text-dark-text/70">
              We&apos;ve received your information and will be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="practiceName" className="block text-sm font-medium text-dark-text mb-2">
                  Practice Name
                </label>
                <input
                  type="text"
                  id="practiceName"
                  name="practiceName"
                  value={formData.practiceName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                  placeholder="Your Practice Name"
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-dark-text mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                  placeholder="you@practice.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-text mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-dark-text mb-2">
                  Specialty
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all bg-white"
                >
                  <option value="">Select your specialty</option>
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-dark-text mb-2">
                  Current Challenge
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all bg-white"
                >
                  <option value="">Select primary challenge</option>
                  {challenges.map(challenge => (
                    <option key={challenge} value={challenge}>{challenge}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-accent-gold hover:bg-accent-gold/90 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </button>
            </div>
          </motion.form>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/70 mt-6"
        >
          Or call us directly: <a href="tel:+18005551234" className="text-light-gold hover:text-accent-gold font-medium">(800) 555-1234</a>
        </motion.p>
      </div>
    </section>
  )
}
