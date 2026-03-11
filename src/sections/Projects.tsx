import Card from '../components/Card'
import { ClockIcon, FolderIcon, TrendIcon, WrenchIcon } from '../components/Icons'
import type { SiteContent } from '../content/siteContent'

type ProjectsProps = {
  content: SiteContent['projects']
}

export default function Projects({ content }: ProjectsProps) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-kicker">{content.kicker}</p>
        <h2 className="section-title with-icon">
          <FolderIcon />
          {content.title}
        </h2>
        <div className="card-grid projects-grid">
          {content.items.map((project, index) => (
            <Card
              key={project.title}
              title={project.title}
              className={`project-card tone-${(index % 6) + 1}`}
            >
              <p>
                <strong className="meta-with-icon">
                  <ClockIcon />
                  {content.backgroundLabel}:
                </strong>{' '}
                {project.background}
              </p>
              <p>
                <strong className="meta-with-icon">
                  <WrenchIcon />
                  {content.solutionLabel}:
                </strong>{' '}
                {project.solution}
              </p>
              <p>
                <strong className="meta-with-icon">
                  <TrendIcon />
                  {content.resultLabel}:
                </strong>{' '}
                {project.result}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
