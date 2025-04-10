
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import { Search, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ categories
  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'services', name: 'Our Services' },
    { id: 'technical', name: 'Technical Details' },
    { id: 'pricing', name: 'Pricing & Contracts' },
    { id: 'implementation', name: 'Implementation Process' },
    { id: 'support', name: 'Support & Maintenance' }
  ];

  // FAQ questions and answers
  const faqItems = [
    {
      id: 1,
      category: 'general',
      question: 'What types of AI solutions do you specialize in?',
      answer: 'We specialize in a wide range of AI solutions including generative AI, machine learning models, natural language processing, computer vision, predictive analytics, and intelligent process automation. Our expertise spans multiple domains and technologies, allowing us to build custom solutions tailored to your specific business challenges.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How do you ensure the quality and reliability of your AI solutions?',
      answer: 'We follow a rigorous development and testing methodology that includes extensive validation, performance testing, and quality assurance processes. Our solutions are built with robustness in mind, incorporating error handling, monitoring capabilities, and continuous improvement frameworks. We also implement comprehensive testing protocols to ensure our AI models perform reliably across diverse scenarios and edge cases.'
    },
    {
      id: 3,
      category: 'general',
      question: 'Do you work with businesses of all sizes?',
      answer: 'Yes, we work with organizations of all sizes, from startups to large enterprises. We tailor our approach and solutions to match the specific needs, resources, and growth stage of each client. For smaller companies, we focus on high-impact, cost-effective solutions that can scale, while for larger enterprises, we can implement more complex, enterprise-wide AI transformations.'
    },
    {
      id: 4,
      category: 'services',
      question: 'What is the difference between your consulting and implementation services?',
      answer: 'Our consulting services focus on strategy, assessment, and planning. This includes AI readiness assessments, roadmap development, use case identification, and strategic guidance. Implementation services involve the actual building, deployment, and integration of AI solutions into your business processes and technology stack. Many clients start with our consulting services to develop a clear strategy before moving into implementation.'
    },
    {
      id: 5,
      category: 'services',
      question: 'Can you integrate AI solutions with our existing systems?',
      answer: 'Absolutely. We design our AI solutions to seamlessly integrate with your existing technology stack. Our team has experience working with a wide range of enterprise systems, databases, cloud platforms, and legacy infrastructure. We perform thorough integration analysis during the planning phase to ensure compatibility and identify the most efficient approach for connecting new AI capabilities with your current systems.'
    },
    {
      id: 6,
      category: 'services',
      question: 'Do you offer training for our team on how to use the AI solutions?',
      answer: 'Yes, training is a critical component of our implementation process. We provide comprehensive training tailored to different user groups within your organization, from technical teams to business users. Our training programs include hands-on workshops, documentation, knowledge transfer sessions, and ongoing support resources to ensure your team can effectively utilize and maintain the AI solutions we build.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'What technologies and frameworks do you use for AI development?',
      answer: 'We leverage a variety of modern technologies and frameworks depending on the specific requirements of each project. For machine learning, we commonly use TensorFlow, PyTorch, scikit-learn, and related libraries. For cloud deployments, we work with AWS, Azure, and Google Cloud. We\'re also experienced with containerization (Docker, Kubernetes) for scalable deployments and MLOps tools for model management and monitoring. Our technology choices are always guided by the specific needs of your project rather than a one-size-fits-all approach.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'How do you handle data privacy and security concerns?',
      answer: 'Data privacy and security are paramount in all our projects. We implement comprehensive security measures including data encryption, secure access controls, and compliance with relevant regulations like GDPR, HIPAA, or CCPA as needed. We work closely with your security team to ensure our solutions align with your organization\'s security policies. Additionally, we can implement privacy-preserving techniques such as federated learning or differential privacy when appropriate for sensitive applications.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'What is your approach to ensuring AI ethics and responsible AI use?',
      answer: 'We follow a responsible AI framework that addresses bias, fairness, transparency, and accountability. This includes regular bias audits, implementing explainability techniques, documenting model limitations, and designing governance processes. We work with clients to establish ethical guidelines for AI development and deployment, ensuring alignment with your organization\'s values and compliance with emerging regulations around AI ethics.'
    },
    {
      id: 10,
      category: 'pricing',
      question: 'How do you structure your pricing for AI projects?',
      answer: 'Our pricing structure depends on the scope, complexity, and duration of the project. We offer several engagement models, including fixed-price projects, time and materials, and retainer arrangements. For more complex initiatives, we often recommend a phased approach with defined milestones and deliverables. During our initial consultations, we\'ll work with you to understand your requirements and budget constraints to recommend the most appropriate pricing structure.'
    },
    {
      id: 11,
      category: 'pricing',
      question: 'Do you offer any guarantees on the performance of your AI solutions?',
      answer: 'We establish clear, measurable success criteria and performance metrics at the outset of each project and work diligently to meet or exceed these targets. Our contracts typically include performance guarantees tied to these agreed-upon metrics. We also offer support and maintenance packages to ensure continued performance and address any issues that arise after deployment. Our focus is on delivering measurable business value and ROI from every AI initiative.'
    },
    {
      id: 12,
      category: 'implementation',
      question: 'What is your typical implementation process for an AI project?',
      answer: 'Our implementation process follows these key phases: 1) Discovery and planning, where we analyze requirements and establish success criteria; 2) Data assessment and preparation; 3) Model development and iterative refinement; 4) Integration with existing systems; 5) Testing and validation; 6) Deployment and monitoring; 7) Training and knowledge transfer; and 8) Ongoing support and improvement. We use agile methodologies to ensure flexibility and regular client feedback throughout the process.'
    },
    {
      id: 13,
      category: 'implementation',
      question: 'How long does a typical AI implementation take?',
      answer: 'The timeline varies significantly based on the scope and complexity of the project. Smaller, focused AI solutions might be implemented in 2-3 months, while more complex enterprise-wide initiatives can take 6-12 months or longer. During our initial planning phase, we\'ll provide a detailed timeline with key milestones. We often recommend starting with a proof of concept or minimum viable product to demonstrate value quickly before expanding to a full implementation.'
    },
    {
      id: 14,
      category: 'support',
      question: 'What kind of support do you provide after implementation?',
      answer: 'We offer several tiers of post-implementation support, from basic maintenance to comprehensive managed services. This includes monitoring system performance, troubleshooting issues, implementing updates, and making continuous improvements. We also provide regular performance reviews and optimization recommendations. Many clients choose our ongoing support packages to ensure their AI solutions continue to evolve and deliver value as their business needs change.'
    },
    {
      id: 15,
      category: 'support',
      question: 'How do you handle updates and improvements to AI models over time?',
      answer: 'AI models require ongoing maintenance and periodic retraining to maintain accuracy as data patterns evolve. We implement monitoring systems to track model performance and detect drift. Our support packages include scheduled model reviews, retraining, and updates. We also help clients establish internal processes for data collection and feedback loops that support continuous improvement of AI systems over time.'
    }
  ];

  const toggleQuestion = (id: number) => {
    if (expandedQuestions.includes(id)) {
      setExpandedQuestions(expandedQuestions.filter(qId => qId !== id));
    } else {
      setExpandedQuestions([...expandedQuestions, id]);
    }
  };

  const filteredFaqs = faqItems.filter(item => 
    (activeCategory === 'all' || item.category === activeCategory) &&
    (searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Find answers to common questions about our AI solutions, implementation process, and expertise.
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
              </div>
              <input
                type="text"
                placeholder="Search for questions..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-primary rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveCategory('all')}
            >
              All Questions
            </button>
            {categories.map(category => (
              <button 
                key={category.id}
                className={`px-4 py-2 rounded-md transition-colors ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-md overflow-hidden">
                    <button
                      className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                      onClick={() => toggleQuestion(item.id)}
                    >
                      <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                      {expandedQuestions.includes(item.id) ? (
                        <Minus className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                      )}
                    </button>
                    
                    {expandedQuestions.includes(item.id) && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No questions found matching your search.</p>
                <button 
                  className="mt-4 text-primary hover:underline"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('general');
                  }}
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're here to help. Contact our team for answers to your specific questions about our AI solutions and services.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn bg-primary text-white hover:bg-primary/90 transition-colors">
                Contact Us
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

export default FAQ;
