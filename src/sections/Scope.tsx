import { CompassIcon } from '../components/Icons'
import type { SiteContent } from '../content/siteContent'

type ScopeProps = {
  content: SiteContent['scope']
}

export default function Scope({ content }: ScopeProps) {
  return (
    <section className="section" id="scope">
      <div className="container scope-panel">
        <p className="section-kicker">{content.kicker}</p>
        <h2 className="section-title with-icon">
          <CompassIcon />
          {content.title}
        </h2>
        <p className="section-copy">{content.description}</p>
        <ul className="tag-list scope-tags" aria-label="full chain scope">
          {content.chain.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
