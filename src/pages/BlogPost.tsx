import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'
import { blogPosts, blogCategories } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2)

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />
      <PageHeader
        title={post.title}
        subtitle="Blog Article"
        description={post.excerpt}
      />

      <article className="section">
        <div className="container">
          <div className="grid grid-3" style={{ alignItems: 'start' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <Link
                to="/blog"
                className="flex gap-sm"
                style={{
                  alignItems: 'center',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '2rem',
                  display: 'inline-flex'
                }}
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>

              <div className="flex gap-md" style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                <span className="flex gap-sm" style={{ alignItems: 'center' }}>
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex gap-sm" style={{ alignItems: 'center' }}>
                  <Clock size={16} />
                  {post.readTime}
                </span>
                <span style={{ color: 'var(--color-secondary)' }}>{post.category}</span>
              </div>

              <div
                style={{
                  height: '300px',
                  backgroundColor: 'var(--color-bg-main)',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ color: 'var(--color-text-muted)' }}>Article Featured Image</span>
              </div>

              <div style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1.5rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="card" style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--color-bg-main)', border: 'none' }}>
                <div className="flex justify-between items-center" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Written by {post.author}</h4>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Sourzyn Team</span>
                  </div>
                  <button className="btn btn-outline btn-sm flex gap-sm" style={{ alignItems: 'center' }}>
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '1.5rem', position: 'sticky', top: '100px' }}>
                <h4 style={{ marginBottom: '1rem' }}>Categories</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {blogCategories.map(cat => (
                    <Link
                      key={cat}
                      to="/blog"
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: 'var(--color-bg-main)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-muted)',
                        textDecoration: 'none'
                      }}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="card" style={{ padding: '1.5rem', marginTop: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Related Articles</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {relatedPosts.map(related => (
                      <Link
                        key={related.id}
                        to={`/blog/${related.slug}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <h5 style={{ fontSize: '0.9375rem', marginBottom: '0.25rem', color: 'var(--color-text-main)' }}>
                          {related.title}
                        </h5>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                          {related.readTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
