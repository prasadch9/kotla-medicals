import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import GalleryCard from '../components/GalleryCard'
import { usePage } from '../components/Reveal'
import { GALLERY } from '../data'
export default function Gallery() {
  usePage('Kotla Medicals Gallery', 'A look inside Kotla Medicals, Kovvur.')
  const [sel, setSel] = useState(null)
  useEffect(() => { const k = e => e.key === 'Escape' && setSel(null); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  return (<>
    <HeroSection title="Inside Kotla Medicals" sub="A look at our store, shelves and everyday healthcare essentials." />
    <section className="sec container"><div className="masonry">{GALLERY.map((g, i) => <GalleryCard key={i} g={g} onOpen={() => setSel(g)} />)}</div></section>
    {sel && <div className="lb" role="dialog" aria-modal="true" aria-label={sel.title} onClick={() => setSel(null)}>
      <button className="lbx" aria-label="Close" onClick={() => setSel(null)}><X /></button>
      <figure onClick={e => e.stopPropagation()}><img src={sel.src.replace('w=900', 'w=1600')} alt={sel.title} /><figcaption>{sel.title}</figcaption></figure></div>}
  </>)
}
