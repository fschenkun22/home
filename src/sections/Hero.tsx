import Button from '../components/Button'
import Scene from '../three/Scene'

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <Scene className="scene-canvas" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow">Independent System Engineer</p>
        <h1>
          I build complete intelligent systems - from embedded hardware and sensors to automation,
          ERP, MES, smart manufacturing, and smart agriculture.
        </h1>
        <h2>
          From devices to enterprise systems, I build the entire intelligent ecosystem for real
          operations.
        </h2>
        <p className="hero-note">If you can describe the problem, I can build the solution.</p>
        <div className="hero-actions">
          <Button href="#projects">View selected work</Button>
          <a className="btn-secondary" href="#contact">
            Let&apos;s work together
          </a>
        </div>
      </div>
    </section>
  )
}
