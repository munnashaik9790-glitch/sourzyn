import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Our Story"
        description="Learn about Sourzyn's mission, vision, and commitment to being your trusted business supply partner."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Who We Are</h2>
              <p>
                Sourzyn is a modern B2B procurement company dedicated to simplifying workplace supply management for businesses across India. Founded with the vision of making procurement effortless, we have grown into a trusted partner for organizations seeking reliable, quality supplies.
              </p>
              <p>
                Our approach combines deep industry knowledge with a customer-first philosophy. We understand that every business has unique requirements, and we tailor our solutions to meet those specific needs. From corporate offices to manufacturing facilities, educational institutions to healthcare providers, we serve diverse sectors with the same commitment to excellence.
              </p>
              <p>
                At Sourzyn, we believe that great procurement is about more than just products—it's about building lasting relationships, understanding your business, and delivering solutions that help you succeed.
              </p>
            </div>
            <div
              style={{
                backgroundColor: 'var(--color-bg-main)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Users size={120} style={{ color: 'var(--color-primary)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Our Foundation</span>
            <h2 style={{ marginBottom: '1rem' }}>Mission, Vision & Values</h2>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white'
                }}
              >
                <Target size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ fontSize: '0.875rem' }}>
                To simplify business procurement by providing quality products, reliable service, and solutions that help our customers focus on what they do best.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white'
                }}
              >
                <Eye size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ fontSize: '0.875rem' }}>
                To be India's most trusted business supply partner, known for reliability, quality, and exceptional customer service across all industries.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white'
                }}
              >
                <Heart size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Values</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Integrity, quality, customer focus, and continuous improvement guide everything we do. We believe in building relationships based on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Why Choose Us</span>
            <h2 style={{ marginBottom: '1rem' }}>The Sourzyn Difference</h2>
          </div>

          <div className="grid grid-2">
            {[
              {
                icon: <Award size={24} />,
                title: 'Quality Assurance',
                description: 'Every product is carefully sourced and quality-checked to ensure it meets our standards and your expectations.'
              },
              {
                icon: <Users size={24} />,
                title: 'Customer-First Approach',
                description: 'Your success is our priority. We listen, understand, and deliver solutions tailored to your specific needs.'
              },
              {
                icon: <TrendingUp size={24} />,
                title: 'Continuous Improvement',
                description: 'We constantly refine our processes and expand our offerings to better serve evolving business requirements.'
              },
              {
                icon: <Target size={24} />,
                title: 'Reliable Partnership',
                description: 'More than a supplier, we are a partner committed to your long-term success through consistent service.'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ marginBottom: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '0.875rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Our Approach to Procurement</h2>
              <p>
                We believe that effective procurement is about more than just placing orders. It's about understanding your business, anticipating your needs, and delivering solutions that add value.
              </p>
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Centralized sourcing for consistent quality and better pricing',
                  'Strategic vendor partnerships to ensure reliability',
                  'Flexible ordering options to match your workflow',
                  'Proactive inventory management support',
                  'Clear communication and transparent processes'
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}
                    >
                      <span style={{ fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                    </div>
                    <span style={{ fontSize: '0.9375rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                backgroundColor: 'var(--color-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <TrendingUp size={100} />
                <p style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Growing Together
                </p>
              </div>
            </div>
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
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Let's Discuss Your Requirements</h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                fontSize: '1.125rem'
              }}
            >
              Ready to experience the Sourzyn difference? Get in touch with our team to discuss how we can support your business.
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
