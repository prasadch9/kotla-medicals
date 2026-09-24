import { Link } from 'react-router-dom'
import { Cross } from 'lucide-react'
import { BIZ } from '../data'
export default function Footer() {
  return (
    <footer className="foot"><div className="container fgrid">
      <div><Link to="/" className="logo light"><span className="logo-i"><Cross size={20} /></span>KOTLA MEDICALS</Link>
        <p>Trusted healthcare essentials and friendly pharmacy service in Kovvur.</p></div>
      <div><h4>Quick Links</h4>{['', 'about', 'products', 'services', 'gallery', 'contact'].map(p => <Link key={p} to={'/' + p}>{p ? p[0].toUpperCase() + p.slice(1) : 'Home'}</Link>)}</div>
      <div><h4>Contact</h4>{BIZ.phones.map(p => <a key={p} href={`tel:${p}`}>{p}</a>)}<a href={`mailto:${BIZ.email}`}>{BIZ.email}</a>
        <p>{BIZ.addr[0]}<br />{BIZ.addr[1]}</p></div>
    </div><div className="copy">© 2026 Kotla Medicals. All Rights Reserved.</div></footer>
  )
}
