import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../data/services'

interface ServiceCardProps {
  service: Service
  showProductCount?: boolean
  ctaLabel?: string
}

/** Displays a product/service category card with a 16:9 preview image and link to its detail page. */
export default function ServiceCard({
  service,
  showProductCount = false,
  ctaLabel = 'Explore category'
}: ServiceCardProps) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card"
      style={{
        textDecoration: 'none',
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg-main)',
          borderBottom: '1px solid var(--color-border-light)'
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>{service.title}</h3>
        <p style={{ fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>{service.description}</p>
        {showProductCount && (
          <div style={{ marginBottom: '1rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-text-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {service.products.length} Products
            </span>
          </div>
        )}
        <span
          style={{
            color: 'var(--color-secondary)',
            fontSize: '0.875rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {ctaLabel} <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
