'use client'

import { Linkedin, Twitter, Facebook } from 'lucide-react'

const serviceLinks = [
  { name: 'Revenue Cycle Management', href: '#services' },
  { name: 'Telehealth Integration', href: '#services' },
  { name: 'Regulatory Compliance', href: '#services' },
  { name: 'Hospital Partnerships', href: '#services' },
  { name: 'Value-Based Care', href: '#services' },
]

const resourceLinks = [
  { name: 'Blog', href: '#' },
  { name: 'Case Studies', href: '#' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
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
              <span className="text-xl font-bold">NexWell</span>
            </div>
            <p className="text-white/70 mb-6">
              Empowering specialty practices with operational excellence and strategic partnerships.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-white/70 space-y-3">
              <p>NexWell Health Partners</p>
              <p>123 Healthcare Drive, Suite 500</p>
              <p>Medical City, MC 12345</p>
              <p className="pt-2">
                <a href="tel:+18005551234" className="hover:text-white transition-colors">(800) 555-1234</a>
              </p>
              <p>
                <a href="mailto:info@nexwellhealth.com" className="hover:text-white transition-colors">info@nexwellhealth.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 NexWell Health Partners. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
