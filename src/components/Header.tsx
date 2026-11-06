import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { mainNav } from '../data/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'white',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid var(--color-border-light)',
        transition: 'all var(--transition-base)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <Link
          to="/"
          style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em'
          }}
        >
          Sourzyn
        </Link>

        <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
          {mainNav.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: location.pathname === item.href ? 'var(--color-secondary)' : 'var(--color-text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.5rem 0'
                }}
              >
                {item.label}
                {item.children && <ChevronDown size={16} />}
              </Link>

              {item.children && activeDropdown === item.label && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    minWidth: '280px',
                    backgroundColor: 'white',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    padding: '0.5rem 0',
                    marginTop: '0.5rem'
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1.25rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-main)',
                        transition: 'background-color var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-main)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions" style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/get-a-quote"
            className="btn btn-primary"
            style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
          >
            Request a Quote
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          style={{
            display: 'block',
            padding: '0.5rem',
            color: 'var(--color-text-main)'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            overflowY: 'auto',
            padding: '1rem 0'
          }}
        >
          <nav style={{ padding: '0 1.5rem' }}>
            {mainNav.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.children ? toggleDropdown(item.label) : setIsMobileMenuOpen(false)}
                  style={{
                    width: '100%',
                    padding: '1rem 0',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--color-text-main)',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--color-border-light)'
                  }}
                >
                  {item.label}
                  {item.children && <ChevronDown size={16} style={{ transform: activeDropdown === item.label ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }} />}
                </button>

                {item.children && activeDropdown === item.label && (
                  <div style={{ paddingLeft: '1rem', backgroundColor: 'var(--color-bg-main)' }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          display: 'block',
                          padding: '0.875rem 1rem',
                          fontSize: '0.875rem',
                          color: 'var(--color-text-muted)',
                          borderBottom: '1px solid var(--color-border-light)'
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div style={{ padding: '1.5rem 0' }}>
              <Link
                to="/get-a-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .header-actions {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}
