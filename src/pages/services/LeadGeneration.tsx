import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import {
	Users,
	BarChart3,
	Target,
	TrendingUp,
	Zap,
	Award,
	Search,
	Mail,
} from 'lucide-react';
import SEO from '@/components/SEO';

const LeadGeneration = () => {
	const heroRightContent = (
		<div className="relative">
			<div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
				<div className="flex items-start gap-6 mb-8">
					<div className="bg-primary/10 p-4 rounded-lg">
						<Target className="w-10 h-10 text-primary" strokeWidth={1.5} />
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Smart Targeting
						</h3>
						<p className="text-gray-600">
							AI-powered audience targeting and segmentation to reach the most
							valuable prospects for your business.
						</p>
					</div>
				</div>

				<div className="flex items-start gap-6 mb-8">
					<div className="bg-primary/10 p-4 rounded-lg">
						<BarChart3 className="w-10 h-10 text-primary" strokeWidth={1.5} />
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Performance Analytics
						</h3>
						<p className="text-gray-600">
							Real-time campaign monitoring and optimization to maximize your
							ROI and lead quality.
						</p>
					</div>
				</div>

				<div className="flex items-start gap-6">
					<div className="bg-primary/10 p-4 rounded-lg">
						<TrendingUp className="w-10 h-10 text-primary" strokeWidth={1.5} />
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Continuous Growth
						</h3>
						<p className="text-gray-600">
							Scalable lead generation systems that grow with your business and
							adapt to market changes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen">
			<SEO
				title="AI-Powered Lead Generation Services | EXACT AI"
				description="Supercharge your sales pipeline with our AI-driven lead generation services. We combine advanced targeting, personalized outreach, and data-driven optimization to help you attract and convert high-quality leads that drive business growth and maximize your marketing ROI."
				keywords="lead generation, AI lead generation, sales leads, B2B lead generation, marketing automation, sales pipeline, lead nurturing"
				canonicalUrl="https://www.exct.com/services/lead-generation"
			/>

			<ServiceHero
				badge="AI-Driven Acquisition"
				title="AI-Powered Lead Generation"
				description="Transform your business growth with intelligent lead generation strategies powered by our advanced AI solutions."
				primaryCTA={{
					text: 'Start Generating Leads',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'View Success Stories',
					link: '/resources/case-studies',
				}}
				rightContent={heroRightContent}
			/>

			{/* Main Content */}
			<section className="py-16 bg-white">
				<div className="container-wide">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div>
							<div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
								AI-Driven Acquisition
							</div>
							<h2 className="text-3xl md:text-4xl font-semibold mb-6">
								Intelligent Lead Generation That Works
							</h2>
							<p className="text-gray-600 mb-6">
								At EXACT AI, we combine artificial intelligence with proven
								marketing strategies to create lead generation systems that
								consistently deliver qualified prospects to your business.
							</p>
							<p className="text-gray-600 mb-6">
								Our AI algorithms analyze customer behavior, identify patterns,
								and optimize your campaigns in real-time to maximize conversion
								rates and minimize acquisition costs.
							</p>
							<div className="bg-gray-50 border-l-4 border-tertiary p-4 mb-6">
								<p className="text-gray-700">
									"EXACT AI's lead generation solution increased our qualified
									leads by 215% while reducing our cost per acquisition by 40%."
								</p>
								<p className="text-sm text-gray-500 mt-2">
									— E-commerce Client
								</p>
							</div>
						</div>
						<div className="bg-tertiary/5 p-8 rounded-xl">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
									<Users className="text-tertiary mb-4" size={28} />
									<h3 className="font-semibold mb-2">Audience Targeting</h3>
									<p className="text-sm text-gray-600">
										Precision targeting using AI-driven customer profiling
									</p>
								</div>
								<div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
									<BarChart3 className="text-tertiary mb-4" size={28} />
									<h3 className="font-semibold mb-2">Performance Analytics</h3>
									<p className="text-sm text-gray-600">
										Real-time campaign monitoring and optimization
									</p>
								</div>
								<div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
									<Target className="text-tertiary mb-4" size={28} />
									<h3 className="font-semibold mb-2">
										Conversion Optimization
									</h3>
									<p className="text-sm text-gray-600">
										Continuous improvement through A/B testing
									</p>
								</div>
								<div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
									<TrendingUp className="text-tertiary mb-4" size={28} />
									<h3 className="font-semibold mb-2">Growth Scaling</h3>
									<p className="text-sm text-gray-600">
										Sustainable systems that scale with your business
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 bg-gray-50">
				<div className="container-wide">
					<div className="text-center mb-16">
						<div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
							Our Services
						</div>
						<h2 className="text-3xl md:text-4xl font-semibold mb-6">
							Comprehensive Lead Generation Solutions
						</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							We provide end-to-end lead generation services tailored to your
							specific industry and business goals.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div className="bg-tertiary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
								<Search className="text-tertiary" size={24} />
							</div>
							<h3 className="text-xl font-semibold mb-4">
								SEO & Content Strategy
							</h3>
							<p className="text-gray-600">
								AI-optimized content creation and search engine optimization to
								attract qualified organic traffic.
							</p>
							<ul className="mt-4 space-y-2 text-gray-600">
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Keyword research and optimization</span>
								</li>
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Content creation and distribution</span>
								</li>
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Technical SEO implementation</span>
								</li>
							</ul>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div className="bg-tertiary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
								<Award className="text-tertiary" size={24} />
							</div>
							<h3 className="text-xl font-semibold mb-4">Paid Advertising</h3>
							<p className="text-gray-600">
								AI-managed paid campaigns across multiple platforms with dynamic
								budget allocation and creative optimization.
							</p>
							<ul className="mt-4 space-y-2 text-gray-600">
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>PPC campaign management</span>
								</li>
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Social media advertising</span>
								</li>
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Retargeting strategies</span>
								</li>
							</ul>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div className="bg-tertiary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
								<Mail className="text-tertiary" size={24} />
							</div>
							<h3 className="text-xl font-semibold mb-4">Email & Automation</h3>
							<p className="text-gray-600">
								Personalized email sequences and marketing automation flows
								designed to nurture leads through the sales funnel.
							</p>
							<ul className="mt-4 space-y-2 text-gray-600">
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Email sequence development</span>
								</li>
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Marketing automation setup</span>
								</li>
								<li className="flex items-center">
									<Zap className="text-tertiary mr-2" size={16} />
									<span>Lead scoring and segmentation</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Results Section */}
			<section className="py-16 bg-white">
				<div className="container-wide">
					<div className="text-center mb-16">
						<div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
							Results Driven
						</div>
						<h2 className="text-3xl md:text-4xl font-semibold mb-6">
							Our Impact By The Numbers
						</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							We measure our success by the results we deliver for our clients.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						<div className="p-8 border border-gray-100 rounded-lg">
							<div className="text-4xl font-bold text-tertiary mb-2">+135%</div>
							<p className="text-gray-600">Average increase in lead volume</p>
						</div>
						<div className="p-8 border border-gray-100 rounded-lg">
							<div className="text-4xl font-bold text-tertiary mb-2">-42%</div>
							<p className="text-gray-600">
								Average decrease in cost per acquisition
							</p>
						</div>
						<div className="p-8 border border-gray-100 rounded-lg">
							<div className="text-4xl font-bold text-tertiary mb-2">+87%</div>
							<p className="text-gray-600">Increase in lead quality</p>
						</div>
						<div className="p-8 border border-gray-100 rounded-lg">
							<div className="text-4xl font-bold text-tertiary mb-2">98%</div>
							<p className="text-gray-600">Client retention rate</p>
						</div>
					</div>
				</div>
			</section>

			<CTASection />
			<Footer />
		</div>
	);
};

export default LeadGeneration;
