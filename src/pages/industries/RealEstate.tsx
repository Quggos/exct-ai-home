import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const RealEstate = () => {
  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI Solutions for Real Estate"
        description="Transform property management and investment with AI-powered analytics, automated valuations, and intelligent market insights. Optimize your real estate operations with cutting-edge technology."
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Revolutionizing Real Estate with AI</h2>
            <p className="mb-4">The real estate industry is experiencing a digital transformation driven by artificial intelligence and machine learning technologies. From property valuation to predictive maintenance and customer service, AI is creating new efficiencies and opportunities across the sector.</p>
            <p className="mb-4">Our AI solutions enable real estate professionals to make data-driven decisions, automate routine tasks, and provide exceptional client experiences.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Accurate property valuations using advanced algorithms</li>
              <li>Predictive analytics for market trends and investment opportunities</li>
              <li>Automated property management and maintenance systems</li>
              <li>Enhanced client matching and personalized recommendations</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern real estate development" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Key AI Applications in Real Estate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Property Valuation & Analysis</h3>
              <p className="mb-4">Leverage AI algorithms that analyze thousands of data points to provide accurate property valuations and investment potential assessments.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Automated comparative market analysis</li>
                <li>Predictive property value forecasting</li>
                <li>Investment ROI calculations</li>
                <li>Risk assessment modeling</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Smart Property Management</h3>
              <p className="mb-4">Implement intelligent systems that anticipate maintenance needs, optimize energy usage, and streamline tenant management.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Predictive maintenance scheduling</li>
                <li>Automated tenant communications</li>
                <li>Smart building management</li>
                <li>Energy efficiency optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Client Experience Enhancement</h3>
              <p className="mb-4">Transform client interactions with personalized recommendations, virtual tours, and responsive service automation.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>AI-powered property matching</li>
                <li>Virtual tour and visualization tools</li>
                <li>Automated client follow-up</li>
                <li>24/7 intelligent chatbot assistance</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: National Property Management Firm</h2>
          <p className="mb-4">A leading property management company with over 15,000 units implemented our AI-driven predictive maintenance system across their portfolio. The system analyzed historical maintenance data, IoT sensor inputs, and building specifications to predict equipment failures before they occurred.</p>
          <p className="mb-4">Within the first year, the company reduced emergency maintenance calls by 42%, decreased tenant turnover by 18%, and achieved cost savings of approximately $3.2 million through preventative maintenance and improved resource allocation.</p>
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

export default RealEstate;
