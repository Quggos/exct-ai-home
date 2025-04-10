import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, FileText, Link as LinkIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-tertiary text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <svg width="96" height="24" viewBox="0 0 96 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1525_906)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M55.1715 16C55.1715 19.5556 57.171 22 60.9238 22C62.0311 22 63.2309 21.6508 64 21.1111V18.2222C63.2614 18.7619 62.1849 19.1429 61.2007 19.1429C59.3855 19.1429 58.2167 17.9365 58.2167 15.9048V8.76193H64V6.03175H58.2167V2H55.1715V6.03175H52.1876V8.76193H55.1715V16ZM0 13.7143C0 18.5079 3.41449 21.9365 7.99768 21.9365C10.9508 21.9365 13.381 20.508 14.7036 17.8413L12.3659 16.6032C11.4738 18.3175 9.81268 19.1429 7.96713 19.1429C5.26003 19.1429 3.29146 17.2699 2.9529 14.6032H15.0114V13.3334C15.0114 8.98415 12.1812 5.58733 7.62858 5.58733C3.10675 5.58733 0 9.23812 0 13.7143ZM11.966 12.5715H3.07594C3.38366 10.254 5.0448 8.4127 7.59774 8.4127C10.0896 8.4127 11.8429 10.0953 11.966 12.5715ZM17.9468 21.5873H21.3919L24.4681 16.8889C24.8063 16.3492 25.0524 15.7778 25.2062 15.1746H26.7134C26.8675 15.7778 27.1134 16.3492 27.4518 16.8889L30.528 21.5873H33.9729L30.1588 15.6825C29.6974 14.9841 29.482 14.3809 29.482 13.8095C29.482 13.2698 29.6666 12.7302 30.0973 12.0635L33.9729 6.03175H30.4973L27.4518 10.7619C27.1444 11.2381 26.9288 11.7778 26.775 12.3174H25.1447C25.0216 11.7778 24.7755 11.2381 24.4681 10.7619L21.3919 6.03175H17.9468L21.8226 12.0635C22.2531 12.7302 22.4378 13.2698 22.4378 13.8095C22.4378 14.3809 22.2226 14.9841 21.761 15.6825L17.9468 21.5873ZM44.2532 21.9365C39.9156 22 36.3782 18.2857 36.3782 13.7778C36.3782 9.30157 39.9156 5.61902 44.2532 5.6508C47.0215 5.6508 49.5745 6.95238 50.9587 9.74603L48.4365 11.2064C47.5445 9.5238 46.0373 8.6349 44.2532 8.6349C41.6077 8.6349 39.4236 10.9524 39.4236 13.7778C39.4236 16.6349 41.6077 18.9841 44.2532 18.9841C46.0373 18.9841 47.5445 18.0952 48.4365 16.4127L50.9587 17.8413C49.5745 20.6667 47.0215 21.9365 44.2532 21.9365Z" fill="white" />
                  <rect width="24" height="24" transform="translate(72)" fill="white" />
                  <path d="M77.5 16.702C77.9946 15.33 78.452 14.084 78.872 12.964C79.292 11.844 79.7026 10.7987 80.104 9.828C80.5146 8.85733 80.944 7.91467 81.392 7H82.96C83.2866 7.69067 83.604 8.39533 83.912 9.114C84.2293 9.8233 84.542 10.57 84.85 11.354C85.158 12.1287 85.4753 12.9547 85.802 13.832C86.138 14.7093 86.488 15.666 86.852 16.702H85.046C84.9153 16.31 84.78 15.9227 84.64 15.54C84.5 15.148 84.3646 14.7607 84.234 14.378H80.062C79.9313 14.7607 79.7913 15.148 79.642 15.54C79.502 15.9227 79.3713 16.31 79.25 16.702H77.5ZM80.482 13.02H83.8C83.6413 12.572 83.4826 12.1473 83.324 11.746C83.1746 11.3353 83.0253 10.9527 82.876 10.598C82.736 10.234 82.6006 9.898 82.47 9.59C82.3486 9.27267 82.2366 8.99267 82.134 8.75C82.0313 8.99267 81.9193 9.27267 81.798 9.59C81.6766 9.898 81.5413 10.234 81.392 10.598C81.252 10.9527 81.1026 11.3353 80.944 11.746C80.7946 12.1473 80.6406 12.572 80.482 13.02ZM88.1746 16.702V7H89.8546V16.702H88.1746Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1525_906">
                    <rect width="96" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <p className="text-gray-300 mb-6">
              Leading the way in AI solutions for businesses across industries. We provide top-tier AI development, consulting, and implementation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/exct" className="text-white hover:text-gray-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com/61574399337370/" className="text-white hover:text-gray-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/generative-ai" className="text-gray-300 hover:text-white">Generative AI Implementation</Link></li>
              <li><Link to="/services/ai-development" className="text-gray-300 hover:text-white">AI Development</Link></li>
              <li><Link to="/services/ai-consulting" className="text-gray-300 hover:text-white">AI Consulting</Link></li>
              <li><Link to="/services/workflow-automation" className="text-gray-300 hover:text-white">Workflow Automation</Link></li>
              <li><Link to="/services/full-stack" className="text-gray-300 hover:text-white">Full-stack Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/resources/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/resources/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              <li><Link to="/resources/expertise" className="text-gray-300 hover:text-white">Our Expertise</Link></li>
              <li><Link to="/resources/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
              <li><Link to="/resources/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" strokeWidth={1.5} />
                <a href="tel:+13155570024" className="text-gray-300 hover:text-white">+1 (315) 557-0024</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" strokeWidth={1.5} />
                <a href="mailto:contact@exct.com" className="text-gray-300 hover:text-white">contact@exct.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="border border-white px-6 py-3 inline-block hover:bg-white hover:text-primary transition duration-300">Contact Us</Link>
            </div>
          </div>
        </div>

        <hr className="my-10 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            &copy; {currentYear} EXCT, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link to="/terms" className="text-gray-300 hover:text-white flex items-center">
              
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white flex items-center">
              
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;