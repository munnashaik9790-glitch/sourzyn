export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  author: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'streamlining-office-procurement',
    title: 'Streamlining Office Procurement: A Guide for Businesses',
    excerpt: 'Learn how centralized procurement can save time and reduce costs for your organization.',
    content: 'Effective office procurement is crucial for business efficiency. By centralizing your purchasing processes, you can achieve significant cost savings, improve quality consistency, and reduce administrative overhead.\n\nKey benefits include:\n- Better negotiation power with suppliers\n- Consistent product quality\n- Reduced administrative time\n- Improved inventory management\n\nStart by analyzing your current spending patterns and identifying opportunities for consolidation.',
    category: 'Procurement',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Sourzyn Team'
  },
  {
    id: '2',
    slug: 'sustainable-office-practices',
    title: 'Sustainable Office Practices: Eco-Friendly Supply Choices',
    excerpt: 'Discover how businesses can reduce their environmental footprint through smart supply decisions.',
    content: 'Sustainability in office operations starts with conscious supply chain decisions. From recycled paper products to energy-efficient equipment, every choice matters.\n\nConsider implementing:\n- Recycled and recyclable products\n- Bulk purchasing to reduce packaging\n- Energy-efficient office equipment\n- Non-toxic cleaning supplies\n\nSmall changes add up to significant environmental impact over time.',
    category: 'Sustainability',
    date: '2024-01-10',
    readTime: '4 min read',
    author: 'Sourzyn Team'
  },
  {
    id: '3',
    slug: 'workplace-hygiene-best-practices',
    title: 'Workplace Hygiene Best Practices for Healthier Offices',
    excerpt: 'Essential hygiene supplies and practices to maintain a healthy work environment.',
    content: 'Maintaining workplace hygiene is essential for employee health and productivity. A well-stocked hygiene program includes regular supplies of sanitizers, cleaning materials, and personal protective equipment.\n\nKey elements:\n- Hand sanitizing stations\n- Regular cleaning schedules\n- Air quality management\n- Waste management systems\n\nInvesting in quality hygiene supplies reduces absenteeism and creates a more comfortable work environment.',
    category: 'Workplace',
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'Sourzyn Team'
  }
]

export const blogCategories = [
  'Procurement',
  'Sustainability',
  'Workplace',
  'Business Tips',
  'Industry Insights'
]
