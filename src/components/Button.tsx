import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
}

export default function Button({ href, children }: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  return (
    <a
      className="btn-primary"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
