import Img from './Img'
export default function GalleryCard({ g, onOpen }) {
  return <button className={`gcard ${g.size}`} onClick={onOpen} aria-label={`Open ${g.title}`}><Img src={g.src} alt={g.title} /><span>{g.title}</span></button>
}
