'use client'

import { motion } from 'framer-motion'
import { Phone, ClipboardCheck, FileText, Headphones } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Discovery Call',
    description: 'We learn about your practice, pain points, and goals. You learn about our capabilities.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Needs Assessment',
    description: 'Our team audits your operations, identifies opportunities, and develops a customized service plan.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Agreement & Onboarding',
    description: 'Transparent MSA structured with legal counsel. Clear scope. Protected autonomy.',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Integration & Support',
    description: 'Hands-on training, technology deployment, and dedicated account management. Ongoing support from day one.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
            From Introduction to Integration in 90 Days
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-teal/20 via-primary-teal to-primary-teal/20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-light-gray rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md mx-auto lg:mx-0 relative z-10">
                    <step.icon size={28} className="text-primary-teal" />
                  </div>
                  <div className="text-accent-gold font-bold text-sm mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold text-deep-teal mb-3">{step.title}</h3>
                  <p className="text-dark-text/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary-teal hover:bg-deep-teal text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Start the Conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
