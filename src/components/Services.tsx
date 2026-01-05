'use client'

import { motion } from 'framer-motion'
import { DollarSign, Monitor, Shield, Building2, TrendingUp, Users } from 'lucide-react'

const services = [
  {
    icon: DollarSign,
    title: 'Revenue Cycle Management',
    description: 'End-to-end claims processing, denial management, and reimbursement optimization. Reduce days in A/R and improve collections.',
  },
  {
    icon: Monitor,
    title: 'Telehealth & Technology Integration',
    description: 'Unified EHR platforms, telemedicine infrastructure, and AI-powered documentation. Meet patients where they are.',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Navigate HIPAA, ACA, and state-specific regulations with confidence. We keep you compliant so you stay focused on care.',
  },
  {
    icon: Building2,
    title: 'Hospital & FQHC Network Access',
    description: 'Strategic partnerships with hospitals and Federally Qualified Health Centers. Expand your referral network and care continuum.',
  },
  {
    icon: TrendingUp,
    title: 'Value-Based Care Enablement',
    description: 'Population health analytics, risk stratification, and quality metrics tracking. Transition from volume to value at your pace.',
  },
  {
    icon: Users,
    title: 'HR & Workforce Solutions',
    description: 'Recruiting, credentialing, payroll, and benefits administration. Build and retain the team your practice needs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
            Comprehensive Support for Modern Healthcare
          </h2>
          <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
            We handle the operational complexity. You maintain full clinical autonomy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-gray rounded-2xl p-8 hover:-translate-y-1 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-primary-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors">
                <service.icon size={28} className="text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold text-deep-teal mb-3">{service.title}</h3>
              <p className="text-dark-text/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
