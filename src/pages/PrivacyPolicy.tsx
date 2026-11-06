import PageHeader from '../components/PageHeader'

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Legal"
        description="Read Sourzyn's privacy policy and understand how we collect, use, and protect your information."
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
                  Sourzyn ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this policy carefully.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Information We Collect</h3>
                <p>We may collect the following types of information:</p>
                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>• Personal information: Name, email address, phone number, company name</li>
                  <li>• Business information: Company details, procurement requirements</li>
                  <li>• Technical information: IP address, browser type, device information</li>
                  <li>• Usage information: Pages visited, time spent, features used</li>
                </ul>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>How We Use Your Information</h3>
                <p>We use your information for the following purposes:</p>
                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>• To process and respond to your enquiries and quote requests</li>
                  <li>• To provide products and services you request</li>
                  <li>• To communicate with you about orders and services</li>
                  <li>• To improve our website and services</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Data Sharing</h3>
                <p>
                  We do not sell your personal information. We may share your information only with:</p>
                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>• Service providers who assist in operating our business</li>
                  <li>• Business partners with your explicit consent</li>
                  <li>• As required by law or to protect our rights</li>
                </ul>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Data Security</h3>
                <p>
                  We implement reasonable security measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Your Rights</h3>
                <p>You have the right to:</p>
                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Cookies</h3>
                <p>
                  We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Changes to This Policy</h3>
                <p>
                  We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on our website.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Contact Us</h3>
                <p>
                  If you have questions about this privacy policy or our data practices, please contact us at sales@sourzyn.com
                </p>
              </section>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-main)', border: 'none', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                  <strong>Disclaimer:</strong> This is a sample privacy policy template. For legal compliance, this document should be reviewed and customized by legal professionals to ensure it meets applicable laws and regulations in your jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
