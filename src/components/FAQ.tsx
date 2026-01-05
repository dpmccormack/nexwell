'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does NexWell maintain my practice\'s clinical autonomy?',
    answer: 'Our MSO agreements are specifically structured to preserve your complete decision-making authority over all clinical matters. We handle operational, administrative, and financial functions while you maintain full control over patient care, treatment protocols, and clinical operations. This separation is fundamental to our partnership model.',
  },
  {
    question: 'What is the typical fee structure for MSO services?',
    answer: 'Our fee structures are transparent and commercially reasonable, typically based on a percentage of collections or a fixed monthly fee depending on the services selected. We customize pricing based on your practice size, specialty, and service needs. All fees are clearly outlined in our agreements with no hidden costs.',
  },
  {
    question: 'How long does the integration process take?',
    answer: 'Most practices complete the full integration process within 90 days. This includes discovery, needs assessment, agreement finalization, technology deployment, and staff training. We work at your pace and ensure minimal disruption to your daily operations during the transition.',
  },
  {
    question: 'Do I have to use specific technology platforms?',
    answer: 'We offer flexibility in technology adoption. While we provide access to enterprise-grade platforms that integrate seamlessly with our services, we can often work with your existing systems. Our technology team will assess your current setup and recommend the most efficient path forward.',
  },
  {
    question: 'What happens if regulations change in my state?',
    answer: 'Our compliance team continuously monitors regulatory changes at both federal and state levels. We proactively update our processes and inform you of any changes that affect your practice. Our agreements are structured to adapt to evolving regulatory requirements, protecting both parties.',
  },
  {
    question: 'Can I transition from fee-for-service to value-based care gradually?',
    answer: 'Absolutely. We understand that value-based care transition requires careful planning. Our approach allows you to maintain your current fee-for-service revenue while gradually building value-based care capabilities. We provide the analytics, population health tools, and guidance to make this transition at your comfortable pace.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-light-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-deep-teal pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary-teal flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-dark-text/70">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
