import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Package, Filter, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { services } from '../data/services'

export default function Catalogue() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const demoProducts = [
    { id: 1, name: 'Premium Writing Set', category: 'office-essentials', price: 'Contact for pricing' },
    { id: 2, name: 'Business Card Pack', category: 'print-solutions', price: 'Contact for pricing' },
    { id: 3, name: 'USB Hub & Accessories', category: 'it-supplies', price: 'Contact for pricing' },
    { id: 4, name: 'Cleaning Kit Bundle', category: 'housekeeping-hygiene', price: 'Contact for pricing' },
    { id: 5, name: 'First Aid Kit', category: 'healthcare-hygiene', price: 'Contact for pricing' },
    { id: 6, name: 'Pantry Supplies Pack', category: 'pantry-hospitality', price: 'Contact for pricing' },
    { id: 7, name: 'Packaging Box Set', category: 'packaging-materials', price: 'Contact for pricing' },
    { id: 8, name: 'Safety Equipment Kit', category: 'maintenance-safety', price: 'Contact for pricing' }
  ]

  const filteredProducts = demoProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <PageHeader
        title="Product Catalogue"
        subtitle="Browse Products"
        description="Explore our range of business supplies and products. Contact us for detailed pricing and availability."
      />

      <section className="section">
        <div className="container">
          {/* Search and Filter */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
            <div className="grid grid-2" style={{ alignItems: 'end' }}>
              <div>
                <label>Search Products</label>
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
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>
              <div>
                <label>Category</label>
                <div style={{ position: 'relative' }}>
                  <Filter
                    size={20}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--color-text-muted)'
                    }}
                  />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ paddingLeft: '3rem' }}
                  >
                    <option value="all">All Categories</option>
                    {services.map(service => (
                      <option key={service.id} value={service.slug}>{service.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-4">
              {filteredProducts.map((product) => {
                const service = services.find(s => s.slug === product.category)
                return (
                  <div key={product.id} className="card" style={{ padding: '1.5rem' }}>
                    <div
                      style={{
                        width: '100%',
                        height: '150px',
                        backgroundColor: 'var(--color-bg-main)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                      }}
                    >
                      <Package size={48} style={{ color: 'var(--color-text-muted)' }} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.5rem',
                        display: 'block'
                      }}
                    >
                      {service?.title}
                    </span>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{product.name}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                      {product.price}
                    </p>
                    <Link
                      to="/get-a-quote"
                      className="btn btn-outline btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Enquire
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <Package size={64} style={{ color: 'var(--color-text-muted)', margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>No Products Found</h3>
              <p style={{ marginBottom: '1.5rem' }}>Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all') }}
                className="btn btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Request Catalogue */}
          <div style={{ marginTop: '3rem' }}>
            <div className="card" style={{ backgroundColor: 'var(--color-bg-main)', border: 'none' }}>
              <div className="grid grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <h3 style={{ marginBottom: '0.75rem' }}>Request Full Catalogue</h3>
                  <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                    Get access to our complete product catalogue with detailed specifications and pricing information.
                  </p>
                  <Link to="/get-a-quote" className="btn btn-primary">
                    Request Catalogue <ArrowRight size={16} />
                  </Link>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                  }}
                >
                  <Package size={80} style={{ color: 'var(--color-secondary)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              Note: This is a demonstration catalogue with sample products. For detailed product information, availability, and pricing, please contact us directly or submit a quotation request.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
