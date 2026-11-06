import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, description, children }: PageHeaderProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}
    >
      <div className="container">
        {subtitle && (
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}
          >
            {subtitle}
          </span>
        )}
        <h1 style={{ color: 'white', marginBottom: '1rem' }}>{title}</h1>
        {description && (
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              margin: '0 auto 1.5rem',
              fontSize: '1.125rem'
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
