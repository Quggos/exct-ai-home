import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const Nonprofit = () => {
  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI Solutions for Nonprofit Organizations"
        description="Maximize your social impact with AI-powered donor management, program optimization, and resource allocation. Transform how nonprofits serve communities with intelligent technology."
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Transforming Nonprofit Operations with AI</h2>
            <p className="mb-4">Nonprofits face unique challenges with limited resources and increasing demands. AI technologies offer powerful tools to enhance efficiency, improve decision-making, and extend the reach of your mission.</p>
            <p className="mb-4">Our AI solutions are tailored to the specific needs of nonprofit organizations, helping you maximize your impact while minimizing administrative burden.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Optimize donor engagement and fundraising with predictive analytics</li>
              <li>Streamline volunteer management and resource allocation</li>
              <li>Enhance service delivery with intelligent automation</li>
              <li>Improve grant writing and reporting processes</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nonprofit organization impact" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Key AI Applications for Nonprofits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Donor Management & Fundraising</h3>
              <p className="mb-4">AI-powered analytics help identify potential donors, optimize donation appeals, and predict fundraising outcomes to maximize your development efforts.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Donor segmentation and targeting</li>
                <li>Personalized outreach automation</li>
                <li>Donation pattern analysis</li>
                <li>Retention risk identification</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Program Optimization</h3>
              <p className="mb-4">Use data-driven insights to evaluate program effectiveness, allocate resources efficiently, and demonstrate impact to stakeholders.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Impact measurement automation</li>
                <li>Resource allocation optimization</li>
                <li>Service delivery improvement</li>
                <li>Beneficiary needs analysis</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Administrative Automation</h3>
              <p className="mb-4">Reduce overhead and administrative burden through intelligent automation of routine tasks and paperwork.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Document processing automation</li>
                <li>Grant application assistance</li>
                <li>Reporting automation</li>
                <li>Compliance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: Education Nonprofit</h2>
          <p className="mb-4">A national education nonprofit implemented our AI-powered donor analysis platform and saw a 32% increase in fundraising efficiency within the first year. The system identified previously overlooked donor segments and optimized communication strategies, resulting in higher conversion rates and improved donor retention.</p>
          <p className="mb-4">Additionally, their program evaluation process was streamlined using our automated impact analysis tools, reducing reporting time by 60% while providing more comprehensive insights into program effectiveness.</p>
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

export default Nonprofit;
