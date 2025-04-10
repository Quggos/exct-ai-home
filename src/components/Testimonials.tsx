import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { OptimizedImage } from "@/components/ui/optimized-image";

// Define interface for testimonial data structure
interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  gender: 'men' | 'women';
  imageId: number;
}

// Define props interface for TestimonialCard component
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-tertiary">
    <path d="M48.0001 0L59.2258 34.5491H95.5529L66.1637 55.9017L77.3894 90.4509L48.0001 69.0983L18.6108 90.4509L29.8365 55.9017L0.447266 34.5491H36.7744L48.0001 0Z" fill="currentColor"/>
  </svg>
);

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 hover-lift relative">
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <p className="text-gray-600 mb-8 leading-relaxed">{testimonial.content}</p>
    <div className="flex items-center">
      <Avatar className="h-14 w-14 mr-4 border-2 border-gray-100 shadow-subtle">
        <AvatarImage 
          src={`https://randomuser.me/api/portraits/${testimonial.gender}/${testimonial.imageId}.jpg`}
          alt={testimonial.name}
        />
        <AvatarFallback className="bg-tertiary text-white">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium text-tertiary">{testimonial.name}</p>
        <p className="text-gray-600 text-sm">{testimonial.position}</p>
        <p className="text-gray-600 text-sm">{testimonial.company}</p>
      </div>
    </div>
    <div className="absolute -top-3 -left-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
        <path d="M13.3333 25H6.66667C5.95942 25 5.28115 24.7366 4.78105 24.2678C4.28095 23.7989 4 23.1667 4 22.5V16.25C4 13.3167 5.19345 10.5038 7.31802 8.44078C9.44258 6.37779 12.3594 5.22333 15.4167 5.00833L16 5M33.3333 25H26.6667C25.9594 25 25.2811 24.7366 24.781 24.2678C24.281 23.7989 24 23.1667 24 22.5V16.25C24 13.3167 25.1935 10.5038 27.318 8.44078C29.4426 6.37779 32.3594 5.22333 35.4167 5.00833L36 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'Global Retail Solutions',
      content: 'EXACT AI has revolutionized our inventory management with their automation solution. We\'ve reduced processing time by 78% and virtually eliminated order fulfillment errors.',
      rating: 5,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      gender: 'men',
      imageId: 32
    },
    {
      name: 'Sarah Johnson',
      position: 'VP of Operations',
      company: 'Financial Services Inc.',
      content: 'Their document processing automation has transformed our loan application workflow. What used to take days now happens in minutes with greater accuracy and compliance.',
      rating: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      gender: 'women',
      imageId: 28
    },
    {
      name: 'David Ramirez',
      position: 'Director of Technology',
      company: 'Healthcare Systems',
      content: "EXACT AI's patient data automation solution has dramatically improved our operational efficiency while maintaining strict HIPAA compliance. Their understanding of healthcare requirements was exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      gender: 'men',
      imageId: 45
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-left mb-16 max-w-4xl">
          <div className="inline-block bg-primary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
            Client Results
          </div>
          <h2 className="section-title exct-highlight text-4xl md:text-5xl text-tertiary font-semibold mb-6">Client Success Stories</h2>
          <p className="section-subtitle text-xl mt-6">
            See how organizations across industries are achieving remarkable results with EXACT AI Automation Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/resources/testimonials" className="btn btn-tertiary rounded-md shadow-subtle hover:shadow-elevated">View More Success Stories</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
