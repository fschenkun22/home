import Card from '../components/Card'

const projects = [
  {
    title: 'Bluetooth ECG Monitoring Device',
    background: 'Needed a portable, low-power ECG acquisition solution.',
    solution:
      'Developed embedded firmware, BLE communication, and real-time signal processing.',
    result: 'Delivered a stable, accurate, mobile-ready ECG monitoring system.',
  },
  {
    title: 'Environmental Sensor and Automation System',
    background: 'Manual monitoring of temperature, humidity, and air quality was inefficient.',
    solution: 'Built a multi-sensor embedded system with automated control logic.',
    result: 'Achieved fully automated environmental regulation with real-time data.',
  },
  {
    title: 'Smart Agriculture Monitoring and Irrigation',
    background: 'Farms needed automated environmental control and irrigation.',
    solution:
      'Developed a sensor-driven system for soil moisture, climate monitoring, and automated irrigation.',
    result: 'Improved crop stability and reduced manual labor.',
  },
  {
    title: 'Production MES Workflow System',
    background: 'Production tracking lacked visibility and accuracy.',
    solution: 'Designed a complete MES workflow including scheduling, tracking, and ERP integration.',
    result: 'Improved data accuracy and reduced manual reporting time by over 60%.',
  },
  {
    title: 'ERP Customization for Manufacturing',
    background: 'Standard ERP modules could not match real production workflows.',
    solution: 'Customized modules and added automation logic for scheduling, quality, and reporting.',
    result: 'Increased workflow accuracy and reduced manual adjustments.',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected Systems</h2>
        <div className="card-grid projects-grid">
          {projects.map((project) => (
            <Card key={project.title} title={project.title} className="project-card">
              <p>
                <strong>Background:</strong> {project.background}
              </p>
              <p>
                <strong>Solution:</strong> {project.solution}
              </p>
              <p>
                <strong>Result:</strong> {project.result}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
