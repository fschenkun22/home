import Button from '../components/Button'

const email = 'contact@yourdomain.com'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-panel">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="section-copy">
          I can take any system from concept to deployment: hardware, embedded, IoT, automation,
          smart manufacturing, smart agriculture, ERP, MES, and full-stack software.
        </p>
        <p className="section-copy">
          If you can describe the problem, I can build the solution.
        </p>
        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${email}`}>
            {email}
          </a>
          <Button href={`mailto:${email}`}>Send Email</Button>
        </div>
      </div>
    </section>
  )
}
