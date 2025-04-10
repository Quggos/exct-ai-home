import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Users, ChartBar, Rocket } from 'lucide-react';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import IndustryHero from '@/components/IndustryHero';
import { OptimizedImage } from '@/components/ui/optimized-image';
import SEO from '@/components/SEO';

const Healthcare = () => {
	const aiSolutions = [
		{
			title: 'Medical Imaging Analysis',
			description:
				'AI-powered systems that analyze medical images with superhuman accuracy, detecting anomalies and assisting radiologists in making faster, more accurate diagnoses.',
			icon: <ChartBar className="w-12 h-12 text-primary" strokeWidth={1.5} />,
		},
		{
			title: 'Predictive Patient Monitoring',
			description:
				'Advanced algorithms that continuously analyze patient vital signs and medical records to predict deterioration and potential complications before they become critical.',
			icon: <Users className="w-12 h-12 text-primary" strokeWidth={1.5} />,
		},
		{
			title: 'Drug Discovery Acceleration',
			description:
				'AI systems that dramatically speed up the drug discovery process by analyzing molecular structures and predicting efficacy and side effects before clinical trials.',
			icon: <Rocket className="w-12 h-12 text-primary" strokeWidth={1.5} />,
		},
		{
			title: 'Clinical Decision Support',
			description:
				'AI-enhanced decision support tools that provide physicians with evidence-based recommendations tailored to individual patient profiles and medical histories.',
			icon: <Database className="w-12 h-12 text-primary" strokeWidth={1.5} />,
		},
	];

	const caseStudies = [
		{
			title: 'Hospital Network Reduces Readmissions by 35%',
			description:
				'Our predictive analytics platform identifies high-risk patients and recommends targeted interventions, significantly reducing unplanned readmissions.',
			metric: '35% fewer readmissions',
		},
		{
			title: 'Radiology Practice Increases Diagnostic Accuracy by 28%',
			description:
				'AI-powered image analysis assists radiologists in detecting subtle abnormalities that might otherwise be missed, improving patient outcomes.',
			metric: '28% higher accuracy',
		},
	];

	return (
		<div className="min-h-screen">
			<SEO
				title="AI Solutions for Healthcare Industry | EXACT AI"
				description="Transform patient care and medical operations with our specialized AI solutions for healthcare. From medical imaging analysis and clinical decision support to predictive patient monitoring and drug discovery acceleration, our technologies improve diagnostic accuracy, treatment outcomes, and operational efficiency."
				keywords="healthcare AI, medical AI solutions, predictive healthcare, AI diagnostic tools, medical imaging AI, patient monitoring technology, healthcare automation"
				canonicalUrl="https://www.exct.com/industries/healthcare"
			/>

			<IndustryHero
				title="AI Solutions for Healthcare"
				description="Transform patient care and medical operations with AI-powered diagnostics, personalized treatment plans, and intelligent healthcare management systems."
				backgroundImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
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
							{ value: '94%', label: 'Accuracy in medical image analysis' },
							{ value: '47%', label: 'Reduction in administrative workload' },
							{ value: '4.3x', label: 'Faster drug discovery process' },
						].map((stat, i) => (
							<div key={i} className="text-center p-6 bg-muted rounded-lg">
								<p className="text-4xl font-bold text-primary mb-2">
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
						<div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
							OUR APPROACH
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Advanced AI Solutions for Healthcare
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl">
							Our specialized healthcare AI technologies address critical
							challenges across the entire care continuum.
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
									className="text-primary flex items-center font-medium hover:underline"
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
							<div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
								HEALTHCARE IMPACT
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Revolutionizing Patient Care with AI
							</h2>
							<p className="text-gray-600 mb-8">
								Our healthcare AI solutions deliver transformative benefits:
							</p>

							<div className="space-y-6">
								{[
									'Earlier detection of diseases through advanced pattern recognition',
									'Personalized treatment plans based on individual patient data',
									'Reduction in diagnostic errors and unnecessary procedures',
									'Streamlined administrative processes and reduced paperwork',
									'Enhanced patient engagement and remote monitoring capabilities',
								].map((benefit, i) => (
									<div key={i} className="flex items-start">
										<div className="mr-4 mt-1 text-primary">
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
									<div className="text-2xl font-bold text-primary mb-2">
										{study.metric}
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{study.title}
									</h3>
									<p className="text-gray-600 text-sm">{study.description}</p>
								</div>
							))}

							<div className="md:col-span-2 bg-primary/5 p-6 rounded-lg border border-primary/20">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Ready to transform patient care?
								</h3>
								<p className="text-gray-600 mb-4">
									Our healthcare AI specialists can help your organization
									implement cutting-edge solutions that improve outcomes and
									efficiency.
								</p>
								<Link to="/contact" className="btn btn-primary">
									Schedule a Consultation
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Compliance Section */}
			<section className="py-16 bg-muted">
				<div className="container-wide">
					<div className="text-left mb-12">
						<div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
							COMPLIANCE & ETHICS
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Responsible AI for Healthcare
						</h2>
						<p className="text-gray-600 max-w-3xl">
							Our healthcare solutions are designed with the highest standards
							of compliance, privacy, and ethical considerations.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: 'HIPAA Compliance',
								description:
									'All our solutions are built with HIPAA compliance as a foundational requirement, ensuring patient data is protected at every step.',
								icon: (
									<Database
										className="w-10 h-10 text-primary mb-4"
										strokeWidth={1.5}
									/>
								),
							},
							{
								title: 'Explainable AI',
								description:
									'Our healthcare AI models provide clear explanations for their recommendations, enabling clinicians to understand and validate AI-assisted decisions.',
								icon: (
									<ChartBar
										className="w-10 h-10 text-primary mb-4"
										strokeWidth={1.5}
									/>
								),
							},
							{
								title: 'Ethical Framework',
								description:
									'We adhere to rigorous ethical guidelines for AI in healthcare, ensuring fairness, transparency, and patient-centered approaches.',
								icon: (
									<Users
										className="w-10 h-10 text-primary mb-4"
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

			{/* Research Section */}
			<section className="py-16 bg-white">
				<div className="container-wide">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="order-2 md:order-1">
							<div className="relative h-[400px] rounded-xl shadow-lg overflow-hidden">
								<OptimizedImage
									src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
									alt="Medical Research"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 800px"
								/>
							</div>
						</div>

						<div className="order-1 md:order-2">
							<div className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-4">
								RESEARCH & INNOVATION
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Advancing Healthcare Research
							</h2>
							<p className="text-gray-600 mb-6">
								Our AI solutions accelerate medical research and discovery
								through:
							</p>

							<div className="space-y-4">
								{[
									'Analysis of complex genomic data to identify new therapeutic targets',
									'Simulation of molecular interactions to predict drug efficacy',
									'Extraction of insights from millions of medical research papers',
									'Identification of potential participants for clinical trials',
									'Real-world evidence analysis to supplement clinical trial data',
								].map((item, i) => (
									<div key={i} className="flex items-start">
										<div className="mr-3 mt-1 text-primary">
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
													fill="currentColor"
												/>
											</svg>
										</div>
										<p className="text-gray-700">{item}</p>
									</div>
								))}
							</div>

							<div className="mt-8">
								<Link to="/services/ai-consulting" className="btn btn-primary">
									Explore Research Capabilities
								</Link>
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

export default Healthcare;
