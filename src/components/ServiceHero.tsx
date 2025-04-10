import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from './ui/optimized-image';

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
  backgroundImage?: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  rightContent: ReactNode;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  badge,
  title,
  description,
  backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  primaryCTA = {
    text: "Start Your Project",
    link: "/contact"
  },
  secondaryCTA = {
    text: "Explore Case Studies",
    link: "/resources/case-studies"
  },
  rightContent
}) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <OptimizedImage
          src={backgroundImage}
          alt="Background"
          className="object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tertiary/80" /> {/* Reduced opacity overlay */}
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center">
            <div className="w-fit bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
              <span className="text-white font-medium text-sm">{badge}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-md md:text-lg text-white/90 mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={primaryCTA.link} className="bg-white text-tertiary hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-all">
                {primaryCTA.text}
              </Link>
              <Link to={secondaryCTA.link} className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-all">
                {secondaryCTA.text}
              </Link>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="relative flex items-center w-full">
            <div className="w-full">
              {rightContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
