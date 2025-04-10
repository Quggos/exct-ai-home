import React from 'react';
import { Link } from 'react-router-dom';
import {
	ArrowRight,
	Database,
	Rocket,
	Users,
	ShieldCheck,
	ChartBar,
} from 'lucide-react';
import IndustryHero from '@/components/IndustryHero';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { OptimizedImage } from '@/components/ui/optimized-image';
import SEO from '@/components/SEO';

const Finance = () => {
	const aiSolutions = [
		{
			title: 'Automated Risk Assessment',
			description:
				'AI-powered risk models analyze vast datasets to evaluate creditworthiness, detect potential fraud, and assess market risks with greater accuracy than traditional methods.',
			icon: (
				<ShieldCheck className="w-12 h-12 text-primary" strokeWidth={1.5} />
			),
		},
		{
			title: 'Intelligent Fraud Detection',
			description:
				'Advanced machine learning algorithms identify suspicious patterns and anomalies in real-time, preventing fraud before transactions are completed.',
			icon: <Database className="w-12 h-12 text-primary" strokeWidth={1.5} />,
		},
		{
			title: 'Algorithmic Trading Systems',
			description:
				'AI-driven trading platforms analyze market data and execute trades at optimal times, improving returns while managing risk according to predefined parameters.',
			icon: <ChartBar className="w-12 h-12 text-primary" strokeWidth={1.5} />,
		},
		{
			title: 'Personalized Financial Advising',
			description:
				'Our AI advisory systems deliver tailored financial guidance based on individual goals, risk tolerance, and changing market conditions.',
			icon: <Users className="w-12 h-12 text-primary" strokeWidth={1.5} />,
		},
	];

	const caseStudies = [
		{
			title: 'Global Bank Reduces Fraud Losses by 73%',
			description:
				'Our advanced fraud detection system processes thousands of transactions per second to identify and prevent fraudulent activities in real-time.',
			metric: '73% fraud reduction',
		},
		{
			title: 'Investment Firm Increases Portfolio Returns by 18%',
			description:
				'AI-powered market analysis and algorithmic trading strategies delivered consistent outperformance while maintaining risk parameters.',
			metric: '18% higher returns',
		},
	];

	return (
		<div className="min-h-screen">
			<SEO
				title="AI Solutions for Financial Services | EXACT AI"
				description="Revolutionize your financial services with our advanced AI solutions designed specifically for the finance industry. From fraud detection and risk assessment to algorithmic trading and personalized banking experiences, our technologies help financial institutions enhance security, improve decision-making, and deliver superior customer service."
				keywords="financial AI, banking technology, fraud detection AI, algorithmic trading, risk assessment technology, fintech solutions, AI for finance"
				canonicalUrl="https://www.exct.com/industries/finance"
			/>

			<IndustryHero
				title="AI Solutions for Financial Services"
				description="Transform your financial operations with AI-powered risk assessment, fraud detection, and automated trading systems. Drive growth and efficiency with intelligent financial technology."
				backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
				primaryCTA={{
					text: 'Explore Solutions',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'View Case Studies',
					link: '/resources/case-studies',
				}}
			/>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="container-wide">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{ value: '94%', label: 'Accuracy in fraud detection' },
							{ value: '62%', label: 'Reduction in operational costs' },
							{
								value: '83%',
								label: 'Faster regulatory compliance processing',
							},
						].map((stat, i) => (
							<div key={i} className="text-center p-6 bg-muted rounded-lg">
								<p className="text-4xl font-bold text-tertiary mb-2">
									{stat.value}
								</p>
								<p className="text-gray-600">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Solutions Section */}
			<section className="py-16 bg-muted">
				<div className="container-wide">
					<div className="text-left mb-16">
						<div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
							OUR APPROACH
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Transformative AI Solutions for Financial Services
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl">
							Our specialized AI technologies address critical challenges in the
							financial sector, from risk assessment to customer experience.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{aiSolutions.map((solution, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
							>
								<div className="mb-6">{solution.icon}</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{solution.title}
								</h3>
								<p className="text-gray-600 mb-6">{solution.description}</p>
								<Link
									to="/services/ai-development"
									className="text-tertiary flex items-center font-medium hover:underline"
								>
									Learn more <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-16 bg-white">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
								BUSINESS IMPACT
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								How AI Transforms Financial Operations
							</h2>
							<p className="text-gray-600 mb-8">
								Our AI-powered financial solutions enable institutions to:
							</p>

							<div className="space-y-6">
								{[
									'Analyze vast amounts of structured and unstructured financial data in seconds',
									'Identify emerging risks and opportunities before they impact the market',
									'Automate compliance processes and regulatory reporting',
									'Prevent fraud with real-time transaction monitoring',
									'Deliver hyper-personalized financial products and services',
								].map((benefit, i) => (
									<div key={i} className="flex items-start">
										<div className="mr-4 mt-1 text-tertiary">
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM14.293 8.293L9.293 13.293C9.098 13.488 8.839 13.585 8.585 13.585C8.331 13.585 8.072 13.488 7.877 13.293L5.707 11.123C5.317 10.733 5.317 10.1 5.707 9.71C6.097 9.32 6.73 9.32 7.12 9.71L8.585 11.175L12.88 6.88C13.27 6.49 13.903 6.49 14.293 6.88C14.683 7.27 14.683 7.903 14.293 8.293Z"
													fill="currentColor"
												/>
											</svg>
										</div>
										<p className="text-gray-700">{benefit}</p>
									</div>
								))}
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{caseStudies.map((study, i) => (
								<div key={i} className="bg-muted p-6 rounded-lg">
									<div className="text-2xl font-bold text-tertiary mb-2">
										{study.metric}
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{study.title}
									</h3>
									<p className="text-gray-600 text-sm">{study.description}</p>
								</div>
							))}

							<div className="md:col-span-2 bg-tertiary/5 p-6 rounded-lg border border-tertiary/20">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Ready to transform your financial institution?
								</h3>
								<p className="text-gray-600 mb-4">
									Our team of financial AI specialists is ready to help you
									implement cutting-edge AI solutions.
								</p>
								<Link to="/contact" className="btn btn-tertiary">
									Schedule a Consultation
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Regulatory Compliance Section */}
			<section className="py-16 bg-muted">
				<div className="container-wide">
					<div className="text-left mb-12">
						<div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
							COMPLIANCE & SECURITY
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							AI-Enhanced Regulatory Compliance
						</h2>
						<p className="text-gray-600 max-w-3xl">
							Our solutions are designed with financial regulations and data
							security as top priorities.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: 'Regulatory Compliance',
								description:
									'Automated systems for monitoring and reporting on regulatory requirements including AML, KYC, GDPR, and Basel III compliance.',
								icon: (
									<ShieldCheck
										className="w-10 h-10 text-tertiary mb-4"
										strokeWidth={1.5}
									/>
								),
							},
							{
								title: 'Data Security',
								description:
									'Enterprise-grade security protocols protect sensitive financial data with encryption, secure access controls, and continuous monitoring.',
								icon: (
									<Database
										className="w-10 h-10 text-tertiary mb-4"
										strokeWidth={1.5}
									/>
								),
							},
							{
								title: 'Model Governance',
								description:
									'Transparent AI model development and documentation ensures your AI systems meet regulatory requirements for explainability.',
								icon: (
									<Rocket
										className="w-10 h-10 text-tertiary mb-4"
										strokeWidth={1.5}
									/>
								),
							},
						].map((item, i) => (
							<div key={i} className="bg-white p-6 rounded-lg shadow-sm">
								{item.icon}
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{item.title}
								</h3>
								<p className="text-gray-600">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Technologies Section */}
			<section className="py-16 bg-white">
				<div className="container-wide">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
								TECHNOLOGY STACK
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Advanced Technologies Powering Financial AI
							</h2>
							<p className="text-gray-600 mb-8">
								We leverage cutting-edge technologies to deliver powerful
								financial solutions:
							</p>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									'Machine Learning Models',
									'Natural Language Processing',
									'Time Series Analysis',
									'Computer Vision for Document Processing',
									'Reinforcement Learning for Trading',
									'Deep Neural Networks',
									'Explainable AI (XAI)',
									'Federated Learning',
								].map((tech, i) => (
									<div key={i} className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-tertiary rounded-full"></div>
										<span className="text-gray-700">{tech}</span>
									</div>
								))}
							</div>
						</div>

						<div className="bg-muted p-8 rounded-lg">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Integration Capabilities
							</h3>
							<p className="text-gray-600 mb-6">
								Our solutions integrate seamlessly with financial systems and
								platforms:
							</p>

							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
								{[
									'Core Banking Systems',
									'Payment Processors',
									'Trading Platforms',
									'CRM Systems',
									'Risk Management Tools',
									'Regulatory Reporting',
									'Market Data Feeds',
									'Cloud Infrastructure',
									'Legacy Systems',
								].map((platform, i) => (
									<div
										key={i}
										className="bg-white p-3 rounded text-center text-gray-800 text-sm"
									>
										{platform}
									</div>
								))}
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

export default Finance;
