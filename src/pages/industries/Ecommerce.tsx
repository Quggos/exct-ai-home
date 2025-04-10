import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Database, Rocket, Users, ChartBar } from 'lucide-react';
import IndustryHero from '@/components/IndustryHero';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const Ecommerce = () => {
  const aiSolutions = [
    {
      title: "Personalized Shopping Experiences",
      description: "AI analyzes customer browsing history, purchase patterns, and preferences to deliver hyper-personalized product recommendations and shopping experiences that drive higher conversion rates.",
      icon: <Users className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    },
    {
      title: "Intelligent Inventory Management",
      description: "Advanced algorithms predict demand patterns, optimize stock levels, and prevent stockouts or overstock situations, reducing carrying costs while maximizing product availability.",
      icon: <Database className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    },
    {
      title: "Dynamic Pricing Optimization",
      description: "AI-powered pricing strategies adjust in real-time based on market demand, competitor pricing, customer behavior, and inventory levels to maximize revenue and profit margins.",
      icon: <ChartBar className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    },
    {
      title: "Conversational Commerce",
      description: "Intelligent chatbots and virtual assistants provide 24/7 customer support, help shoppers find products, answer questions, and guide purchases through natural language conversations.",
      icon: <Rocket className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    }
  ];

  const caseStudies = [
    {
      title: "Global Fashion Retailer Increases Revenue by 28%",
      description: "By implementing our AI-powered personalization engine, a leading fashion retailer saw a 28% increase in revenue and a 35% improvement in customer retention within just six months.",
      metric: "28% revenue growth"
    },
    {
      title: "Home Goods Marketplace Reduces Returns by 32%",
      description: "Our visual AI technology helped customers better visualize products in their homes, resulting in more confident purchases and a significant reduction in returns and customer service costs.",
      metric: "32% fewer returns"
    }
  ];

  return (
    <div className="min-h-screen">
      <IndustryHero
        title="AI Solutions for E-commerce"
        description="Transform your online retail business with AI-powered personalization, inventory optimization, and customer insights. Drive sales and enhance customer experience with intelligent e-commerce solutions."
        backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
              { value: "137%", label: "Average ROI for our e-commerce clients" },
              { value: "43%", label: "Increase in conversion rates with AI personalization" },
              { value: "67%", label: "Reduction in customer service costs" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-muted rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
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
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
              OUR APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transformative AI Solutions for E-commerce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Our specialized AI technologies solve critical challenges for e-commerce businesses, from customer acquisition to post-purchase support.
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
                <Link to="/services/ai-development" className="text-primary flex items-center font-medium hover:underline">
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
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
                BUSINESS IMPACT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How AI Transforms E-commerce Operations
              </h2>
              <p className="text-gray-600 mb-8">
                Beyond the basic automation, our AI solutions enable e-commerce businesses to:
              </p>
              
              <div className="space-y-6">
                {[
                  "Predict customer behavior and prevent churn before it happens",
                  "Optimize product catalog and inventory based on real-time demand forecasting",
                  "Deliver personalized experiences across all customer touchpoints",
                  "Automate quality control and fraud detection processes",
                  "Create dynamic pricing strategies that maximize profit margins"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
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
                  <div className="text-2xl font-bold text-primary mb-2">{study.metric}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.description}</p>
                </div>
              ))}
              
              <div className="md:col-span-2 bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to transform your e-commerce business?</h3>
                <p className="text-gray-600 mb-4">Our team of e-commerce AI specialists is ready to analyze your specific needs and design a custom solution.</p>
                <Link to="/contact" className="btn btn-primary">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <div className="text-left mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
              OUR PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Implementation Journey
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Our structured approach ensures smooth integration of AI solutions into your existing e-commerce ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Discovery & Analysis",
                description: "We analyze your current e-commerce platform, customer data, and business goals to identify key opportunities."
              },
              {
                step: "2",
                title: "Solution Design",
                description: "Our team designs a custom AI solution tailored to your specific e-commerce challenges and opportunities."
              },
              {
                step: "3",
                title: "Implementation",
                description: "We seamlessly integrate AI technologies with your existing e-commerce platform and systems."
              },
              {
                step: "4",
                title: "Optimization",
                description: "Continuous monitoring and refinement ensure your AI solution delivers maximum ROI and adapts to changing market conditions."
              }
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-6 rounded-lg h-full shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-primary h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
                TECHNOLOGY STACK
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cutting-edge Technologies Powering Our E-commerce Solutions
              </h2>
              <p className="text-gray-600 mb-8">
                We leverage the latest advancements in AI and machine learning to deliver powerful e-commerce solutions:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Deep Learning Neural Networks",
                  "Computer Vision Technology",
                  "Natural Language Processing",
                  "Recommendation Systems",
                  "Predictive Analytics",
                  "Real-time Processing Engines",
                  "Big Data Analytics",
                  "Cloud-native Architecture"
                ].map((tech, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Integration Capabilities</h3>
              <p className="text-gray-600 mb-6">
                Our solutions integrate seamlessly with all major e-commerce platforms and technologies:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Shopify",
                  "WooCommerce",
                  "Magento",
                  "BigCommerce",
                  "Salesforce Commerce",
                  "SAP Commerce",
                  "Adobe Commerce",
                  "Custom Platforms",
                  "ERP Systems"
                ].map((platform, i) => (
                  <div key={i} className="bg-white p-3 rounded text-center text-gray-800 text-sm">
                    {platform}
                  </div>
                ))}
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

export default Ecommerce;
