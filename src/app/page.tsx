import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Header />
      <Hero />
      <ProblemStatement />
      <Services />
      <CaseStudies />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
} 