import AboutUs from '@/components/about-us'
import Benefits from '@/components/benefits'
import ChoosingUs from '@/components/choosing-us'
import Cta from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import OurServices from '@/components/our-services'
import SeeMore from '@/components/see-more'
import Stats from '@/components/stats'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <div className="*:py-32">
        <Hero />
        <Stats />
        <OurServices />
        <Benefits />
        <ChoosingUs />
        <SeeMore />
        <AboutUs />
        <Testimonials />
        <Cta />
      </div>
      <Footer />
    </>
  )
}
