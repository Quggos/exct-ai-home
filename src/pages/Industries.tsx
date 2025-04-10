import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Building, Stethoscope, Landmark, Heart, Home, Briefcase, Rocket, Cpu, Plane, Car, Brain } from 'lucide-react';
import SEO from '@/components/SEO';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white rounded-xl border border-gray-100 hover:border-tertiary/30 shadow-sm hover:shadow-md transition-all duration-300 p-8 h-full">
        <div className="w-14 h-14 bg-tertiary/10 flex items-center justify-center rounded-lg mb-6 text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-tertiary transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-center text-tertiary font-medium">
          Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
};

const Industries = () => {
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industries We Serve | AI Solutions by Sector",
    "description": "EXACT AI delivers tailored AI automation solutions across diverse industries, addressing unique challenges with precision and innovation.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "E-commerce AI Solutions",
          "description": "AI-driven solutions for inventory management, customer experience, and personalized recommendations.",
          "url": "https://www.exct.com/industries/ecommerce"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Financial AI Solutions",
          "description": "Secure AI systems for risk assessment, fraud detection, and automated compliance.",
          "url": "https://www.exct.com/industries/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Healthcare AI Solutions",
          "description": "HIPAA-compliant AI solutions for patient care, operational efficiency, and diagnostic support.",
          "url": "https://www.exct.com/industries/healthcare"
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "EXACT AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.exct.com/media/exct-meta-preview.jpg",
        "width": 1200,
        "height": 630
      }
    }
  };

  const industries = [
    {
      title: "E-commerce",
      description: "AI-driven solutions for inventory management, customer experience, and personalized recommendations.",
      icon: <ShoppingBag size={24} />,
      link: "/industries/ecommerce"
    },
    {
      title: "Finance",
      description: "Secure AI systems for risk assessment, fraud detection, and automated compliance.",
      icon: <Building size={24} />,
      link: "/industries/finance"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant AI solutions for patient care, operational efficiency, and diagnostic support.",
      icon: <Stethoscope size={24} />,
      link: "/industries/healthcare"
    },
    {
      title: "Government",
      description: "Public sector AI applications for citizen services, data analysis, and resource optimization.",
      icon: <Landmark size={24} />,
      link: "/industries/government"
    },
    {
      title: "Non-Profit",
      description: "Mission-focused AI tools to maximize impact, optimize donations, and streamline operations.",
      icon: <Heart size={24} />,
      link: "/industries/nonprofit"
    },
    {
      title: "Real Estate",
      description: "Property management, market analysis, and customer engagement AI solutions.",
      icon: <Home size={24} />,
      link: "/industries/realestate"
    },
    {
      title: "Private Sector",
      description: "Business transformation through AI automation, analytics, and decision support systems.",
      icon: <Briefcase size={24} />,
      link: "/industries/private"
    },
    {
      title: "Space",
      description: "Advanced AI for mission planning, data analysis, and autonomous systems in aerospace.",
      icon: <Rocket size={24} />,
      link: "/industries/space"
    },
    {
      title: "Technology",
      description: "Cutting-edge AI solutions for product development, customer support, and innovation.",
      icon: <Cpu size={24} />,
      link: "/industries/technology"
    },
    {
      title: "Transportation",
      description: "Logistics optimization, route planning, and fleet management AI systems.",
      icon: <Car size={24} />,
      link: "/industries/transportation"
    },
    {
      title: "AI & Machine Learning",
      description: "Specialized AI services for companies already working with machine learning technologies.",
      icon: <Brain size={24} />,
      link: "/industries/ai-ml"
    },
    {
      title: "Travel",
      description: "Customer experience, booking optimization, and demand forecasting for travel businesses.",
      icon: <Plane size={24} />,
      link: "/industries/travel"
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Industries We Serve | AI Solutions by Sector | EXACT AI"
        description="EXACT AI delivers tailored AI automation solutions across diverse industries, addressing unique challenges with precision and innovation. Explore our industry-specific AI services."
        keywords="AI for healthcare, AI in finance, government AI solutions, AI for ecommerce, AI transportation solutions, industry-specific AI, sector-based automation"
        canonicalUrl="https://www.exct.com/industries"
        schema={industriesSchema}
      />
      
      <PageHero
        badge="Industries"
        title="Industries We Serve"
        description="EXACT AI delivers tailored AI automation solutions across diverse industries, addressing unique challenges with precision and innovation."
      />
      
      <section className="py-16 bg-white" aria-label="Industry solutions">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                link={industry.link}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-50 p-8 rounded-xl inline-block max-w-3xl">
              <h3 className="text-2xl font-semibold mb-4">Don't See Your Industry?</h3>
              <p className="text-gray-600 mb-6">
                Our AI solutions are adaptable to any business sector. We specialize in customizing our approaches to meet the specific needs of your industry, no matter how niche.
              </p>
              <Link to="/contact" className="btn btn-tertiary">
                Contact Us For Custom Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50" aria-label="Benefits across industries">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
              Universal Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Benefits Across All Industries</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              While each industry has unique needs, our AI solutions provide these fundamental benefits regardless of your business sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
              <p className="text-gray-600">
                Automate routine tasks, streamline workflows, and reduce manual processes to significantly increase productivity and resource utilization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Cost Reduction</h3>
              <p className="text-gray-600">
                Lower operational expenses through process automation, error reduction, and optimized resource allocation across business functions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Leverage advanced analytics and AI insights to make better business decisions based on accurate data rather than intuition alone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Competitive Advantage</h3>
              <p className="text-gray-600">
                Stay ahead of the competition by implementing cutting-edge AI technologies that enable innovation and business transformation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Enhanced Customer Experience</h3>
              <p className="text-gray-600">
                Provide personalized, responsive service through AI-powered solutions that anticipate and address customer needs effectively.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Scalability</h3>
              <p className="text-gray-600">
                Implement solutions that grow with your business, handling increasing demands without proportional increases in resources or costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Industries;
