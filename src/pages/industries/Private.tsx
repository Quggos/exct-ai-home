import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const Private = () => {
  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI Solutions for Private Sector"
        description="Drive business growth and innovation with customized AI solutions. From operational efficiency to market intelligence, transform your enterprise with cutting-edge technology."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Driving Business Excellence with AI</h2>
            <p className="mb-4">In today's competitive business landscape, AI technologies are no longer a luxury but a necessity for private sector organizations seeking to maintain a competitive edge. From streamlining operations to enhancing customer experiences, AI enables businesses to operate more efficiently and intelligently.</p>
            <p className="mb-4">Our enterprise-grade AI solutions are designed to address the specific challenges faced by businesses across industries, with scalable implementations that deliver measurable ROI.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Optimize business processes through intelligent automation</li>
              <li>Enhance decision-making with predictive analytics</li>
              <li>Improve customer experiences with personalization</li>
              <li>Identify new market opportunities through data analysis</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Private sector innovation" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Key AI Applications for Private Sector</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Operational Optimization</h3>
              <p className="mb-4">Transform business operations with intelligent process automation, resource optimization, and predictive maintenance.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Business process automation</li>
                <li>Supply chain optimization</li>
                <li>Inventory management</li>
                <li>Resource allocation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Customer Intelligence</h3>
              <p className="mb-4">Leverage customer data to enhance experiences, predict behaviors, and build stronger relationships.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Customer segmentation</li>
                <li>Personalization engines</li>
                <li>Churn prediction</li>
                <li>Sentiment analysis</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Strategic Decision Support</h3>
              <p className="mb-4">Empower leadership with data-driven insights for more informed strategic decision-making.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Predictive analytics dashboards</li>
                <li>Market trend analysis</li>
                <li>Risk assessment models</li>
                <li>Financial forecasting</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: Manufacturing Enterprise</h2>
          <p className="mb-4">A global manufacturing company implemented our AI-powered predictive maintenance and process optimization platform across their production facilities. The system continuously monitored equipment performance and production parameters to predict failures and identify efficiency opportunities.</p>
          <p className="mb-4">Within 18 months, the company achieved a 37% reduction in unplanned downtime, 22% improvement in overall equipment effectiveness (OEE), and annual cost savings exceeding $4.5 million. Additionally, the enhanced production consistency improved product quality ratings by 18%.</p>
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

export default Private;
