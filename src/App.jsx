import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
export default function App() {
  const { pathname } = useLocation()
  return (<>
    <ScrollToTop /><Navbar />
    <main key={pathname} className="page">
      <Routes>
        <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /><Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer /><FloatingButtons />
  </>)
}
