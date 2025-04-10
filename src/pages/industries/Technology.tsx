import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const Technology = () => {
  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI Solutions for Technology Industry"
        description="Accelerate innovation and drive digital transformation with AI-powered solutions. From product development to customer experience, unlock new possibilities with intelligent technology."
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Empowering Tech Innovation with AI</h2>
            <p className="mb-4">Technology companies are at the forefront of AI adoption, integrating intelligent capabilities into their products and operations to drive innovation and competitive advantage. From startups to established enterprises, AI is transforming how technology products are built, deployed, and maintained.</p>
            <p className="mb-4">Our specialized AI solutions help technology companies accelerate development cycles, enhance product capabilities, and optimize complex operations at scale.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Integrate powerful AI features into your software products</li>
              <li>Automate complex development workflows and testing processes</li>
              <li>Enhance technical support with intelligent automation</li>
              <li>Optimize cloud infrastructure and resource utilization</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Advanced technology solutions" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Key AI Applications for Technology Companies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Product Enhancement</h3>
              <p className="mb-4">Integrate AI capabilities into your products to deliver more value and differentiate in the market.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Intelligent feature development</li>
                <li>Personalization engines</li>
                <li>Recommendation systems</li>
                <li>Natural language processing</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Development Optimization</h3>
              <p className="mb-4">Streamline engineering workflows and improve code quality with AI-assisted development tools.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Automated code review</li>
                <li>Bug prediction</li>
                <li>Test case generation</li>
                <li>Continuous integration optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Infrastructure & Operations</h3>
              <p className="mb-4">Optimize complex IT infrastructure and operations with predictive analytics and automation.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Predictive scaling</li>
                <li>Anomaly detection</li>
                <li>Performance optimization</li>
                <li>Automated incident response</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: Enterprise SaaS Provider</h2>
          <p className="mb-4">A leading enterprise software company partnered with us to integrate advanced AI capabilities into their customer experience platform. We developed a sophisticated intent recognition system that analyzed customer interactions across multiple channels to identify needs and personalize responses.</p>
          <p className="mb-4">The enhanced product capabilities resulted in a 28% improvement in customer satisfaction scores for their clients, reduced response times by 64%, and became a key differentiator in competitive sales situations. The company reported a 22% increase in new customer acquisition directly attributed to the new AI features.</p>
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

export default Technology;
