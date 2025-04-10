
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";

const featuredCustomers = [
    { 
      name: 'T-Mobile',
      // SVG is already optimized
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/T-Mobile_logo.svg',
      width: 120,
      height: 50,
      description: 'T-Mobile telecommunications company, EXACT AI client partner'
    },
    { 
      name: 'Adobe',
      // Using smaller version of the logo
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/200px-Adobe_Corporate_Logo.png',
      width: 120,
      height: 40,
      description: 'Adobe software company, EXACT AI client partner'
    },
    { 
      name: 'H&M',
      // SVG is already optimized
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/200px-H%26M-Logo.svg.png',
      width: 100,
      height: 50,
      description: 'H&M fashion retailer, EXACT AI client partner'
    },
    { 
      name: 'Shell',
      // Using official SVG from Wikimedia
      logo: 'https://upload.wikimedia.org/wikipedia/ro/e/e8/Shell_logo.svg',
      width: 100,
      height: 50,
      description: 'Shell energy company, EXACT AI client partner'
    }
];

const PartnersSection = () => {
  return (
    <section className="exct-gradient-bg py-24 text-white" id="partners">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">Industry leaders are data + AI companies</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join the ranks of forward-thinking organizations that have transformed their operations with our AI solutions. 
            Our enterprise clients have seen significant improvements in efficiency, cost reduction, and business growth 
            through our customized AI implementation strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center justify-center">
          {featuredCustomers.map((customer, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-20 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:grayscale-0 transition-all duration-500 hover:bg-white/15 hover-lift relative"
            >
              <div className="relative w-full h-full">
                <OptimizedImage
                  src={customer.logo}
                  alt={customer.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, 200px"
                  priority={index < 2} // Load first two logos immediately
                  width={customer.width}
                  height={customer.height}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/resources/case-studies" className="btn bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition">
            View Success Stories
          </Link>
          <p className="mt-4 text-sm text-white/60">
            Discover how our AI solutions have helped businesses across multiple industries achieve their goals 
            and overcome challenges with smart automation and enterprise-grade AI implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
