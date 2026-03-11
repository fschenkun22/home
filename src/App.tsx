import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Scope from './sections/Scope'
import Services from './sections/Services'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <Hero />
      <main>
        <About />
        <Services />
        <Projects />
        <Scope />
        <Contact />
      </main>
    </div>
  )
}

export default App
