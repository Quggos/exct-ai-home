import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import {
	LightbulbIcon,
	PieChart,
	TrendingUp,
	Compass,
	FileText,
	Users,
	Shield,
	CheckCircle,
	BarChart3,
	Brain,
} from 'lucide-react';
import SEO from '@/components/SEO';

const AIConsulting = () => {
	const heroRightContent = (
		<div className="relative h-full">
			<div className="relative bg-white rounded-xl shadow-md p-8 border border-gray-100">
				<div className="space-y-5">
					<div className="flex items-start gap-5">
						<div className="bg-primary/10 p-3 rounded-lg">
							<LightbulbIcon
								className="w-7 h-7 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 mb-1">
								Strategic AI Roadmapping
							</h3>
							<p className="text-gray-600 text-sm">
								Develop a tailored AI implementation strategy aligned with your
								business goals
							</p>
						</div>
					</div>

					<div className="flex items-start gap-5">
						<div className="bg-primary/10 p-3 rounded-lg">
							<PieChart className="w-7 h-7 text-primary" strokeWidth={1.5} />
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 mb-1">
								AI Opportunity Assessment
							</h3>
							<p className="text-gray-600 text-sm">
								Identify high-impact AI opportunities across your organization
							</p>
						</div>
					</div>

					<div className="flex items-start gap-5">
						<div className="bg-primary/10 p-3 rounded-lg">
							<TrendingUp className="w-7 h-7 text-primary" strokeWidth={1.5} />
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 mb-1">ROI Analysis</h3>
							<p className="text-gray-600 text-sm">
								Quantify the potential business impact of AI initiatives
							</p>
						</div>
					</div>

					<div className="flex items-start gap-5">
						<div className="bg-primary/10 p-3 rounded-lg">
							<Compass className="w-7 h-7 text-primary" strokeWidth={1.5} />
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 mb-1">
								Technology Selection
							</h3>
							<p className="text-gray-600 text-sm">
								Navigate the complex AI technology landscape to find the right
								solutions
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen">
			<SEO
				title="AI Consulting Services for Businesses | EXACT AI"
				description="Expert AI consulting services to help your organization develop effective strategies for AI adoption. We guide you through opportunity assessment, technology selection, implementation planning, and ethical AI governance to ensure maximum business value and competitive advantage."
				keywords="AI consulting, artificial intelligence strategy, AI implementation, business transformation, AI roadmap, technology consulting"
				canonicalUrl="https://www.exct.com/services/ai-consulting"
			/>

			<ServiceHero
				badge="Strategic AI Guidance"
				title="AI Consulting for Strategic Business Transformation"
				description="Navigate the complex AI landscape with expert guidance. We help you identify opportunities, develop strategies, and implement AI solutions that drive real business value."
				primaryCTA={{
					text: 'Request a Consultation',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'View Success Stories',
					link: '/resources/case-studies',
				}}
				rightContent={heroRightContent}
			/>

			{/* Our Approach */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-tertiary mb-6">
							Our AI Consulting Approach
						</h2>
						<p className="text-xl text-gray-600">
							We combine deep technical expertise with business acumen to help
							you navigate the AI landscape and implement solutions that deliver
							measurable value.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1">
							<div className="grid grid-cols-2 gap-6">
								<div className="bg-muted rounded-xl p-6 hover:shadow-md transition-shadow">
									<div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-sm">
										<FileText
											className="w-7 h-7 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										Discovery
									</h3>
									<p className="text-gray-600 text-sm">
										We analyze your business needs, current capabilities, and
										strategic goals to identify opportunities.
									</p>
								</div>

								<div className="bg-muted rounded-xl p-6 hover:shadow-md transition-shadow mt-8">
									<div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-sm">
										<Compass
											className="w-7 h-7 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										Strategy
									</h3>
									<p className="text-gray-600 text-sm">
										We develop a comprehensive AI roadmap aligned with your
										business objectives and constraints.
									</p>
								</div>

								<div className="bg-muted rounded-xl p-6 hover:shadow-md transition-shadow">
									<div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-sm">
										<Shield
											className="w-7 h-7 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										Governance
									</h3>
									<p className="text-gray-600 text-sm">
										We establish frameworks for responsible AI use, risk
										management, and ongoing oversight.
									</p>
								</div>

								<div className="bg-muted rounded-xl p-6 hover:shadow-md transition-shadow mt-8">
									<div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-sm">
										<BarChart3
											className="w-7 h-7 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										Implementation
									</h3>
									<p className="text-gray-600 text-sm">
										We guide the execution of your AI strategy, from pilot
										projects to full-scale deployment.
									</p>
								</div>
							</div>
						</div>

						<div className="order-1 lg:order-2">
							<div className="space-y-8">
								<div>
									<h3 className="text-2xl font-semibold text-gray-900 mb-4">
										Tailored to Your Business
									</h3>
									<p className="text-gray-600">
										Our consulting approach is customized to your industry,
										organizational maturity, and specific business challenges.
										We don't apply one-size-fits-all formulas but instead
										develop strategies that align with your unique context and
										goals.
									</p>
								</div>

								<div>
									<h3 className="text-2xl font-semibold text-gray-900 mb-4">
										Practical & Actionable
									</h3>
									<p className="text-gray-600">
										We deliver clear, actionable recommendations and
										implementation plans, not theoretical frameworks. Our focus
										is on helping you achieve tangible business outcomes with
										AI, whether that's cost reduction, revenue growth, or
										improved customer experience.
									</p>
								</div>

								<div>
									<h3 className="text-2xl font-semibold text-gray-900 mb-4">
										Future-Focused
									</h3>
									<p className="text-gray-600">
										Our consulting doesn't just address immediate needs but
										helps position your organization for long-term success in an
										increasingly AI-driven world. We help you build the
										capabilities, culture, and infrastructure needed to
										continually leverage AI innovations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="w-12 h-1 bg-primary mb-6"></div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Comprehensive AI Consulting Services
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								From initial assessment to full implementation support, our
								consulting services cover every aspect of your AI journey.
							</p>

							<div className="space-y-6">
								<div className="bg-white p-6 rounded-xl shadow-sm flex gap-5">
									<div className="bg-primary/10 p-3 rounded-lg h-fit">
										<Brain className="w-6 h-6 text-primary" strokeWidth={1.5} />
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											AI Readiness Assessment
										</h3>
										<p className="text-gray-600">
											Evaluate your organization's current capabilities, data
											infrastructure, and cultural readiness for AI adoption.
										</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm flex gap-5">
									<div className="bg-primary/10 p-3 rounded-lg h-fit">
										<Compass
											className="w-6 h-6 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											AI Strategy Development
										</h3>
										<p className="text-gray-600">
											Create a comprehensive roadmap for AI implementation
											aligned with your business objectives.
										</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm flex gap-5">
									<div className="bg-primary/10 p-3 rounded-lg h-fit">
										<Users className="w-6 h-6 text-primary" strokeWidth={1.5} />
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Change Management
										</h3>
										<p className="text-gray-600">
											Develop strategies for successful AI adoption, including
											training, communication, and organizational alignment.
										</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-sm flex gap-5">
									<div className="bg-primary/10 p-3 rounded-lg h-fit">
										<Shield
											className="w-6 h-6 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											AI Governance & Ethics
										</h3>
										<p className="text-gray-600">
											Establish frameworks for responsible AI use, addressing
											bias, transparency, privacy, and regulatory compliance.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
								<div className="p-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-6">
										Specialized Consulting Offerings
									</h3>

									<div className="space-y-5">
										<div className="flex items-start">
											<CheckCircle
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Industry-Specific AI Solutions
												</h4>
												<p className="text-gray-600 text-sm">
													Tailored guidance for healthcare, finance, retail,
													manufacturing, and other industries.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Vendor Selection & Evaluation
												</h4>
												<p className="text-gray-600 text-sm">
													Objective assessment of AI vendors and platforms based
													on your specific requirements.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													AI ROI & Business Case Development
												</h4>
												<p className="text-gray-600 text-sm">
													Quantify the potential impact of AI initiatives with
													comprehensive ROI analysis.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Data Strategy
												</h4>
												<p className="text-gray-600 text-sm">
													Develop comprehensive strategies for data collection,
													management, and governance to support AI initiatives.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													AI Center of Excellence
												</h4>
												<p className="text-gray-600 text-sm">
													Design and implementation support for internal AI
													Centers of Excellence.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-primary/5 p-8 border-t border-gray-100">
									<div className="flex justify-between items-center">
										<div>
											<h4 className="font-medium text-gray-900 mb-1">
												Get Expert Advice
											</h4>
											<p className="text-gray-600 text-sm">
												Schedule a no-obligation consultation with our AI
												strategists
											</p>
										</div>
										<Link
											to="/contact"
											className="btn bg-primary text-white hover:bg-primary/90 transition-colors"
										>
											Contact Us
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Success Stories */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Client Success Stories
						</h2>
						<p className="text-xl text-gray-600">
							See how our AI consulting services have helped organizations
							across industries achieve remarkable results.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-muted rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-56 bg-primary/20 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-3xl font-bold text-primary">
										Healthcare
									</span>
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									AI Strategy for Healthcare Provider
								</h3>
								<p className="text-gray-600 mb-4">
									Developed an AI roadmap for a national healthcare provider
									that prioritized patient experience, operational efficiency,
									and clinical support.
								</p>
								<div className="bg-white p-4 rounded-lg">
									<div className="text-2xl font-bold text-primary mb-1">
										42%
									</div>
									<p className="text-gray-600 text-sm">
										Reduction in administrative workload
									</p>
								</div>
							</div>
						</div>

						<div className="bg-muted rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-56 bg-tertiary/20 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-3xl font-bold text-tertiary">
										Finance
									</span>
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									AI-Powered Risk Assessment
								</h3>
								<p className="text-gray-600 mb-4">
									Guided a financial services firm in implementing AI-based risk
									assessment models that improved accuracy while maintaining
									regulatory compliance.
								</p>
								<div className="bg-white p-4 rounded-lg">
									<div className="text-2xl font-bold text-tertiary mb-1">
										67%
									</div>
									<p className="text-gray-600 text-sm">
										Increase in fraud detection accuracy
									</p>
								</div>
							</div>
						</div>

						<div className="bg-muted rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-56 bg-primary/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-3xl font-bold text-primary">
										Retail
									</span>
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Customer Experience Transformation
								</h3>
								<p className="text-gray-600 mb-4">
									Helped a retail chain implement AI-driven personalization
									across online and in-store experiences, significantly
									improving customer satisfaction.
								</p>
								<div className="bg-white p-4 rounded-lg">
									<div className="text-2xl font-bold text-primary mb-1">
										28%
									</div>
									<p className="text-gray-600 text-sm">
										Increase in customer retention
									</p>
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

			{/* Industry Recognition */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="bg-white rounded-xl shadow-md border border-gray-100 p-12">
						<div className="text-center max-w-3xl mx-auto mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Industry Recognition
							</h2>
							<p className="text-xl text-gray-600">
								Our AI consulting expertise has been recognized by leading
								industry authorities and publications.
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
							<div className="text-center p-4">
								<div className="text-5xl font-bold text-primary mb-2">#1</div>
								<p className="text-gray-700 font-medium">Top AI Consultant</p>
								<p className="text-gray-500 text-sm">TechInsider 2023</p>
							</div>

							<div className="text-center p-4">
								<div className="text-5xl font-bold text-primary mb-2">A+</div>
								<p className="text-gray-700 font-medium">AI Strategy Rating</p>
								<p className="text-gray-500 text-sm">Enterprise AI Review</p>
							</div>

							<div className="text-center p-4">
								<div className="text-5xl font-bold text-primary mb-2">9.8</div>
								<p className="text-gray-700 font-medium">Client Satisfaction</p>
								<p className="text-gray-500 text-sm">Out of 10 points</p>
							</div>

							<div className="text-center p-4">
								<div className="text-5xl font-bold text-primary mb-2">50+</div>
								<p className="text-gray-700 font-medium">Enterprise Clients</p>
								<p className="text-gray-500 text-sm">Across 12 industries</p>
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

export default AIConsulting;
