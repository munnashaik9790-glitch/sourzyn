import { useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO title={service.title} description={service.description} />
      <PageHeader
        title={service.title}
        subtitle="Service Category"
        description={service.description}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>About This Category</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                {service.description}. Our comprehensive range in this category addresses the specific needs of modern businesses, ensuring you have access to quality products that support your daily operations.
              </p>
              <p>
                Whether you're setting up a new office, restocking supplies, or looking for specialized items, this category offers solutions designed for reliability and performance. We work with trusted suppliers to ensure consistent quality across all products.
              </p>

              <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Key Benefits</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.benefits.map((benefit, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span style={{ fontSize: '0.9375rem' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '1rem' }}>Products in This Category</h3>
              <div className="card" style={{ padding: '1.5rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.products.map((product, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-secondary)',
                          flexShrink: 0
                        }}
                      />
                      <span style={{ fontSize: '0.9375rem' }}>{product}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Related Categories</h3>
                <div className="grid grid-2">
                  {service.relatedServices.map((relatedSlug) => {
                    const relatedService = services.find(s => s.slug === relatedSlug)
                    if (!relatedService) return null
                    return (
                      <Link
                        key={relatedSlug}
                        to={`/services/${relatedSlug}`}
                        className="card"
                        style={{
                          padding: '1rem',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-main)' }}>
                          {relatedService.title}
                        </span>
                        <ArrowRight size={16} style={{ color: 'var(--color-secondary)', marginLeft: 'auto' }} />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Order?</h2>
            <p>
              Get a customized quotation for your requirements in this category. Our team will help you find the right products at competitive prices.
            </p>
          </div>

          <div className="container-narrow">
            <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Request a Quote</h3>
              <p style={{ marginBottom: '2rem' }}>
                Tell us about your requirements and we'll provide a detailed quotation with pricing and delivery information.
              </p>
              <Link to="/get-a-quote" className="btn btn-primary btn-lg">
                Get Your Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h3>
          </div>

          <div className="container-narrow">
            {[
              {
                q: 'What is the minimum order quantity for this category?',
                a: 'Minimum order quantities vary by product. Contact us with your specific requirements for accurate information.'
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes, we offer competitive pricing for bulk orders. The discount structure depends on product type and order volume.'
              },
              {
                q: 'How quickly can you deliver?',
                a: 'Delivery timelines depend on product availability and your location. Standard orders typically deliver within 5-10 business days.'
              }
            ].map((faq, index) => (
              <div key={index} className="card" style={{ marginBottom: '1rem', padding: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{faq.q}</h4>
                <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/faqs" className="btn btn-outline">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
