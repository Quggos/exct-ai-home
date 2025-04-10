import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  const testimonials = [
    // Financial Services
    {
      id: 1,
      quote: "Working with this team transformed our approach to data. Their AI solutions helped us identify patterns we never would have seen otherwise, leading to a 32% increase in operational efficiency.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "Global Financial Services",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=25')]",
      industry: "Financial Services"
    },
    {
      id: 2,
      quote: "The AI-driven risk assessment platform has revolutionized our lending process. We've reduced default rates by 45% while expanding our customer base.",
      name: "Michael Chen",
      title: "VP of Risk Management",
      company: "Pacific Banking Corp",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=53')]",
      industry: "Financial Services"
    },
    {
      id: 3,
      quote: "Their fraud detection system has saved us millions. We've seen a 67% reduction in fraudulent transactions within the first quarter of implementation.",
      name: "Amanda Rodriguez",
      title: "Head of Security",
      company: "Secure Payments Inc",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=37')]",
      industry: "Financial Services"
    },
    {
      id: 4,
      quote: "The automated trading algorithms they developed have consistently outperformed our traditional methods by 28%. Exceptional results.",
      name: "David Thompson",
      title: "Investment Director",
      company: "Quantum Investments",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=51')]",
      industry: "Financial Services"
    },
    // Healthcare
    {
      id: 5,
      quote: "Their AI diagnostic support system has improved our accuracy by 41%. More importantly, it's helping us provide better patient care.",
      name: "Dr. Elizabeth Taylor",
      title: "Medical Director",
      company: "Metropolitan Health Network",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=32')]",
      industry: "Healthcare"
    },
    {
      id: 6,
      quote: "The patient flow optimization system has reduced wait times by 35% and improved resource utilization across all departments.",
      name: "Dr. James Wilson",
      title: "Operations Director",
      company: "City General Hospital",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=59')]",
      industry: "Healthcare"
    },
    {
      id: 7,
      quote: "Their predictive analytics for patient readmission has helped us provide proactive care and reduce readmission rates by 28%.",
      name: "Dr. Maria Garcia",
      title: "Chief of Medicine",
      company: "Healthcare Innovation Center",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=28')]",
      industry: "Healthcare"
    },
    // Manufacturing
    {
      id: 8,
      quote: "The predictive maintenance system they implemented has reduced our downtime by 47% and saved us millions in maintenance costs.",
      name: "Robert Chen",
      title: "Plant Manager",
      company: "Advanced Manufacturing Co",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=55')]",
      industry: "Manufacturing"
    },
    {
      id: 9,
      quote: "Their quality control AI has reduced defect rates by 62% and improved our production efficiency significantly.",
      name: "Jennifer Williams",
      title: "Quality Assurance Director",
      company: "Precision Industries",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=33')]",
      industry: "Manufacturing"
    },
    {
      id: 10,
      quote: "The supply chain optimization algorithm has reduced our inventory costs by 31% while improving delivery times.",
      name: "Mark Anderson",
      title: "Supply Chain Manager",
      company: "Global Manufacturing Solutions",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=57')]",
      industry: "Manufacturing"
    },
    // E-commerce
    {
      id: 11,
      quote: "Their personalization engine increased our conversion rates by 45% and customer satisfaction scores by 38%.",
      name: "Lisa Zhang",
      title: "Digital Marketing Director",
      company: "Online Retail Pro",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=29')]",
      industry: "E-commerce"
    },
    {
      id: 12,
      quote: "The inventory forecasting system has reduced stockouts by 73% and improved our cash flow significantly.",
      name: "Tom Parker",
      title: "Operations Manager",
      company: "E-Shop Solutions",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=52')]",
      industry: "E-commerce"
    },
    {
      id: 13,
      quote: "Customer service automation has reduced response times by 82% while maintaining high satisfaction rates.",
      name: "Sarah Miller",
      title: "Customer Experience Head",
      company: "Digital Mart",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=31')]",
      industry: "E-commerce"
    },
    // Government
    {
      id: 14,
      quote: "The citizen service automation platform has reduced processing times by 68% and improved satisfaction rates significantly.",
      name: "John Martinez",
      title: "Digital Transformation Lead",
      company: "City Government",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=54')]",
      industry: "Government"
    },
    {
      id: 15,
      quote: "Their predictive analytics for urban planning has helped us make more informed decisions about infrastructure development.",
      name: "Patricia Lee",
      title: "Urban Planning Director",
      company: "Metropolitan Authority",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=26')]",
      industry: "Government"
    },
    // Technology
    {
      id: 16,
      quote: "The AI development platform they built has accelerated our product development cycle by 40%.",
      name: "Alex Kumar",
      title: "CTO",
      company: "Tech Innovators",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=58')]",
      industry: "Technology"
    },
    {
      id: 17,
      quote: "Their machine learning infrastructure has improved our model deployment efficiency by 65%.",
      name: "Rachel Chen",
      title: "AI Research Lead",
      company: "Future Tech Labs",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=27')]",
      industry: "Technology"
    },
    // Retail
    {
      id: 18,
      quote: "The customer analytics platform has transformed how we understand and serve our customers. Sales are up 34%.",
      name: "Mike Wilson",
      title: "Retail Operations Director",
      company: "Smart Retail Inc",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=56')]",
      industry: "Retail"
    },
    {
      id: 19,
      quote: "Their store optimization algorithm has improved our layout efficiency and increased sales per square foot by 28%.",
      name: "Emma Thompson",
      title: "Store Planning Manager",
      company: "Retail Solutions",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=30')]",
      industry: "Retail"
    },
    // Logistics
    {
      id: 20,
      quote: "Route optimization has reduced our fuel costs by 23% and improved delivery times by 31%.",
      name: "Carlos Rodriguez",
      title: "Logistics Director",
      company: "Global Logistics Co",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=50')]",
      industry: "Logistics"
    },
    {
      id: 21,
      quote: "The warehouse automation system has improved picking accuracy to 99.9% and reduced labor costs significantly.",
      name: "Linda Martinez",
      title: "Warehouse Operations Manager",
      company: "Smart Logistics",
      rating: 5,
      image: "bg-[url('https://i.pravatar.cc/300?img=34')]",
      industry: "Logistics"
    }
  ];

  const industries = [
    'All Industries',
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'E-commerce',
    'Government',
    'Technology',
    'Retail',
    'Logistics'
  ];

  // Filter testimonials based on selected industry
  const filteredTestimonials = selectedIndustry === 'All Industries'
    ? testimonials
    : testimonials.filter(t => t.industry === selectedIndustry);

  // Render stars for rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-gray-300'}`} 
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Hear directly from our clients about their experiences and the results they've achieved with our AI solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {industries.map((industry) => (
              <button 
                key={industry} 
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedIndustry === industry 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="border border-gray-200 bg-white flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="mb-6 relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-20 -left-6" strokeWidth={1.5} />
                    <p className="text-gray-700 relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 p-8 flex items-center">
                  <div className={`w-16 h-16 ${testimonial.image} rounded-full mr-4 bg-cover bg-center`}></div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    <p className="text-primary text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Trusted By Industry Leaders</h2>
            <p className="text-lg text-gray-700">
              We're proud to work with innovative organizations across industries to deliver transformative AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Microsoft */}
            <div className="h-24 flex items-center justify-center p-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                alt="Microsoft"
                className="max-h-8 w-auto object-contain"
              />
            </div>
            
            {/* IBM */}
            <div className="h-24 flex items-center justify-center p-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM"
                className="max-h-10 w-auto object-contain"
              />
            </div>
            
            {/* Salesforce */}
            <div className="h-24 flex items-center justify-center p-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                alt="Salesforce"
                className="max-h-12 w-auto object-contain"
              />
            </div>
            
            {/* Oracle */}
            <div className="h-24 flex items-center justify-center p-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                alt="Oracle"
                className="max-h-8 w-auto object-contain"
              />
            </div>
            
            {/* SAP */}
            <div className="h-24 flex items-center justify-center p-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
                alt="SAP"
                className="max-h-8 w-auto object-contain"
              />
            </div>
            
            {/* Siemens */}
            <div className="h-24 flex items-center justify-center p-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg"
                alt="Siemens"
                className="max-h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Testimonials;
