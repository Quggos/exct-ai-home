
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFormShared from '@/components/ContactFormShared';
import PageHero from '@/components/PageHero';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';

const Contact = () => {
  // Define structured data for the contact page
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact EXACT AI",
    "description": "Contact EXACT AI to discuss your AI project needs, request a consultation, or learn more about our enterprise automation solutions.",
    "mainEntity": {
      "@type": "Organization",
      "name": "EXACT AI",
      "telephone": "+13155570024",
      "email": "contact@exct.com",
      "url": "https://www.exct.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.exct.com/media/exct-meta-preview.jpg",
        "width": 1200,
        "height": 630
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 AI Innovation Avenue",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+13155570024",
        "contactType": "customer service",
        "email": "contact@exct.com",
        "availableLanguage": ["English"]
      }
    }
  };
  
  return (
    <>
      <SEO 
        title="Contact EXACT AI - Get in Touch with Our AI Experts"
        description="Contact EXACT AI to discuss your AI project needs, request a consultation, or learn more about our enterprise automation solutions. Our team is ready to assist you."
        keywords="contact EXACT AI, AI consultation, AI project inquiry, AI development, automation services, AI experts, AI solutions contact"
        canonicalUrl="https://www.exct.com/contact"
        schema={contactPageSchema}
        h1="Contact EXACT AI - Get in Touch with Our AI Experts"
      />
      
      <main>
        <div className="min-h-screen bg-muted">
          <PageHero
            badge="Contact Us"
            title="Let's discuss your project"
            description="Get in touch with our experts to explore how we can help transform your business with AI solutions."
          />

          {/* Contact form and info section */}
          <section className="py-20" aria-label="Contact form and information">
            <div className="container-wide">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                  <div className="bg-white p-8 border border-gray-200 shadow-subtle">
                    <h2 className="text-2xl font-semibold text-tertiary mb-8">Send us a message</h2>
                    <ContactFormShared />
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-white p-8 border border-gray-200 shadow-subtle">
                    <h3 className="text-xl font-semibold text-tertiary mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-tertiary mt-1 mr-4" aria-hidden="true" />
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Email Us</p>
                          <a href="mailto:contact@exct.com" className="text-gray-600 hover:text-tertiary">
                            contact@exct.com
                          </a>
                          <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours on business days.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-tertiary mt-1 mr-4" aria-hidden="true" />
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Call Us</p>
                          <a href="tel:+13155570024" className="text-gray-600 hover:text-tertiary">
                            +1 (315) 557-0024
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9am-5pm EST.</p>
                        </div>
                      </div>
                    </div>
                    <hr className="my-8 border-gray-200" />
                    <h3 className="text-xl font-semibold text-tertiary mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/exct" className="text-gray-600 hover:text-tertiary" aria-label="LinkedIn">LinkedIn</a>
                      <a href="https://facebook.com/61574399337370/" className="text-gray-600 hover:text-tertiary" aria-label="Facebook">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
