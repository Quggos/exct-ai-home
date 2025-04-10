import React from 'react';
import IndustryHero from '@/components/IndustryHero';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { OptimizedImage } from '@/components/ui/optimized-image';

const Space = () => {
  return (
    <div className="min-h-screen">
      <IndustryHero
        title="AI Solutions for Space Industry"
        description="Pioneer the next frontier with intelligent algorithms for mission planning, satellite operations, and data analysis. Transform space exploration with cutting-edge AI technology."
        backgroundImage="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Advancing Space Exploration with AI</h2>
            <p className="mb-4">The space industry is entering a new era of innovation driven by artificial intelligence. From autonomous spacecraft operations to analyzing vast amounts of satellite data, AI technologies are transforming how we explore and utilize space.</p>
            <p className="mb-4">Our specialized AI solutions help space agencies, satellite operators, and aerospace companies overcome the unique challenges of operating in the most extreme environment known to humanity.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Enhance mission planning and spacecraft autonomy</li>
              <li>Process and analyze massive Earth observation datasets</li>
              <li>Optimize satellite operations and maintenance</li>
              <li>Improve space situational awareness and debris tracking</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Space satellite orbiting Earth" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Key AI Applications in Space Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Earth Observation & Analytics</h3>
              <p className="mb-4">Transform vast amounts of satellite imagery and sensor data into actionable insights for environmental monitoring, agriculture, and urban planning.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Automated image classification</li>
                <li>Change detection algorithms</li>
                <li>Climate pattern analysis</li>
                <li>Agricultural yield prediction</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Spacecraft Autonomy & Operations</h3>
              <p className="mb-4">Enable more efficient and resilient space missions through AI-powered autonomous operations and predictive maintenance.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Autonomous navigation systems</li>
                <li>Onboard decision-making</li>
                <li>Satellite health monitoring</li>
                <li>Orbital maneuver optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Space Situational Awareness</h3>
              <p className="mb-4">Enhance tracking and prediction capabilities for space objects and potential collision hazards.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Space debris tracking</li>
                <li>Collision risk assessment</li>
                <li>Space weather prediction</li>
                <li>Anomaly detection</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: Satellite Constellation Operator</h2>
          <p className="mb-4">A commercial satellite operator managing a constellation of Earth observation satellites implemented our AI-powered image processing and anomaly detection platform. The system automatically processed terabytes of daily imagery, identifying and categorizing features of interest while flagging anomalies for human review.</p>
          <p className="mb-4">The implementation reduced image processing time by 94%, increased detection accuracy by 37%, and enabled the company to develop new data products that generated $12M in additional annual revenue within the first two years of operation.</p>
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

export default Space;
