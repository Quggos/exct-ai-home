
import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Lightbulb, Star, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
  bgImage?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon, link, color, bgImage }) => {
  return (
    <Link to={link} className="group">
      <div className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full relative ${bgImage ? 'text-white' : 'bg-white text-gray-800'}`}>
        {bgImage ? (
          <div className="absolute inset-0 z-0">
            <OptimizedImage 
              src={`${bgImage}?auto=format&fit=crop&q=70&w=600`} 
              alt={title} 
              className="w-full h-full object-cover" 
              width={600}
              height={450}
            />
            <div className={`absolute inset-0 ${color} opacity-90`}></div>
          </div>
        ) : null}
        
        <div className={`p-8 h-full flex flex-col relative z-10 ${bgImage ? '' : ''}`}>
          <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 ${bgImage ? 'bg-white/20 text-white' : `${color} text-white`}`}>
            {icon}
          </div>
          <h3 className={`text-xl font-semibold mb-3 ${bgImage ? 'text-white' : ''}`}>{title}</h3>
          <p className={`mb-6 flex-grow ${bgImage ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
          <div className={`flex items-center font-medium ${bgImage ? 'text-white' : 'text-tertiary'}`}>
            Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Resources & Insights | AI Knowledge Hub | EXACT AI"
        description="Access our comprehensive collection of AI resources, case studies, blogs, and expert insights to help navigate the evolving landscape of artificial intelligence."
        keywords="AI resources, AI case studies, AI blog, AI expertise, AI implementation guides"
        canonicalUrl="https://www.exct.com/resources"
      />
      
      <PageHero 
        badge="Resources"
        title="Insights & Resources"
        description="Explore our collection of guides, case studies, and insights to help you navigate the world of AI."
      />
      
      {/* Featured Resource */}
      <section className="py-16 bg-white" aria-label="Featured resources">
        <div className="container-wide">
          <Link to="/resources/case-studies">
            <div className="rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-tertiary/90 to-tertiary/70 z-10"></div>
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200" 
                alt="Case Studies - Real-World AI Transformations" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={1200}
                height={320}
                priority
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center p-10 text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 text-sm font-medium mb-4 w-max">
                  Featured Resource
                </div>
                <h2 className="text-3xl md:text-4xl text-white font-semibold mb-4">Case Studies: Real-World AI Transformations</h2>
                <p className="text-xl max-w-2xl mb-8">
                  Explore how organizations across industries have achieved remarkable results with our custom AI solutions.
                </p>
                <div className="flex items-center text-white font-medium">
                  View Case Studies <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-16 bg-gray-50" aria-label="Resource categories">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Blog"
              description="Stay updated with the latest insights, trends, and best practices in AI automation and development."
              icon={<BookOpen size={24} />}
              link="/resources/blog"
              color="bg-blue-600"
              bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
            />
            
            <ResourceCard
              title="Expertise"
              description="Discover our technical capabilities and specialized knowledge across various AI disciplines."
              icon={<Lightbulb size={24} />}
              link="/resources/expertise"
              color="bg-tertiary"
            />
            
            <ResourceCard
              title="Testimonials"
              description="Hear directly from our clients about their experiences and the results they've achieved with our solutions."
              icon={<Star size={24} />}
              link="/resources/testimonials"
              color="bg-amber-600"
              bgImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
            />
            
            <ResourceCard
              title="FAQ"
              description="Find answers to common questions about AI automation, our services, and implementation process."
              icon={<HelpCircle size={24} />}
              link="/resources/faq"
              color="bg-emerald-600"
            />
            
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-semibold mb-4">Free AI Assessment</h3>
              <p className="text-gray-600 mb-6">
                Not sure where to start with AI automation? Get a complimentary assessment of your business processes to identify opportunities for AI integration and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-tertiary">
                  Request Free Assessment
                </Link>
                <Link to="/resources/case-studies" className="btn btn-outline">
                  View Example Assessments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-16 bg-white" aria-label="Latest blog posts">
        <div className="container-wide">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-semibold">Latest from our Blog</h2>
            <Link to="/resources/blog" className="text-tertiary font-medium flex items-center hover:underline">
              View all articles <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of AI Automation in Business Operations",
                image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
                date: "April 2, 2025"
              },
              {
                title: "How Generative AI is Transforming Content Creation",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
                date: "March 28, 2025"
              },
              {
                title: "5 Ways AI is Revolutionizing Customer Experience",
                image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
                date: "March 15, 2025"
              }
            ].map((post, index) => (
              <div key={index} className="group">
                <Link to="/resources/blog" className="block rounded-xl overflow-hidden mb-4 group-hover:shadow-md transition-all">
                  <OptimizedImage 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={192}
                  />
                </Link>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <Link to="/resources/blog" className="block">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tertiary transition-colors">{post.title}</h3>
                </Link>
                <Link to="/resources/blog" className="text-tertiary font-medium flex items-center hover:underline">
                  Read more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Resources;
