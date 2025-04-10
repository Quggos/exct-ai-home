import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { OptimizedImage } from '@/components/ui/optimized-image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const shouldShowTransparentHeader = () => {
    return (
      location.pathname === '/' || 
      location.pathname.startsWith('/services/') ||
      location.pathname.startsWith('/industries/')
    );
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    if (shouldShowTransparentHeader()) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
    // Reset scroll state when route changes only for pages that should have transparent header
    if (shouldShowTransparentHeader() && window.scrollY <= 10) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  }, [location]);

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-tertiary hover:text-white group",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none transition-colors group-hover:text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-500 transition-colors group-hover:text-white/90">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  });
  ListItem.displayName = "ListItem";

  const getHeaderClass = () => {
    let baseClass = "fixed w-full z-[100] transition-all duration-300 ";
    return baseClass + (isScrolled || isMenuOpen ? 'bg-white border-b border-gray-100 shadow-subtle' : 'bg-transparent');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Layout */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* Left: Menu Button */}
            <button
              onClick={toggleMenu}
              className={`p-2 ${isScrolled ? 'text-gray-700 hover:text-tertiary' : 'text-white hover:text-white/80'}`}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Middle: Logo */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <svg 
                viewBox="0 0 96 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-[80px] h-[20px] md:w-[96px] md:h-[24px] transition-transform hover:scale-[1.02] duration-300"
              >
                <g clipPath="url(#clip0_1525_906)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M55.1715 16C55.1715 19.5556 57.171 22 60.9238 22C62.0311 22 63.2309 21.6508 64 21.1111V18.2222C63.2614 18.7619 62.1849 19.1429 61.2007 19.1429C59.3855 19.1429 58.2167 17.9365 58.2167 15.9048V8.76193H64V6.03175H58.2167V2H55.1715V6.03175H52.1876V8.76193H55.1715V16ZM0 13.7143C0 18.5079 3.41449 21.9365 7.99768 21.9365C10.9508 21.9365 13.381 20.508 14.7036 17.8413L12.3659 16.6032C11.4738 18.3175 9.81268 19.1429 7.96713 19.1429C5.26003 19.1429 3.29146 17.2699 2.9529 14.6032H15.0114V13.3334C15.0114 8.98415 12.1812 5.58733 7.62858 5.58733C3.10675 5.58733 0 9.23812 0 13.7143ZM11.966 12.5715H3.07594C3.38366 10.254 5.0448 8.4127 7.59774 8.4127C10.0896 8.4127 11.8429 10.0953 11.966 12.5715ZM17.9468 21.5873H21.3919L24.4681 16.8889C24.8063 16.3492 25.0524 15.7778 25.2062 15.1746H26.7134C26.8675 15.7778 27.1134 16.3492 27.4518 16.8889L30.528 21.5873H33.9729L30.1588 15.6825C29.6974 14.9841 29.482 14.3809 29.482 13.8095C29.482 13.2698 29.6666 12.7302 30.0973 12.0635L33.9729 6.03175H30.4973L27.4518 10.7619C27.1444 11.2381 26.9288 11.7778 26.775 12.3174H25.1447C25.0216 11.7778 24.7755 11.2381 24.4681 10.7619L21.3919 6.03175H17.9468L21.8226 12.0635C22.2531 12.7302 22.4378 13.2698 22.4378 13.8095C22.4378 14.3809 22.2226 14.9841 21.761 15.6825L17.9468 21.5873ZM44.2532 21.9365C39.9156 22 36.3782 18.2857 36.3782 13.7778C36.3782 9.30157 39.9156 5.61902 44.2532 5.6508C47.0215 5.6508 49.5745 6.95238 50.9587 9.74603L48.4365 11.2064C47.5445 9.5238 46.0373 8.6349 44.2532 8.6349C41.6077 8.6349 39.4236 10.9524 39.4236 13.7778C39.4236 16.6349 41.6077 18.9841 44.2532 18.9841C46.0373 18.9841 47.5445 18.0952 48.4365 16.4127L50.9587 17.8413C49.5745 20.6667 47.0215 21.9365 44.2532 21.9365Z" fill={!isScrolled ? "white" : "#003366"} />
                  <rect width="24" height="24" transform="translate(72)" fill={!isScrolled ? "white" : "#003366"} />
                  <path d="M77.5 16.702C77.9946 15.33 78.452 14.084 78.872 12.964C79.292 11.844 79.7026 10.7987 80.104 9.828C80.5146 8.85733 80.944 7.91467 81.392 7H82.96C83.2866 7.69067 83.604 8.39533 83.912 9.114C84.2293 9.8233 84.542 10.57 84.85 11.354C85.158 12.1287 85.4753 12.9547 85.802 13.832C86.138 14.7093 86.488 15.666 86.852 16.702H85.046C84.9153 16.31 84.78 15.9227 84.64 15.54C84.5 15.148 84.3646 14.7607 84.234 14.378H80.062C79.9313 14.7607 79.7913 15.148 79.642 15.54C79.502 15.9227 79.3713 16.31 79.25 16.702H77.5ZM80.482 13.02H83.8C83.6413 12.572 83.4826 12.1473 83.324 11.746C83.1746 11.3353 83.0253 10.9527 82.876 10.598C82.736 10.234 82.6006 9.898 82.47 9.59C82.3486 9.27267 82.2366 8.99267 82.134 8.75C82.0313 8.99267 81.9193 9.27267 81.798 9.59C81.6766 9.898 81.5413 10.234 81.392 10.598C81.252 10.9527 81.1026 11.3353 80.944 11.746C80.7946 12.1473 80.6406 12.572 80.482 13.02ZM88.1746 16.702V7H89.8546V16.702H88.1746Z" fill={!isScrolled ? "black" : "white"} />
                </g>
                <defs>
                  <clipPath id="clip0_1525_906">
                    <rect width="96" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>

            {/* Right: Contact Button */}
            <Link
              to="/contact"
              className={`btn rounded-md shadow-subtle hover:shadow-elevated transition-all text-sm px-4 py-2 ${
                isScrolled 
                  ? 'btn-tertiary' 
                  : 'bg-white text-tertiary hover:bg-white/90'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex items-center">
              <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                <svg width="96" height="24" viewBox="0 0 96 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform hover:scale-[1.02] duration-300">
                  <g clipPath="url(#clip0_1525_906)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.1715 16C55.1715 19.5556 57.171 22 60.9238 22C62.0311 22 63.2309 21.6508 64 21.1111V18.2222C63.2614 18.7619 62.1849 19.1429 61.2007 19.1429C59.3855 19.1429 58.2167 17.9365 58.2167 15.9048V8.76193H64V6.03175H58.2167V2H55.1715V6.03175H52.1876V8.76193H55.1715V16ZM0 13.7143C0 18.5079 3.41449 21.9365 7.99768 21.9365C10.9508 21.9365 13.381 20.508 14.7036 17.8413L12.3659 16.6032C11.4738 18.3175 9.81268 19.1429 7.96713 19.1429C5.26003 19.1429 3.29146 17.2699 2.9529 14.6032H15.0114V13.3334C15.0114 8.98415 12.1812 5.58733 7.62858 5.58733C3.10675 5.58733 0 9.23812 0 13.7143ZM11.966 12.5715H3.07594C3.38366 10.254 5.0448 8.4127 7.59774 8.4127C10.0896 8.4127 11.8429 10.0953 11.966 12.5715ZM17.9468 21.5873H21.3919L24.4681 16.8889C24.8063 16.3492 25.0524 15.7778 25.2062 15.1746H26.7134C26.8675 15.7778 27.1134 16.3492 27.4518 16.8889L30.528 21.5873H33.9729L30.1588 15.6825C29.6974 14.9841 29.482 14.3809 29.482 13.8095C29.482 13.2698 29.6666 12.7302 30.0973 12.0635L33.9729 6.03175H30.4973L27.4518 10.7619C27.1444 11.2381 26.9288 11.7778 26.775 12.3174H25.1447C25.0216 11.7778 24.7755 11.2381 24.4681 10.7619L21.3919 6.03175H17.9468L21.8226 12.0635C22.2531 12.7302 22.4378 13.2698 22.4378 13.8095C22.4378 14.3809 22.2226 14.9841 21.761 15.6825L17.9468 21.5873ZM44.2532 21.9365C39.9156 22 36.3782 18.2857 36.3782 13.7778C36.3782 9.30157 39.9156 5.61902 44.2532 5.6508C47.0215 5.6508 49.5745 6.95238 50.9587 9.74603L48.4365 11.2064C47.5445 9.5238 46.0373 8.6349 44.2532 8.6349C41.6077 8.6349 39.4236 10.9524 39.4236 13.7778C39.4236 16.6349 41.6077 18.9841 44.2532 18.9841C46.0373 18.9841 47.5445 18.0952 48.4365 16.4127L50.9587 17.8413C49.5745 20.6667 47.0215 21.9365 44.2532 21.9365Z" fill={!isScrolled && !isMenuOpen ? "white" : "#003366"} />
                    <rect width="24" height="24" transform="translate(72)" fill={!isScrolled && !isMenuOpen ? "white" : "#003366"} />
                    <path d="M77.5 16.702C77.9946 15.33 78.452 14.084 78.872 12.964C79.292 11.844 79.7026 10.7987 80.104 9.828C80.5146 8.85733 80.944 7.91467 81.392 7H82.96C83.2866 7.69067 83.604 8.39533 83.912 9.114C84.2293 9.8233 84.542 10.57 84.85 11.354C85.158 12.1287 85.4753 12.9547 85.802 13.832C86.138 14.7093 86.488 15.666 86.852 16.702H85.046C84.9153 16.31 84.78 15.9227 84.64 15.54C84.5 15.148 84.3646 14.7607 84.234 14.378H80.062C79.9313 14.7607 79.7913 15.148 79.642 15.54C79.502 15.9227 79.3713 16.31 79.25 16.702H77.5ZM80.482 13.02H83.8C83.6413 12.572 83.4826 12.1473 83.324 11.746C83.1746 11.3353 83.0253 10.9527 82.876 10.598C82.736 10.234 82.6006 9.898 82.47 9.59C82.3486 9.27267 82.2366 8.99267 82.134 8.75C82.0313 8.99267 81.9193 9.27267 81.798 9.59C81.6766 9.898 81.5413 10.234 81.392 10.598C81.252 10.9527 81.1026 11.3353 80.944 11.746C80.7946 12.1473 80.6406 12.572 80.482 13.02ZM88.1746 16.702V7H89.8546V16.702H88.1746Z" fill={!isScrolled && !isMenuOpen ? "black" : "white"} />
                  </g>
                  <defs>
                    <clipPath id="clip0_1525_906">
                      <rect width="96" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      onClick={() => navigate('/services')}
                      className={`text-base font-medium bg-transparent hover:bg-transparent relative ${
                        isActive('/services') 
                          ? (isScrolled 
                              ? 'text-tertiary hover:text-tertiary after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-32px)] after:h-[1px] after:bg-tertiary after:mx-4' 
                              : 'text-white font-semibold hover:text-white after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-32px)] after:h-[1px] after:bg-white after:mx-4') 
                          : (isScrolled 
                              ? 'text-gray-700 hover:text-tertiary' 
                              : 'text-white hover:text-white')
                      }`}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services/ai-development"
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-tertiary/90 p-6 no-underline outline-none focus:shadow-md relative overflow-hidden group hover:shadow-lg hover:bg-tertiary transition-all"
                            >
                              <div className="relative">
                                <div className="mb-2 mt-4 text-lg font-medium text-white">
                                  AI Development
                                </div>
                                <p className="text-sm leading-tight text-white/80">
                                  Custom AI solutions tailored to your business needs
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/services/ai-consulting" title="AI Consulting">
                          Expert guidance on AI strategy and implementation
                        </ListItem>
                        <ListItem href="/services/full-stack" title="Full-stack Development">
                          End-to-end web and application development
                        </ListItem>
                        <ListItem href="/services/dashboard" title="Dashboard Development">
                          Data visualization and business intelligence solutions
                        </ListItem>
                        <ListItem href="/services/generative-ai" title="Generative AI">
                          Implement cutting-edge generative AI solutions for your business 
                        </ListItem>
                        <ListItem href="/services/ux-design" title="UI/UX Design">
                          Create exceptional user experiences
                        </ListItem>
                        <ListItem href="/services/workflow-automation" title="Workflow Automation">
                          Streamline your business processes with automation
                        </ListItem>
                        <ListItem href="/services/lead-generation" title="Lead Generation">
                          Effective strategies to grow your customer base
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      onClick={() => navigate('/industries')}
                      className={`text-base font-medium bg-transparent hover:bg-transparent relative ${
                        isActive('/industries') 
                          ? (isScrolled 
                              ? 'text-tertiary hover:text-tertiary after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-32px)] after:h-[1px] after:bg-tertiary after:mx-4' 
                              : 'text-white font-semibold hover:text-white after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-32px)] after:h-[1px] after:bg-white after:mx-4') 
                          : (isScrolled 
                              ? 'text-gray-700 hover:text-tertiary' 
                              : 'text-white hover:text-white')
                      }`}
                    >
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
                        <ListItem href="/industries/ecommerce" title="E-commerce">
                          Digital retail and online shopping solutions
                        </ListItem>
                        <ListItem href="/industries/finance" title="Finance">
                          Banking, investment, and financial services
                        </ListItem>
                        <ListItem href="/industries/government" title="Government">
                          Public sector and government agency solutions
                        </ListItem>
                        <ListItem href="/industries/healthcare" title="Healthcare">
                          Medical, patient care, and health management
                        </ListItem>
                        <ListItem href="/industries/nonprofit" title="Non-Profit">
                          Solutions for organizations with social missions
                        </ListItem>
                        <ListItem href="/industries/realestate" title="Real Estate">
                          Property management and real estate services
                        </ListItem>
                        <ListItem href="/industries/private" title="Private Sector">
                          Business and corporate solutions
                        </ListItem>
                        <ListItem href="/industries/space" title="Space">
                          Aerospace and space technology innovations
                        </ListItem>
                        <ListItem href="/industries/technology" title="Technology">
                          IT, software, and tech industry solutions
                        </ListItem>
                        <ListItem href="/industries/transportation" title="Transportation">
                          Logistics, shipping, and mobility solutions
                        </ListItem>
                        <ListItem href="/industries/ai-ml" title="AI & ML">
                          Artificial intelligence and machine learning
                        </ListItem>
                        <ListItem href="/industries/travel" title="Travel">
                          Tourism, hospitality, and travel industry
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      onClick={() => navigate('/resources')}
                      className={`text-base font-medium bg-transparent hover:bg-transparent relative ${
                        isActive('/resources') 
                          ? (isScrolled 
                              ? 'text-tertiary hover:text-tertiary after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-32px)] after:h-[1px] after:bg-tertiary after:mx-4' 
                              : 'text-white font-semibold hover:text-white after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-32px)] after:h-[1px] after:bg-white after:mx-4') 
                          : (isScrolled 
                              ? 'text-gray-700 hover:text-tertiary' 
                              : 'text-white hover:text-white')
                      }`}
                    >
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                        <ListItem href="/resources/blog" title="Blog">
                          Insights, news, and updates from our experts
                        </ListItem>
                        <ListItem href="/resources/case-studies" title="Case Studies">
                          Real-world examples of our successful projects
                        </ListItem>
                        <ListItem href="/resources/expertise" title="Our Expertise">
                          Deep dive into our technical capabilities
                        </ListItem>
                        <ListItem href="/resources/testimonials" title="Reviews/Testimonials">
                          What our clients say about working with us
                        </ListItem>
                        <ListItem href="/resources/faq" title="FAQ">
                          Answers to frequently asked questions
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="hidden lg:block">
              <Link to="/contact" className={`btn rounded-md shadow-subtle hover:shadow-elevated transition-all ${isScrolled ? 'btn-tertiary' : 'bg-white text-tertiary hover:bg-white/90'}`}>Contact Us</Link>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="container mx-auto py-4">
              <nav className="flex flex-col space-y-1">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-none">
                    <div className="flex items-center justify-between">
                      <Link 
                        to="/services" 
                        className={`py-3 font-medium flex-grow ${isActive('/services') ? 'text-tertiary' : 'text-gray-700'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </Link>
                      <AccordionTrigger className="py-0 hover:no-underline min-w-[32px] h-[32px] flex items-center justify-center bg-tertiary/10">
                        <span className="sr-only">Toggle services menu</span>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-4 flex flex-col space-y-2 animate-fade-in">
                      <Link to="/services/generative-ai" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Generative AI Implementation</Link>
                      <Link to="/services/ai-development" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>AI Development</Link>
                      <Link to="/services/ai-consulting" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>AI Consulting</Link>
                      <Link to="/services/workflow-automation" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Workflow Automation</Link>
                      <Link to="/services/full-stack" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Full-stack Development</Link>
                      <Link to="/services/ux-design" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>UI/UX Design</Link>
                      <Link to="/services/dashboard" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Dashboard Development</Link>
                      <Link to="/services/lead-generation" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Lead Generation</Link>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="industries" className="border-none">
                    <div className="flex items-center justify-between">
                      <Link 
                        to="/industries" 
                        className={`py-3 font-medium flex-grow ${isActive('/industries') ? 'text-tertiary' : 'text-gray-700'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Industries
                      </Link>
                      <AccordionTrigger className="py-0 hover:no-underline min-w-[32px] h-[32px] flex items-center justify-center bg-tertiary/10">
                        <span className="sr-only">Toggle industries menu</span>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-4 grid grid-cols-2 gap-2 animate-fade-in">
                      <Link to="/industries/ecommerce" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>E-commerce</Link>
                      <Link to="/industries/finance" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Finance</Link>
                      <Link to="/industries/government" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Government</Link>
                      <Link to="/industries/healthcare" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Healthcare</Link>
                      <Link to="/industries/nonprofit" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Non-Profit</Link>
                      <Link to="/industries/realestate" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Real Estate</Link>
                      <Link to="/industries/private" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Private Sector</Link>
                      <Link to="/industries/space" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Space</Link>
                      <Link to="/industries/technology" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Technology</Link>
                      <Link to="/industries/transportation" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Transportation</Link>
                      <Link to="/industries/ai-ml" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>AI & ML</Link>
                      <Link to="/industries/travel" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Travel</Link>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="resources" className="border-none">
                    <div className="flex items-center justify-between">
                      <Link 
                        to="/resources" 
                        className={`py-3 font-medium flex-grow ${isActive('/resources') ? 'text-tertiary' : 'text-gray-700'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Resources
                      </Link>
                      <AccordionTrigger className="py-0 hover:no-underline min-w-[32px] h-[32px] flex items-center justify-center bg-tertiary/10">
                        <span className="sr-only">Toggle resources menu</span>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-4 flex flex-col space-y-2 animate-fade-in">
                      <Link to="/resources/blog" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                      <Link to="/resources/case-studies" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                      <Link to="/resources/expertise" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Our Expertise</Link>
                      <Link to="/resources/testimonials" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>Reviews/Testimonials</Link>
                      <Link to="/resources/faq" className="text-gray-700 hover:text-tertiary py-2 transition-all" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Contact Information Section */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Phone size={18} className="text-tertiary" />
                      <a href="tel:+13155570024" className="hover:text-tertiary transition-colors">+1 (315) 557-0024</a>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Mail size={18} className="text-tertiary" />
                      <a href="mailto:contact@exct.com" className="hover:text-tertiary transition-colors">contact@exct.com</a>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Link 
                      to="/contact" 
                      className="w-full inline-flex justify-center items-center px-6 py-3 bg-tertiary text-white rounded-md hover:bg-tertiary/90 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>

                  {/* Footer Links and Copyright */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-center space-x-6">
                        <Link to="/terms" className="text-gray-600 hover:text-tertiary text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Terms of Service</Link>
                        <Link to="/privacy" className="text-gray-600 hover:text-tertiary text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>
                      </div>
                      <p className="text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} EXCT, Inc. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
