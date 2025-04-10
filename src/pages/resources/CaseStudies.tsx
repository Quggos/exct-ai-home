
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import { Link, useParams } from 'react-router-dom';
import { 
  Building, 
  LineChart, 
  Zap, 
  BriefcaseBusiness, 
  FileBarChart, 
  ArrowRight, 
  Briefcase, 
  Hospital, 
  ShieldCheck,
  ShoppingBag,
  Banknote,
  HomeIcon,
  Rocket,
  Laptop,
  Plane
} from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

export const allCaseStudies = [
  {
    id: 1,
    title: 'How FinTech Leader Reduced Fraud by 78% with AI',
    excerpt: 'A leading financial services company implemented our AI-powered fraud detection system, resulting in a 78% reduction in fraudulent transactions and $4.3M in annual savings.',
    client: 'Global FinTech Corporation',
    industry: 'Financial Services',
    solution: 'AI Fraud Detection',
    results: '78% fraud reduction, $4.3M annual savings',
    icon: <Building className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    content: `Global FinTech Corporation, a leader in digital payments, was experiencing a sharp increase in fraudulent transactions that threatened both their bottom line and customer trust.

Our team implemented a custom AI fraud detection system that analyzed transaction patterns in real-time, identifying anomalies with unprecedented accuracy. The system utilized advanced machine learning algorithms trained on historical transaction data to detect subtle patterns invisible to traditional rules-based systems.

Within three months of deployment, fraudulent transactions dropped by 78%, saving the company approximately $4.3 million annually. The system's self-learning capabilities continue to improve detection rates as new fraud patterns emerge.

Additional benefits included reduced false positives by 43%, improving customer experience and decreasing operational costs associated with manual review processes.`
  },
  {
    id: 2,
    title: 'Manufacturing Giant Optimizes Supply Chain with Predictive AI',
    excerpt: 'We helped a manufacturing leader implement a predictive AI system that optimized their supply chain, reducing inventory costs by 23% and improving delivery times by 35%.',
    client: 'Industrial Manufacturing Inc.',
    industry: 'Manufacturing',
    solution: 'Predictive Supply Chain Optimization',
    results: '23% inventory cost reduction, 35% faster deliveries',
    icon: <Building className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    content: `Industrial Manufacturing Inc., a global leader in industrial equipment, was struggling with supply chain inefficiencies that led to excess inventory costs and delivery delays. 

Our team implemented a predictive AI system that analyzed historical order data, supplier performance, and market trends to optimize inventory levels and delivery schedules. The system integrated with their existing ERP platform, pulling data from multiple sources to create a comprehensive view of the entire supply chain.

After six months, the company saw a 23% reduction in inventory carrying costs, representing $8.7 million in annual savings. Delivery times improved by 35%, significantly enhancing customer satisfaction and loyalty.

The AI system now automates 65% of purchasing decisions, freeing up procurement staff to focus on strategic supplier relationships while continuously learning and adapting to changing market conditions.`
  },
  {
    id: 3,
    title: 'Healthcare Provider Streamlines Patient Care with AI Automation',
    excerpt: 'Our AI workflow automation solution helped a healthcare network reduce administrative workload by 40%, allowing medical staff to spend more time on patient care.',
    client: 'Metropolitan Healthcare Network',
    industry: 'Healthcare',
    solution: 'AI Workflow Automation',
    results: '40% reduction in administrative tasks',
    icon: <Hospital className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    content: `Metropolitan Healthcare Network, comprising five hospitals and twelve outpatient clinics, was drowning in administrative paperwork that took valuable time away from patient care.

We implemented an AI-powered workflow automation system that used natural language processing to extract and categorize information from clinical notes, referrals, and insurance documentation. The system automated routing of information to appropriate departments and pre-populated forms based on context.

The results were dramatic: administrative workload reduced by 40%, freeing up an average of 15 hours per week for clinical staff to focus on patient care. Patient satisfaction scores increased by 27% within the first year of implementation.

The system also improved accuracy in billing and coding, resulting in a 15% reduction in claim denials and accelerating reimbursement cycles by an average of 12 days.`
  },
  {
    id: 4,
    title: 'E-commerce Platform Boosts Conversions with Personalized AI',
    excerpt: 'A major e-commerce company implemented our AI-driven personalization engine, resulting in a 32% increase in conversion rates and 26% higher average order value.',
    client: 'Global Shop Direct',
    industry: 'E-commerce',
    solution: 'AI Personalization Engine',
    results: '32% higher conversion, 26% increased AOV',
    icon: <ShoppingBag className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    content: `Global Shop Direct, with over 2 million monthly visitors, was struggling to deliver personalized shopping experiences at scale, resulting in high bounce rates and abandoned carts.

Our team implemented an AI personalization engine that analyzed user behavior in real-time, considering browsing history, past purchases, demographic data, and even time of day to create truly personalized experiences for each visitor.

The results exceeded expectations: conversion rates increased by 32% within three months, while average order value grew by 26%. The system's ability to recommend complementary products drove a significant portion of this increase.

Email campaign performance also improved dramatically, with open rates increasing by 47% and click-through rates by 53% thanks to AI-powered subject line optimization and personalized content recommendations.`
  },
  {
    id: 5,
    title: 'Government Agency Improves Decision-Making with Data Intelligence',
    excerpt: 'Our data intelligence platform helped a government agency make more informed policy decisions, resulting in $12M in operational savings and improved public services.',
    client: 'Federal Policy Department',
    industry: 'Government',
    solution: 'Data Intelligence Platform',
    results: '$12M operational savings',
    icon: <ShieldCheck className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1527576539890-dfa815648363',
    content: `The Federal Policy Department was tasked with making critical policy decisions affecting millions of citizens, but lacked the tools to effectively analyze the vast amounts of data at their disposal.

We developed a custom data intelligence platform that integrated data from dozens of disparate sources into a unified analytics environment. The system employed machine learning algorithms to identify patterns and correlations that would have been impossible to detect manually.

Within the first year, the platform helped identify operational inefficiencies worth $12M in annual savings. More importantly, it enabled evidence-based policy decisions that improved public service delivery across multiple domains.

The platform's predictive analytics capabilities now allow the department to simulate the potential impact of policy changes before implementation, significantly reducing risk and improving outcomes for citizens.`
  },
  {
    id: 6,
    title: 'Retail Chain Enhances Customer Experience with AI-Powered Analytics',
    excerpt: 'Our AI analytics solution helped a national retail chain optimize store layouts and inventory, increasing in-store sales by 18% and reducing stockouts by 42%.',
    client: 'National Retail Solutions',
    industry: 'Retail',
    solution: 'AI-Powered Retail Analytics',
    results: '18% increased sales, 42% fewer stockouts',
    icon: <Briefcase className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    content: `National Retail Solutions, with over 200 stores nationwide, was struggling to optimize inventory and store layouts across diverse geographic locations with different customer demographics.

We implemented an AI-powered retail analytics platform that combined data from point-of-sale systems, inventory management, customer loyalty programs, and in-store sensors to provide comprehensive insights into customer behavior and preferences.

The system identified optimal product placements and inventory levels tailored to each store's unique customer base. Implementation of these recommendations resulted in an 18% increase in in-store sales and a 42% reduction in stockouts.

Customer dwell time in high-margin departments increased by 27%, and the average transaction value grew by 15%. The system continues to learn and adapt to seasonal trends and changing consumer preferences, providing ongoing optimization opportunities.`
  },
  {
    id: 7,
    title: 'Transportation Company Reduces Fuel Costs with AI Route Optimization',
    excerpt: 'Our AI route optimization system helped a logistics company reduce fuel consumption by 21% and increase delivery capacity by 15% without adding vehicles.',
    client: 'Continental Logistics',
    industry: 'Transportation',
    solution: 'AI Route Optimization',
    results: '21% fuel reduction, 15% increased capacity',
    icon: <LineChart className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    content: `Continental Logistics, operating a fleet of 500+ vehicles across the country, faced mounting pressure from rising fuel costs and increasing customer expectations for faster deliveries.

We developed an AI route optimization system that considered real-time traffic data, weather conditions, delivery time windows, vehicle capacity, and driver schedules to create optimal routes. The system recalculated routes throughout the day as conditions changed, ensuring maximum efficiency.

The results were substantial: a 21% reduction in fuel consumption, representing over $3.2 million in annual savings. Delivery capacity increased by 15% without adding any vehicles to the fleet, allowing the company to take on new customers without capital expenditure.

Driver satisfaction improved as well, with more balanced workloads and reduced stress. Carbon emissions from the fleet decreased by an estimated 4,800 tons annually, supporting the company's sustainability goals.`
  },
  {
    id: 8,
    title: 'Real Estate Firm Optimizes Property Management with Predictive AI',
    excerpt: 'Our AI-powered predictive maintenance system helped a property management firm reduce emergency repairs by 42% and decrease tenant turnover by 18%.',
    client: 'Urban Property Management',
    industry: 'Real Estate',
    solution: 'Predictive Maintenance AI',
    results: '42% fewer emergency repairs, 18% reduced tenant turnover',
    icon: <HomeIcon className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    content: `Urban Property Management oversees a portfolio of 15,000 residential and commercial units across multiple states. They struggled with high maintenance costs and tenant dissatisfaction due to emergency repairs and system failures.

Our team implemented an AI-driven predictive maintenance system that analyzed historical maintenance data, building systems information, and real-time sensor data to identify potential issues before they became critical failures.

The system prioritized maintenance tasks based on predicted failure probability, potential impact, and resource availability. It integrated with their existing work order system, automatically generating maintenance tickets for preventative action.

Within one year, emergency repair incidents decreased by 42%, generating significant cost savings and improving tenant satisfaction. Tenant turnover rates dropped by 18%, representing substantial additional savings in turnover costs. The system continues to improve as it learns from maintenance outcomes and new data inputs.`
  },
  {
    id: 9,
    title: 'Nonprofit Organization Increases Donations with AI-Powered Donor Analytics',
    excerpt: 'Our donor analytics platform helped a national nonprofit increase annual donations by 34% and improve donor retention by 28% through personalized engagement strategies.',
    client: 'National Education Foundation',
    industry: 'Nonprofit',
    solution: 'AI Donor Analytics',
    results: '34% increased donations, 28% improved donor retention',
    icon: <Briefcase className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a',
    content: `The National Education Foundation, a nonprofit organization supporting educational initiatives across the country, faced challenges in donor engagement, fundraising efficiency, and donor retention.

We implemented an AI-powered donor analytics platform that analyzed historical donation data, donor demographics, engagement patterns, and external economic indicators to create detailed donor profiles and predict future giving behavior.

The system identified optimal communication timing, preferred channels, and personalized messaging themes for different donor segments. It also predicted which donors were at risk of lapsing, enabling proactive retention strategies.

Implementation resulted in a 34% increase in annual donations through more targeted and effective fundraising campaigns. Donor retention improved by 28%, significantly reducing the cost of donor acquisition. The foundation was able to redirect resources from fundraising to mission-focused activities while increasing overall donation revenue.`
  },
  {
    id: 10,
    title: 'Space Industry Startup Accelerates Satellite Data Analysis with AI',
    excerpt: 'Our image processing AI helped a satellite data company reduce image analysis time by 94% and develop new data products that generated $12M in additional annual revenue.',
    client: 'Orbital Analytics Inc.',
    industry: 'Space',
    solution: 'AI Satellite Image Processing',
    results: '94% faster processing, $12M new revenue',
    icon: <Rocket className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    content: `Orbital Analytics Inc., a commercial satellite imagery provider, was collecting terabytes of Earth observation data daily but faced major bottlenecks in processing and analyzing this information to deliver timely insights to customers.

Our team developed an AI-powered image processing and analysis platform that automatically classified features, detected changes over time, and identified anomalies in satellite imagery. The system was trained on a massive dataset of labeled satellite images and continually improved through active learning techniques.

Implementation reduced image processing time by 94%, allowing the company to deliver insights to customers within hours instead of days or weeks. The enhanced capabilities enabled the development of new specialized data products for agriculture, urban planning, and environmental monitoring, generating $12M in additional annual revenue within two years.

The platform's automated change detection capabilities proved particularly valuable for monitoring infrastructure, deforestation, and disaster impact assessment, opening up new market opportunities for the company.`
  },
  {
    id: 11,
    title: 'Tech Company Improves Developer Productivity with AI Code Assistant',
    excerpt: 'Our AI development assistant helped a software company reduce development time by 35% and decrease bugs by 48% while improving code quality and consistency.',
    client: 'Enterprise Software Solutions',
    industry: 'Technology',
    solution: 'AI Development Assistant',
    results: '35% faster development, 48% fewer bugs',
    icon: <Laptop className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    content: `Enterprise Software Solutions, a company with over 200 developers across multiple teams and locations, struggled with code quality inconsistency, lengthy development cycles, and integration challenges between teams.

We implemented an AI-powered development assistant that integrated directly into their development environment. The system analyzed code patterns, suggested improvements, automated routine coding tasks, and helped enforce consistent coding standards across the organization.

The AI assistant learned from the company's proprietary codebase, understanding their specific architectural patterns and best practices. It provided contextual suggestions during development and automated code reviews to identify potential issues before they were committed.

Development velocity increased by 35% as developers spent less time on repetitive tasks and more time solving core business problems. Bug rates in production decreased by 48%, significantly reducing time spent on maintenance and bug fixes. New developer onboarding time was reduced by 60% as the AI assistant helped them understand existing codebases and company coding standards.`
  },
  {
    id: 12,
    title: 'Luxury Hotel Chain Enhances Guest Experience with AI Personalization',
    excerpt: 'Our AI personalization platform helped a luxury hotel group increase direct bookings by 42% and grow guest satisfaction scores by 27% through tailored experiences.',
    client: 'Global Luxury Resorts',
    industry: 'Travel',
    solution: 'AI Guest Experience Personalization',
    results: '42% more direct bookings, 27% higher satisfaction',
    icon: <Plane className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    content: `Global Luxury Resorts, an international chain of premium hotels and resorts, sought to differentiate their properties in a competitive market by delivering more personalized guest experiences while also improving operational efficiency.

We developed an AI-powered guest experience platform that unified data from multiple systems including property management, restaurant POS, spa bookings, and loyalty programs. The system created comprehensive guest profiles that included preferences, behaviors, and predictive models of future needs.

The platform enabled personalized communication at every touchpoint, from pre-arrival emails with tailored activity recommendations to in-stay experiences based on guest preferences. Dynamic pricing models adjusted offerings based on guest value and predicted willingness to pay for upgrades and amenities.

Results exceeded expectations with a 42% increase in direct bookings as personalized marketing campaigns resonated with past guests. Guest satisfaction scores improved by 27%, and average revenue per stay increased by 23% through more effective upselling of relevant services and experiences.`
  },
  {
    id: 13,
    title: 'Private Banking Firm Enhances Client Management with AI Advisory Platform',
    excerpt: 'Our AI wealth management solution helped a private banking firm increase assets under management by 23% while reducing client manager workload by 37%.',
    client: 'Pinnacle Wealth Partners',
    industry: 'Financial Services',
    solution: 'AI Wealth Advisory Platform',
    results: '23% increased AUM, 37% reduced workload',
    icon: <Banknote className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1560574188-6a6774965120',
    content: `Pinnacle Wealth Partners, a boutique private banking firm serving high-net-worth individuals, faced challenges in scaling their personalized service model as their client base grew. Client managers were overwhelmed with administrative tasks and struggled to provide timely, data-driven insights to clients.

We implemented an AI-powered wealth advisory platform that automated portfolio analysis, generated personalized investment insights, and predicted client needs based on market conditions and individual portfolio performance.

The system monitored global markets continuously, identifying relevant opportunities and risks specific to each client's portfolio and investment goals. It automatically generated client-ready reports and recommended talking points for client managers before meetings.

This intelligent automation reduced client manager administrative workload by 37%, allowing them to focus on relationship building and strategic guidance. Assets under management increased by 23% within 18 months as the enhanced service model improved client satisfaction and referrals. Client retention improved to 97%, significantly above industry averages.`
  },
  {
    id: 14,
    title: 'Manufacturing Company Reduces Quality Issues with AI Visual Inspection',
    excerpt: 'Our AI visual inspection system helped a precision parts manufacturer reduce defect rates by 92% and cut quality control costs by 65% while improving throughput.',
    client: 'Precision Components Inc.',
    industry: 'Manufacturing',
    solution: 'AI Visual Inspection System',
    results: '92% defect reduction, 65% lower QC costs',
    icon: <Building className="w-12 h-12 text-primary" strokeWidth={1.5} />,
    imageUrl: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788',
    content: `Precision Components Inc., a manufacturer of critical components for aerospace and medical devices, needed to maintain exceptionally high quality standards while improving production efficiency. Their manual inspection process was labor-intensive, subject to human error, and created a production bottleneck.

We implemented an AI-powered visual inspection system that used computer vision and deep learning to automatically detect defects in manufactured parts. The system was trained on thousands of images of both conforming and non-conforming parts to recognize subtle defects invisible to the human eye.

High-speed cameras integrated into the production line captured multiple angles of each component, and the AI system analyzed these images in real-time, flagging potential defects for further review or automatically rejecting defective parts.

Quality metrics improved dramatically with a 92% reduction in defect escape rate, ensuring virtually no defective parts reached customers. Quality control costs decreased by 65% as fewer human inspectors were required, and production throughput increased by 28% by eliminating the inspection bottleneck.`
  }
];

