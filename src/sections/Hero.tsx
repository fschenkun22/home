import Button from '../components/Button'
import type { SiteContent, ThemeMode } from '../content/siteContent'
import Scene from '../three/Scene'

type HeroProps = {
  content: SiteContent['hero']
  theme: ThemeMode
}

export default function Hero({ content, theme }: HeroProps) {
  return (
    <section className="hero section" id="top">
      <Scene className="scene-canvas" theme={theme} />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <h2>{content.subtitle}</h2>
        <p className="hero-note">{content.note}</p>
        <div className="hero-actions">
          <Button href="#projects">{content.primaryCta}</Button>
          <a className="btn-secondary" href="#contact">
            {content.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  )
}
