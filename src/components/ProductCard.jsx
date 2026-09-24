import { ArrowUpRight } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { BIZ } from '../data'
export default function ProductCard({ p, i = 0, enquire = true }) {
  return (
    <Reveal className="card pcard" delay={(i % 4) * 70}>
      <div className="thumb"><Img src={p.img} alt={p.title} /></div>
      <div className="cbody"><small className="tag">{p.cat}</small><h3>{p.title}</h3><p>{p.desc}</p>
        {enquire ? <a className="btn btn-o" href={`${BIZ.wa} ${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer">Enquire Now</a>
          : <span className="arrow"><ArrowUpRight size={18} /></span>}
      </div>
    </Reveal>
  )
}
