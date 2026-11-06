import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { footerNav } from '../data/navigation'
import { siteConfig as config } from '../data/site-config'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
          <div>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>Sourzyn</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>
              {config.tagline}
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
              Your one-stop B2B business supply partner, delivering comprehensive workplace solutions across India.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerNav.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.875rem',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1rem' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.875rem',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1rem' }}>Contact</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Mail size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.125rem' }} />
                <a
                  href={`mailto:${config.contact.email}`}
                  style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}
                >
                  {config.contact.email}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.125rem' }} />
                <a
                  href={`tel:${config.contact.phone}`}
                  style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}
                >
                  {config.contact.phone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.125rem' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                  {config.contact.address}
                </span>
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a
                href={config.social.linkedin}
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={config.social.twitter}
                aria-label="Twitter"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Twitter size={18} />
              </a>
              <a
                href={config.social.facebook}
                aria-label="Facebook"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Facebook size={18} />
              </a>
              <a
                href={config.social.instagram}
                aria-label="Instagram"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', marginTop: '2rem' }}>
          <div className="flex flex-col items-center justify-between gap-md" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginBottom: 0 }}>
              © {new Date().getFullYear()} Sourzyn. All Rights Reserved.
            </p>
            <div className="flex gap-md" style={{ display: 'flex', gap: '1.5rem' }}>
              {footerNav.resources.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.875rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
