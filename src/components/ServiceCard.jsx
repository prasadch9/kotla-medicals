import * as L from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
export default function ServiceCard({ s, i = 0 }) {
  const Icon = L[s.icon] || L.Cross
  return (
    <Reveal className="card scard" delay={(i % 3) * 80}>
      <div className="thumb short"><Img src={s.img} alt={s.title} /></div>
      <div className="cbody"><span className="ico"><Icon size={22} /></span><h3>{s.title}</h3><p>{s.desc}</p></div>
    </Reveal>
  )
}
