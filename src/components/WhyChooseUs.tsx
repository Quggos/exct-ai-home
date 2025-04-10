
import React from 'react';
import { CheckSquare, Award, Users, Lightbulb, Clock, Shield, BookOpen, BarChart4, GraduationCap, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckSquare className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'AI Automation Expertise',
      description: 'Our team includes certified AI engineers, automation specialists, and process optimization experts with deep experience across multiple industries and enterprise systems.',
      metrics: '12+ years average experience'
    },
    {
      icon: <Award className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'Precision Engineering',
      description: 'We deliver automation solutions with exceptional accuracy and reliability, following rigorous testing protocols that ensure seamless operation in complex enterprise environments.',
      metrics: '99.7% automation accuracy'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'Strategic Implementation',
      description: 'We work as an extension of your team, aligning our automation roadmap with your strategic objectives to ensure maximum business impact and measurable ROI.',
      metrics: '96% client retention rate'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'Secure Architecture',
      description: 'Our automation solutions feature enterprise-grade security protocols, including encryption, access controls, audit trails, and continuous vulnerability assessment.',
      metrics: 'SOC2 Type II certified'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'Knowledge Transfer',
      description: 'We provide comprehensive training and detailed technical documentation to ensure your team can effectively manage and extend your automation solutions.',
      metrics: 'Complete solution documentation'
    },
    {
      icon: <BarChart4 className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'ROI-Focused Approach',
      description: 'Every automation initiative includes clear KPIs and performance metrics to track financial returns, productivity improvements, and quality enhancements.',
      metrics: '315% average ROI'
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'Continuous Learning',
      description: 'Our automation systems employ machine learning techniques to continuously improve performance, adapting to changing business conditions and requirements.',
      metrics: 'Self-optimizing systems'
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" strokeWidth={1.5} />,
      title: 'Global Deployment',
      description: 'With experience in multinational implementations, we deliver consistent automation performance across geographies while respecting local regulatory requirements.',
      metrics: 'Operations in 23 countries'
    }
  ];

  return (
    <section className="section-padding bg-muted relative overflow-hidden">      
      <div className="container-wide relative z-10">
        <div className="text-left mb-16 max-w-4xl">
          <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
            The EXACT AI Advantage
          </div>
          <h2 className="section-title databricks-highlight text-tertiary text-4xl md:text-5xl font-semibold mb-6">Why Leading Organizations Choose Us</h2>
          <p className="section-subtitle text-xl mt-6">
            At EXACT AI Automation Solutions, we deliver unmatched value through specialized expertise, 
            proprietary automation methodologies, and an unwavering commitment to measurable business outcomes.
          </p>
          
          {/* Enterprise Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-8 mb-12">
            <div className="bg-white px-6 py-4 shadow-sm border border-gray-100 flex items-center">
              <div className="bg-tertiary/10 w-10 h-10 flex items-center justify-center rounded-full">
                <svg className="w-5 h-5 text-tertiary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20H4V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 16.5L12 9L15 12L19.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ml-3 pl-3 border-l border-gray-200">
                <div className="text-sm font-medium">Leader</div>
                <div className="text-xs text-gray-500">Automation Excellence 2023</div>
              </div>
            </div>
            
            <div className="bg-white px-6 py-4 shadow-sm border border-gray-100 flex items-center">
              <div className="bg-tertiary/10 w-10 h-10 flex items-center justify-center rounded-full">
                <svg className="w-5 h-5 text-tertiary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L14.5 8.5L20.5 9L16 13L17.5 19L12 16L6.5 19L8 13L3.5 9L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ml-3 pl-3 border-l border-gray-200">
                <div className="text-sm font-medium">Top Performer</div>
                <div className="text-xs text-gray-500">Enterprise AI Report 2023</div>
              </div>
            </div>
            
            <div className="bg-white px-6 py-4 shadow-sm border border-gray-100 flex items-center">
              <div className="bg-tertiary/10 w-10 h-10 flex items-center justify-center rounded-full">
                <svg className="w-5 h-5 text-tertiary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L8.5 17L9.5 13L6.5 10L10.5 9.5L12 6L13.5 9.5L17.5 10L14.5 13L15.5 17L12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="ml-3 pl-3 border-l border-gray-200">
                <div className="text-sm font-medium">Customer Choice</div>
                <div className="text-xs text-gray-500">Automation Platforms 2023</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="mb-6 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-medium text-tertiary mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{reason.description}</p>
              </div>
              <div className="mt-auto p-4 bg-gray-50 text-center text-sm font-medium border-t border-gray-100 ">
                {reason.metrics}
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise case study callout */}
        <div className="mt-16 bg-white border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-medium text-tertiary mb-2">Automation Success Stories</h3>
            <p className="text-gray-600">Discover how leading organizations have transformed their operations with EXACT AI automation solutions</p>
          </div>
          <a href="/resources/case-studies" className="btn bg-tertiary text-white hover:bg-tertiary-light transition whitespace-nowrap">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
