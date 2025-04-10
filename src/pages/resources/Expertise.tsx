
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import { BrainCircuit, Code, Database, LineChart, Sparkles, ServerCog, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const Expertise = () => {
  const expertiseAreas = [
    {
      id: 1,
      title: 'Machine Learning & Deep Learning',
      description: 'We design and implement sophisticated machine learning and deep learning models tailored to your specific business needs, from predictive analytics to complex pattern recognition.',
      capabilities: [
        'Supervised and unsupervised learning',
        'Neural networks and deep learning',
        'Transfer learning',
        'Reinforcement learning',
        'Computer vision',
        'Natural language processing'
      ],
      icon: <BrainCircuit className="w-12 h-12 text-primary" strokeWidth={1.5} />
    },
    {
      id: 2,
      title: 'Generative AI Solutions',
      description: 'Our generative AI expertise allows us to build solutions that create new content, designs, and insights, powering innovation across industries from creative content to product development.',
      capabilities: [
        'Large language models (LLMs)',
        'Generative adversarial networks (GANs)',
        'Text-to-image generators',
        'Synthetic data generation',
        'Creative content automation',
        'Personalized content creation'
      ],
      icon: <Sparkles className="w-12 h-12 text-primary" strokeWidth={1.5} />
    },
    {
      id: 3,
      title: 'Data Engineering & Analytics',
      description: 'We build robust data pipelines and analytics solutions that transform raw data into actionable intelligence, enabling data-driven decision making across your organization.',
      capabilities: [
        'Data pipeline development',
        'ETL processes',
        'Data warehousing',
        'Real-time analytics',
        'Business intelligence dashboards',
        'Data quality management'
      ],
      icon: <Database className="w-12 h-12 text-primary" strokeWidth={1.5} />
    },
    {
      id: 4,
      title: 'AI-Powered Business Intelligence',
      description: 'Our AI-enhanced business intelligence solutions deliver deeper insights and predictive capabilities that go beyond traditional BI tools, helping you anticipate market trends and optimize operations.',
      capabilities: [
        'Predictive analytics',
        'Automated reporting',
        'Anomaly detection',
        'Trend analysis',
        'Performance forecasting',
        'Interactive visualizations'
      ],
      icon: <LineChart className="w-12 h-12 text-primary" strokeWidth={1.5} />
    },
    {
      id: 5,
      title: 'AI System Architecture',
      description: 'We design scalable, efficient AI system architectures that integrate seamlessly with your existing infrastructure while providing the performance and flexibility needed for advanced AI workloads.',
      capabilities: [
        'Cloud-native AI architectures',
        'Distributed computing systems',
        'MLOps infrastructure',
        'Edge AI deployment',
        'Hybrid cloud solutions',
        'High-performance computing'
      ],
      icon: <ServerCog className="w-12 h-12 text-primary" strokeWidth={1.5} />
    },
    {
      id: 6,
      title: 'Intelligent Process Automation',
      description: 'Our intelligent automation solutions combine AI with robotic process automation to streamline workflows, reduce manual effort, and enhance accuracy across business processes.',
      capabilities: [
        'Workflow automation',
        'Document processing',
        'Intelligent document extraction',
        'Decision automation',
        'Process mining and optimization',
        'Conversational AI assistants'
      ],
      icon: <Workflow className="w-12 h-12 text-primary" strokeWidth={1.5} />
    },
    {
      id: 7,
      title: 'Ethical AI & Governance',
      description: 'We implement responsible AI practices and governance frameworks that ensure your AI systems are transparent, fair, and compliant with regulatory requirements.',
      capabilities: [
        'AI ethics frameworks',
        'Bias detection and mitigation',
        'Explainable AI (XAI)',
        'AI governance models',
        'Regulatory compliance',
        'Privacy-preserving AI'
      ],
      icon: <ShieldCheck className="w-12 h-12 text-primary" strokeWidth={1.5} />
    },
    {
      id: 8,
      title: 'Full-Stack AI Development',
      description: 'Our full-stack development capabilities ensure seamless integration of AI components with front-end and back-end systems, creating cohesive and user-friendly AI-powered applications.',
      capabilities: [
        'Front-end development',
        'Back-end API development',
        'AI model integration',
        'Mobile app development',
        'Web application development',
        'Cross-platform solutions'
      ],
      icon: <Code className="w-12 h-12 text-primary" strokeWidth={1.5} />
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
              Our Expertise
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Deep technical knowledge combined with industry experience to deliver transformative AI solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Expertise Areas */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {expertiseAreas.map((area) => (
              <div key={area.id} className="border border-gray-200 p-8">
                <div className="flex items-start">
                  <div className="mr-6">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
                    <p className="text-gray-700 mb-6">
                      {area.description}
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Core Capabilities:</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {area.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Experience Section */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Industry Experience</h2>
            <p className="text-lg text-gray-700">
              Our team brings deep domain knowledge across multiple industries, ensuring that our AI solutions address the specific challenges and opportunities in your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Financial Services</h3>
              <p className="text-gray-700 mb-4">
                From fraud detection to algorithmic trading, we've helped financial institutions harness the power of AI to enhance security, improve customer experiences, and optimize operations.
              </p>
              <Link to="/industries/finance" className="text-primary font-medium hover:underline">
                Learn more
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Our healthcare AI solutions support diagnostic accuracy, treatment optimization, operational efficiency, and enhanced patient care through intelligent automation and analytics.
              </p>
              <Link to="/industries/healthcare" className="text-primary font-medium hover:underline">
                Learn more
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">E-commerce & Retail</h3>
              <p className="text-gray-700 mb-4">
                We've built AI systems for personalized recommendations, inventory optimization, dynamic pricing, and customer service automation that drive revenue and improve customer satisfaction.
              </p>
              <Link to="/industries/ecommerce" className="text-primary font-medium hover:underline">
                Learn more
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Manufacturing</h3>
              <p className="text-gray-700 mb-4">
                Our AI solutions for manufacturing include predictive maintenance, quality control automation, supply chain optimization, and smart factory systems that boost efficiency and reduce costs.
              </p>
              <Link to="/industries/manufacturing" className="text-primary font-medium hover:underline">
                Learn more
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Government</h3>
              <p className="text-gray-700 mb-4">
                We've partnered with government agencies to implement AI solutions for public service delivery, resource allocation, policy analysis, and citizen engagement that improve outcomes.
              </p>
              <Link to="/industries/government" className="text-primary font-medium hover:underline">
                Learn more
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Technology</h3>
              <p className="text-gray-700 mb-4">
                Our work with technology companies spans product enhancement through AI, internal process optimization, and development of new AI-powered offerings that create competitive advantage.
              </p>
              <Link to="/industries/technology" className="text-primary font-medium hover:underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Expertise;