const CaseStudies = () => {
  const industries = [
    'All Industries',
    'Financial Services',
    'Manufacturing',
    'Healthcare',
    'E-commerce',
    'Government',
    'Retail',
    'Transportation',
    'Real Estate',
    'Nonprofit',
    'Space',
    'Technology',
    'Travel',
    'Private'
  ];

  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(allCaseStudies);

  useEffect(() => {
    if (selectedIndustry === 'All Industries') {
      setFilteredCaseStudies(allCaseStudies);
    } else {
      const filtered = allCaseStudies.filter(study => study.industry === selectedIndustry);
      setFilteredCaseStudies(filtered);
    }
  }, [selectedIndustry]);

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
  };

  return (
    <div className="min-h-screen">
      
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Discover how organizations have achieved remarkable results with our AI solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {industries.map((industry, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-md transition-colors ${industry === selectedIndustry ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => handleIndustryChange(industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-wide">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {filteredCaseStudies.map((study, index) => (
                <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-gray-200 pb-12 ${index === filteredCaseStudies.length - 1 ? 'border-b-0 pb-0' : ''}`}>
                  <div className="lg:col-span-1 flex flex-col justify-start">
                    <div className="bg-muted p-8 inline-flex justify-center items-center mb-6">
                      {study.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{study.title}</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><span className="font-medium">Client:</span> {study.client}</p>
                      <p><span className="font-medium">Industry:</span> {study.industry}</p>
                      <p><span className="font-medium">Solution:</span> {study.solution}</p>
                      <p><span className="font-medium">Results:</span> {study.results}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="h-64 bg-gray-300 mb-6 overflow-hidden">
                      <OptimizedImage 
                        src={`${study.imageUrl}?auto=format&fit=crop&q=70&w=800`} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                        width={800}
                        height={450}
                        aspectRatio={16/9}
                        priority={index < 3}
                      />
                    </div>
                    <p className="text-gray-700 mb-6">
                      {study.excerpt}
                    </p>
                    <p className="text-gray-700 mb-6">
                      {study.content.substring(0, 250)}...
                    </p>
                    <Link to={`/resources/case-studies/${study.id}`} className="btn bg-primary text-white hover:bg-primary/90 inline-flex items-center transition-colors">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-700">No case studies found for {selectedIndustry}</h3>
              <p className="mt-4 text-gray-600">Please select a different industry or view all case studies.</p>
            </div>
          )}
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudies;
