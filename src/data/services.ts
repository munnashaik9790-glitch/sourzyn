export interface Service {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  products: string[]
  benefits: string[]
  relatedServices: string[]
}

export const services: Service[] = [
  {
    id: 'office-essentials',
    slug: 'office-essentials',
    title: 'Office Essentials',
    description: 'Complete stationery and office supplies for daily business operations',
    icon: 'PenTool',
    products: [
      'Writing instruments (pens, pencils, markers)',
      'Notebooks and notepads',
      'Files and folders',
      'Desk organizers',
      'Paper and envelopes',
      'Calendars and planners',
      'Adhesives and tapes',
      'Correction supplies'
    ],
    benefits: [
      'Bulk procurement savings',
      'Consistent quality across supplies',
      'Centralized ordering process',
      'Just-in-time delivery options'
    ],
    relatedServices: ['print-solutions', 'it-supplies', 'housekeeping-hygiene']
  },
  {
    id: 'print-solutions',
    slug: 'print-solutions',
    title: 'Print Solutions & Branding',
    description: 'Professional printing and branding materials for corporate identity',
    icon: 'Printer',
    products: [
      'Business cards and stationery',
      'Marketing collateral',
      'Banners and signage',
      'Corporate merchandise',
      'Custom packaging',
      'Large format printing',
      'Branded promotional items'
    ],
    benefits: [
      'Brand consistency',
      'High-quality print output',
      'Custom design support',
      'Quick turnaround times'
    ],
    relatedServices: ['office-essentials', 'packaging-materials']
  },
  {
    id: 'it-supplies',
    slug: 'it-supplies',
    title: 'IT Supplies & Accessories',
    description: 'Technology accessories and IT infrastructure supplies',
    icon: 'Monitor',
    products: [
      'Computer peripherals',
      'Cables and connectors',
      'Storage devices',
      'Networking accessories',
      'Power strips and surge protectors',
      'Keyboard and mouse accessories',
      'Webcams and audio equipment'
    ],
    benefits: [
      'Reliable product quality',
      'Technical compatibility assurance',
      'Bulk pricing advantages',
      'Warranty support coordination'
    ],
    relatedServices: ['electronic-accessories', 'maintenance-safety']
  },
  {
    id: 'electronic-accessories',
    slug: 'electronic-accessories',
    title: 'Electronic Accessories',
    description: 'Electronic components and accessories for modern workplaces',
    icon: 'Zap',
    products: [
      'Charging solutions',
      'Battery packs',
      'Adapters and converters',
      'Mobile accessories',
      'Audio accessories',
      'Smart device accessories',
      'Cable management solutions'
    ],
    benefits: [
      'Quality-tested products',
      'Compatibility verification',
      'Competitive bulk pricing',
      'Consistent supply availability'
    ],
    relatedServices: ['it-supplies', 'maintenance-safety']
  },
  {
    id: 'housekeeping-hygiene',
    slug: 'housekeeping-hygiene',
    title: 'Housekeeping & Hygiene',
    description: 'Essential supplies for maintaining clean and hygienic workspaces',
    icon: 'Sparkles',
    products: [
      'Cleaning chemicals',
      'Mops and brooms',
      'Waste management supplies',
      'Floor care equipment',
      'Cleaning cloths and wipes',
      'Disinfectants and sanitizers',
      'Laundry supplies'
    ],
    benefits: [
      'Professional-grade products',
      'Health and safety compliance',
      'Cost-effective bulk purchasing',
      'Reliable inventory management'
    ],
    relatedServices: ['cleaning-solutions', 'healthcare-hygiene']
  },
  {
    id: 'healthcare-hygiene',
    slug: 'healthcare-hygiene',
    title: 'Healthcare & Hygiene Solutions',
    description: 'Specialized hygiene supplies for healthcare and wellness facilities',
    icon: 'HeartPulse',
    products: [
      'Medical consumables',
      'First aid supplies',
      'Personal protective equipment',
      'Healthcare cleaning supplies',
      'Medical waste management',
      'Wellness products',
      'Infection control supplies'
    ],
    benefits: [
      'Regulatory compliance',
      'Quality-certified products',
      'Specialized storage solutions',
      'Emergency stock availability'
    ],
    relatedServices: ['housekeeping-hygiene', 'cleaning-solutions']
  },
  {
    id: 'pantry-hospitality',
    slug: 'pantry-hospitality',
    title: 'Pantry & Hospitality Supplies',
    description: 'Pantry essentials and hospitality supplies for workplace comfort',
    icon: 'Coffee',
    products: [
      'Beverage supplies',
      'Snacks and refreshments',
      'Disposable tableware',
      'Kitchen appliances',
      'Water dispensers',
      'Catering supplies',
      'Hospitality amenities'
    ],
    benefits: [
      'Employee satisfaction',
      'Convenient bulk ordering',
      'Fresh product guarantee',
      'Flexible delivery schedules'
    ],
    relatedServices: ['recreation-supplies', 'cleaning-solutions']
  },
  {
    id: 'recreation-supplies',
    slug: 'recreation-supplies',
    title: 'Recreation & Employee Engagement',
    description: 'Supplies for employee recreation and engagement activities',
    icon: 'Gamepad2',
    products: [
      'Indoor games and sports equipment',
      'Team building materials',
      'Event supplies',
      'Recreation room furniture',
      'Wellness activity supplies',
      'Celebration and party supplies'
    ],
    benefits: [
      'Enhanced employee engagement',
      'Quality recreational products',
      'Customizable solutions',
      'Budget-friendly options'
    ],
    relatedServices: ['pantry-hospitality', 'office-essentials']
  },
  {
    id: 'cleaning-solutions',
    slug: 'cleaning-solutions',
    title: 'Professional Cleaning Solutions',
    description: 'Industrial-grade cleaning solutions for commercial facilities',
    icon: 'SprayCan',
    products: [
      'Industrial cleaning chemicals',
      'Specialized cleaning equipment',
      'Floor maintenance supplies',
      'Window cleaning solutions',
      'Carpet care products',
      'Restroom supplies',
      'Odor control products'
    ],
    benefits: [
      'Professional-grade effectiveness',
      'Safety-tested formulations',
      'Bulk cost savings',
      'Technical support available'
    ],
    relatedServices: ['housekeeping-hygiene', 'healthcare-hygiene']
  },
  {
    id: 'packaging-materials',
    slug: 'packaging-materials',
    title: 'Packaging Materials',
    description: 'Comprehensive packaging solutions for business operations',
    icon: 'Package',
    products: [
      'Corrugated boxes',
      'Bubble wrap and cushioning',
      'Tapes and adhesives',
      'Strapping materials',
      'Labels and tags',
      'Protective packaging',
      'Custom packaging solutions'
    ],
    benefits: [
      'Product protection assurance',
      'Custom sizing options',
      'Bulk volume discounts',
      'Sustainable material choices'
    ],
    relatedServices: ['print-solutions', 'maintenance-safety']
  },
  {
    id: 'maintenance-safety',
    slug: 'maintenance-safety',
    title: 'Repair, Maintenance & Safety Supplies',
    description: 'Tools and safety equipment for facility maintenance',
    icon: 'Wrench',
    products: [
      'Hand tools and equipment',
      'Safety gear and PPE',
      'Maintenance supplies',
      'Safety signage',
      'Fire safety equipment',
      'Electrical maintenance tools',
      'Plumbing supplies'
    ],
    benefits: [
      'Workplace safety compliance',
      'Quality tool assurance',
      'Comprehensive product range',
      'Emergency supply availability'
    ],
    relatedServices: ['electrical-sanitary', 'cleaning-solutions']
  },
  {
    id: 'electrical-sanitary',
    slug: 'electrical-sanitary',
    title: 'Electrical & Sanitary Supplies',
    description: 'Electrical components and sanitary maintenance supplies',
    icon: 'Lightbulb',
    products: [
      'Electrical fittings',
      'Lighting solutions',
      'Switches and sockets',
      'Sanitary fixtures',
      'Plumbing fittings',
      'Wiring accessories',
      'Maintenance components'
    ],
    benefits: [
      'Quality-certified products',
      'Technical specifications support',
      'Bulk procurement savings',
      'Reliable product availability'
    ],
    relatedServices: ['maintenance-safety', 'it-supplies']
  }
]
