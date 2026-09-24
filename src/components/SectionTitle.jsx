import Reveal from './Reveal'
export default function SectionTitle({ eyebrow, title, text, center = true }) {
  return <Reveal className={`st ${center ? 'center' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</Reveal>
}
