import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const Transportation = () => {
  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI Solutions for Transportation"
        description="Revolutionize mobility with AI-powered fleet management, route optimization, and predictive maintenance. Transform transportation operations with intelligent technology solutions."
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Transforming Transportation with AI</h2>
            <p className="mb-4">The transportation industry is experiencing a profound transformation driven by artificial intelligence. From optimizing logistics networks to enhancing vehicle safety and enabling autonomous mobility, AI technologies are creating new possibilities for efficiency, sustainability, and service quality.</p>
            <p className="mb-4">Our specialized AI solutions address the complex challenges faced by transportation providers, fleet operators, and logistics companies in today's rapidly evolving mobility landscape.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Optimize routing and resource allocation with predictive analytics</li>
              <li>Enhance safety and maintenance through predictive systems</li>
              <li>Improve customer experience with intelligent service optimization</li>
              <li>Enable data-driven strategic planning and network design</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern transportation solutions" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Key AI Applications in Transportation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Logistics Optimization</h3>
              <p className="mb-4">Transform supply chain efficiency with intelligent routing, demand forecasting, and resource allocation systems.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Dynamic route optimization</li>
                <li>Last-mile delivery efficiency</li>
                <li>Load optimization algorithms</li>
                <li>Warehouse automation integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Fleet Management & Maintenance</h3>
              <p className="mb-4">Maximize vehicle uptime and performance with predictive maintenance and intelligent fleet management.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Predictive maintenance systems</li>
                <li>Driver behavior analysis</li>
                <li>Fuel efficiency optimization</li>
                <li>Asset utilization tracking</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Passenger Experience</h3>
              <p className="mb-4">Enhance customer satisfaction with personalized, responsive, and efficient passenger services.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Demand prediction models</li>
                <li>Dynamic pricing optimization</li>
                <li>Personalized travel recommendations</li>
                <li>Intelligent disruption management</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: International Logistics Provider</h2>
          <p className="mb-4">A global logistics company with operations across 35 countries implemented our AI-powered route optimization and demand forecasting platform. The system analyzed historical shipment data, real-time traffic conditions, weather forecasts, and customer patterns to dynamically optimize delivery routes and resource allocation.</p>
          <p className="mb-4">Within the first year, the company achieved a 23% reduction in fuel consumption, 18% increase in on-time deliveries, and 15% improvement in vehicle utilization. These efficiencies translated to annual cost savings of approximately $28 million while simultaneously reducing their carbon footprint by an estimated 32,000 metric tons of CO2.</p>
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

export default Transportation;
