import './index.css'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="grain">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App
