import { Routes, Route } from 'react-router'

import Navbar from './components/navbar'
import Footer from './components/footer'

import Home from './pages/home'
import About from './pages/about'
import Menu from './pages/menu'
import Gallery from './pages/fortopolio'
import Contact from './pages/contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
