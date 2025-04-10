import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { OptimizedImage } from './ui/optimized-image';
const Hero = () => {
  return <div className="relative overflow-hidden pt-20">
			{/* Background video with overlay */}
			<div className="absolute inset-0 z-0 w-full h-full">
				<div className="absolute inset-0 w-full h-full">
					<OptimizedImage src="/media/hero-poster.jpg" alt="Digital earth visualization with AI network connections" fill priority className="object-cover" sizes="100vw" />
				</div>
				<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" aria-label="AI technology background animation">
					<source src="/media/hero-bg-optimized.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="absolute inset-0 bg-tertiary/80"></div>
			</div>

			<div className="relative z-10">
				<div className="container-wide py-5 md:py-20">
					<div className="grid grid-cols-1 gap-12 items-center">
						<div className="text-left">
							<div className="mb-14">
								<Link to="/services/ai-development" className="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm text-white text-sm mb-8 border border-white/20 hover:bg-white/20 transition-colors group cursor-pointer" aria-label="Learn about our AI Automation Solutions">
									<span className="w-2 h-2 bg-white mr-2 animate-pulse"></span>
									Customized AI Automation Solutions
									<ArrowUpRight className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
								</Link>
								<div className="pl-4 border-l border-white mb-6 mt-5">
									<div className="text-4xl md:text-6xl font-semibold text-white leading-tight">
										Custom AI Automation <br />
										for Your Business
									</div>
								</div>
								<h2 className="text-base text-white/70 max-w-xl leading-relaxed">
									Transforming businesses with custom AI solutions precisely
									engineered for your unique operational challenges. Our
									enterprise-grade platforms help optimize workflows, reduce
									costs, and drive innovation.
								</h2>
							</div>
							<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
								<Link to="/contact" className="btn btn-hero transition group inline-flex items-center">
									<span>Request Consultation</span>
									<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
								</Link>
								<Link to="/services" className="bg-white/10 text-white border border-white/20 px-8 py-3 text-center rounded-lg font-medium hover:bg-white/20 transition-all">
									Explore Services
								</Link>
							</div>
						</div>

						<div className="relative hidden md:block">
							<div className="w-full h-full relative z-10">
								{/* You can add an image or graphic here if needed */}
							</div>
						</div>
					</div>
				</div>

				{/* Stats section at the bottom */}
				<div className="py-6 bg-white/5">
					<div className="container-wide">
						<div className="flex flex-wrap justify-between items-center">
							<div className="text-center md:text-left w-full md:w-auto mb-6 md:mb-0">
								<h3 className="text-md font-medium text-white/80">
									Trusted by industry leaders
								</h3>
								<div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6 mt-2">
									{[{
                  src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
                  name: 'Microsoft logo',
                  height: 17
                }, {
                  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/160px-Google_2015_logo.svg.png',
                  name: 'Google logo',
                  height: 27
                }, {
                  src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
                  name: 'Salesforce logo',
                  height: 22
                }].map((logo, i) => <OptimizedImage key={i} src={logo.src} alt={logo.name} className="h-5 md:h-6 max-w-[60px] md:max-w-[80px] object-contain opacity-70 hover:opacity-100 transition-opacity" height={logo.height} />)}
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 w-full md:w-auto">
								<div className="text-center">
									<div className="text-3xl font-bold text-white mb-1">98%</div>
									<span className="text-sm text-white/70">
										Solution accuracy
									</span>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-white mb-1">125+</div>
									<span className="text-sm text-white/70">
										Enterprise clients
									</span>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-white mb-1">70%</div>
									<span className="text-sm text-white/70">Cost reduction</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
};
export default Hero;