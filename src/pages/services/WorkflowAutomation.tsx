import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
	Zap,
	Workflow,
	GitPullRequest,
	ClipboardCheck,
	Clock,
	LineChart,
	CircleDollarSign,
	RefreshCw,
	DatabaseZap,
	PlayCircle,
	Users,
	Bot,
} from 'lucide-react';

const WorkflowAutomation = () => {
	const benefits = [
		{
			icon: <Clock className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Increased Efficiency',
			description:
				'Eliminate manual tasks and reduce processing times by up to 90% through intelligent automation.',
		},
		{
			icon: (
				<CircleDollarSign
					className="w-10 h-10 text-primary"
					strokeWidth={1.5}
				/>
			),
			title: 'Cost Reduction',
			description:
				'Lower operational costs by automating repetitive tasks that previously required significant human effort.',
		},
		{
			icon: (
				<ClipboardCheck className="w-10 h-10 text-primary" strokeWidth={1.5} />
			),
			title: 'Error Reduction',
			description:
				'Minimize human error and ensure consistent, high-quality outputs with standardized automated processes.',
		},
		{
			icon: <Users className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Enhanced Employee Experience',
			description:
				'Free your team from mundane tasks so they can focus on strategic, creative, and high-value activities.',
		},
		{
			icon: <LineChart className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Scalability',
			description:
				'Easily scale operations without proportional increases in staffing or overhead costs.',
		},
		{
			icon: <RefreshCw className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Business Agility',
			description:
				'Respond faster to market changes and opportunities with streamlined, automated processes.',
		},
	];
	const heroRightContent = (
		<div className="relative">
			<div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
				<h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
					Automate Across Your Organization
				</h2>
				<div className="grid grid-cols-3 gap-8">
					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<DatabaseZap className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">Data Processing</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">HR Workflows</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<CircleDollarSign
								className="w-8 h-8 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h3 className="font-medium text-gray-900">Finance & Billing</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<Bot className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">Customer Support</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<ClipboardCheck
								className="w-8 h-8 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h3 className="font-medium text-gray-900">Compliance</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
							<LineChart className="w-8 h-8 text-primary" strokeWidth={1.5} />
						</div>
						<h3 className="font-medium text-gray-900">Reporting</h3>
					</div>
				</div>
			</div>
		</div>
	);
	return (
		<div className="min-h-screen">
			<SEO
				title="AI-Powered Workflow Automation Services | EXACT AI"
				description="Streamline operations and boost productivity with our AI-powered workflow automation solutions. We help businesses eliminate repetitive tasks, reduce errors, and accelerate processes through intelligent automation that adapts to your unique operational needs and integrates seamlessly with existing systems."
				keywords="workflow automation, business process automation, AI automation, intelligent workflows, RPA, process optimization"
				canonicalUrl="https://www.exct.com/services/workflow-automation"
			/>

			<ServiceHero
				badge="Process Automation"
				title="Workflow Automation"
				description="Streamline your operations with intelligent automation solutions that boost efficiency and reduce manual tasks."
				primaryCTA={{
					text: 'Automate Your Workflows',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'See Success Stories',
					link: '/resources/case-studies',
				}}
				rightContent={heroRightContent}
			/>

			{/* Benefits Section */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Key Benefits of Workflow Automation
						</h2>
						<p className="text-xl text-gray-600">
							Discover how intelligent automation can transform your operations
							and drive measurable business results.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="bg-muted rounded-xl p-8 hover:shadow-md transition-shadow"
							>
								<div className="bg-white rounded-xl w-20 h-20 flex items-center justify-center mb-6 shadow-sm">
									{benefit.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									{benefit.title}
								</h3>
								<p className="text-gray-600">{benefit.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="w-12 h-1 bg-primary mb-6"></div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								How Our Workflow Automation Works
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								We implement intelligent automation solutions that connect your
								systems, streamline processes, and accelerate business
								operations.
							</p>

							<div className="space-y-8">
								<div className="flex gap-6">
									<div className="flex-shrink-0">
										<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
											<span className="text-primary font-bold text-xl">1</span>
										</div>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Process Assessment
										</h3>
										<p className="text-gray-600">
											We analyze your current workflows to identify bottlenecks,
											inefficiencies, and high-value automation opportunities.
										</p>
									</div>
								</div>

								<div className="flex gap-6">
									<div className="flex-shrink-0">
										<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
											<span className="text-primary font-bold text-xl">2</span>
										</div>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Solution Design
										</h3>
										<p className="text-gray-600">
											Our experts design a custom automation solution that
											integrates with your existing systems and meets your
											specific requirements.
										</p>
									</div>
								</div>

								<div className="flex gap-6">
									<div className="flex-shrink-0">
										<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
											<span className="text-primary font-bold text-xl">3</span>
										</div>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Implementation
										</h3>
										<p className="text-gray-600">
											We build and deploy your automation solution using leading
											platforms like Zapier, Make.com, or custom development as
											needed.
										</p>
									</div>
								</div>

								<div className="flex gap-6">
									<div className="flex-shrink-0">
										<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
											<span className="text-primary font-bold text-xl">4</span>
										</div>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Testing & Optimization
										</h3>
										<p className="text-gray-600">
											We rigorously test each automation workflow and fine-tune
											it to ensure optimal performance and reliability.
										</p>
									</div>
								</div>

								<div className="flex gap-6">
									<div className="flex-shrink-0">
										<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
											<span className="text-primary font-bold text-xl">5</span>
										</div>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Training & Support
										</h3>
										<p className="text-gray-600">
											We provide comprehensive training and ongoing support to
											ensure your team can effectively manage and leverage your
											new automation solutions.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
								<div className="border-b border-gray-200">
									<div className="flex p-4">
										<div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
										<div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
									</div>
								</div>

								<div className="p-6">
									<div className="flex justify-between items-center mb-6">
										<h3 className="font-semibold text-lg">
											Workflow Automation
										</h3>
										<PlayCircle
											className="text-primary w-6 h-6"
											strokeWidth={1.5}
										/>
									</div>

									<div className="space-y-4">
										<div className="bg-muted p-4 rounded-lg flex items-center gap-4">
											<div className="bg-primary/10 p-2 rounded-md">
												<DatabaseZap
													className="w-6 h-6 text-primary"
													strokeWidth={1.5}
												/>
											</div>
											<div className="flex-1">
												<h4 className="font-medium text-sm">Data Source</h4>
												<div className="h-2 bg-primary/20 rounded-full w-full mt-1">
													<div className="h-2 bg-primary rounded-full w-3/4"></div>
												</div>
											</div>
										</div>

										<div className="flex justify-center">
											<GitPullRequest
												className="text-primary w-6 h-6 transform rotate-90"
												strokeWidth={1.5}
											/>
										</div>

										<div className="bg-muted p-4 rounded-lg flex items-center gap-4">
											<div className="bg-tertiary/10 p-2 rounded-md">
												<Workflow
													className="w-6 h-6 text-tertiary"
													strokeWidth={1.5}
												/>
											</div>
											<div className="flex-1">
												<h4 className="font-medium text-sm">
													Process & Transform
												</h4>
												<div className="h-2 bg-tertiary/20 rounded-full w-full mt-1">
													<div className="h-2 bg-tertiary rounded-full w-1/2"></div>
												</div>
											</div>
										</div>

										<div className="flex justify-center">
											<GitPullRequest
												className="text-primary w-6 h-6 transform rotate-90"
												strokeWidth={1.5}
											/>
										</div>

										<div className="bg-muted p-4 rounded-lg flex items-center gap-4">
											<div className="bg-primary/10 p-2 rounded-md">
												<Zap
													className="w-6 h-6 text-primary"
													strokeWidth={1.5}
												/>
											</div>
											<div className="flex-1">
												<h4 className="font-medium text-sm">
													Automated Actions
												</h4>
												<div className="h-2 bg-primary/20 rounded-full w-full mt-1">
													<div className="h-2 bg-primary rounded-full w-5/6"></div>
												</div>
											</div>
										</div>
									</div>

									<div className="mt-8">
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm text-gray-600">
												Automation Status
											</span>
											<span className="text-sm font-medium text-green-600">
												Running
											</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full">
											<div className="h-2 bg-green-500 rounded-full w-5/6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technologies & Platforms */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Technologies & Platforms
						</h2>
						<p className="text-xl text-gray-600">
							We leverage leading automation platforms and technologies to
							deliver powerful, scalable solutions.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
						<div className="bg-muted rounded-xl p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
							<div className="text-2xl font-bold text-primary mb-2">Zapier</div>
							<p className="text-gray-600 text-center text-sm">
								Connect 5,000+ apps
							</p>
						</div>

						<div className="bg-muted rounded-xl p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
							<div className="text-2xl font-bold text-primary mb-2">
								Make.com
							</div>
							<p className="text-gray-600 text-center text-sm">
								Visual workflow automation
							</p>
						</div>

						<div className="bg-muted rounded-xl p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
							<div className="text-2xl font-bold text-primary mb-2">
								Power Automate
							</div>
							<p className="text-gray-600 text-center text-sm">
								Microsoft automation suite
							</p>
						</div>

						<div className="bg-muted rounded-xl p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
							<div className="text-2xl font-bold text-primary mb-2">
								Tray.io
							</div>
							<p className="text-gray-600 text-center text-sm">
								Enterprise integration platform
							</p>
						</div>

						<div className="bg-muted rounded-xl p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
							<div className="text-2xl font-bold text-primary mb-2">n8n</div>
							<p className="text-gray-600 text-center text-sm">
								Open-source workflow automation
							</p>
						</div>

						<div className="bg-muted rounded-xl p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
							<div className="text-2xl font-bold text-primary mb-2">
								Custom APIs
							</div>
							<p className="text-gray-600 text-center text-sm">
								Tailored integration solutions
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Client Success Stories
						</h2>
						<p className="text-xl text-gray-600">
							See how our workflow automation solutions have transformed
							operations for businesses across industries.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-48 bg-primary/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<h3 className="text-2xl font-bold text-primary">
										Manufacturing
									</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Supply Chain Automation
								</h4>
								<p className="text-gray-600 mb-4">
									Automated inventory management and supplier communications for
									a manufacturing company, reducing processing times by 78%.
								</p>
								<div className="flex justify-between">
									<div className="text-center">
										<div className="text-2xl font-bold text-primary">78%</div>
										<p className="text-sm text-gray-600">Faster processing</p>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-primary">$1.2M</div>
										<p className="text-sm text-gray-600">Annual savings</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-48 bg-tertiary/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<h3 className="text-2xl font-bold text-tertiary">
										Healthcare
									</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Patient Onboarding Automation
								</h4>
								<p className="text-gray-600 mb-4">
									Streamlined patient intake processes for a healthcare
									provider, improving data accuracy and reducing administrative
									workload.
								</p>
								<div className="flex justify-between">
									<div className="text-center">
										<div className="text-2xl font-bold text-tertiary">92%</div>
										<p className="text-sm text-gray-600">Fewer errors</p>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-tertiary">
											4.2hrs
										</div>
										<p className="text-sm text-gray-600">Saved per day</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-48 bg-primary/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<h3 className="text-2xl font-bold text-primary">
										Financial Services
									</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Loan Processing Automation
								</h4>
								<p className="text-gray-600 mb-4">
									Implemented an end-to-end loan application processing system
									that reduced approval times and improved compliance.
								</p>
								<div className="flex justify-between">
									<div className="text-center">
										<div className="text-2xl font-bold text-primary">67%</div>
										<p className="text-sm text-gray-600">Faster approvals</p>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-primary">42%</div>
										<p className="text-sm text-gray-600">Cost reduction</p>
									</div>
								</div>
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

			{/* CTA Section */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="bg-gradient-to-r from-primary to-tertiary rounded-xl p-12 text-white text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
							Ready to Automate Your Workflows?
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
							Our experts are ready to help you identify and implement
							automation solutions that will transform your business operations.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								to="/contact"
								className="btn bg-white text-primary hover:bg-gray-100 transition-colors"
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

export default WorkflowAutomation;
