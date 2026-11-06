import { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { faqs, faqCategories } from '../data/faqs'

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Help & Support"
        description="Find answers to common questions about our products, services, ordering, delivery, and policies."
      />

      <section className="section">
        <div className="container">
          {/* Search and Filter */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
            <div className="grid grid-2" style={{ alignItems: 'end' }}>
              <div>
                <label>Search Questions</label>
                <div style={{ position: 'relative' }}>
                  <Search
                    size={20}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--color-text-muted)'
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>
              <div>
                <label>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {faqCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* FAQ List */}
          {filteredFaqs.length > 0 ? (
            <div className="container-narrow">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="card"
                  style={{
                    marginBottom: '1rem',
                    padding: '1.5rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ marginBottom: 0, flex: 1, marginRight: '1rem' }}>{faq.question}</h4>
                    {expandedFaq === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {expandedFaq === faq.id && (
                    <p style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.9375rem' }}>
                      {faq.answer}
                    </p>
                  )}
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginTop: '0.75rem',
                      display: 'inline-block'
                    }}
                  >
                    {faqCategories.find(c => c.id === faq.category)?.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <Search size={64} style={{ color: 'var(--color-text-muted)', margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>No FAQs Found</h3>
              <p style={{ marginBottom: '1.5rem' }}>Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all') }}
                className="btn btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Additional Help */}
          <div style={{ marginTop: '3rem' }}>
            <div className="card" style={{ backgroundColor: 'var(--color-bg-main)', border: 'none', textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Still Have Questions?</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <div className="flex gap-md" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
                <a href="/get-a-quote" className="btn btn-outline">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
