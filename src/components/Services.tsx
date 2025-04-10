import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Code, LineChart, Zap, Database, Palette, BarChart4, Target, 
  ArrowRight, ChevronRight, Monitor, Cpu, Workflow, Layers
} from 'lucide-react';

const ServicesCard = ({ icon, title, description, link, color = "primary", delay = 0 }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <Link 
      to={link} 
      ref={cardRef}
      className={`exct-card px-8 py-8 group relative overflow-hidden opacity-0 translate-y-4 transition-all duration-700 ease-out border-slate-300`}
    >
      <div className="flex flex-row items-start relative z-10">
        <div className="mr-6">
          {React.cloneElement(icon, { className: `w-12 h-12 text-${color}` })}
        </div>
        <div>
          <h4 className={`text-lg font-medium text-tertiary mb-3 group-hover:text-${color} transition-colors`}>
            {title}
          </h4>
          <p className="text-dark/70 text-sm mb-4">{description}</p>
          <div className={`flex items-center text-${color} text-sm font-medium transition-all`}>
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
      
      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] rotate-90 border-r-[40px] border-t-${color}/10 border-r-transparent transition-colors group-hover:border-t-${color}/20`}></div>
    </Link>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Brain strokeWidth={1.5} />,
      title: 'AI Process Automation',
      description: 'Transform manual workflows into intelligent, self-optimizing systems that reduce costs and eliminate human error.',
      link: '/services/generative-ai',
      color: 'tertiary',
      delay: 100
    },
    {
      icon: <Code strokeWidth={1.5} />,
      title: 'Custom AI Solutions',
      description: 'Bespoke automation solutions designed for your specific business processes, from document processing to complex decision workflows.',
      link: '/services/ai-development',
      color: 'tertiary',
      delay: 200
    },
    {
      icon: <LineChart strokeWidth={1.5} />,
      title: 'Automation Strategy',
      description: 'Expert guidance on automation roadmap development, technology selection, and implementation planning.',
      link: '/services/ai-consulting',
      color: 'tertiary',
      delay: 300
    },
    {
      icon: <Zap strokeWidth={1.5} />,
      title: 'Workflow Optimization',
      description: 'Streamline complex business processes with intelligent orchestration across departments and systems.',
      link: '/services/workflow-automation',
      color: 'tertiary',
      delay: 400
    }
  ];

  const advancedServices = [
    {
      icon: <Database strokeWidth={1.5} />,
      title: 'Full-stack Development',
      description: 'End-to-end development services covering front-end, back-end, and infrastructure for complete solutions.',
      link: '/services/full-stack',
      color: 'tertiary',
      delay: 200
    },
    {
      icon: <Palette strokeWidth={1.5} />,
      title: 'UI/UX Design',
      description: 'Human-centered design that enhances user experience, backed by research and industry best practices.',
      link: '/services/ux-design',
      color: 'tertiary',
      delay: 300
    },
    {
      icon: <BarChart4 strokeWidth={1.5} />,
      title: 'Dashboard Development',
      description: 'Interactive, data-rich dashboards that provide actionable insights and visualizations for informed decision-making.',
      link: '/services/dashboard',
      color: 'tertiary',
      delay: 400
    },
    {
      icon: <Target strokeWidth={1.5} />,
      title: 'Lead Generation',
      description: 'Data-driven marketing services to attract, convert, and nurture high-quality leads for your business.',
      link: '/services/lead-generation',
      color: 'tertiary',
      delay: 500
    }
  ];

  return (
    <section className="exct-section bg-muted py-24 overflow-hidden relative">
      
      <div className="container-wide relative z-10">
        <div className="text-left mb-20 max-w-4xl">
          <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="section-title exct-highlight text-4xl md:text-5xl text-tertiary font-semibold mb-6 border-tertiary">
            Intelligent Automation Solutions
          </h2>
          <p className="section-subtitle text-xl mt-6">
            Transform your business operations with EXACT AI's comprehensive suite of customized automation solutions, designed to increase efficiency, reduce costs, and drive competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <div className="mb-8">
              <div className="w-12 h-1 bg-tertiary mb-4"></div>
              <h3 className="text-2xl font-semibold text-tertiary mb-4">Core Automation Services</h3>
              <p className="text-dark/70">Implement intelligent automation solutions that transform your core business processes.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <ServicesCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  color={service.color}
                  delay={service.delay}
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <div className="w-12 h-1 bg-tertiary mb-4"></div>
              <h3 className="text-2xl font-semibold text-tertiary mb-4">Advanced Solutions</h3>
              <p className="text-dark/70">Enhance your automation ecosystem with specialized capabilities and business intelligence.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {advancedServices.map((service, index) => (
                <ServicesCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  color={service.color}
                  delay={service.delay}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise capability showcase with updated styling */}
        <div className="bg-white rounded-xl p-10 border border-tertiary/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h3 className="text-2xl text-tertiary font-semibold mb-4">Enterprise-Grade Solutions</h3>
              <p className="text-gray-600 mb-6">Our customized automation solutions are built with enterprise-level security, governance, and scalability to meet your organization's specific needs.</p>
              <Link to="/services" className="btn bg-tertiary text-white hover:bg-tertiary/90 transition group inline-flex items-center">
                <span>Explore Solutions</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Monitor size={24} />, title: "Process Monitoring", description: "Real-time visibility of all automated processes" },
                { icon: <Cpu size={24} />, title: "Intelligent Processing", description: "Advanced AI algorithms that adapt to changes" },
                { icon: <Workflow size={24} />, title: "Workflow Orchestration", description: "Seamless coordination across systems" },
                { icon: <Layers size={24} />, title: "Multi-environment Support", description: "Deploy anywhere with flexible architecture" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-tertiary/10 hover:shadow-md transition-shadow">
                  <div className="p-2 rounded-lg bg-tertiary/10 inline-block mb-3">
                    {React.cloneElement(item.icon, { className: "text-tertiary" })}
                  </div>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
