import { useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Building2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'
import { industries } from '../data/industries'
import { services } from '../data/services'

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>()
  const industry = industries.find(i => i.slug === slug)

  if (!industry) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Industry Not Found</h1>
          <p>The industry page you're looking for doesn't exist.</p>
          <Link to="/industries" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            Back to Industries
          </Link>
        </div>
      </div>
    )
  }

  const relevantServices = services.filter(s => industry.relevantCategories.includes(s.slug))

  return (
    <>
      <SEO title={industry.title} description={industry.description} />
      <PageHeader
        title={industry.title}
        subtitle="Industry Solutions"
        description={industry.description}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industry Overview</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                {industry.description}. Sourzyn has developed specialized expertise in serving this sector, understanding the unique challenges and requirements that businesses in this industry face.
              </p>
              <p>
                Our approach combines deep industry knowledge with a comprehensive product range, ensuring that you have access to the right supplies to support your operations efficiently and cost-effectively.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Typical Procurement Requirements</h3>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {industry.requirements.map((req, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.125rem' }} />
                        <span style={{ fontSize: '0.9375rem' }}>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '1rem' }}>Our Solutions</h3>
              <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {industry.solutions.map((solution, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Building2 size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span style={{ fontSize: '0.9375rem' }}>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 style={{ marginBottom: '1rem' }}>Relevant Categories</h3>
              <div className="grid grid-2">
                {relevantServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="card"
                    style={{
                      padding: '1rem',
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-main)' }}>
                      {service.title}
                    </span>
                    <ArrowRight size={16} style={{ color: 'var(--color-secondary)', marginLeft: 'auto' }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Operational Benefits</h2>
            <p>
              Partnering with Sourzyn delivers tangible benefits for your industry operations.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                title: 'Reduced Complexity',
                description: 'Single supplier for multiple needs simplifies your procurement process.'
              },
              {
                title: 'Cost Optimization',
                description: 'Bulk purchasing and efficient supply chain management reduce costs.'
              },
              {
                title: 'Quality Consistency',
                description: 'Standardized quality across all product categories ensures reliability.'
              },
              {
                title: 'Time Savings',
                description: 'Streamlined ordering and delivery processes save administrative time.'
              },
              {
                title: 'Better Inventory Control',
                description: 'Predictable supply helps you manage inventory more effectively.'
              },
              {
                title: 'Industry Expertise',
                description: 'Our team understands your sector and provides relevant solutions.'
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
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Partner with Us?</h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                fontSize: '1.125rem'
              }}
            >
              Contact us to discuss how Sourzyn can support your industry-specific procurement needs.
            </p>
            <div className="flex gap-md" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/get-a-quote" className="btn btn-primary btn-lg">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
