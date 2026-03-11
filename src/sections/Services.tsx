import Card from '../components/Card'

const services = [
  {
    title: 'Embedded & IoT Devices',
    description:
      'Build low-power devices and sensor systems with stable data acquisition and communication.',
    points: [
      'Bluetooth ECG monitoring device',
      'Temperature, humidity, and air-quality sensing',
      'BLE communication and edge control logic',
      'Device firmware for low-power operation',
    ],
  },
  {
    title: 'Intelligent Automation',
    description: 'Turn manual workflows into sensor-driven, traceable, and real-time automation.',
    points: [
      'Smart environmental automation',
      'IoT-based control systems',
      'Device linkage and live monitoring',
      'Data-driven operational decisions',
    ],
  },
  {
    title: 'Smart Manufacturing',
    description: 'Connect production flow, machines, and reporting into one execution system.',
    points: [
      'Production workflow automation',
      'Shop-floor data collection',
      'Scheduling and quality management',
      'MES and ERP integration',
    ],
  },
  {
    title: 'Smart Agriculture',
    description: 'Design field-ready systems for sensing, control, and farm operation intelligence.',
    points: [
      'Agricultural environment monitoring',
      'Automated irrigation and climate control',
      'Sensor network architecture',
      'Farm data visualization and optimization',
    ],
  },
  {
    title: 'Enterprise Systems',
    description:
      'Deliver ERP, MES, and full-stack platforms aligned with real manufacturing and agriculture workflows.',
    points: [
      'ERP customization and process automation',
      'MES development and execution tracking',
      'Full-stack business systems',
      'AI-assisted development pipeline',
    ],
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">What I Build</h2>
        <div className="card-grid services-grid">
          {services.map((service) => (
            <Card key={service.title} title={service.title}>
              <p>{service.description}</p>
              <ul className="capability-list">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
