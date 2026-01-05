'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Activity, Laptop } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-40 pb-16 lg:pt-44 lg:pb-24 bg-gradient-to-br from-white via-light-gray to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <span className="inline-block text-primary-teal font-semibold text-sm uppercase tracking-wide mb-4">
              For Specialty Practices Ready to Scale
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-teal leading-tight mb-6">
              Focus on Patients.{' '}
              <span className="text-primary-teal">We Handle the Business.</span>
            </h1>
            <p className="text-lg text-dark-text/80 mb-8 max-w-2xl">
              NexWell Health Partners provides the operational backbone specialty practices need to thrive. From telehealth integration to hospital partnerships, we manage the complexity so you can practice medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent-gold hover:bg-accent-gold/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center text-primary-teal hover:text-deep-teal font-semibold text-lg gap-2 transition-colors"
              >
                Learn How It Works
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-dark-text/70">
                <Shield size={18} className="text-primary-teal" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-text/70">
                <Activity size={18} className="text-primary-teal" />
                <span>Value-Based Care Enabled</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-text/70">
                <Laptop size={18} className="text-primary-teal" />
                <span>Telehealth Ready</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/20 to-deep-teal/20 rounded-3xl"></div>
              <svg viewBox="0 0 300 300" className="w-full h-full relative z-10">
                <circle cx="150" cy="80" r="30" fill="#1F7A8C" opacity="0.9" />
                <text x="150" y="85" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Practice</text>
                
                <circle cx="150" cy="150" r="40" fill="#134B54" />
                <text x="150" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">NexWell</text>
                <text x="150" y="160" textAnchor="middle" fill="white" fontSize="8">MSO</text>
                
                <circle cx="80" cy="240" r="25" fill="#1F7A8C" opacity="0.8" />
                <text x="80" y="243" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Hospital</text>
                
                <circle cx="220" cy="240" r="25" fill="#1F7A8C" opacity="0.8" />
                <text x="220" y="243" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">FQHC</text>
                
                <line x1="150" y1="110" x2="150" y2="110" stroke="#C9A227" strokeWidth="3">
                  <animate attributeName="y2" from="110" to="110" values="110;110" dur="0.5s" fill="freeze" />
                </line>
                <line x1="150" y1="110" x2="150" y2="115" stroke="#C9A227" strokeWidth="3" strokeDasharray="5,3" />
                
                <line x1="125" y1="180" x2="95" y2="220" stroke="#C9A227" strokeWidth="2" strokeDasharray="5,3" />
                <line x1="175" y1="180" x2="205" y2="220" stroke="#C9A227" strokeWidth="2" strokeDasharray="5,3" />
                
                <circle cx="150" cy="80" r="5" fill="#C9A227" />
                <circle cx="150" cy="150" r="6" fill="#C9A227" />
                <circle cx="80" cy="240" r="4" fill="#C9A227" />
                <circle cx="220" cy="240" r="4" fill="#C9A227" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
