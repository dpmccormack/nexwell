'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const stats = [
  { value: '10-30%', label: 'Administrative Cost Reduction' },
  { value: '25%+', label: 'Revenue Cycle Improvement' },
  { value: '<35 Days', label: 'Target Days in A/R' },
  { value: '98%', label: 'Claims Eligibility Accuracy' },
]

const testimonials = [
  {
    quote: 'Partnering with NexWell allowed us to focus on what we do best—patient care. Their team handled the operational complexities seamlessly.',
    name: 'Dr. Sarah Mitchell',
    title: 'Medical Director',
    practice: 'Coastal Orthopedic Associates',
  },
  {
    quote: 'The transition to value-based care felt overwhelming until NexWell guided us through it. Their expertise made all the difference.',
    name: 'Dr. James Chen',
    title: 'Practice Owner',
    practice: 'Heartland Cardiology Group',
  },
  {
    quote: 'Our revenue cycle improved dramatically within the first quarter. NexWell\'s approach is both strategic and hands-on.',
    name: 'Dr. Amanda Foster',
    title: 'Chief Medical Officer',
    practice: 'Mountain View Primary Care',
  },
]

export default function Results() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl text-center ${
                index % 2 === 0 ? 'bg-primary-teal text-white' : 'bg-light-gray'
              }`}
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-white' : 'text-primary-teal'}`}>
                {stat.value}
              </div>
              <p className={index % 2 === 0 ? 'text-white/80' : 'text-dark-text/70'}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-light-gray rounded-2xl p-8 md:p-12 relative">
            <div className="text-center">
              <p className="text-xl md:text-2xl text-dark-text italic mb-8">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-primary-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-teal">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-deep-teal">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-dark-text/70">{testimonials[currentTestimonial].title}</div>
                  <div className="text-sm text-primary-teal">{testimonials[currentTestimonial].practice}</div>
                </div>
              </div>
            </div>

            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-primary-teal" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow pointer-events-auto"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-primary-teal" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary-teal' : 'bg-primary-teal/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
