import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Rocket, Users, ChartBar } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import IndustryHero from '../../components/IndustryHero';
import { OptimizedImage } from "@/components/ui/optimized-image";

const Government = () => {
  const aiSolutions = [
    {
      title: "Citizen Service Automation",
      description: "AI-powered systems that streamline citizen services through intelligent automation, reducing wait times and improving accessibility to government resources.",
      icon: <Users className="w-12 h-12 text-tertiary" strokeWidth={1.5} />,
    },
    {
      title: "Predictive Resource Allocation",
      description: "Advanced analytics that optimize the allocation of public resources based on predictive models of demand and need across communities.",
      icon: <ChartBar className="w-12 h-12 text-tertiary" strokeWidth={1.5} />,
    },
    {
      title: "Public Safety Intelligence",
      description: "AI systems that enhance public safety through early detection of risks, intelligent monitoring, and coordinated emergency response.",
      icon: <Database className="w-12 h-12 text-tertiary" strokeWidth={1.5} />,
    },
    {
      title: "Policy Impact Simulation",
      description: "Sophisticated AI models that simulate the potential impacts of policy changes before implementation, enabling data-driven decision making.",
      icon: <Rocket className="w-12 h-12 text-tertiary" strokeWidth={1.5} />,
    }
  ];

  const caseStudies = [
    {
      title: "Municipality Reduces Service Wait Times by 68%",
      description: "Our AI-powered citizen service platform automated routine requests and intelligently routed complex inquiries, dramatically reducing wait times.",
      metric: "68% faster service"
    },
    {
      title: "State Agency Improves Resource Utilization by 42%",
      description: "Predictive analytics helped allocate staff and resources based on anticipated demand, improving efficiency while maintaining service quality.",
      metric: "42% better resource use"
    }
  ];

  return (
    <div className="min-h-screen">
      
      <IndustryHero
        title="AI Solutions for Government"
        description="Modernize public services and enhance citizen engagement with AI-powered solutions. From smart city initiatives to public safety, transform government operations with intelligent technology."
        backgroundImage="https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        primaryCTA={{
          text: "Explore Solutions",
          link: "/contact"
        }}
        secondaryCTA={{
          text: "View Case Studies",
          link: "/resources/case-studies"
        }}
      />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "47%", label: "Reduction in administrative workload" },
              { value: "3.2x", label: "Faster processing of citizen requests" },
              { value: "64%", label: "More accurate resource forecasting" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-muted rounded-lg">
                <p className="text-4xl font-bold text-tertiary mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <div className="text-left mb-16">
            <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
              OUR APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Solutions for Modern Governance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Our specialized government AI technologies address critical challenges in public service delivery and administration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <Link to="/services/ai-development" className="text-tertiary flex items-center font-medium hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
                PUBLIC SECTOR IMPACT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How AI Enhances Government Operations
              </h2>
              <p className="text-gray-600 mb-8">
                Our government-focused AI solutions enable agencies to:
              </p>
              
              <div className="space-y-6">
                {[
                  "Deliver citizen-centric services with 24/7 availability",
                  "Make data-driven decisions based on comprehensive analytics",
                  "Reduce waste and optimize resource allocation",
                  "Enhance transparency and accountability in operations",
                  "Improve crisis response and emergency management"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-4 mt-1 text-tertiary">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM14.293 8.293L9.293 13.293C9.098 13.488 8.839 13.585 8.585 13.585C8.331 13.585 8.072 13.488 7.877 13.293L5.707 11.123C5.317 10.733 5.317 10.1 5.707 9.71C6.097 9.32 6.73 9.32 7.12 9.71L8.585 11.175L12.88 6.88C13.27 6.49 13.903 6.49 14.293 6.88C14.683 7.27 14.683 7.903 14.293 8.293Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study, i) => (
                <div key={i} className="bg-muted p-6 rounded-lg">
                  <div className="text-2xl font-bold text-tertiary mb-2">{study.metric}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.description}</p>
                </div>
              ))}
              
              <div className="md:col-span-2 bg-tertiary/5 p-6 rounded-lg border border-tertiary/20">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to modernize your government services?</h3>
                <p className="text-gray-600 mb-4">Our public sector specialists can help your agency implement AI solutions that improve efficiency and citizen satisfaction.</p>
                <Link to="/contact" className="btn btn-tertiary">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security & Compliance Section */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <div className="text-left mb-12">
            <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
              SECURITY & COMPLIANCE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secure & Responsible Government AI
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Our government solutions are designed with the highest standards of security, compliance, and ethical considerations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Security",
                description: "Military-grade encryption and secure access controls protect sensitive government data and citizen information.",
                icon: <Database className="w-10 h-10 text-tertiary mb-4" strokeWidth={1.5} />
              },
              {
                title: "Regulatory Compliance",
                description: "Full compliance with government regulations including FedRAMP, FISMA, and relevant data protection laws.",
                icon: <ChartBar className="w-10 h-10 text-tertiary mb-4" strokeWidth={1.5} />
              },
              {
                title: "Ethical AI Framework",
                description: "Transparent AI development with rigorous fairness testing and bias prevention mechanisms.",
                icon: <Users className="w-10 h-10 text-tertiary mb-4" strokeWidth={1.5} />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                {item.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Smart Cities Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-[400px] rounded-xl shadow-lg overflow-hidden">
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80" 
                  alt="Smart City" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
                SMART CITY INITIATIVES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Intelligent Communities
              </h2>
              <p className="text-gray-600 mb-6">
                Our AI solutions help create connected, efficient smart cities through:
              </p>
              
              <div className="space-y-4">
                {[
                  "Intelligent traffic management systems that reduce congestion",
                  "Smart energy grids that optimize power distribution",
                  "Public safety enhancement through predictive analytics",
                  "Environmental monitoring and pollution reduction",
                  "Smart waste management and water conservation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-3 mt-1 text-tertiary">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/services/ai-consulting" className="btn btn-tertiary">
                  Explore Smart City Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Government;
