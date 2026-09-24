import { Link } from 'react-router-dom'
import { ShieldCheck, Pill, HeartHandshake, MapPin, Cross, Heart, Plus, ArrowRight } from 'lucide-react'
import Reveal, { usePage } from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import ServiceCard from '../components/ServiceCard'
import CallToAction from '../components/CallToAction'
import Img from '../components/Img'
import { IMG, PRODUCTS, SERVICES, BIZ } from '../data'
const TRUST = [[ShieldCheck, 'Trusted Service', 'Dependable pharmacy service families in Kovvur rely on.'], [Pill, 'Quality Medicines', 'Genuine healthcare products you can count on.'], [HeartHandshake, 'Customer Care', 'Friendly, patient help every time you visit.'], [MapPin, 'Convenient Location', 'Right on Main Road, opposite Lakshmi Cafe.']]
const WHY = ['Trusted Local Medical Store', 'Genuine Healthcare Products', 'Friendly Customer Support', 'Convenient Location in Kovvur']
export default function Home() {
  usePage('Kotla Medicals | Trusted Medical Store in Kovvur', 'Kotla Medicals - trusted medicines, healthcare essentials and friendly pharmacy service in Kovvur, Andhra Pradesh.')
  return (<>
    <section className="hero"><div className="container hgrid">
      <div className="htext">
        <span className="eyebrow">Serving Kovvur with care and trust</span>
        <h1>Your Trusted Healthcare Partner in Kovvur</h1>
        <p>Kotla Medicals provides trusted medicines, healthcare essentials and friendly pharmacy services for you and your family.</p>
        <div className="row"><Link to="/products" className="btn btn-p">Explore Products <ArrowRight size={16} /></Link><a href={`tel:${BIZ.phones[0]}`} className="btn btn-o">Call Now</a></div>
      </div>
      <div className="hvis"><div className="hframe"><Img src={IMG.hero} alt="Modern pharmacy with a friendly pharmacist" /></div>
        <span className="fl f1"><Cross /></span><span className="fl f2"><Heart /></span><span className="fl f3"><Pill /></span><span className="fl f4"><Plus /></span></div>
    </div><i className="blob b1" /><i className="blob b2" /></section>
    <section className="sec container"><SectionTitle eyebrow="Our promise" title="Healthcare You Can Trust" />
      <div className="grid g4">{TRUST.map(([I, t, d], i) => <Reveal key={t} className="card feat" delay={i * 80}><span className="ico"><I size={24} /></span><h3>{t}</h3><p>{d}</p></Reveal>)}</div></section>
    <section className="sec tint"><div className="container split">
      <Reveal className="left"><SectionTitle center={false} eyebrow="Why us" title="Why Choose Kotla Medicals?" text="At Kotla Medicals, we believe healthcare is about more than medicines. It is about trust, accessibility and caring service." />
        <div className="grid g2">{WHY.map(w => <div key={w} className="chip"><ShieldCheck size={18} />{w}</div>)}</div></Reveal>
      <Reveal className="right"><div className="hframe alt"><Img src={IMG.shelves} alt="Neatly arranged medicine shelves" /></div></Reveal></div></section>
    <section className="sec container"><SectionTitle eyebrow="Products" title="Healthcare Essentials" text="Everyday medicines, wellness and personal care in one trusted place." />
      <div className="grid g4">{PRODUCTS.slice(0, 8).map((p, i) => <ProductCard key={p.title} p={p} i={i} enquire={false} />)}</div>
      <div className="center-btn"><Link to="/products" className="btn btn-p">View All Products</Link></div></section>
    <section className="sec tint"><div className="container"><SectionTitle eyebrow="Services" title="Our Pharmacy Services" />
      <div className="grid g4">{[0, 1, 2, 3].map(i => <ServiceCard key={i} s={SERVICES[i]} i={i} />)}</div></div></section>
    <div className="sec"><CallToAction /></div>
  </>)
}
