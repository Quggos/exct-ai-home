
import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Shield, Award, Users, Zap, LineChart, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About EXACT AI | Our Mission & Approach to AI Solutions"
        description="Learn about EXACT AI's mission to democratize AI technology, our leadership team, and our approach to creating impactful AI solutions for businesses."
        keywords="about EXACT AI, AI company mission, AI leadership team, AI values, AI approach"
        canonicalUrl="https://www.exct.com/about"
      />
      
      <PageHero 
        badge="About Us"
        title="Empowering Businesses with AI Innovation"
        description="We're on a mission to make artificial intelligence accessible and impactful for businesses of all sizes."
      />
      
      {/* Mission and Vision */}
      <section className="py-16 bg-white" aria-labelledby="mission-vision">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 id="mission" className="text-3xl font-bold text-tertiary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To democratize AI by building intelligent solutions that empower organizations of all sizes to harness the full potential of their data and achieve unprecedented growth.
              </p>
              <p className="text-lg text-gray-700">
                We believe that AI shouldn't be reserved for tech giants with unlimited resources. Our mission is to make sophisticated AI solutions accessible, practical, and impactful for businesses across industries.
              </p>
            </div>
            
            <div>
              <h2 id="vision" className="text-3xl font-bold text-tertiary mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                We envision a future where AI is seamlessly integrated into every organization's operations, driving innovation, efficiency, and positive outcomes across society.
              </p>
              <p className="text-lg text-gray-700">
                Our vision extends beyond technology to encompass how AI can address global challenges, enhance human capabilities, and create more equitable and sustainable business models.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-muted" aria-labelledby="approach">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="approach" className="text-3xl font-bold text-tertiary mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700">
              We follow a systematic methodology that combines deep technical expertise with a thorough understanding of business needs to deliver solutions that drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-tertiary mb-4">Discover</h3>
              <p className="text-gray-700">
                We start by understanding your business objectives, challenges, and data landscape to identify the most impactful AI opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-tertiary mb-4">Design</h3>
              <p className="text-gray-700">
                Our experts design tailored AI solutions that align with your specific needs, focusing on scalability, performance, and user experience.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-tertiary mb-4">Deliver</h3>
              <p className="text-gray-700">
                We implement, test, and deploy solutions using agile methodologies, ensuring continuous feedback and optimization throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white" aria-labelledby="leadership">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="leadership" className="text-3xl font-bold text-tertiary mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Our leadership team brings together decades of experience in AI, software development, and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-tertiary mb-1">Sarah Johnson</h3>
              <p className="text-gray-600 mb-3">CEO & Co-Founder</p>
              <p className="text-gray-700 text-sm">
                Former AI Research Lead at Google with 15+ years of experience in building enterprise AI solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-tertiary mb-1">David Chen</h3>
              <p className="text-gray-600 mb-3">CTO & Co-Founder</p>
              <p className="text-gray-700 text-sm">
                AI systems architect with experience scaling machine learning platforms at Amazon and Microsoft.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-tertiary mb-1">Michael Rodriguez</h3>
              <p className="text-gray-600 mb-3">Chief AI Officer</p>
              <p className="text-gray-700 text-sm">
                Ph.D. in Computer Science specializing in natural language processing and generative AI models.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-muted" aria-labelledby="values">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="values" className="text-3xl font-bold text-tertiary mb-6">Our Values</h2>
            <p className="text-lg text-gray-700">
              These core principles guide our work and define our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <div className="mb-4">
                <Shield className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">Ethical AI</h3>
              <p className="text-gray-700">
                We prioritize responsible AI development, ensuring fairness, transparency, and privacy in all our solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <div className="mb-4">
                <Award className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">Excellence</h3>
              <p className="text-gray-700">
                We pursue the highest standards of technical excellence and continuously push the boundaries of what's possible with AI.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <div className="mb-4">
                <Users className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">Collaboration</h3>
              <p className="text-gray-700">
                We work closely with our clients, fostering transparent communication and knowledge sharing.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <div className="mb-4">
                <Zap className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">Innovation</h3>
              <p className="text-gray-700">
                We embrace experimentation and creative problem-solving to develop groundbreaking AI solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <div className="mb-4">
                <LineChart className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">Impact-Driven</h3>
              <p className="text-gray-700">
                We measure our success by the tangible business outcomes and ROI our solutions deliver.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <div className="mb-4">
                <Globe className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We design solutions that not only solve immediate challenges but also contribute to long-term business and environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
