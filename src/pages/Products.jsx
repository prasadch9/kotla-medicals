import { useState } from 'react'
import { Search } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import { usePage } from '../components/Reveal'
import { PRODUCTS, CATS } from '../data'
export default function Products() {
  usePage('Healthcare Products | Kotla Medicals', 'Explore medicines, wellness products and healthcare essentials at Kotla Medicals, Kovvur.')
  const [cat, setCat] = useState('All'), [q, setQ] = useState('')
  const list = PRODUCTS.filter(p => (cat === 'All' || p.cat === cat) && (p.title + p.desc).toLowerCase().includes(q.toLowerCase()))
  return (<>
    <HeroSection title="Healthcare Products for Everyday Needs" sub="Explore a range of medicines, wellness products and healthcare essentials." />
    <section className="sec container">
      <div className="filters">
        <label className="search"><Search size={18} /><span className="sr">Search products</span><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search products" /></label>
        <div className="pills" role="group" aria-label="Categories">{CATS.map(c => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
      </div>
      <div className="grid g4">{list.map((p, i) => <ProductCard key={p.title} p={p} i={i} />)}</div>
      {!list.length && <p className="empty">No products match. Please contact us and we will help.</p>}
      <p className="disc">Product availability may vary. Prescription medicines should be purchased and used according to the advice of a qualified healthcare professional.</p>
    </section>
  </>)
}
