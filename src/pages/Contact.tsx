import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'
import { siteConfig } from '../data/site-config'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Demo mode
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitSuccess) {
    return (
      <>
        <SEO title="Contact Us" description="Get in touch with Sourzyn for your business supply needs." />
        <PageHeader
          title="Contact Us"
          subtitle="Get in Touch"
          description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />
        <section className="section">
          <div className="container">
            <div className="container-narrow">
              <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white'
                  }}
                >
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>✓</span>
                </div>
                <h2 style={{ marginBottom: '1rem' }}>Message Sent</h2>
                <p style={{ marginBottom: '2rem' }}>
                  Thank you for contacting us. Our team will get back to you within 1-2 business days.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Sourzyn for your business supply needs." />
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Send Us a Message</h2>
              <p style={{ marginBottom: '2rem' }}>
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <div className="card" style={{ padding: '2rem' }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="7842371473"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Enquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Product Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: '1rem' }}>Contact Information</h2>
              <p style={{ marginBottom: '2rem' }}>
                Reach out to us directly through any of the following channels.
              </p>

              <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                      <a
                        href="mailto:sales@sourzyn.com"
                        style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}
                      >
                        sales@sourzyn.com
                      </a>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                      <a
                        href="tel:+91XXXXXXXXXX"
                        style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}
                      >
                        7842371473
                      </a>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Address</h4>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', marginBottom: 0 }}>
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}
                    >
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Business Hours</h4>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', marginBottom: 0 }}>
                        Mon - Sat: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--color-bg-main)', border: 'none' }}>
                <h3 style={{ marginBottom: '1rem' }}>Quick Enquiry?</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                  For quick quotations, use our dedicated quote request form for faster processing.
                </p>
                <a
                  href="/get-a-quote"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Business Enquiry Guidance</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              For the fastest response, please include your company name, specific product requirements, estimated quantities, and delivery location in your enquiry. This helps us provide accurate quotations and timely service.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
