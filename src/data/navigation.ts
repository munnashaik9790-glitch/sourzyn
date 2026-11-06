export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products & Services',
    href: '/services',
    children: [
      { label: 'Office Essentials', href: '/services/office-essentials' },
      { label: 'Print Solutions & Branding', href: '/services/print-solutions' },
      { label: 'IT Supplies & Accessories', href: '/services/it-supplies' },
      { label: 'Electronic Accessories', href: '/services/electronic-accessories' },
      { label: 'Housekeeping & Hygiene', href: '/services/housekeeping-hygiene' },
      { label: 'Healthcare & Hygiene Solutions', href: '/services/healthcare-hygiene' },
      { label: 'Pantry & Hospitality Supplies', href: '/services/pantry-hospitality' },
      { label: 'Recreation & Employee Engagement', href: '/services/recreation-supplies' },
      { label: 'Professional Cleaning Solutions', href: '/services/cleaning-solutions' },
      { label: 'Packaging Materials', href: '/services/packaging-materials' },
      { label: 'Repair, Maintenance & Safety', href: '/services/maintenance-safety' },
      { label: 'Electrical & Sanitary Supplies', href: '/services/electrical-sanitary' }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Corporate & Offices', href: '/industries/corporate-offices' },
      { label: 'Education & Institutions', href: '/industries/education' },
      { label: 'Healthcare & Pharma', href: '/industries/healthcare' },
      { label: 'Retail & FMCG', href: '/industries/retail-fmcg' },
      { label: 'E-commerce & Logistics', href: '/industries/ecommerce-logistics' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Manufacturing & Industrial', href: '/industries/manufacturing' },
      { label: 'Facility Management', href: '/industries/facility-management' }
    ]
  },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Clients & Testimonials', href: '/clients-testimonials' },
  { label: 'Contact', href: '/contact' }
]

export const footerNav = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products & Services', href: '/services' },
    { label: 'Industries We Serve', href: '/industries' },
    { label: 'Catalogue', href: '/catalogue' }
  ],
  services: [
    { label: 'Office Essentials', href: '/services/office-essentials' },
    { label: 'IT Supplies', href: '/services/it-supplies' },
    { label: 'Packaging Materials', href: '/services/packaging-materials' },
    { label: 'Cleaning Solutions', href: '/services/cleaning-solutions' }
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Refund & Return Policy', href: '/refund-return-policy' }
  ]
}
