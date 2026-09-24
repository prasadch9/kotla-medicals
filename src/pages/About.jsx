import { ShieldCheck, Heart, Award, Accessibility } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionTitle from '../components/SectionTitle'
import Reveal, { usePage } from '../components/Reveal'
import CallToAction from '../components/CallToAction'
import Img from '../components/Img'
import { IMG, BIZ } from '../data'
const VALUES = [[ShieldCheck, 'Trust', 'Honest, dependable service that earns the confidence of every family we serve.'], [Heart, 'Care', 'Every customer is welcomed warmly and helped with patience and respect.'], [Award, 'Quality', 'We focus on genuine healthcare products from reliable sources.'], [Accessibility, 'Accessibility', 'A convenient location and easy assistance for everyone in Kovvur.']]
export default function About() {
  usePage('About Kotla Medicals | Kovvur', 'Learn about Kotla Medicals, a trusted local medical store in Kovvur, Andhra Pradesh.')
  return (<>
    <HeroSection title="About Kotla Medicals" sub="Serving the healthcare needs of Kovvur with trust, care and commitment." />
    <section className="sec container split">
      <Reveal className="left"><SectionTitle center={false} eyebrow="Our story" title="Committed to Better Everyday Healthcare" text="Kotla Medicals is a trusted local medical store serving customers in Kovvur, Andhra Pradesh. Our focus is on providing dependable access to medicines, healthcare essentials and personal care products while maintaining a friendly and customer-focused experience." />
        <div className="card info"><h3>Kotla Medical Store</h3>
          <p><b>Proprietor:</b> {BIZ.owner}</p><p><b>Location:</b> {BIZ.addr.join(' ')}</p>
          <p><b>Phone:</b> {BIZ.phones.join(' / ')}</p><p><b>Email:</b> {BIZ.email}</p></div></Reveal>
      <Reveal className="right"><div className="hframe"><Img src={IMG.pharm} alt="Professional pharmacy service" /></div></Reveal>
    </section>
    <section className="sec tint"><div className="container"><SectionTitle eyebrow="What guides us" title="Our Values" />
      <div className="grid g4">{VALUES.map(([I, t, d], i) => <Reveal key={t} className="card feat" delay={i * 80}><span className="ico"><I size={24} /></span><h3>{t}</h3><p>{d}</p></Reveal>)}</div></div></section>
    <section className="sec container"><SectionTitle eyebrow="Kovvur's pharmacy" title="Your Local Pharmacy, Your Trusted Choice" />
      <div className="collage">{[IMG.hero, IMG.shelves, IMG.meds, IMG.pharm].map((s, i) => <Reveal key={i} className={`c${i}`} delay={i * 80}><Img src={s} alt={['Pharmacy interior', 'Medicine shelves', 'Healthcare products', 'Pharmacist at work'][i]} /></Reveal>)}</div></section>
    <div className="sec"><CallToAction /></div>
  </>)
}
