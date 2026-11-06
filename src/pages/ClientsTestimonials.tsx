import { Link } from 'react-router-dom'
import { Star, Building2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function ClientsTestimonials() {
  const testimonials = [
    {
      name: 'Demo Client - IT Company',
      industry: 'Technology',
      content: 'Sourzyn has streamlined our office procurement significantly. The quality of products and reliability of service has been excellent. Their team understands our requirements and delivers consistently.',
      rating: 5
    },
    {
      name: 'Demo Client - Educational Institution',
      industry: 'Education',
      content: 'As an educational institution, we have diverse supply needs. Sourzyn provides everything from stationery to cleaning supplies under one roof, making our procurement process much more efficient.',
      rating: 5
    },
    {
      name: 'Demo Client - Healthcare Facility',
      industry: 'Healthcare',
      content: 'The quality and reliability of healthcare supplies from Sourzyn has been impressive. They understand the importance of compliance and deliver products that meet our standards.',
      rating: 5
    },
    {
      name: 'Demo Client - Manufacturing',
      industry: 'Manufacturing',
      content: 'We appreciate Sourzyns understanding of industrial requirements. Their safety equipment and maintenance supplies have helped us maintain our operations smoothly.',
      rating: 5
    }
  ]

  return (
    <>
      <PageHeader
        title="Clients & Testimonials"
        subtitle="Our Partners"
        description="Learn about our client partnerships and read testimonials from businesses across various industries."
      />

      <section className="section">
        <div className="container">
          <div className="container-narrow" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p>
              At Sourzyn, we build lasting partnerships with our clients. Our success is measured by the success of the businesses we serve. Below are testimonials from some of our valued partners.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginTop: '1rem' }}>
              Note: These are demonstration testimonials. Authentic client testimonials will be added as we build our client relationships.
            </p>
          </div>

          <div className="grid grid-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                  ))}
                </div>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{testimonial.content}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-bg-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Building2 size={24} style={{ color: 'var(--color-text-muted)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>{testimonial.name}</h4>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{testimonial.industry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Industry Coverage</span>
            <h2 style={{ marginBottom: '1rem' }}>Serving Diverse Sectors</h2>
            <p>
              Our client base spans multiple industries, each with unique requirements that we understand and address.
            </p>
          </div>

          <div className="grid grid-4">
            {[
              'Corporate Offices',
              'IT & Technology',
              'Education',
              'Healthcare',
              'Manufacturing',
              'Retail & E-commerce',
              'Hospitality',
              'Facility Management'
            ].map((industry, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <Building2 size={32} style={{ color: 'var(--color-secondary)', margin: '0 auto 0.75rem' }} />
                <h4 style={{ fontSize: '0.9375rem', marginBottom: 0 }}>{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Partnership Approach</span>
            <h2 style={{ marginBottom: '1rem' }}>How We Work with Clients</h2>
          </div>

          <div className="grid grid-3">
            {[
              {
                title: 'Understanding Needs',
                description: 'We take time to understand your business, industry, and specific requirements.'
              },
              {
                title: 'Customized Solutions',
                description: 'Tailored procurement packages designed to match your operational needs.'
              },
              {
                title: 'Reliable Service',
                description: 'Consistent quality and dependable delivery that you can count on.'
              },
              {
                title: 'Ongoing Support',
                description: 'Dedicated customer service to address your questions and concerns.'
              },
              {
                title: 'Continuous Improvement',
                description: 'We regularly review and improve our service based on your feedback.'
              },
              {
                title: 'Long-term Partnership',
                description: 'We aim to build lasting relationships that grow with your business.'
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
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Become Our Partner</h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                fontSize: '1.125rem'
              }}
            >
              Ready to experience the Sourzyn difference? Get in touch with us to discuss how we can support your business.
            </p>
            <Link to="/get-a-quote" className="btn btn-primary btn-lg">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
