import { MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { BIZ } from '../data'
export default function CallToAction() {
  return (
    <section className="container"><Reveal className="cta">
      <div><h2>Visit Kotla Medicals</h2><p>Find us conveniently on Main Road, opposite Lakshmi Cafe, Kovvur.</p>
        <div className="row"><a className="btn btn-w" href={BIZ.map} target="_blank" rel="noreferrer"><MapPin size={16} /> Get Directions</a>
          <a className="btn btn-g" href={`tel:${BIZ.phones[0]}`}><Phone size={16} /> Call Now</a></div></div>
      <div className="mapviz" aria-hidden="true"><MapPin size={44} /><i /><i /><i /></div>
    </Reveal></section>
  )
}
