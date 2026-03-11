import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

const defaultProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function baseSize(size: number) {
  return { width: size, height: size }
}

export function GlobeIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  )
}

export function SunMoonIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8z" />
      <path d="M17.5 4.5v2" />
      <path d="M19.8 6.8h-2" />
    </svg>
  )
}

export function UserBadgeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.2 19a6.8 6.8 0 0 1 13.6 0" />
      <path d="M18.3 5.7l.9.9 1.6-1.6" />
    </svg>
  )
}

export function ChipIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 1v3M14 1v3M10 20v3M14 20v3M1 10h3M1 14h3M20 10h3M20 14h3" />
    </svg>
  )
}

export function AutomationIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.2v2.4M12 19.4v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.2 12h2.4M19.4 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
    </svg>
  )
}

export function FactoryIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M3 20V8.5l6 3V8.5l6 3V20H3z" />
      <path d="M21 20V5h-6v15" />
      <path d="M7 20v-4M11 20v-4M15 20v-4" />
    </svg>
  )
}

export function LeafIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M19.5 4.8c-6 .2-10.1 2.3-12.3 6.2-1.7 3-1.5 6.1-1.5 6.1s3.1.2 6.1-1.5c4-2.2 6-6.3 6.2-12.3z" />
      <path d="M7 17c2-3.1 4.5-5.6 8-8" />
    </svg>
  )
}

export function BuildingIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M4 21V4h16v17" />
      <path d="M9 21v-4h6v4M8 8h2M8 12h2M14 8h2M14 12h2" />
    </svg>
  )
}

export function SparkIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
      <path d="M5 3l.7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8L2.5 5.5l1.8-.7L5 3zM19 16l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3z" />
    </svg>
  )
}

export function FolderIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9z" />
    </svg>
  )
}

export function CompassIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.7 8.3l-2.2 5.2-5.2 2.2 2.2-5.2 5.2-2.2z" />
    </svg>
  )
}

export function ClockIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v4.7l2.8 1.8" />
    </svg>
  )
}

export function WrenchIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M14.8 6.3a3.7 3.7 0 0 0-4.9 4.9L4.5 16.6a1.4 1.4 0 1 0 2 2l5.4-5.4a3.7 3.7 0 0 0 4.9-4.9l-2.2 2.2-2.7-2.7 2.9-1.5z" />
    </svg>
  )
}

export function TrendIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <path d="M4 16l5.1-5.1 3.1 3.1L19 7.2" />
      <path d="M14 7h5v5" />
    </svg>
  )
}

export function MailIcon({ size = 15, ...props }: IconProps) {
  return (
    <svg {...defaultProps} {...baseSize(size)} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.4" />
      <path d="M4.5 7.2l7.5 5.6 7.5-5.6" />
    </svg>
  )
}
