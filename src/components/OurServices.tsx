
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      id: '01',
      title: 'Generative AI Implementationn',
      description: 'Leverage the power of Generative AI to automate tasks, streamline workflows, and enhance customer experiences. Our implementation services ensure seamless integration of AI tools into your operations.',
      link: '/services/generative-ai'
    },
    {
      id: '02',
      title: 'Custom AI Development',
      description: 'Bespoke automation solutions designed for your specific business processes, from document processing to complex decision workflows. We create tailored AI systems that integrate seamlessly with your existing infrastructure.',
      link: '/services/ai-development'
    },
    {
      id: '03',
      title: 'AI Consulting',
      description: 'Navigate the complex AI landscape with expert guidance. We help you identify opportunities, develop strategies, and implement AI solutions that drive real business value.',
      link: '/services/ai-consulting'
    },
    {
      id: '04',
      title: 'Workflow Automation',
      description: 'Streamline complex business processes with intelligent orchestration across departments and systems. Our workflow automation solutions ensure seamless coordination and enhanced productivity.',
      link: '/services/workflow-automation'
    },
    {
      id: '05',
      title: 'Full-stack Development',
      description: 'End-to-end development services covering front-end, back-end, and infrastructure for complete enterprise-grade solutions. Built with security, governance, and scalability in mind.',
      link: '/services/full-stack'
    },
    {
      id: '06',
      title: 'UI/UX Design',
      description: 'Human-centered design that enhances user experience, backed by research and industry best practices. We create intuitive interfaces that drive user engagement and satisfaction.',
      link: '/services/ux-design'
    },
    {
      id: '07',
      title: 'Dashboard Development',
      description: 'Interactive, data-rich dashboards that provide actionable insights and visualizations for informed decision-making. Transform your data into meaningful business intelligence.',
      link: '/services/dashboard'
    },
    {
      id: '08',
      title: 'Lead Generation',
      description: 'Data-driven marketing services to attract, convert, and nurture high-quality leads for your business. Leverage AI to optimize your lead generation and conversion processes.',
      link: '/services/lead-generation'
    }
  ];

  return (
    <section className="bg-tertiary text-white pt-20" id="services-section" aria-label="Our Services">
      <div className="container-wide">
        <div className="mb-16">
          <p className="text-white/70 uppercase tracking-wider text-sm font-medium">
            WHAT WE DO
          </p>
          <h2 className="text-4xl text-white md:text-5xl font-semibold mt-4 mb-6">
            Intelligent Automation Solutions
          </h2>
          <p className="text-lg text-white/80 max-w-3xl">
            Transform your business operations with our comprehensive suite of AI-powered solutions, designed to increase efficiency, reduce costs, and drive competitive advantage.
          </p>
        </div>

        <div>
          {services.map((service, index) => (
            <div key={service.id}>
              <Link 
                to={service.link}
                className="block group hover:bg-white/5 transition-colors duration-300 -mx-8 px-12"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-14">
                  <div className="lg:col-span-5">
                    <div className="flex items-start">
                      <span className="text-white/40 text-xl font-light group-hover:text-white/60 transition-colors">{service.id}</span>
                      <h3 className="text-3xl md:text-4xl text-white font-regular ml-4 -mt-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-white/80 text-lg mb-6">
                      {service.description}
                    </p>
                    <div 
                      className="inline-flex items-center text-white group-hover:opacity-80 transition-opacity font-medium"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
              {index < services.length - 1 && (
                <div className="border-t border-white/10 -mx-8" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
