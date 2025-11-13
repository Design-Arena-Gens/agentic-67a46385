'use client'

import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { AboutSection } from '@/components/AboutSection'
import { StatsSection } from '@/components/StatsSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
