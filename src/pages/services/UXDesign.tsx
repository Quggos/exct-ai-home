import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import {
	Palette,
	Lightbulb,
	Users,
	Layers,
	PenTool,
	MousePointer,
	PieChart,
	Brush,
	Ruler,
	Check,
	BarChart3,
	Zap,
} from 'lucide-react';
import SEO from '@/components/SEO';

const UXDesign = () => {
	const designProcess = [
		{
			icon: <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />,
			title: 'Research & Discovery',
			description:
				'We begin by understanding your users, business goals, and market context through interviews, surveys, and competitive analysis.',
		},
		{
			icon: <Lightbulb className="w-8 h-8 text-primary" strokeWidth={1.5} />,
			title: 'Ideation & Strategy',
			description:
				'We collaborate to develop design strategies, user flows, and information architecture that align with your objectives.',
		},
		{
			icon: <PenTool className="w-8 h-8 text-primary" strokeWidth={1.5} />,
			title: 'Wireframing & Prototyping',
			description:
				'We create low and high-fidelity wireframes and interactive prototypes to visualize concepts before development.',
		},
		{
			icon: <Palette className="w-8 h-8 text-primary" strokeWidth={1.5} />,
			title: 'Visual Design',
			description:
				'Our designers craft polished, on-brand visual designs that enhance usability and create emotional connection.',
		},
		{
			icon: <MousePointer className="w-8 h-8 text-primary" strokeWidth={1.5} />,
			title: 'User Testing',
			description:
				'We validate designs through usability testing and iterate based on real user feedback to ensure optimal experiences.',
		},
		{
			icon: <Layers className="w-8 h-8 text-primary" strokeWidth={1.5} />,
			title: 'Implementation Support',
			description:
				'We collaborate with development teams to ensure designs are implemented with fidelity and quality.',
		},
	];

	const heroRightContent = (
		<>
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-tertiary/5 rounded-xl transform rotate-2 -z-10"></div>
			<div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<PenTool className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">UI Design</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">UX Research</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<Layers className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">Prototyping</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<Palette className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">Visual Design</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<PieChart className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">Data Viz</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<Brush className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">Brand Design</h3>
					</div>
				</div>
			</div>
		</>
	);

	return (
		<div className="min-h-screen">
			<SEO
				title="UX/UI Design Services | EXACT AI"
				description="Create exceptional digital experiences that drive business results with our user-centered design services. Our expert team combines research, strategy, and creativity to deliver intuitive interfaces that delight users and achieve your business objectives across web, mobile, and product applications."
				keywords="UX design, UI design, user experience, user interface, product design, interface design, web design, mobile app design"
				canonicalUrl="https://www.exct.com/services/ux-design"
			/>

			<ServiceHero
				badge="User Experience Design"
				title="UX/UI Design Services"
				description="Create exceptional digital experiences with our user-centered design approach and proven methodologies."
				primaryCTA={{
					text: 'Start Your Design Project',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'View Our Portfolio',
					link: '/resources/case-studies',
				}}
				rightContent={heroRightContent}
			/>

			{/* Our Design Process */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Our Design Process
						</h2>
						<p className="text-xl text-gray-600">
							We follow a structured, collaborative design process that ensures
							we deliver exceptional user experiences that meet your business
							goals.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{designProcess.map((step, index) => (
							<div
								key={index}
								className="bg-muted rounded-xl p-8 hover:shadow-md transition-shadow"
							>
								<div className="bg-white rounded-xl w-20 h-20 flex items-center justify-center mb-6 shadow-sm">
									{step.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									{step.title}
								</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Design Approach */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-xl shadow-sm">
									<div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
										<Users className="w-7 h-7 text-primary" strokeWidth={1.5} />
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-3">
										User-Centered
									</h3>
									<p className="text-gray-600 text-sm">
										We put users at the heart of everything we design, ensuring
										products that meet real needs.
									</p>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm mt-8 md:mt-12">
									<div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
										<BarChart3
											className="w-7 h-7 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-3">
										Data-Driven
									</h3>
									<p className="text-gray-600 text-sm">
										We base design decisions on research, testing, and
										analytics, not guesswork.
									</p>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm">
									<div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
										<Zap className="w-7 h-7 text-primary" strokeWidth={1.5} />
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-3">
										Iterative
									</h3>
									<p className="text-gray-600 text-sm">
										We refine designs through multiple iterations based on
										feedback and testing.
									</p>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm mt-8 md:mt-12">
									<div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
										<Ruler className="w-7 h-7 text-primary" strokeWidth={1.5} />
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-3">
										Systematic
									</h3>
									<p className="text-gray-600 text-sm">
										We create coherent design systems that ensure consistency
										and scalability.
									</p>
								</div>
							</div>
						</div>

						<div className="order-1 lg:order-2">
							<div className="w-12 h-1 bg-primary mb-6"></div>
							<h2 className="text-3xl md:text-4xl font-bold text-tertiary mb-6">
								Our Design Approach
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								We believe that great design goes beyond aesthetics to create
								meaningful experiences that drive business success.
							</p>

							<div className="space-y-6">
								<div>
									<h3 className="text-xl font-medium text-gray-900 mb-3">
										Business-Aligned Design
									</h3>
									<p className="text-gray-600">
										We ensure that every design decision supports your business
										goals, whether that's increasing conversion rates, improving
										user engagement, or enhancing brand perception. Our designs
										don't just look good—they perform.
									</p>
								</div>

								<div>
									<h3 className="text-xl font-medium text-gray-900 mb-3">
										Inclusive Design Principles
									</h3>
									<p className="text-gray-600">
										We create experiences that are accessible to users of all
										abilities and backgrounds. Our inclusive design approach
										ensures your products reach and serve the widest possible
										audience.
									</p>
								</div>

								<div>
									<h3 className="text-xl font-medium text-gray-900 mb-3">
										Cross-Functional Collaboration
									</h3>
									<p className="text-gray-600">
										Our designers work closely with developers, product
										managers, and stakeholders throughout the process to ensure
										designs are both exceptional and technically feasible.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Design Capabilities */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Our Design Capabilities
						</h2>
						<p className="text-xl text-gray-600">
							From research to implementation, we offer comprehensive design
							services to meet all your digital product needs.
						</p>
					</div>

					<div className="bg-muted rounded-xl p-8 md:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="text-xl font-medium text-gray-900 mb-4">
									User Research
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">
											User interviews & surveys
										</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Competitive analysis</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">
											Personas & user journeys
										</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Heuristic evaluation</span>
									</li>
								</ul>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="text-xl font-medium text-gray-900 mb-4">
									UX Design
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">
											Information architecture
										</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">
											Wireframing & prototyping
										</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Interaction design</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Usability testing</span>
									</li>
								</ul>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="text-xl font-medium text-gray-900 mb-4">
									UI Design
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">
											Visual design & styling
										</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Responsive web design</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Mobile app design</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Design systems</span>
									</li>
								</ul>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="text-xl font-medium text-gray-900 mb-4">
									Specialized Design
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Data visualization</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Dashboard design</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Micro-interactions</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Accessibility design</span>
									</li>
								</ul>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="text-xl font-medium text-gray-900 mb-4">
									Brand Design
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">
											Logo & identity design
										</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Style guides</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Brand messaging</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Visual brand language</span>
									</li>
								</ul>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="text-xl font-medium text-gray-900 mb-4">
									Implementation Support
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Developer handoff</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">Design QA</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">CSS/SCSS development</span>
									</li>
									<li className="flex items-start">
										<Check
											className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-gray-600">
											Implementation consulting
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Design Tools */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="w-12 h-1 bg-primary mb-6"></div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Our Design Tools & Technologies
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								We use industry-leading design tools and technologies to create
								exceptional user experiences.
							</p>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-bold">Fg</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-1">
											Figma
										</h3>
										<p className="text-gray-600">
											Our primary design tool for collaborative UI/UX design,
											prototyping, and design systems.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-bold">Sk</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-1">
											Sketch
										</h3>
										<p className="text-gray-600">
											Powerful design tool for creating detailed UI components
											and layouts.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-bold">Ax</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-1">
											Adobe XD
										</h3>
										<p className="text-gray-600">
											Design and prototype user experiences for web, mobile, and
											more.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-bold">Ps</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-1">
											Adobe Creative Suite
										</h3>
										<p className="text-gray-600">
											Comprehensive toolkit for graphic design, illustration,
											and visual assets.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-bold">Pr</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-1">
											Prototyping Tools
										</h3>
										<p className="text-gray-600">
											Specialized tools like Principle, Framer, and InVision for
											advanced prototyping.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
							<div className="p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Results-Driven Design
								</h3>

								<div className="space-y-8">
									<div>
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium text-gray-900">
												User Engagement
											</span>
											<span className="text-primary font-bold">+63%</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full">
											<div className="h-2 bg-primary rounded-full w-[63%]"></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium text-gray-900">
												Conversion Rate
											</span>
											<span className="text-primary font-bold">+42%</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full">
											<div className="h-2 bg-primary rounded-full w-[42%]"></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium text-gray-900">
												Task Completion
											</span>
											<span className="text-primary font-bold">+78%</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full">
											<div className="h-2 bg-primary rounded-full w-[78%]"></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium text-gray-900">
												User Satisfaction
											</span>
											<span className="text-primary font-bold">+56%</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full">
											<div className="h-2 bg-primary rounded-full w-[56%]"></div>
										</div>
									</div>
								</div>

								<p className="text-sm text-gray-600 mt-6 italic">
									Average improvements seen in our design projects
								</p>
							</div>

							<div className="bg-primary/5 p-6 border-t border-gray-100">
								<div className="flex justify-between items-center">
									<Link
										to="/resources/case-studies"
										className="text-primary hover:underline font-medium flex items-center"
									>
										View Client Success Stories
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<CTASection />
			<Footer />
		</div>
	);
};

export default UXDesign;
