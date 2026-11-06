import PageHeader from '../components/PageHeader'

export default function RefundReturnPolicy() {
  return (
    <>
      <PageHeader
        title="Refund & Return Policy"
        subtitle="Policies"
        description="Read Sourzyn's refund and return policy for products and services."
      />

      <section className="section">
        <div className="container">
          <div className="container-narrow">
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <section>
                <h2 style={{ marginBottom: '1rem' }}>Overview</h2>
                <p>
                  At Sourzyn, we strive to provide quality products and services. This Refund & Return Policy outlines the conditions under which returns and refunds are processed.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Return Eligibility</h3>
                <p>Returns may be accepted under the following conditions:</p>
                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>• Products are defective or damaged upon delivery</li>
                  <li>• Products differ significantly from the ordered specifications</li>
                  <li>• Products are returned within the specified return period</li>
                  <li>• Products are in original condition and packaging</li>
                </ul>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Return Period</h3>
                <p>
                  Returns must be initiated within [X] days of delivery. The specific return period may vary by product category and will be specified in your order confirmation.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Non-Returnable Items</h3>
                <p>The following items are generally not eligible for return:</p>
                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>• Customized or personalized products</li>
                  <li>• Perishable items</li>
                  <li>• Products that have been used or damaged after delivery</li>
                  <li>• Products without original packaging</li>
                </ul>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Return Process</h3>
                <p>To initiate a return:</p>
                <ol style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>1. Contact our customer service team with your order details</li>
                  <li>2. Provide reason for return and photos if applicable</li>
                  <li>3. Receive return authorization and shipping instructions</li>
                  <li>4. Ship the item back using the provided method</li>
                  <li>5. Receive refund or replacement upon inspection</li>
                </ol>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Refund Process</h3>
                <p>
                  Refunds will be processed to the original payment method within [X] business days of receiving and inspecting the returned item. Shipping costs are non-refundable unless the return is due to our error.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Exchanges</h3>
                <p>
                  Exchanges may be offered for defective or incorrect products. Exchange requests should be made within the return period and are subject to product availability.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Cancellations</h3>
                <p>
                  Orders may be cancelled before shipment. Once an order has shipped, it will be processed as a return. Custom orders cannot be cancelled once production has begun.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Damaged or Defective Items</h3>
                <p>
                  If you receive a damaged or defective item, please contact us immediately with photos of the damage. We will arrange for replacement or refund at no additional cost to you.
                </p>
              </section>

              <section>
                <h3 style={{ marginBottom: '0.75rem' }}>Contact for Returns</h3>
                <p>
                  For return requests or questions about this policy, please contact us at sales@sourzyn.com
                </p>
              </section>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-main)', border: 'none', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                  <strong>Disclaimer:</strong> This is a sample refund and return policy template. Specific terms such as return periods, refund timelines, and procedures should be customized to match your actual business practices. This document should be reviewed by legal professionals to ensure compliance with applicable consumer protection laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
