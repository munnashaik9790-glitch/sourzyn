import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { blogPosts, blogCategories } from '../data/blog'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <PageHeader
        title="Blog & Resources"
        subtitle="Insights"
        description="Read articles and insights about business procurement, workplace management, and industry trends."
      />

      <section className="section">
        <div className="container">
          {/* Search and Filter */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
            <div className="grid grid-2" style={{ alignItems: 'end' }}>
              <div>
                <label>Search Articles</label>
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
                    placeholder="Search articles..."
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
                  {blogCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="card"
                  style={{ textDecoration: 'none', padding: 0, overflow: 'hidden' }}
                >
                  <div
                    style={{
                      height: '180px',
                      backgroundColor: 'var(--color-bg-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Article Image</span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.75rem',
                        display: 'inline-block'
                      }}
                    >
                      {post.category}
                    </span>
                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{post.title}</h3>
                    <p style={{ fontSize: '0.875rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex gap-sm" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      <span className="flex gap-sm" style={{ alignItems: 'center' }}>
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex gap-sm" style={{ alignItems: 'center' }}>
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <Search size={64} style={{ color: 'var(--color-text-muted)', margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>No Articles Found</h3>
              <p style={{ marginBottom: '1.5rem' }}>Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all') }}
                className="btn btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              Note: These are demonstration articles. Authentic blog content will be published as we develop our resources.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
