
import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Cpu, LineChart, Workflow, Layout, Users } from 'lucide-react';
import SEO from '@/components/SEO';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, color }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 hover:border-tertiary/30 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="p-8">
        <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        <Link to={link} className="flex items-center text-tertiary font-medium group-hover:underline" aria-label={`Learn more about ${title}`}>
          Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Generative AI Implementation",
      description: "Implement cutting-edge generative AI solutions tailored to your business needs, enabling content creation, data synthesis, and creative automation.",
      icon: <Bot className="text-white" size={24} />,
      link: "/services/generative-ai",
      color: "bg-tertiary"
    },
    {
      title: "AI Development",
      description: "Custom AI solution development that addresses your unique business challenges through machine learning, deep learning, and advanced analytics.",
      icon: <Cpu className="text-white" size={24} />,
      link: "/services/ai-development",
      color: "bg-blue-600"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance on AI integration within your organization, including roadmap development, use case identification, and implementation planning.",
      icon: <Users className="text-white" size={24} />,
      link: "/services/ai-consulting",
      color: "bg-emerald-600"
    },
    {
      title: "Workflow Automation",
      description: "End-to-end automation solutions that streamline business processes, reduce manual work, and increase operational efficiency across departments.",
      icon: <Workflow className="text-white" size={24} />,
      link: "/services/workflow-automation",
      color: "bg-amber-600"
    },
    {
      title: "Full-stack Development",
      description: "Comprehensive web and application development services that combine front-end interfaces with robust back-end systems and database architecture.",
      icon: <Layout className="text-white" size={24} />,
      link: "/services/full-stack",
      color: "bg-violet-600"
    },
    {
      title: "UI/UX Design",
      description: "User-centric design solutions that create intuitive, engaging digital experiences while maintaining visual consistency and accessibility.",
      icon: <Layout className="text-white" size={24} />,
      link: "/services/ux-design",
      color: "bg-rose-600"
    },
    {
      title: "Dashboard Development",
      description: "Custom data visualization and business intelligence dashboards that transform complex information into actionable insights for decision-makers.",
      icon: <LineChart className="text-white" size={24} />,
      link: "/services/dashboard",
      color: "bg-cyan-600"
    },
    {
      title: "Lead Generation",
      description: "AI-powered lead generation strategies that identify, attract, and convert high-value prospects into customers through targeted marketing approaches.",
      icon: <Users className="text-white" size={24} />,
      link: "/services/lead-generation",
      color: "bg-orange-600"
    },
  ];

  // Create structured data for services page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://www.exct.com${service.link}`,
        "provider": {
          "@type": "Organization",
          "name": "EXACT AI",
          "url": "https://www.exct.com"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Services & Solutions | Enterprise AI Implementation | EXACT AI"
        description="From custom AI development to workflow automation, we offer comprehensive solutions to drive your digital transformation."
        keywords="AI development, workflow automation, generative AI, AI consulting, AI solutions"
        canonicalUrl="https://www.exct.com/services"
        schema={servicesSchema}
        h1="AI Solutions for Every Business Need"
      />
      
      <PageHero 
        badge="Our Services"
        title="AI Solutions for Every Business Need"
        description="From custom AI development to workflow automation, we offer comprehensive solutions to drive your digital transformation."
      />
      
      {/* Services Grid */}
      <section className="py-16 bg-white" id="services-list" aria-label="Our services">
        <div className="container-wide">
          <h2 className="sr-only">Our AI and Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section className="py-16 bg-gray-50" id="custom-solutions" aria-label="Custom AI Solutions">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
                Tailored Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Custom AI Solutions For Your Unique Challenges</h2>
              <p className="text-gray-600 mb-6">
                At EXACT AI, we understand that no two businesses are alike. Our team of AI experts works closely with you to understand your specific needs and develop customized solutions that address your unique challenges.
              </p>
              <p className="text-gray-600 mb-6">
                From initial consultation to implementation and ongoing support, we're committed to delivering solutions that drive real business value and provide a competitive advantage in your industry.
              </p>
              <Link to="/contact" className="btn btn-tertiary">
                Discuss Your Project
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Development Process</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary font-semibold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Discovery & Assessment</h4>
                    <p className="text-gray-600 text-sm">Understanding your needs, challenges, and objectives</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary font-semibold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Solution Design</h4>
                    <p className="text-gray-600 text-sm">Creating a tailored approach to address your specific requirements</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary font-semibold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Development & Testing</h4>
                    <p className="text-gray-600 text-sm">Building and rigorously testing your solution</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary font-semibold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Implementation & Training</h4>
                    <p className="text-gray-600 text-sm">Deploying your solution and providing comprehensive training</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary font-semibold mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">Continuous monitoring, optimization, and support services</p>
                  </div>
                </div>
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

export default Services;
