import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const AIML = () => {
  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI/ML Development Solutions"
        description="Build and deploy cutting-edge artificial intelligence and machine learning solutions. From model development to production deployment, create intelligent systems that drive innovation."
        backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-6">Leading the AI Revolution</h2>
            <p className="mb-4">Artificial Intelligence and Machine Learning represent the most transformative technologies of our generation. Organizations across all industries are leveraging these capabilities to gain unprecedented insights, automate complex processes, and create entirely new products and services.</p>
            <p className="mb-4">Our specialized team of AI researchers, ML engineers, and data scientists work at the cutting edge of this technology, helping organizations implement production-grade AI systems that deliver measurable business value.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Custom model development for unique business challenges</li>
              <li>MLOps implementation for reliable AI deployment</li>
              <li>Generative AI applications for content and code</li>
              <li>Computer vision and natural language processing solutions</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden shadow-elevated relative h-80">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI and Machine Learning solutions" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tertiary mb-8 text-center">Specialized AI & ML Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Generative AI Implementation</h3>
              <p className="mb-4">Harness the power of large language models and creative AI systems for content creation, code generation, and intelligent assistance.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Custom LLM development and fine-tuning</li>
                <li>Responsible AI frameworks</li>
                <li>Content generation systems</li>
                <li>Synthetic data creation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Predictive Analytics</h3>
              <p className="mb-4">Transform business decision-making with advanced forecasting models and predictive systems.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Time series forecasting</li>
                <li>Anomaly detection</li>
                <li>Risk modeling</li>
                <li>Recommendation engines</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Computer Vision</h3>
              <p className="mb-4">Implement visual intelligence systems for object detection, image analysis, and video processing.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Object recognition and tracking</li>
                <li>Visual inspection systems</li>
                <li>Document processing</li>
                <li>Spatial analysis</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Second row of capabilities */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Natural Language Processing</h3>
              <p className="mb-4">Build sophisticated systems that understand, generate, and interact using human language.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Sentiment analysis</li>
                <li>Information extraction</li>
                <li>Text classification</li>
                <li>Conversational AI</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">MLOps & AI Infrastructure</h3>
              <p className="mb-4">Establish robust pipelines for model development, deployment, monitoring, and maintenance.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Model versioning and governance</li>
                <li>Automated testing and validation</li>
                <li>Performance monitoring</li>
                <li>Scalable inference solutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-elevated border-t-4 border-tertiary">
              <h3 className="text-xl font-bold mb-4 text-tertiary">Reinforcement Learning</h3>
              <p className="mb-4">Develop self-improving systems for complex optimization and autonomous decision-making.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Agent-based modeling</li>
                <li>Policy optimization</li>
                <li>Simulated environments</li>
                <li>Multi-agent systems</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Case Study Preview */}
        <div className="bg-tertiary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-tertiary mb-6">Success Story: Financial Services Institution</h2>
          <p className="mb-4">A global financial services company partnered with us to develop an advanced fraud detection system using our deep learning expertise. We created a multi-modal system that combines transaction pattern analysis, natural language processing of communications, and behavioral biometrics to identify potential fraud in real-time.</p>
          <p className="mb-4">The deployed system achieved a 76% improvement in fraud detection compared to their previous rule-based approach, while simultaneously reducing false positives by 83%. This combination dramatically improved both security and customer experience, preventing an estimated $42 million in fraud losses within the first year of operation.</p>
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

export default AIML;
