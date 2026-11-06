import PageHeader from '../components/PageHeader'

export default function TermsAndConditions() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Legal"
        description="Read Sourzyn's terms and conditions for using our website and services."
      />

      <section className="section">
        <div className="container">
          <div className="container-narrow">
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <section>
                <h2 style={{ marginBottom: '1rem' }}>Introduction</h2>
                <p>
                  These Terms and Conditions ("Terms") govern your use of the Sourzyn website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Services</h3>
                <p>
                  Sourzyn provides B2B business supply solutions including office essentials, IT supplies, packaging materials, and related products. We reserve the right to modify, suspend, or discontinue any service at any time.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>User Accounts</h3>
                <p>
                  To use certain services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Orders and Payments</h3>
                <p>
                  All orders are subject to availability and acceptance. We reserve the right to refuse or cancel orders. Payment terms will be specified in your quotation or invoice. Prices are subject to change without notice.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Product Information</h3>
                <p>
                  We strive to provide accurate product information. However, we do not warrant that descriptions are error-free. Colors and sizes may vary slightly from representations.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Delivery</h3>
                <p>
                  Delivery times are estimates and not guaranteed. We are not liable for delays caused by circumstances beyond our control. Risk of loss transfers to you upon delivery.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Returns and Refunds</h3>
                <p>
                  Our return and refund policy is outlined separately. Please refer to our Refund & Return Policy for detailed information.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Intellectual Property</h3>
                <p>
                  All content on this website, including text, graphics, logos, and images, is our property or the property of our licensors and is protected by intellectual property laws.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Indemnification</h3>
                <p>
                  You agree to indemnify and hold us harmless from any claims arising from your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Governing Law</h3>
                <p>
                  These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in [Your Jurisdiction].
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Changes to Terms</h3>
                <p>
                  We may modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Contact</h3>
                <p>
                  For questions about these Terms, please contact us at sales@sourzyn.com
                </p>
              </section>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-main)', border: 'none', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                  <strong>Disclaimer:</strong> This is a sample terms and conditions template. For legal compliance, this document should be reviewed and customized by legal professionals to ensure it meets applicable laws and regulations in your jurisdiction. Specific terms such as governing law and jurisdiction should be updated with your actual business location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
