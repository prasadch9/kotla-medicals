import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { usePage } from '../components/Reveal'
import { BIZ } from '../data'
export default function Contact() {
  usePage('Contact Kotla Medicals | Kovvur', 'Contact Kotla Medicals in Kovvur by phone, email or visit us on Main Road.')
  const [f, setF] = useState({ name: '', phone: '', email: '', message: '' }), [err, setErr] = useState({}), [ok, setOk] = useState(false)
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault(); const x = {}
    if (f.name.trim().length < 2) x.name = 'Please enter your name.'
    if (!/^[6-9]\d{9}$/.test(f.phone.replace(/\s/g, ''))) x.phone = 'Enter a valid 10-digit mobile number.'
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email address.'
    if (f.message.trim().length < 5) x.message = 'Please write a short message.'
    setErr(x); if (Object.keys(x).length) return
    const t = `Enquiry from ${f.name} (${f.phone}${f.email ? ', ' + f.email : ''}): ${f.message}`
    window.open(`https://wa.me/91${BIZ.phones[0]}?text=${encodeURIComponent(t)}`, '_blank'); setOk(true)
  }
  const F = (k, label, type = 'text') => (<div className="field"><label htmlFor={k}>{label}</label>
    {k === 'message' ? <textarea id={k} rows="4" value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} /> : <input id={k} type={type} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} />}
    {err[k] && <em role="alert">{err[k]}</em>}</div>)
  return (<>
    <HeroSection title="Contact Kotla Medicals" sub="We're here to help with your everyday healthcare needs." />
    <section className="sec container cgrid">
      <div className="cinfo">
        <div className="card ci"><span className="ico"><Phone size={22} /></span><div><h3>Phone</h3>{BIZ.phones.map(p => <a key={p} href={`tel:${p}`}>{p}</a>)}</div></div>
        <div className="card ci"><span className="ico"><Mail size={22} /></span><div><h3>Email</h3><a href={`mailto:${BIZ.email}`}>{BIZ.email}</a></div></div>
        <div className="card ci"><span className="ico"><MapPin size={22} /></span><div><h3>Address</h3><p>Main Road,<br />Opposite Lakshmi Cafe,<br />Kovvur,<br />Andhra Pradesh 534350</p></div></div>
      </div>
      <div className="card form">
        {ok ? <div className="okmsg"><CheckCircle2 size={40} /><h3>Thank you!</h3><p>Your enquiry is ready in WhatsApp. We will get back to you soon.</p></div> :
          <form onSubmit={submit} noValidate>{F('name', 'Name')}{F('phone', 'Phone', 'tel')}{F('email', 'Email (optional)', 'email')}{F('message', 'Message')}
            <button className="btn btn-p" type="submit">Send Enquiry</button></form>}
        <div className="row callrow"><span>Call Us</span>{BIZ.phones.map(p => <a key={p} className="btn btn-o" href={`tel:${p}`}>{p}</a>)}<a className="btn btn-o" href={`mailto:${BIZ.email}`}>Email Us</a></div>
      </div>
    </section>
    <section className="container sec"><div className="card mapcard">
      <iframe title="Kotla Medical Store location" loading="lazy" src="https://maps.google.com/maps?q=Kotla+Medical+Store+Kovvur+Andhra+Pradesh&output=embed" />
      <div className="mapinfo"><h3>Kotla Medical Store</h3><p>Main Road, Opposite Lakshmi Cafe<br />Kovvur, Andhra Pradesh 534350</p>
        <a className="btn btn-p" href={BIZ.map} target="_blank" rel="noreferrer">Get Directions</a></div></div></section>
  </>)
}
