
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import { ArrowLeft, Clock, Award, ChevronRight } from 'lucide-react';
import { allCaseStudies } from './CaseStudies';
import { OptimizedImage } from '@/components/ui/optimized-image';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [relatedCaseStudies, setRelatedCaseStudies] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      const studyId = parseInt(id);
      const study = allCaseStudies.find(s => s.id === studyId);
      
      if (study) {
        setCaseStudy(study);
        
        // Find related case studies in the same industry
        const related = allCaseStudies
          .filter(s => s.industry === study.industry && s.id !== study.id)
          .slice(0, 3);
        setRelatedCaseStudies(related);
      }
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen">
          <div className="container-wide py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-6">The case study you're looking for doesn't exist or has been removed.</p>
          <Link to="/resources/case-studies" className="btn bg-tertiary text-white hover:bg-tertiary/90">
            View All Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      
      {/* Hero section */}
      <section className="bg-muted pt-32 pb-16">
        <div className="container-wide">
          <Link to="/resources/case-studies" className="inline-flex items-center text-tertiary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            <span>All Case Studies</span>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
                {caseStudy.industry}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {caseStudy.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-6 text-gray-700">
                <div>
                  <p className="text-sm mb-1">Client</p>
                  <p className="font-medium">{caseStudy.client}</p>
                </div>
                <div>
                  <p className="text-sm mb-1">Solution</p>
                  <p className="font-medium">{caseStudy.solution}</p>
                </div>
                <div>
                  <p className="text-sm mb-1">Results</p>
                  <p className="font-medium">{caseStudy.results}</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-4">Key Outcomes</h3>
              <ul className="space-y-4">
                {caseStudy.results.split(', ').map((result: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Award className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <span>{result}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <span>Implementation in under 6 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image section */}
      <div className="container-wide">
        <div className="relative -mt-12 mb-16 rounded-lg overflow-hidden shadow-lg">
          <OptimizedImage
            src={`${caseStudy.imageUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200`}
            alt={caseStudy.title}
            aspectRatio={16/9}
            priority={true}
            className="w-full"
          />
        </div>
      </div>
      
      {/* Content section */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                {caseStudy.content.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">About the Client</h3>
                <p className="text-gray-700">
                  {caseStudy.client} is a leading provider in the {caseStudy.industry.toLowerCase()} sector, focused on delivering exceptional solutions to their customers through innovation and customer-centric approaches.
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">Technology Used</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-primary mr-2" strokeWidth={1.5} />
                    <span>Advanced Machine Learning Models</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-primary mr-2" strokeWidth={1.5} />
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-primary mr-2" strokeWidth={1.5} />
                    <span>Predictive Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-primary mr-2" strokeWidth={1.5} />
                    <span>Custom AI Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related case studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container-wide">
            <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCaseStudies.map((study) => (
                <Link key={study.id} to={`/resources/case-studies/${study.id}`} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <OptimizedImage
                        src={`${study.imageUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600`}
                        alt={study.title}
                        aspectRatio={16/9}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 text-xs font-medium mb-3">
                        {study.industry}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {study.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Read Case Study
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" 
                        strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
