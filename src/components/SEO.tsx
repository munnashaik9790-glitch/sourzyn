import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoConfig } from '../data/site-config'

interface SEOProps {
  title?: string
  description?: string
}

export default function SEO({ title, description }: SEOProps) {
  const location = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | Sourzyn` : seoConfig.defaultTitle
    const metaDescription = description || seoConfig.defaultDescription

    document.title = fullTitle

    // Update meta description
    let metaDescriptionEl = document.querySelector('meta[name="description"]')
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta')
      metaDescriptionEl.setAttribute('name', 'description')
      document.head.appendChild(metaDescriptionEl)
    }
    metaDescriptionEl.setAttribute('content', metaDescription)

    return () => {
      // Cleanup if needed
    }
  }, [title, description, location])

  return null
}
