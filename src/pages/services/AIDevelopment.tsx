import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import {
	Code,
	Database,
	Server,
	Cpu,
	LineChart,
	Users,
	Shield,
	Zap,
	BadgeCheck,
	CircleUser,
} from 'lucide-react';
import SEO from '@/components/SEO';

const AIDevelopment = () => {
	const capabilities = [
		{
			icon: <Cpu className="w-10 h-10 text-tertiary" strokeWidth={1.5} />,
			title: 'Custom ML Models',
			description:
				'Tailored machine learning models designed for your specific business needs and use cases.',
		},
		{
			icon: <Database className="w-10 h-10 text-tertiary" strokeWidth={1.5} />,
			title: 'Data Engineering',
			description:
				'Robust data pipelines and infrastructure to support AI implementations at scale.',
		},
		{
			icon: <Shield className="w-10 h-10 text-tertiary" strokeWidth={1.5} />,
			title: 'Secure AI Solutions',
			description:
				'Enterprise-grade security built into every AI system we develop.',
		},
		{
			icon: <LineChart className="w-10 h-10 text-tertiary" strokeWidth={1.5} />,
			title: 'Predictive Analytics',
			description:
				'Advanced analytics that transform your data into actionable insights and forecasts.',
		},
		{
			icon: <Zap className="w-10 h-10 text-tertiary" strokeWidth={1.5} />,
			title: 'Edge AI',
			description:
				'AI capabilities deployed at the edge for real-time processing and reduced latency.',
		},
		{
			icon: (
				<CircleUser className="w-10 h-10 text-tertiary" strokeWidth={1.5} />
			),
			title: 'AI-Powered Interfaces',
			description:
				'Intuitive, intelligent user interfaces that adapt to user behavior and preferences.',
		},
	];

	const heroRightContent = (
		<div className="relative w-full">
			<div className="relative bg-white rounded-xl shadow-xl p-10 border border-gray-100 w-full">
				<div className="flex items-center justify-center mb-8">
					<Code className="w-16 h-16 text-tertiary" strokeWidth={1.5} />
				</div>
				<h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
					AI Development Expertise
				</h2>
				<ul className="space-y-4">
					<li className="flex items-start">
						<BadgeCheck
							className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
							strokeWidth={1.5}
						/>
						<span className="text-gray-700">
							Custom machine learning model development
						</span>
					</li>
					<li className="flex items-start">
						<BadgeCheck
							className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
							strokeWidth={1.5}
						/>
						<span className="text-gray-700">
							Natural language processing applications
						</span>
					</li>
					<li className="flex items-start">
						<BadgeCheck
							className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
							strokeWidth={1.5}
						/>
						<span className="text-gray-700">
							Computer vision and image analysis
						</span>
					</li>
					<li className="flex items-start">
						<BadgeCheck
							className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
							strokeWidth={1.5}
						/>
						<span className="text-gray-700">
							Predictive analytics and forecasting
						</span>
					</li>
					<li className="flex items-start">
						<BadgeCheck
							className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
							strokeWidth={1.5}
						/>
						<span className="text-gray-700">
							Recommendation engines and personalization
						</span>
					</li>
					<li className="flex items-start">
						<BadgeCheck
							className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
							strokeWidth={1.5}
						/>
						<span className="text-gray-700">
							Generative AI for content and asset creation
						</span>
					</li>
				</ul>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen">
			<SEO
				title="Custom AI Development Services | EXACT AI"
				description="Build powerful, tailored AI solutions for your business with our custom AI development services. From machine learning models to computer vision systems, our experts create production-ready AI applications that solve complex challenges and deliver measurable ROI."
				keywords="custom AI development, machine learning solutions, AI application development, enterprise AI systems, predictive analytics, NLP solutions"
				canonicalUrl="https://www.exct.com/services/ai-development"
			/>

			<ServiceHero
				badge="Custom AI Solutions"
				title="Custom AI Development for Business Impact"
				description="We develop tailored, production-ready AI solutions that solve complex business challenges and create competitive advantage."
				//backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
				primaryCTA={{
					text: 'Start Your AI Project',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'Explore Case Studies',
					link: '/resources/case-studies',
				}}
				rightContent={heroRightContent}
			/>

			{/* Core Capabilities Section */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-tertiary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Core AI Development Capabilities
						</h2>
						<p className="text-xl text-gray-600">
							Our multidisciplinary teams combine deep technical expertise with
							business acumen to deliver AI solutions that create measurable
							value.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{capabilities.map((capability, index) => (
							<div
								key={index}
								className="bg-muted rounded-xl p-8 hover:shadow-md transition-shadow"
							>
								<div className="bg-white rounded-xl w-20 h-20 flex items-center justify-center mb-6 shadow-sm">
									{capability.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									{capability.title}
								</h3>
								<p className="text-gray-600">{capability.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Development Process */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="w-12 h-1 bg-tertiary mb-6"></div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Our AI Development Process
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								We follow a structured, collaborative approach to developing AI
								solutions that ensures alignment with your business goals and
								delivers measurable results.
							</p>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-tertiary/5 rounded-xl transform -rotate-3 -z-10"></div>
							<div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
								<div className="border-b border-gray-200">
									<div className="flex px-6 py-4">
										<div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
										<div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
									</div>
								</div>
								<div className="p-6">
									<div className="space-y-6">
										<div className="flex items-start">
											<div className="bg-tertiary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mr-4">
												1
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													Discovery & Requirements
												</h3>
												<p className="text-gray-600 text-sm">
													Understanding your business context, defining problem
													statements, and establishing success criteria.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<div className="bg-tertiary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mr-4">
												2
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													Data Strategy & Architecture
												</h3>
												<p className="text-gray-600 text-sm">
													Assessing data availability, defining data pipelines,
													and designing technical architecture.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<div className="bg-tertiary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mr-4">
												3
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													Prototype Development
												</h3>
												<p className="text-gray-600 text-sm">
													Building proof-of-concept models to validate
													approaches and demonstrate potential value.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<div className="bg-tertiary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mr-4">
												4
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													Solution Development
												</h3>
												<p className="text-gray-600 text-sm">
													Engineering production-ready AI systems with robust
													testing and validation processes.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<div className="bg-tertiary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mr-4">
												5
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													Deployment & Integration
												</h3>
												<p className="text-gray-600 text-sm">
													Implementing the solution in your production
													environment and integrating with existing systems.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<div className="bg-tertiary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium flex-shrink-0 mr-4">
												6
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													Monitoring & Enhancement
												</h3>
												<p className="text-gray-600 text-sm">
													Continuous performance monitoring, retraining, and
													ongoing optimization based on real-world feedback.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technical Stack */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-tertiary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Our Technical Stack
						</h2>
						<p className="text-xl text-gray-600">
							We leverage cutting-edge technologies and frameworks to build
							robust, scalable AI solutions.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="bg-muted rounded-xl p-8">
							<div className="bg-tertiary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Server className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Infrastructure & Cloud
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>AWS, Azure & Google Cloud</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Kubernetes & Docker</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Terraform & Infrastructure as Code</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>CI/CD Pipelines</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Distributed Computing</span>
								</li>
							</ul>
						</div>

						<div className="bg-muted rounded-xl p-8">
							<div className="bg-tertiary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Database className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Data & Analytics
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>SQL & NoSQL Databases</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Apache Spark & Hadoop</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Kafka & Event Streaming</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Airflow & Data Orchestration</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Data Lakes & Warehouses</span>
								</li>
							</ul>
						</div>

						<div className="bg-muted rounded-xl p-8">
							<div className="bg-tertiary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								<Cpu className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								AI & Machine Learning
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>TensorFlow & PyTorch</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Scikit-learn & XGBoost</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>Hugging Face Transformers</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>OpenAI & LangChain</span>
								</li>
								<li className="flex items-center">
									<BadgeCheck
										className="w-5 h-5 text-green-500 mr-2"
										strokeWidth={1.5}
									/>
									<span>MLOps & Model Monitoring</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Client Testimonial */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-5">
							<div className="col-span-2 bg-tertiary p-8 text-white flex flex-col justify-center">
								<div className="mb-6">
									{[...Array(5)].map((_, i) => (
										<span key={i} className="text-yellow-300 text-2xl">
											★
										</span>
									))}
								</div>
								<blockquote className="text-xl italic mb-8">
									"EXACT AI's development team delivered a predictive analytics
									solution that transformed our supply chain operations. Their
									technical expertise and collaborative approach resulted in an
									AI system that reduced costs by 23% and improved delivery
									accuracy by 37%."
								</blockquote>
								<div>
									<div className="font-bold">Michael Chen</div>
									<div className="text-white/80">
										VP of Operations, Global Manufacturing Inc.
									</div>
								</div>
							</div>
							<div className="col-span-3 p-8 flex flex-col justify-center">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Impact of Our AI Solutions
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<div className="text-4xl font-bold text-tertiary mb-2">
											45%
										</div>
										<p className="text-gray-600">
											Average increase in operational efficiency
										</p>
									</div>
									<div>
										<div className="text-4xl font-bold text-tertiary mb-2">
											3.2x
										</div>
										<p className="text-gray-600">
											Average ROI within first year
										</p>
									</div>
									<div>
										<div className="text-4xl font-bold text-tertiary mb-2">
											68%
										</div>
										<p className="text-gray-600">
											Reduction in manual, repetitive tasks
										</p>
									</div>
									<div>
										<div className="text-4xl font-bold text-tertiary mb-2">
											29%
										</div>
										<p className="text-gray-600">
											Average increase in customer satisfaction
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="bg-gradient-to-r from-tertiary to-tertiary rounded-xl p-12 text-white text-center">
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Ready to Transform Your Business with AI?
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
							Our AI development experts are ready to help you identify
							opportunities and build powerful solutions that drive measurable
							results.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								to="/contact"
								className="btn bg-white text-tertiary hover:bg-gray-100 transition-colors"
							>
								Schedule a Consultation
							</Link>
							<Link
								to="/resources/case-studies"
								className="btn bg-transparent border border-white text-white hover:bg-white/10 transition-colors"
							>
								Explore Our Work
							</Link>
						</div>
					</div>
				</div>
			</section>

			<CTASection />
			<Footer />
		</div>
	);
};

export default AIDevelopment;
