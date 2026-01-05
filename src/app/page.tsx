'use client'

import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import Services from '@/components/Services'
import WhyNexWell from '@/components/WhyNexWell'
import HowItWorks from '@/components/HowItWorks'
import SpecialtyFocus from '@/components/SpecialtyFocus'
import Results from '@/components/Results'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Services />
      <WhyNexWell />
      <HowItWorks />
      <SpecialtyFocus />
      <Results />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
