import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { industries } from '../data/industries'

export default function Industries() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Our Expertise"
        description="Discover how Sourzyn serves diverse industries across India with tailored supply solutions designed for specific business needs."
      />

      <section className="section">
        <div className="container">
          <div className="container-narrow" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p>
              Sourzyn understands that every industry has unique procurement requirements. We leverage our expertise to deliver customized supply solutions that address the specific challenges and operational needs of different sectors.
            </p>
          </div>

          <div className="grid grid-2">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.slug}`}
                className="card"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'white'
                  }}
                >
                  <ArrowRight size={28} />
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{industry.title}</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{industry.description}</p>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {industry.relevantCategories.length} Related Categories
                  </span>
                </div>
                <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Our Approach</span>
            <h2 style={{ marginBottom: '1rem' }}>Industry-Specific Solutions</h2>
            <p>
              We don't take a one-size-fits-all approach. Our team works to understand your industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                title: 'Understanding Needs',
                description: 'We analyze your specific industry requirements to recommend the right products.'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored procurement packages designed for your operational workflows.'
              },
              {
                title: 'Regulatory Compliance',
                description: 'Products that meet industry standards and regulatory requirements.'
              },
              {
                title: 'Quality Assurance',
                description: 'Consistent product quality across all industry-specific categories.'
              },
              {
                title: 'Reliable Supply',
                description: 'Dependable delivery schedules that match your business cycles.'
              },
              {
                title: 'Ongoing Support',
                description: 'Dedicated account management for long-term industry partnerships.'
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
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Don't See Your Industry?</h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                fontSize: '1.125rem'
              }}
            >
              We serve businesses across many sectors. Contact us to discuss how we can support your specific industry requirements.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
