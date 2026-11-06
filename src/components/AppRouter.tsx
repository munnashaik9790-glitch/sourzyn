import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import SEO from './SEO'

// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import ServiceDetail from '../pages/ServiceDetail'
import Industries from '../pages/Industries'
import IndustryDetail from '../pages/IndustryDetail'
import ClientsTestimonials from '../pages/ClientsTestimonials'
import Catalogue from '../pages/Catalogue'
import GetAQuote from '../pages/GetAQuote'
import Contact from '../pages/Contact'
import FAQs from '../pages/FAQs'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsAndConditions from '../pages/TermsAndConditions'
import RefundReturnPolicy from '../pages/RefundReturnPolicy'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<><SEO /><Home /></>} />
        <Route path="/about" element={<><SEO title="About Us" description="Learn about Sourzyn's mission, vision, and commitment to being your trusted business supply partner." /><About /></>} />
        <Route path="/services" element={<><SEO title="Products & Services" description="Explore our comprehensive range of business supplies and procurement solutions." /><Services /></>} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industries" element={<><SEO title="Industries We Serve" description="Discover how Sourzyn serves diverse industries across India with tailored supply solutions." /><Industries /></>} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/clients-testimonials" element={<><SEO title="Clients & Testimonials" description="See what our clients say about partnering with Sourzyn for their business supply needs." /><ClientsTestimonials /></>} />
        <Route path="/catalogue" element={<><SEO title="Catalogue" description="Browse our product catalogue and explore our range of business supplies." /><Catalogue /></>} />
        <Route path="/get-a-quote" element={<><SEO title="Request a Quote" description="Get a customized quotation for your business supply requirements." /><GetAQuote /></>} />
        <Route path="/contact" element={<><SEO title="Contact Us" description="Get in touch with Sourzyn for your business supply needs." /><Contact /></>} />
        <Route path="/faqs" element={<><SEO title="FAQs" description="Find answers to frequently asked questions about our products, services, and policies." /><FAQs /></>} />
        <Route path="/blog" element={<><SEO title="Blog" description="Read insights and articles about business procurement and workplace management." /><Blog /></>} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy-policy" element={<><SEO title="Privacy Policy" description="Read Sourzyn's privacy policy and data protection practices." /><PrivacyPolicy /></>} />
        <Route path="/terms-and-conditions" element={<><SEO title="Terms & Conditions" description="Read Sourzyn's terms and conditions for using our services." /><TermsAndConditions /></>} />
        <Route path="/refund-return-policy" element={<><SEO title="Refund & Return Policy" description="Read Sourzyn's refund and return policy for products and services." /><RefundReturnPolicy /></>} />
        <Route path="*" element={<><SEO title="Page Not Found" /><NotFound /></>} />
      </Routes>
    </Layout>
  )
}
