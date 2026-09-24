import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Cross, Menu, X, Phone } from 'lucide-react'
import { BIZ } from '../data'
const LINKS = [['/', 'Home'], ['/about', 'About'], ['/products', 'Products'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/contact', 'Contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false), [sc, setSc] = useState(false)
  useEffect(() => { const f = () => setSc(window.scrollY > 24); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`nav ${sc ? 'scrolled' : ''}`}>
      <div className="container nav-in">
        <Link to="/" className="logo" onClick={() => setOpen(false)}><span className="logo-i"><Cross size={20} /></span>KOTLA MEDICALS</Link>
        <nav className={`links ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{t}</NavLink>)}
          <a className="btn btn-p nav-call" href={`tel:${BIZ.phones[0]}`}><Phone size={16} /> Call Now</a>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
