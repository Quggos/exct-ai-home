import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const Travel = () => {
  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI Solutions for Travel Industry"
        description="Enhance travel experiences with AI-powered personalization, smart booking systems, and intelligent customer service. Transform your travel business with cutting-edge technology."
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        primaryCTA={{
          text: "Explore Solutions",
          link: "/contact"
        }}
        secondaryCTA={{
          text: "View Case Studies",
          link: "/resources/case-studies"
        }}
      />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Transforming Travel with AI</h2>
            <p className="mb-4">The travel and hospitality industry is embracing artificial intelligence to enhance customer experiences, optimize operations, and create new revenue opportunities. From personalized recommendations to intelligent pricing strategies and streamlined operations, AI is revolutionizing how travel businesses operate and serve their customers.</p>
            <p className="mb-4">Our specialized AI solutions help hotels, airlines, online travel agencies, and destination management companies deliver exceptional experiences while maximizing operational efficiency.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Personalize guest experiences with intelligent recommendation engines</li>
              <li>Optimize pricing and revenue management with predictive analytics</li>
              <li>Streamline operations and resource allocation</li>
              <li>Enhance customer service with intelligent automation</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Travel and tourism innovation" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Key AI Applications in Travel & Hospitality</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Personalized Guest Experiences</h3>
              <p className="mb-4">Deliver customized recommendations and services that enhance guest satisfaction and drive loyalty.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Personalized itinerary planning</li>
                <li>Smart recommendation engines</li>
                <li>Dynamic content personalization</li>
                <li>Preference-based upselling</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Revenue Optimization</h3>
              <p className="mb-4">Maximize revenue with dynamic pricing strategies and demand forecasting models.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Dynamic pricing optimization</li>
                <li>Demand forecasting</li>
                <li>Inventory management</li>
                <li>Competitive intelligence</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Operational Efficiency</h3>
              <p className="mb-4">Streamline complex operations and resource allocation to reduce costs and improve service quality.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Staff scheduling optimization</li>
                <li>Predictive maintenance</li>
                <li>Energy management systems</li>
                <li>Inventory and supply chain optimization</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: International Hotel Chain</h2>
          <p className="mb-4">A global hotel chain with over 200 properties implemented our AI-powered guest experience and revenue optimization platform. The system analyzed millions of guest interactions, booking patterns, and regional demand factors to personalize marketing communications, optimize room rates, and identify upselling opportunities.</p>
          <p className="mb-4">Within 18 months, the hotel group achieved a 14% increase in direct bookings, 9% growth in average daily rate (ADR), and 23% improvement in ancillary revenue per stay. Guest satisfaction scores increased by 17% as the personalization engine helped deliver more relevant experiences and recommendations.</p>
          <a href="/resources/case-studies" className="inline-flex items-center text-tertiary font-bold hover:underline">
            Read the full case study
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Travel;
