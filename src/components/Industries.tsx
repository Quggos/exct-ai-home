import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, ShoppingCart, CircleDollarSign, ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/ui/optimized-image";
import PartnersSection from './PartnersSection';

const Industries = () => {
  const industries = [
    {
      name: 'E-commerce',
      description: 'Personalized shopping experiences and inventory optimization',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
      link: '/industries/ecommerce',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Personalized product recommendations',
        'Inventory forecasting and optimization',
        'Automated customer support',
        'Dynamic pricing optimization'
      ]
    },
    {
      name: 'Finance',
      description: 'Risk assessment, fraud detection, and automated trading',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80',
      link: '/industries/finance',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Fraud detection and prevention',
        'Automated risk assessment',
        'Algorithmic trading systems',
        'Regulatory compliance monitoring'
      ]
    },
    {
      name: 'Healthcare',
      description: 'Diagnosis assistance, patient monitoring, and research',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
      link: '/industries/healthcare',
      highlightColor: 'bg-primary',
      benefits: [
        'Medical imaging analysis',
        'Patient risk stratification',
        'Clinical decision support',
        'Drug discovery acceleration'
      ]
    },
    {
      name: 'Government',
      description: 'Public service optimization and policy analysis',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80',
      link: '/industries/government',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Citizen service automation',
        'Resource allocation optimization',
        'Predictive public safety',
        'Policy impact simulation'
      ]
    },
    {
      name: 'Technology',
      description: 'Accelerating innovation with AI-powered solutions',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
      link: '/industries/technology',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Product development acceleration',
        'Automated testing and QA',
        'Predictive maintenance',
        'Performance optimization'
      ]
    },
    {
      name: 'Space',
      description: 'Advanced AI solutions for space exploration and operations',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',
      link: '/industries/space',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Mission planning optimization',
        'Satellite data analysis',
        'Space debris tracking',
        'Resource utilization'
      ]
    },
    {
      name: 'Private Sector',
      description: 'Custom AI solutions for private enterprises',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      link: '/industries/private',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Business process automation',
        'Decision support systems',
        'Market analysis',
        'Operational efficiency'
      ]
    },
    {
      name: 'Nonprofit',
      description: 'AI solutions for social impact and mission-driven organizations',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80',
      link: '/industries/nonprofit',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Donor engagement optimization',
        'Impact measurement',
        'Resource allocation',
        'Program effectiveness'
      ]
    },
    {
      name: 'Travel',
      description: 'AI-powered solutions for the travel industry',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
      link: '/industries/travel',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Personalized recommendations',
        'Dynamic pricing',
        'Demand forecasting',
        'Customer experience'
      ]
    },
    {
      name: 'Transportation',
      description: 'Optimizing logistics and fleet management with AI',
      image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80',
      link: '/industries/transportation',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Route optimization',
        'Fleet management',
        'Predictive maintenance',
        'Real-time tracking'
      ]
    },
    {
      name: 'Real Estate',
      description: 'AI solutions for property management and analytics',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
      link: '/industries/realestate',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Market analysis',
        'Property valuation',
        'Portfolio optimization',
        'Tenant satisfaction'
      ]
    },
    {
      name: 'AI/ML',
      description: 'Advanced artificial intelligence and machine learning solutions',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      link: '/industries/aiml',
      highlightColor: 'bg-tertiary',
      benefits: [
        'Custom model development',
        'MLOps automation',
        'Algorithm optimization',
        'Model deployment'
      ]
    }
  ];

  return (
    <section className="exct-section" id="industries">
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="container-wide relative">
          <div className="text-left mb-10 max-w-4xl">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 text-sm font-medium mb-4">
              Industry Solutions
            </div>
            <h2 className="section-title exct-highlight text-4xl md:text-5xl font-semibold mb-6 text-tertiary">
              Unity of your data + AI
            </h2>
            <p className="section-subtitle text-lg mt-6">
              We deliver tailored AI solutions across diverse industries, addressing specific challenges and unlocking new opportunities for growth.
            </p>
          </div>

          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-4">
                {industries.map((industry, index) => (
                  <CarouselItem key={index} className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link to={industry.link} className="block h-full">
                      <div className="relative group h-full">
                        <div className="h-full bg-white rounded-xl overflow-hidden flex flex-col border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-tertiary/20">
                          <div className="relative aspect-[16/10] w-full">
                            <OptimizedImage
                              src={`${industry.image}?auto=format&fit=crop&q=70&w=600`}
                              alt={industry.name}
                              aspectRatio={16/10}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              priority={index < 3}
                              width={600}
                              height={375}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex items-end">
                              <div className="p-8">
                                <div className="flex items-center justify-between mb-3">
                                  <h3 className="text-2xl font-semibold text-white">{industry.name}</h3>
                                  <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                                </div>
                                <p className="text-white/80 text-sm leading-relaxed">{industry.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                            <h4 className="text-sm font-semibold text-tertiary mb-4">Key Capabilities</h4>
                            <ul className="space-y-3 mb-6">
                              {industry.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-tertiary mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 leading-relaxed">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="pt-4 border-t border-gray-100">
                              <div className="flex items-center text-tertiary font-medium group-hover:text-tertiary/80 transition-colors">
                                <span>Explore solutions</span>
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
                <CarouselItem className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full flex items-center justify-center p-8 rounded-xl border border-dashed border-gray-300 bg-white/50 backdrop-blur-sm">
                    <div className="text-center max-w-xs mx-auto">
                      <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mx-auto mb-6">
                        <ArrowUpRight className="w-8 h-8 text-tertiary" />
                      </div>
                      <h3 className="text-xl font-semibold text-dark mb-4">Custom Industry Solutions</h3>
                      <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                        Discover how our AI solutions can be tailored to your industry's specific needs and challenges.
                      </p>
                      <Link to="/industries" className="inline-flex items-center justify-center px-6 py-3 bg-tertiary text-white font-medium rounded-lg hover:bg-tertiary/90 transition-colors">
                        View All Industries
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <div className="flex items-center justify-center mt-12">
                <CarouselPrevious className="relative -left-0 mx-2 bg-white border-gray-200 hover:bg-gray-50 w-12 h-12" />
                <CarouselNext className="relative -right-0 mx-2 bg-white border-gray-200 hover:bg-gray-50 w-12 h-12" />
              </div>
            </Carousel>
          </div>

          {/* Case study highlight */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="md:col-span-1 bg-tertiary p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                <div className="relative">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-white/70 mb-4 bg-white/10 px-3 py-1">Featured Case Study</span>
                  <h3 className="text-3xl font-semibold text-white mb-6">Global Bank Reduces Fraud by 73%</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    We implemented an advanced AI solution that processes thousands of transactions per second to detect and prevent fraudulent activities in real-time.
                  </p>
                  <Link 
                    to="/resources/case-studies/1"
                    className="inline-flex items-center text-white font-medium hover:text-white/90 transition-colors group"
                  >
                    <span>Read the case study</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 bg-white">
                <div className="h-full p-12 bg-muted flex flex-col justify-between">
                  <div className="grid grid-cols-1 gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        { 
                          label: "Reduction in fraud", 
                          value: "73%", 
                          color: "text-tertiary",
                          description: "Year-over-year improvement"
                        },
                        { 
                          label: "Implementation time", 
                          value: "8 weeks", 
                          color: "text-tertiary",
                          description: "From concept to deployment"
                        }
                      ].map((stat, index) => (
                        <div key={index} className="text-left py-6 px-6 rounded-xl bg-white border border-slate-200">
                          <p className="text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
                          <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                          <p className="text-sm text-gray-500">{stat.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="text-left py-6 px-6 rounded-xl bg-white border border-slate-200">
                      <p className="text-sm font-medium text-gray-600 mb-2">ROI</p>
                      <p className="text-4xl font-bold text-tertiary mb-2">3.4x</p>
                      <p className="text-sm text-gray-500">Return on investment</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-300">
                    <div className="flex items-center">
                      <div className="relative flex-shrink-0 w-12 h-12">
                        <OptimizedImage 
                          src="https://randomuser.me/api/portraits/men/32.jpg" 
                          alt="Client" 
                          width={48}
                          height={48}
                          className="rounded-full ring-4 ring-white"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg text-gray-800 font-medium italic">"The system paid for itself within the first 3 months of operation."</p>
                        <p className="text-sm text-gray-500 mt-2">Michael Chen, Chief Technology Officer at Global Financial Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
