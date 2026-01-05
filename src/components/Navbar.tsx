'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why NexWell', href: '#why-nexwell' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-teal to-deep-teal rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
                <line x1="6" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <line x1="18" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <line x1="6" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <line x1="18" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-deep-teal">NexWell</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-text hover:text-primary-teal transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent-gold hover:bg-accent-gold/90 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-dark-text hover:text-primary-teal transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-accent-gold hover:bg-accent-gold/90 text-white px-5 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
