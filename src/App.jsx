import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Groups from './components/Groups'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Groups />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
