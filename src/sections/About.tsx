import { UserBadgeIcon } from '../components/Icons'
import type { SiteContent } from '../content/siteContent'

type AboutProps = {
  content: SiteContent['about']
}

export default function About({ content }: AboutProps) {
  const photoSrc = `${import.meta.env.BASE_URL}assets/me.png`

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-panel">
          <div className="about-layout">
            <div className="about-text">
              <p className="section-kicker">{content.kicker}</p>
              <h2 className="section-title with-icon">
                <UserBadgeIcon />
                {content.title}
              </h2>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="section-copy">
                  {paragraph}
                </p>
              ))}
              <ul className="tag-list" aria-label="skills">
                {content.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="about-photo-pane">
              <div className="about-photo-shell">
                <img className="about-photo" src={photoSrc} alt="Profile photo" loading="lazy" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
