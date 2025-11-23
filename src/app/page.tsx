import { HeroSection } from '@/components/sections/hero-section'
import { HowItWorks } from '@/components/sections/how-it-works'
import { FeaturesSection } from '@/components/sections/features'
import { UseCases } from '@/components/sections/use-cases'
import { PilotProgram } from '@/components/sections/pilot-program'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <UseCases />
      <PilotProgram />
      <Footer />
    </>
  )
}
