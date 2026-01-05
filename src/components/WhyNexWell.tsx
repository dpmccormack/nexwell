'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Server, Handshake } from 'lucide-react'

const differentiators = [
  {
    icon: Stethoscope,
    title: 'Clinical Autonomy Protected',
    description: 'Your medical judgment remains yours. Our MSO agreements explicitly preserve your decision-making authority over patient care, protocols, and clinical operations.',
  },
  {
    icon: Server,
    title: 'Technology Without the Overhead',
    description: 'Access enterprise-grade infrastructure—telehealth platforms, cybersecurity, data analytics—without the capital investment or IT headaches.',
  },
  {
    icon: Handshake,
    title: 'Aligned Incentives',
    description: 'We succeed when you succeed. Our fee structures are transparent, commercially reasonable, and designed for long-term partnership.',
  },
]

export default function WhyNexWell() {
  return (
    <section id="why-nexwell" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-teal to-deep-teal overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 150" className="w-4/5 h-4/5 opacity-90">
                  <rect x="20" y="30" width="70" height="90" rx="8" fill="white" opacity="0.9" />
                  <rect x="30" y="45" width="50" height="6" rx="3" fill="#1F7A8C" />
                  <rect x="30" y="58" width="40" height="4" rx="2" fill="#E8D5A3" />
                  <rect x="30" y="68" width="45" height="4" rx="2" fill="#E8D5A3" />
                  <rect x="30" y="78" width="35" height="4" rx="2" fill="#E8D5A3" />
                  <circle cx="55" cy="100" r="10" fill="#C9A227" />
                  <path d="M50 100 L53 103 L60 96" stroke="white" strokeWidth="2" fill="none" />
                  
                  <circle cx="140" cy="50" r="25" fill="white" opacity="0.9" />
                  <circle cx="140" cy="50" r="15" fill="#1F7A8C" />
                  <path d="M140 42 L140 58 M132 50 L148 50" stroke="white" strokeWidth="2" />
                  
                  <circle cx="140" cy="110" r="20" fill="white" opacity="0.9" />
                  <path d="M130 105 Q140 120 150 105" stroke="#1F7A8C" strokeWidth="2" fill="none" />
                  <circle cx="134" cy="102" r="2" fill="#1F7A8C" />
                  <circle cx="146" cy="102" r="2" fill="#1F7A8C" />
                  
                  <line x1="90" y1="75" x2="115" y2="55" stroke="#C9A227" strokeWidth="2" strokeDasharray="4,4" />
                  <line x1="90" y1="75" x2="120" y2="105" stroke="#C9A227" strokeWidth="2" strokeDasharray="4,4" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-8">
              Partnership, Not Ownership
            </h2>

            <div className="space-y-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-primary-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-teal mb-2">{item.title}</h3>
                    <p className="text-dark-text/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <blockquote className="mt-10 border-l-4 border-accent-gold pl-6 italic text-dark-text/80">
              &ldquo;The ability to provide patients with a whole continuum of care is the real competitive and clinical advantage.&rdquo;
              <footer className="mt-2 text-sm text-dark-text/60 not-italic">
                — Industry Leader on Integrated Care Models
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
