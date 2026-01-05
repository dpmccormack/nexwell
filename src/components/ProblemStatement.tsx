'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '60-70%', label: 'Average practice overhead as percentage of revenue' },
  { value: '40%+', label: 'Primary care physicians reporting burnout' },
  { value: '11%+', label: 'Average claim denial rate crushing revenue cycles' },
]

export default function ProblemStatement() {
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
            Independent Practices Face Mounting Pressures
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-5xl font-bold text-primary-teal mb-4">{stat.value}</div>
              <p className="text-dark-text/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-dark-text text-center max-w-3xl mx-auto"
        >
          You didn&apos;t go to medical school to manage billing codes and negotiate payer contracts.{' '}
          <span className="text-primary-teal font-semibold">There&apos;s a better way.</span>
        </motion.p>
      </div>
    </section>
  )
}
