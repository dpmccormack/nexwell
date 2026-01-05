'use client'

import { motion } from 'framer-motion'
import { Bone, Heart, Brain, Apple, Baby, Stethoscope, Activity, Sparkles } from 'lucide-react'

const specialties = [
  { icon: Bone, name: 'Orthopedics' },
  { icon: Heart, name: 'Cardiology' },
  { icon: Brain, name: 'Behavioral Health' },
  { icon: Apple, name: 'Gastroenterology' },
  { icon: Baby, name: 'OB/GYN' },
  { icon: Stethoscope, name: 'Primary Care' },
  { icon: Activity, name: 'Urology' },
  { icon: Sparkles, name: 'Dermatology' },
]

export default function SpecialtyFocus() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
            Serving Specialty Practices Across the Care Continuum
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-teal/20 transition-colors">
                <specialty.icon size={28} className="text-primary-teal" />
              </div>
              <h3 className="font-semibold text-deep-teal">{specialty.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-dark-text/70"
        >
          Don&apos;t see your specialty?{' '}
          <span className="text-primary-teal font-medium">Our model adapts to your practice&apos;s unique requirements.</span>
        </motion.p>
      </div>
    </section>
  )
}
