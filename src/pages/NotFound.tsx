import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '8rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1 }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex gap-md" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary flex gap-sm" style={{ alignItems: 'center' }}>
            <Home size={18} />
            Back to Home
          </Link>
          <Link to="/services" className="btn btn-outline flex gap-sm" style={{ alignItems: 'center' }}>
            <ArrowLeft size={18} />
            Browse Services
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
