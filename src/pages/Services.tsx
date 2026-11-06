import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHeader
        title="Products & Services"
        subtitle="Our Offerings"
        description="Explore our comprehensive range of business supplies and procurement solutions designed to meet all your workplace needs."
      />

      <section className="section">
        <div className="container">
          <div className="container-narrow" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p>
              Sourzyn offers 12 comprehensive product categories covering every aspect of workplace procurement. From daily office essentials to specialized industrial supplies, we provide quality products that help your business operate efficiently.
            </p>
          </div>

          <div className="grid grid-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="card"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'white'
                  }}
                >
                  <ArrowRight size={28} />
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{service.description}</p>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {service.products.length} Products
                  </span>
                </div>
                <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore category <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Benefits</span>
            <h2 style={{ marginBottom: '1rem' }}>Why Choose Centralized Procurement?</h2>
            <p>
              Partnering with Sourzyn for your supply needs offers numerous advantages for your business operations.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                title: 'Cost Savings',
                description: 'Bulk purchasing and efficient supply chain management translate to better pricing for your business.'
              },
              {
                title: 'Time Efficiency',
                description: 'One vendor for multiple needs reduces administrative overhead and simplifies ordering processes.'
              },
              {
                title: 'Quality Consistency',
                description: 'Standardized product quality across all categories ensures reliable performance and satisfaction.'
              },
              {
                title: 'Simplified Inventory',
                description: 'Consolidated ordering helps you manage inventory more effectively and reduce stockouts.'
              },
              {
                title: 'Better Control',
                description: 'Centralized procurement gives you better visibility and control over your supply spending.'
              },
              {
                title: 'Dedicated Support',
                description: 'Single point of contact for all your supply needs with personalized customer service.'
              }
            ].map((item, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              textAlign: 'center',
              padding: '4rem 2rem',
              border: 'none'
            }}
          >
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Need Help Choosing the Right Products?</h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                fontSize: '1.125rem'
              }}
            >
              Our team can help you identify the right products and quantities for your specific business requirements.
            </p>
            <Link to="/get-a-quote" className="btn btn-primary btn-lg">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
