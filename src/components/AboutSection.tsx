import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Lock, Zap, TrendingUp, BarChart2, Shield, Code, CircuitBoard } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Customized AI Solutions",
      description: "Bespoke automation solutions designed for your specific business processes and operational needs."
    }, 
    {
      icon: <Lock className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption and compliance protocols to protect your sensitive data and AI systems."
    }, 
    {
      icon: <Zap className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Rapid Implementation",
      description: "Accelerated development and deployment tailored to your specific timelines and requirements."
    }, 
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Performance Metrics",
      description: "Real-time analytics dashboard with detailed ROI tracking for all automation initiatives."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Predictive Analytics",
      description: "Transform operational data into actionable business intelligence with AI-powered forecasting."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Compliance Framework",
      description: "Built-in regulatory safeguards for GDPR, HIPAA, SOC2, and industry-specific compliance."
    },
    {
      icon: <Code className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Seamless Integration",
      description: "Enterprise-ready integration with your existing systems, databases, and third-party platforms."
    },
    {
      icon: <CircuitBoard className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Scalable Solutions",
      description: "Custom solutions designed to scale from specific departments to enterprise-wide deployment."
    }
  ];

  return (
    <section className="exct-section bg-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="exct-highlight">
              <h2 className="text-4xl md:text-5xl font-semibold text-tertiary mb-8">Tailored AI Automation Solutions</h2>
            </div>
            <p className="text-dark/70 text-lg mb-8 leading-relaxed">
              EXACT AI develops customized automation solutions that seamlessly integrate artificial intelligence with your existing workflows, enabling your organization to eliminate manual tasks, reduce operational costs, and accelerate business outcomes with precision and reliability.
            </p>
            
            <div className="bg-muted p-8 border-l-4 border-tertiary mb-10">
              <h3 className="text-xl font-medium mb-4">Industry-optimized solutions for:</h3>
              <ul className="space-y-3">
                {["Financial services & Insurance", "Healthcare & Life Sciences", "Manufacturing & Supply Chain", "Retail & E-commerce", "Professional Services", "Many other industries"].map((industry, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-tertiary mr-3"></div>
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center space-x-8 mb-12">
              <Link 
                to="/industries"
                className="btn bg-tertiary text-white hover:bg-tertiary-light transition inline-flex text-left items-center"
              >
                <span>Explore by industries</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <div className="text-sm text-dark/60 flex items-center">
                <span className="w-3 h-3 rounded-full bg-tertiary mr-2"></span>
                SOC2 & ISO 27001 Certified
              </div>
            </div>
            
            {/* Enterprise Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-100 p-5 shadow-sm">
                <div className="text-3xl font-bold text-tertiary mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Solution Reliability</div>
              </div>
              <div className="border border-gray-100 p-5 shadow-sm">
                <div className="text-3xl font-bold text-tertiary mb-1">85%</div>
                <div className="text-sm text-gray-600">Task Automation</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="exct-card p-6 bg-white hover:border-tertiary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-muted p-3 mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-2">{feature.title}</h3>
                      <p className="text-dark/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enterprise Certification Banner */}
            <div className="mt-8 bg-muted/50 border border-gray-100 p-6 flex flex-col md:flex-row items-left justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg text-tertiary font-medium">Enterprise-Ready Solutions</h4>
                <p className="text-sm text-gray-600">Compliant with global security standards</p>
              </div>
              <div className="flex flex-wrap content-start gap-4">
                {["ISO 27001", "HIPAA", "GDPR", "SOC2", "PCI DSS"].map((cert, i) => (
                  <div key={i} className="bg-white px-3 py-1 text-xs border border-gray-200 shadow-sm">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
