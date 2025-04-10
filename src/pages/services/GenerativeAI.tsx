import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import {
	Bot,
	Sparkles,
	BarChart3,
	Lightbulb,
	Database,
	Code2,
	Layers,
	Cpu,
	Users,
	BrainCircuit,
} from 'lucide-react';
import SEO from '@/components/SEO';

const GenerativeAI = () => {
	const heroRightContent = (
		<div className="relative">
			<div className="bg-white rounded-xl shadow-xl p-8 relative z-10 border border-gray-100">
				<div className="grid grid-cols-2 gap-8">
					<div className="flex flex-col items-center text-center">
						<Bot className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
						<h3 className="font-medium text-gray-900">Conversational AI</h3>
					</div>
					<div className="flex flex-col items-center text-center">
						<Sparkles
							className="w-12 h-12 text-primary mb-4"
							strokeWidth={1.5}
						/>
						<h3 className="font-medium text-gray-900">Content Generation</h3>
					</div>
					<div className="flex flex-col items-center text-center">
						<BarChart3
							className="w-12 h-12 text-primary mb-4"
							strokeWidth={1.5}
						/>
						<h3 className="font-medium text-gray-900">Predictive Analytics</h3>
					</div>
					<div className="flex flex-col items-center text-center">
						<Lightbulb
							className="w-12 h-12 text-primary mb-4"
							strokeWidth={1.5}
						/>
						<h3 className="font-medium text-gray-900">Innovation</h3>
					</div>
				</div>
			</div>
			<div className="absolute top-8 right-8 w-full h-full bg-primary/10 rounded-xl -z-10"></div>
		</div>
	);

	return (
		<div className="min-h-screen">
			<SEO
				title="Generative AI Implementation Services | EXACT AI"
				description="Leverage cutting-edge generative AI solutions to transform your business operations. Our implementation services help automate content creation, enhance customer experiences, and drive innovation with custom-built AI solutions tailored to your unique business challenges and goals."
				keywords="generative AI implementation, AI content creation, business automation, custom AI solutions, machine learning services, enterprise AI"
				canonicalUrl="https://www.exct.com/services/generative-ai"
			/>

			<ServiceHero
				badge="Next-Gen AI Solutions"
				title="Generative AI Implementation"
				description="Transform your business with cutting-edge generative AI solutions that automate content creation, enhance customer experiences, and drive innovation."
				primaryCTA={{
					text: 'Get Started',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'View Case Studies',
					link: '/resources/case-studies',
				}}
				rightContent={heroRightContent}
			/>

			{/* Key Benefits */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Benefits of Generative AI Implementation
						</h2>
						<p className="text-xl text-gray-600">
							Discover how generative AI can transform your business operations,
							enhance customer experiences, and drive innovation.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-muted p-8 rounded-xl">
							<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Automated Content Creation
							</h3>
							<p className="text-gray-600">
								Generate high-quality content at scale, from marketing copy and
								product descriptions to code and creative assets.
							</p>
						</div>

						<div className="bg-muted p-8 rounded-xl">
							<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Bot className="w-8 h-8 text-primary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Enhanced Customer Engagement
							</h3>
							<p className="text-gray-600">
								Deliver personalized interactions through AI-powered chatbots,
								virtual assistants, and customized recommendations.
							</p>
						</div>

						<div className="bg-muted p-8 rounded-xl">
							<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Database className="w-8 h-8 text-primary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Data Augmentation
							</h3>
							<p className="text-gray-600">
								Expand your training datasets with synthetic data to improve
								model performance and address data scarcity challenges.
							</p>
						</div>

						<div className="bg-muted p-8 rounded-xl">
							<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Code2 className="w-8 h-8 text-primary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Accelerated Development
							</h3>
							<p className="text-gray-600">
								Speed up software development with AI-powered code generation,
								debugging, and optimization tools.
							</p>
						</div>

						<div className="bg-muted p-8 rounded-xl">
							<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Layers className="w-8 h-8 text-primary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Process Optimization
							</h3>
							<p className="text-gray-600">
								Streamline workflows and automate repetitive tasks with
								intelligent process automation powered by generative AI.
							</p>
						</div>

						<div className="bg-muted p-8 rounded-xl">
							<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Lightbulb className="w-8 h-8 text-primary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Innovation Catalyst
							</h3>
							<p className="text-gray-600">
								Unlock new product ideas, business models, and creative
								solutions through AI-powered ideation and exploration.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Approach */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="w-12 h-1 bg-primary mb-6"></div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Our Approach to Generative AI Implementation
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								We follow a comprehensive, structured approach to implementing
								generative AI solutions that ensure alignment with your business
								goals and technical requirements.
							</p>

							<div className="space-y-6">
								<div className="flex gap-4">
									<div className="bg-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-medium">1</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Needs Assessment
										</h3>
										<p className="text-gray-600">
											We start by understanding your business challenges, goals,
											and current capabilities to identify where generative AI
											can deliver the most value.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-medium">2</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Solution Design
										</h3>
										<p className="text-gray-600">
											Our experts design a tailored generative AI solution that
											addresses your specific requirements, considering data
											availability, technical constraints, and ethical
											considerations.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-medium">3</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Prototype Development
										</h3>
										<p className="text-gray-600">
											We develop a proof-of-concept to demonstrate the value and
											feasibility of the proposed solution, incorporating your
											feedback early in the process.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-medium">4</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Implementation & Integration
										</h3>
										<p className="text-gray-600">
											Our team brings the solution to life, integrating it
											seamlessly with your existing systems and workflows to
											ensure maximum adoption and impact.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-sm">
										<span className="text-primary font-medium">5</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Training & Support
										</h3>
										<p className="text-gray-600">
											We provide comprehensive training and ongoing support to
											ensure your team can effectively leverage the new AI
											capabilities.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="grid grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
									<Cpu
										className="w-10 h-10 text-primary mb-4"
										strokeWidth={1.5}
									/>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										ML Model Training
									</h3>
									<p className="text-gray-600 text-sm">
										Customized model training on your specific data and use
										cases
									</p>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
									<BrainCircuit
										className="w-10 h-10 text-primary mb-4"
										strokeWidth={1.5}
									/>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										Fine-tuning & Optimization
									</h3>
									<p className="text-gray-600 text-sm">
										Performance optimization and continuous improvement
									</p>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
									<Database
										className="w-10 h-10 text-primary mb-4"
										strokeWidth={1.5}
									/>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										Data Preparation
									</h3>
									<p className="text-gray-600 text-sm">
										Data cleaning, augmentation, and structuring
									</p>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
									<Users
										className="w-10 h-10 text-primary mb-4"
										strokeWidth={1.5}
									/>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										User Experience Design
									</h3>
									<p className="text-gray-600 text-sm">
										Intuitive interfaces for AI interactions
									</p>
								</div>
							</div>

							<div className="absolute -z-10 w-full h-full bg-primary/5 rounded-xl -bottom-6 -right-6"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Technologies */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Leading-Edge Technologies
						</h2>
						<p className="text-xl text-gray-600">
							We leverage the latest generative AI technologies and frameworks
							to deliver powerful, scalable solutions.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
						<div className="p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors h-40 w-full flex flex-col items-center justify-center">
							<div className="text-2xl text-center font-bold text-primary mb-2">
								GPT-4
							</div>
							<p className="text-gray-600 text-center">
								Advanced language models
							</p>
						</div>

						<div className="p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors h-40 w-full flex flex-col items-center justify-center">
							<div className="text-xl font-bold text-primary mb-2">DALL-E</div>
							<p className="text-gray-600 text-center">Image generation</p>
						</div>

						<div className="p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors h-40 w-full flex flex-col items-center justify-center">
							<div className="text-xl font-bold text-center text-primary mb-2">
								Stable Diffusion
							</div>
							<p className="text-gray-600 text-center">
								Creative content generation
							</p>
						</div>

						<div className="p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors h-40 w-full flex flex-col items-center justify-center">
							<div className="text-xl font-bold text-center text-primary mb-2">
								Hugging Face
							</div>
							<p className="text-gray-600 text-center">Model deployment</p>
						</div>

						<div className="p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors h-40 w-full flex flex-col items-center justify-center">
							<div className="text-xl font-bold text-center text-primary mb-2">
								TensorFlow
							</div>
							<p className="text-gray-600 text-center">
								Deep learning framework
							</p>
						</div>

						<div className="p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors h-40 w-full flex flex-col items-center justify-center">
							<div className="text-xl font-bold text-center text-primary mb-2">
								PyTorch
							</div>
							<p className="text-gray-600 text-center">ML development</p>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Preview */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Success Stories
						</h2>
						<p className="text-xl text-gray-600">
							See how our generative AI solutions have delivered real results
							for our clients.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="h-48 bg-gray-200 relative">
								<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
									<h3 className="text-white text-xl font-semibold">
										E-commerce
									</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Product Description Automation
								</h4>
								<p className="text-gray-600 mb-4">
									How we helped an e-commerce retailer generate thousands of
									unique product descriptions, increasing conversion rates by
									32%.
								</p>
								<Link
									to="/resources/case-studies"
									className="text-primary hover:underline font-medium flex items-center"
								>
									Read Case Study
								</Link>
							</div>
						</div>

						<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="h-48 bg-gray-200 relative">
								<div className="absolute inset-0 bg-gradient-to-r from-tertiary/80 to-tertiary/40 flex items-center justify-center">
									<h3 className="text-white text-xl font-semibold">
										Healthcare
									</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Medical Documentation Assistant
								</h4>
								<p className="text-gray-600 mb-4">
									How our AI solution reduced documentation time for healthcare
									providers by 63%, improving patient care quality.
								</p>
								<Link
									to="/resources/case-studies"
									className="text-primary hover:underline font-medium flex items-center"
								>
									Read Case Study
								</Link>
							</div>
						</div>

						<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="h-48 bg-gray-200 relative">
								<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-tertiary/40 flex items-center justify-center">
									<h3 className="text-white text-xl font-semibold">
										Financial Services
									</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Personalized Financial Advice
								</h4>
								<p className="text-gray-600 mb-4">
									How our AI-driven financial advisory platform increased client
									engagement by 47% for a leading wealth management firm.
								</p>
								<Link
									to="/resources/case-studies"
									className="text-primary hover:underline font-medium flex items-center"
								>
									Read Case Study
								</Link>
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<Link
							to="/resources/case-studies"
							className="btn bg-primary text-white hover:bg-primary/90 transition-colors"
						>
							View All Case Studies
						</Link>
					</div>
				</div>
			</section>

			<CTASection />
			<Footer />
		</div>
	);
};

export default GenerativeAI;
