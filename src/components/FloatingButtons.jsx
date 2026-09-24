import { MessageCircle, Phone } from 'lucide-react'
import { BIZ } from '../data'
export default function FloatingButtons() {
  return (
    <div className="fab">
      <a className="wa" href={BIZ.wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" data-tip="WhatsApp"><MessageCircle /></a>
      <a className="ph" href={`tel:${BIZ.phones[0]}`} aria-label="Call Now" data-tip="Call Now"><Phone /></a>
    </div>
  )
}
