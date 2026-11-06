export interface Industry {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  requirements: string[]
  solutions: string[]
  relevantCategories: string[]
}

export const industries: Industry[] = [
  {
    id: 'corporate-offices',
    slug: 'corporate-offices',
    title: 'Corporate & Offices',
    description: 'Comprehensive supply solutions for corporate offices and business centers',
    icon: 'Building2',
    requirements: [
      'Daily stationery and office supplies',
      'IT infrastructure accessories',
      'Pantry and refreshment supplies',
      'Housekeeping and cleaning materials',
      'Event and meeting supplies'
    ],
    solutions: [
      'Centralized procurement portal',
      'Scheduled delivery programs',
      'Customized supply packages',
      'Budget management tools'
    ],
    relevantCategories: ['office-essentials', 'it-supplies', 'pantry-hospitality', 'housekeeping-hygiene']
  },
  {
    id: 'education',
    slug: 'education',
    title: 'Education & Institutions',
    description: 'Specialized supplies for schools, colleges, and educational institutions',
    icon: 'GraduationCap',
    requirements: [
      'Educational stationery',
      'Classroom supplies',
      'Administrative materials',
      'Cleaning and hygiene products',
      'Event and ceremony supplies'
    ],
    solutions: [
      'Academic calendar-based planning',
      'Volume-based pricing',
      'Campus-wide delivery',
      'Seasonal inventory management'
    ],
    relevantCategories: ['office-essentials', 'print-solutions', 'housekeeping-hygiene', 'cleaning-solutions']
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare & Pharma',
    description: 'Regulated supplies for healthcare facilities and pharmaceutical companies',
    icon: 'Stethoscope',
    requirements: [
      'Medical consumables',
      'Healthcare hygiene products',
      'Administrative supplies',
      'Safety and PPE equipment',
      'Specialized packaging'
    ],
    solutions: [
      'Compliance-certified products',
      'Quality documentation',
      'Temperature-controlled logistics',
      'Emergency stock programs'
    ],
    relevantCategories: ['healthcare-hygiene', 'housekeeping-hygiene', 'packaging-materials', 'maintenance-safety']
  },
  {
    id: 'retail-fmcg',
    slug: 'retail-fmcg',
    title: 'Retail & FMCG',
    description: 'Supply chain solutions for retail and fast-moving consumer goods businesses',
    icon: 'ShoppingCart',
    requirements: [
      'Packaging materials',
      'Point-of-sale supplies',
      'Display and signage materials',
      'Operational supplies',
      'Customer experience materials'
    ],
    solutions: [
      'Just-in-time delivery',
      'Custom packaging solutions',
      'Seasonal demand planning',
      'Multi-location coordination'
    ],
    relevantCategories: ['packaging-materials', 'print-solutions', 'cleaning-solutions', 'electronic-accessories']
  },
  {
    id: 'ecommerce-logistics',
    slug: 'ecommerce-logistics',
    title: 'E-commerce & Logistics',
    description: 'Packaging and operational supplies for e-commerce and logistics companies',
    icon: 'Truck',
    requirements: [
      'Shipping packaging',
      'Labeling and tagging',
      'Warehouse supplies',
      'Operational equipment',
      'Safety gear'
    ],
    solutions: [
      'Bulk packaging programs',
      'Custom sizing options',
      'Automated ordering systems',
      'Volume-based discounts'
    ],
    relevantCategories: ['packaging-materials', 'maintenance-safety', 'it-supplies', 'print-solutions']
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    title: 'Hospitality',
    description: 'Premium supplies for hotels, restaurants, and hospitality businesses',
    icon: 'Utensils',
    requirements: [
      'Guest room amenities',
      'Kitchen and pantry supplies',
      'Housekeeping materials',
      'Branded merchandise',
      'Event and banquet supplies'
    ],
    solutions: [
      'Branded amenity programs',
      'Quality assurance',
      'Flexible delivery schedules',
      'Custom product development'
    ],
    relevantCategories: ['pantry-hospitality', 'housekeeping-hygiene', 'print-solutions', 'cleaning-solutions']
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial',
    description: 'Industrial supplies for manufacturing facilities and industrial operations',
    icon: 'Factory',
    requirements: [
      'Safety equipment and PPE',
      'Maintenance tools and supplies',
      'Industrial cleaning solutions',
      'Operational consumables',
      'Electrical and sanitary components'
    ],
    solutions: [
      'Safety compliance support',
      'Industrial-grade products',
      'Scheduled maintenance supplies',
      'Bulk inventory management'
    ],
    relevantCategories: ['maintenance-safety', 'cleaning-solutions', 'electrical-sanitary', 'packaging-materials']
  },
  {
    id: 'facility-management',
    slug: 'facility-management',
    title: 'Facility Management',
    description: 'Comprehensive supplies for facility management companies',
    icon: 'Settings',
    requirements: [
      'Cleaning and hygiene products',
      'Maintenance supplies',
      'Safety equipment',
      'Operational consumables',
      'Administrative supplies'
    ],
    solutions: [
      'Multi-site coordination',
        'Centralized billing',
        'Quality standardization',
        'Emergency response supplies'
    ],
    relevantCategories: ['cleaning-solutions', 'housekeeping-hygiene', 'maintenance-safety', 'electrical-sanitary']
  }
]
