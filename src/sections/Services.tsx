import Card from '../components/Card'
import {
  AutomationIcon,
  BuildingIcon,
  ChipIcon,
  FactoryIcon,
  LeafIcon,
  SparkIcon,
} from '../components/Icons'
import type { SiteContent } from '../content/siteContent'

type ServicesProps = {
  content: SiteContent['services']
}

export default function Services({ content }: ServicesProps) {
  const serviceIcons = [ChipIcon, AutomationIcon, FactoryIcon, LeafIcon, BuildingIcon, SparkIcon]

  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-kicker">{content.kicker}</p>
        <h2 className="section-title with-icon">
          <ChipIcon />
          {content.title}
        </h2>
        <div className="card-grid services-grid">
          {content.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? SparkIcon
            const toneClass = `tone-${(index % 6) + 1}`

            return (
              <Card
                key={service.title}
                className={toneClass}
                title={
                  <span className="card-title-with-icon">
                    <Icon />
                    {service.title}
                  </span>
                }
              >
                <p>{service.description}</p>
                <ul className="capability-list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
