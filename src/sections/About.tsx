const tags = [
  'Embedded & IoT Devices',
  'Intelligent Automation',
  'Smart Manufacturing',
  'Smart Agriculture',
  'ERP / MES Systems',
  'Full-stack Delivery',
  'AI-assisted Engineering',
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-kicker">About</p>
        <h2 className="section-title">About Me</h2>
        <p className="section-copy">
          I am an independent developer focused on end-to-end system engineering for industrial and
          agricultural environments.
        </p>
        <p className="section-copy">
          My work combines embedded firmware, sensor networks, automation logic, and enterprise
          software into one reliable operational stack.
        </p>
        <p className="section-copy">
          I design practical systems that reduce manual work, improve data quality, and help teams
          run faster with better decision support.
        </p>
        <ul className="tag-list" aria-label="skills">
          {tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
