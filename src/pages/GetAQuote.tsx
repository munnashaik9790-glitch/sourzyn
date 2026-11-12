import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

interface FormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  category: string
  quantity: string
  location: string
  requirements: string
}

interface FormErrors {
  fullName?: string
  companyName?: string
  email?: string
  phone?: string
  category?: string
  location?: string
  requirements?: string
}

export default function GetAQuote() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: '',
    quantity: '',
    location: '',
    requirements: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Delivery location is required'
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please describe your requirements'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    // Demo mode - in production, this would send data to a backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, just show success
      setSubmitSuccess(true)
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        category: '',
        quantity: '',
        location: '',
        requirements: ''
      })
    } catch {
      setSubmitError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (submitSuccess) {
    return (
      <>
        <SEO title="Request a Quote" description="Get a customized quotation for your business supply requirements." />
        <PageHeader
          title="Request a Quote"
          subtitle="Get Started"
          description="Submit your requirements and we'll provide a customized quotation."
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
                <h2 style={{ marginBottom: '1rem' }}>Quote Request Submitted</h2>
                <p style={{ marginBottom: '2rem' }}>
                  Thank you for your enquiry. Our team will review your requirements and get back to you within 1-2 business days with a detailed quotation.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="btn btn-secondary"
                >
                  Submit Another Request
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
      <SEO title="Request a Quote" description="Get a customized quotation for your business supply requirements." />
      <PageHeader
        title="Request a Quote"
        subtitle="Get Started"
        description="Submit your requirements and we'll provide a customized quotation."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tell Us About Your Requirements</h2>
              <p style={{ marginBottom: '2rem' }}>
                Fill out the form below with your requirements and our team will provide a customized quotation tailored to your needs.
              </p>

              <div className="card" style={{ padding: '2rem' }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="error">{errors.fullName}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                    {errors.companyName && <p className="error">{errors.companyName}</p>}
                  </div>

                  <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="email">Business Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com"
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="7842371473"
                      />
                      {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="category">Product/Service Category *</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="">Select a category</option>
                        <option value="office-essentials">Office Essentials</option>
                        <option value="print-solutions">Print Solutions & Branding</option>
                        <option value="it-supplies">IT Supplies & Accessories</option>
                        <option value="electronic-accessories">Electronic Accessories</option>
                        <option value="housekeeping-hygiene">Housekeeping & Hygiene</option>
                        <option value="healthcare-hygiene">Healthcare & Hygiene Solutions</option>
                        <option value="pantry-hospitality">Pantry & Hospitality Supplies</option>
                        <option value="recreation-supplies">Recreation & Employee Engagement</option>
                        <option value="cleaning-solutions">Professional Cleaning Solutions</option>
                        <option value="packaging-materials">Packaging Materials</option>
                        <option value="maintenance-safety">Repair, Maintenance & Safety</option>
                        <option value="electrical-sanitary">Electrical & Sanitary Supplies</option>
                      </select>
                      {errors.category && <p className="error">{errors.category}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="quantity">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 100 units, 5 boxes"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Delivery City/Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your delivery location"
                    />
                    {errors.location && <p className="error">{errors.location}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirements">Requirement Details *</label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your specific requirements, product specifications, or any other details..."
                    />
                    {errors.requirements && <p className="error">{errors.requirements}</p>}
                  </div>

                  {submitError && (
                    <div style={{ padding: '1rem', backgroundColor: '#FEE2E2', color: '#DC2626', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                    By submitting this form, you agree to our privacy policy. We will only use your information to process your enquiry.
                  </p>
                </form>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>What Happens Next?</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>1.</span>
                    <span style={{ fontSize: '0.9375rem' }}>Our team reviews your requirements within 1 business day</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>2.</span>
                    <span style={{ fontSize: '0.9375rem' }}>We prepare a customized quotation with pricing and delivery details</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>3.</span>
                    <span style={{ fontSize: '0.9375rem' }}>You receive the quotation via email within 1-2 business days</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>4.</span>
                    <span style={{ fontSize: '0.9375rem' }}>Our team follows up to answer any questions and help you finalize your order</span>
                  </li>
                </ul>
              </div>

              <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--color-bg-main)', border: 'none' }}>
                <h3 style={{ marginBottom: '1rem' }}>Need Immediate Assistance?</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                  If you have urgent requirements or prefer to discuss your needs directly, contact us via phone or email.
                </p>
                <a
                  href="mailto:sales@sourzyn.com"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
                >
                  Email Us
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
