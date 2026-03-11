import type { ReactNode } from 'react'

type CardProps = {
  title: ReactNode
  children: ReactNode
  className?: string
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <article className={`surface-card ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
    </article>
  )
}
