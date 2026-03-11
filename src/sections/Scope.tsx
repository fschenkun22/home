const chain = [
  'Sensors',
  'Embedded firmware',
  'IoT communication',
  'Automation logic',
  'Smart manufacturing',
  'Smart agriculture',
  'ERP / MES',
  'Full-stack applications',
  'AI-assisted optimization',
]

export default function Scope() {
  return (
    <section className="section" id="scope">
      <div className="container scope-panel">
        <p className="section-kicker">End-to-End Scope</p>
        <h2 className="section-title">One Engineer Across the Entire System Chain</h2>
        <p className="section-copy">
          I work across the full stack of operational systems, so integration and delivery stay
          consistent from physical devices to enterprise workflows.
        </p>
        <ul className="tag-list scope-tags" aria-label="full chain scope">
          {chain.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
