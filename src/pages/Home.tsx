import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Package, Truck, Shield, Users } from 'lucide-react'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { faqs } from '../data/faqs'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          padding: '6rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}
              >
                Business Supply Solutions
              </span>
              <h1 style={{ color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Everything Your Business Needs. One Reliable Partner.
              </h1>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.125rem',
                  marginBottom: '2rem',
                  maxWidth: '500px'
                }}
              >
                Streamline your workplace procurement with Sourzyn. From office essentials to specialized supplies, we deliver quality products and exceptional service across India.
              </p>
              <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
                <Link to="/get-a-quote" className="btn btn-primary btn-lg">
                  Request a Quote <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px'
              }}
            >
              <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}>
                <Package size={120} />
                <p style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Professional Business Supplies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section style={{ backgroundColor: 'var(--color-bg-main)', padding: '3rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Package size={32} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>12+ Categories</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Comprehensive product range</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Truck size={32} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Nationwide Delivery</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Across India</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Shield size={32} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Quality Assured</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Reliable products</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Users size={32} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Dedicated Support</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Customer-focused service</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>About Sourzyn</span>
              <h2 style={{ marginBottom: '1rem' }}>Your Trusted Business Supply Partner</h2>
              <p>
                Sourzyn is a modern B2B procurement partner dedicated to simplifying workplace supply management. We understand that running an efficient business requires reliable access to quality supplies without the complexity of managing multiple vendors.
              </p>
              <p>
                Our mission is to provide businesses across India with a streamlined procurement experience, offering everything from daily office essentials to specialized industrial supplies under one roof. With a focus on quality, reliability, and customer service, we help you focus on what matters most—growing your business.
              </p>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Learn More About Us
              </Link>
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
              <div style={{ textAlign: 'center' }}>
                <Users size={100} style={{ color: 'var(--color-primary)' }} />
                <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                  Partnering with Businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Our Services</span>
            <h2 style={{ marginBottom: '1rem' }}>Comprehensive Supply Solutions</h2>
            <p>
              From office essentials to specialized industrial supplies, we offer a complete range of products to keep your business running smoothly.
            </p>
          </div>

          <div className="grid grid-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="card"
                style={{ textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
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
                    <Package size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: 0 }}>{service.title}</h3>
                </div>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{service.description}</p>
                <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Why Choose Sourzyn</span>
            <h2 style={{ marginBottom: '1rem' }}>The Sourzyn Advantage</h2>
            <p>
              We go beyond being just a supplier—we become your strategic procurement partner.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                title: 'One-Stop Solution',
                description: 'Access all your workplace supplies from a single trusted partner, reducing vendor management complexity.'
              },
              {
                title: 'Quality Assurance',
                description: 'Every product is carefully sourced to meet quality standards, ensuring reliability and consistency.'
              },
              {
                title: 'Cost Effective',
                description: 'Competitive pricing through bulk procurement and efficient supply chain management.'
              },
              {
                title: 'Nationwide Delivery',
                description: 'Reliable delivery network across India with flexible scheduling to meet your needs.'
              },
              {
                title: 'Dedicated Support',
                description: 'Personalized customer service to help you find the right products and solutions.'
              },
              {
                title: 'Easy Procurement',
                description: 'Streamlined ordering process with clear communication and timely responses.'
              }
            ].map((item, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white'
                  }}
                >
                  <CheckCircle size={28} />
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Industries We Serve</span>
            <h2 style={{ marginBottom: '1rem' }}>Tailored Solutions for Every Sector</h2>
            <p>
              We understand the unique requirements of different industries and provide customized supply solutions.
            </p>
          </div>

          <div className="grid grid-4">
            {industries.slice(0, 8).map((industry) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.slug}`}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'white'
                  }}
                >
                  <Users size={24} />
                </div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{industry.title}</h4>
                <p style={{ fontSize: '0.8125rem', marginBottom: 0 }}>{industry.description.substring(0, 60)}...</p>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/industries" className="btn btn-secondary">
              Explore All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>How It Works</span>
            <h2 style={{ marginBottom: '1rem' }}>Simple Procurement Process</h2>
            <p>
              Getting your supplies is easy with our streamlined process.
            </p>
          </div>

          <div className="grid grid-4">
            {[
              { step: '01', title: 'Submit Enquiry', description: 'Tell us what you need through our quote form or contact us directly.' },
              { step: '02', title: 'Receive Quote', description: 'Get a detailed quotation with pricing and delivery timelines.' },
              { step: '03', title: 'Confirm Order', description: 'Review and confirm your order with our team.' },
              { step: '04', title: 'Delivery', description: 'Receive your supplies at your location on schedule.' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: 'var(--color-border-light)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.step}
                </span>
                <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>FAQs</span>
            <h2 style={{ marginBottom: '1rem' }}>Common Questions</h2>
          </div>

          <div className="container-narrow">
            {faqs.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className="card"
                style={{ marginBottom: '1rem', padding: '1.5rem' }}
              >
                <h4 style={{ marginBottom: '0.5rem' }}>{faq.question}</h4>
                <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{faq.answer}</p>
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

      {/* CTA Section */}
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
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Streamline Your Procurement?</h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                fontSize: '1.125rem'
              }}
            >
              Get in touch with Sourzyn today and discover how we can simplify your business supply management.
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
