import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { MailIcon } from '../components/Icons'
import type { SiteContent } from '../content/siteContent'

type ContactProps = {
  content: SiteContent['contact']
}

export default function Contact({ content }: ContactProps) {
  const email = content.email
  const [copied, setCopied] = useState(false)
  const copiedTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) {
        window.clearTimeout(copiedTimerRef.current)
      }
    }
  }, [])

  const copyFallback = (text: string) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.setAttribute('readonly', '')
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        copyFallback(email)
      }
      setCopied(true)
      if (copiedTimerRef.current) {
        window.clearTimeout(copiedTimerRef.current)
      }
      copiedTimerRef.current = window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  const copiedLabel =
    typeof document !== 'undefined' && document.documentElement.lang.startsWith('zh')
      ? '已复制'
      : 'Copied'

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-panel">
        <p className="section-kicker">{content.kicker}</p>
        <h2 className="section-title with-icon">
          <MailIcon />
          {content.title}
        </h2>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph} className="section-copy">
            {paragraph}
          </p>
        ))}
        <div className="contact-actions">
          <button
            className="contact-link contact-copy"
            type="button"
            onClick={handleCopyEmail}
            aria-label={`Copy ${email} to clipboard`}
          >
            <MailIcon />
            {email}
          </button>
          {copied && <span className="copy-hint">{copiedLabel}</span>}
          <Button href={`mailto:${email}`}>{content.buttonLabel}</Button>
        </div>
      </div>
    </section>
  )
}
