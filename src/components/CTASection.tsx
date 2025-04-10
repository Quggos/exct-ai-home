import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactFormShared from './ContactFormShared';
import { OptimizedImage } from './ui/optimized-image';
const StarIcon = () => <svg width="16" height="16" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
    <path d="M48.0001 0L59.2258 34.5491H95.5529L66.1637 55.9017L77.3894 90.4509L48.0001 69.0983L18.6108 90.4509L29.8365 55.9017L0.447266 34.5491H36.7744L48.0001 0Z" fill="currentColor" />
  </svg>;
const CTASection = () => {
  return <section className="py-32 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <OptimizedImage src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80" alt="Background" fill priority sizes="100vw" />
        <div className="absolute inset-0 exct-gradient-bg opacity-95"></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 leading-tight">
              Ready to transform your business with tailored AI solutions?
            </h2>
            <p className="text-md md:text-lg text-white/80 mb-12 max-w-3xl">
              Schedule a consultation with our automation experts to explore how EXACT AI's customized solutions can optimize your operations, reduce costs, and drive sustainable growth.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
              <Link to="/contact" className="btn bg-white text-secondary hover:bg-white/90 transition inline-flex items-center justify-center shadow-lg">
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
              <Link to="/resources/case-studies" className="btn border border-white/30 text-white hover:bg-white/10 transition inline-flex items-center justify-center">
                View Results
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 relative">
                        <OptimizedImage src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`} alt={`User ${i}`} className="rounded-full border-2 border-white" fill sizes="40px" />
                      </div>)}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
                    </div>
                    <p className="text-sm text-white/80 text-left">Trusted by 1,000+ enterprises</p>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-white/20 hidden md:block"></div>
                
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">97% Implementation Success Rate</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl p-8 relative">
              <h3 className="text-2xl font-medium text-white mb-6">Schedule a Consultation</h3>
              
              <ContactFormShared variant="dark" />
              
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-white/70 text-center">
                By submitting this form, you agree to our 
                <a href="/privacy" className="text-white hover:underline ml-1">Privacy Policy</a>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-tertiary/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;