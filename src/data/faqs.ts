export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I place an order with Sourzyn?',
    answer: 'You can place an order by filling out our Request a Quote form, contacting us via email or phone, or using our catalogue enquiry system. Our team will review your requirements and provide a customized quotation.',
    category: 'ordering'
  },
  {
    id: '2',
    question: 'What is the minimum order quantity?',
    answer: 'Minimum order quantities vary by product category and supplier. We work with businesses of all sizes and can often accommodate smaller orders for certain product lines. Contact us with your specific requirements.',
    category: 'ordering'
  },
  {
    id: '3',
    question: 'How do I get a quotation?',
    answer: 'Submit your requirements through our Request a Quote form with details about products, quantities, and delivery location. Our team typically responds within 1-2 business days with a detailed quotation.',
    category: 'quotations'
  },
  {
    id: '4',
    question: 'Are the quotations binding?',
    answer: 'Quotations are valid for a specified period and are subject to product availability. Final pricing may be adjusted based on actual order quantities and delivery requirements.',
    category: 'quotations'
  },
  {
    id: '5',
    question: 'What product categories do you offer?',
    answer: 'We offer 12 main product categories including Office Essentials, Print Solutions & Branding, IT Supplies, Electronic Accessories, Housekeeping & Hygiene, Healthcare Solutions, Pantry Supplies, Recreation Supplies, Cleaning Solutions, Packaging Materials, Maintenance & Safety, and Electrical & Sanitary supplies.',
    category: 'products'
  },
  {
    id: '6',
    question: 'Do you offer custom or branded products?',
    answer: 'Yes, we offer custom printing and branding solutions through our Print Services category. This includes business cards, stationery, promotional items, and custom packaging.',
    category: 'products'
  },
  {
    id: '7',
    question: 'What are your delivery timelines?',
    answer: 'Delivery timelines depend on product availability, order size, and delivery location. Standard orders typically deliver within 5-10 business days. Custom or special-order items may require additional lead time.',
    category: 'delivery'
  },
  {
    id: '8',
    question: 'Do you deliver nationwide?',
    answer: 'Yes, we provide delivery services across India. Delivery times and shipping costs may vary based on location. We work with reliable logistics partners to ensure timely delivery.',
    category: 'delivery'
  },
  {
    id: '9',
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfers, checks, and corporate credit accounts. Payment terms can be discussed based on order size and business relationship.',
    category: 'payments'
  },
  {
    id: '10',
    question: 'Do you offer credit accounts?',
    answer: 'Credit account facilities are available for qualifying businesses after approval. Contact our sales team to discuss credit terms and application requirements.',
    category: 'payments'
  },
  {
    id: '11',
    question: 'How can I track my order?',
    answer: 'Once your order is confirmed and dispatched, we provide tracking information where available. You can also contact our support team for order status updates.',
    category: 'support'
  },
  {
    id: '12',
    question: 'What is your return and refund policy?',
    answer: 'Returns are accepted for defective or damaged products within a specified period. Please refer to our detailed Refund & Return Policy or contact us for specific return requests.',
    category: 'support'
  }
]

export const faqCategories = [
  { id: 'ordering', label: 'Ordering' },
  { id: 'quotations', label: 'Quotations' },
  { id: 'products', label: 'Products' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'payments', label: 'Payments' },
  { id: 'support', label: 'Support' }
]
