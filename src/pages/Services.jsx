import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import CallToAction from '../components/CallToAction'
import { usePage } from '../components/Reveal'
import { SERVICES } from '../data'
export default function Services() {
  usePage('Pharmacy Services | Kotla Medicals', 'Friendly pharmacy services and healthcare essentials at Kotla Medicals, Kovvur.')
  return (<>
    <HeroSection title="Healthcare Services" sub="Friendly support for your everyday healthcare needs." />
    <section className="sec container"><div className="grid g3">{SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}</div></section>
    <div className="sec"><CallToAction /></div>
  </>)
}
