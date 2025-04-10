import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import {
	Code,
	Server,
	MonitorSmartphone,
	Database,
	Lock,
	Gauge,
	Globe,
	LayoutGrid,
	Layers,
	CheckCircle2,
	Clock,
	Laptop,
} from 'lucide-react';
import SEO from '@/components/SEO';

const FullStack = () => {
	const technologies = [
		{ name: 'React', category: 'Frontend' },
		{ name: 'Angular', category: 'Frontend' },
		{ name: 'Vue.js', category: 'Frontend' },
		{ name: 'Next.js', category: 'Frontend' },
		{ name: 'Node.js', category: 'Backend' },
		{ name: 'Django', category: 'Backend' },
		{ name: 'Laravel', category: 'Backend' },
		{ name: 'Express', category: 'Backend' },
		{ name: 'PostgreSQL', category: 'Database' },
		{ name: 'MongoDB', category: 'Database' },
		{ name: 'MySQL', category: 'Database' },
		{ name: 'Redis', category: 'Database' },
		{ name: 'AWS', category: 'Infrastructure' },
		{ name: 'Azure', category: 'Infrastructure' },
		{ name: 'Google Cloud', category: 'Infrastructure' },
		{ name: 'Docker', category: 'Infrastructure' },
		{ name: 'Kubernetes', category: 'Infrastructure' },
		{ name: 'Terraform', category: 'Infrastructure' },
	];

	const services = [
		{
			icon: <LayoutGrid className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Custom Web Applications',
			description:
				'Scalable, responsive web applications built with modern frameworks and best practices.',
		},
		{
			icon: (
				<MonitorSmartphone
					className="w-10 h-10 text-primary"
					strokeWidth={1.5}
				/>
			),
			title: 'Progressive Web Apps',
			description:
				'High-performing PWAs that deliver native-like experiences across devices.',
		},
		{
			icon: <Database className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'API Development',
			description:
				'Robust, secure APIs that connect systems and enable seamless data exchange.',
		},
		{
			icon: <Lock className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Authentication & Security',
			description:
				'Enterprise-grade security solutions that protect data and maintain compliance.',
		},
		{
			icon: <Gauge className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Performance Optimization',
			description:
				'Fine-tuning applications for maximum speed, reliability, and user satisfaction.',
		},
		{
			icon: <Globe className="w-10 h-10 text-primary" strokeWidth={1.5} />,
			title: 'Cloud Deployment',
			description:
				'Seamless deployment to cloud platforms with robust CI/CD pipelines.',
		},
	];

	const heroRightContent = (
		<div className="relative">
			<div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
				<div className="flex items-start gap-6 mb-8">
					<div className="bg-primary/10 p-4 rounded-lg">
						<Code className="w-10 h-10 text-primary" strokeWidth={1.5} />
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Modern Architecture
						</h3>
						<p className="text-gray-600">
							We build applications with modern architecture patterns like
							microservices, serverless, and JAMstack for optimal performance
							and scalability.
						</p>
					</div>
				</div>

				<div className="flex items-start gap-6 mb-8">
					<div className="bg-primary/10 p-4 rounded-lg">
						<Layers className="w-10 h-10 text-primary" strokeWidth={1.5} />
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Full Technology Stack
						</h3>
						<p className="text-gray-600">
							Expertise across frontend, backend, database, and DevOps
							technologies to deliver comprehensive solutions.
						</p>
					</div>
				</div>

				<div className="flex items-start gap-6">
					<div className="bg-primary/10 p-4 rounded-lg">
						<Server className="w-10 h-10 text-primary" strokeWidth={1.5} />
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Infrastructure as Code
						</h3>
						<p className="text-gray-600">
							Automated, repeatable infrastructure deployment for consistent and
							reliable environments.
						</p>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen">
			<SEO
				title="Full-Stack Development Services | EXACT AI"
				description="Build robust, scalable, and high-performance applications with our full-stack development services. Our experienced team delivers end-to-end solutions from frontend interfaces to backend systems, database design, and cloud infrastructure, using the latest technologies and best practices."
				keywords="full-stack development, web applications, software development, frontend, backend, API development, database design, cloud infrastructure"
				canonicalUrl="https://www.exct.com/services/full-stack"
			/>

			<ServiceHero
				badge="End-to-End Development"
				title="Full-Stack Development"
				description="From frontend experiences to backend systems, we build complete solutions that drive your business forward."
				primaryCTA={{
					text: 'Start Your Project',
					link: '/contact',
				}}
				secondaryCTA={{
					text: 'View Our Work',
					link: '/resources/case-studies',
				}}
				rightContent={heroRightContent}
			/>

			{/* Our Services */}
			<section className="py-20 bg-white">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Our Full-Stack Services
						</h2>
						<p className="text-xl text-gray-600">
							We deliver comprehensive development services that cover every
							layer of the technology stack.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-muted rounded-xl p-8 hover:shadow-md transition-shadow"
							>
								<div className="bg-white rounded-xl w-20 h-20 flex items-center justify-center mb-6 shadow-sm">
									{service.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Process */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="w-12 h-1 bg-primary mb-6"></div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Our Development Process
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								We follow a structured, collaborative approach to deliver
								high-quality, scalable applications on time and within budget.
							</p>

							<div className="space-y-6">
								<div className="flex gap-4">
									<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
										<span className="text-primary font-medium">1</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Discovery & Planning
										</h3>
										<p className="text-gray-600">
											We thoroughly analyze your requirements, define project
											scope, and create detailed technical specifications.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
										<span className="text-primary font-medium">2</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Architecture & Design
										</h3>
										<p className="text-gray-600">
											Our experts design the system architecture, database
											schema, and UI/UX to ensure a solid foundation.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
										<span className="text-primary font-medium">3</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Iterative Development
										</h3>
										<p className="text-gray-600">
											We use agile methodologies to deliver working software in
											regular increments, incorporating feedback throughout.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
										<span className="text-primary font-medium">4</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Quality Assurance
										</h3>
										<p className="text-gray-600">
											Rigorous testing across multiple dimensions ensures your
											application is reliable, secure, and performant.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
										<span className="text-primary font-medium">5</span>
									</div>
									<div>
										<h3 className="text-xl font-medium text-gray-900 mb-2">
											Deployment & Support
										</h3>
										<p className="text-gray-600">
											Smooth deployment to production environments, followed by
											ongoing maintenance and support as needed.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
								<div className="p-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-6">
										The EXACT Advantage
									</h3>

									<div className="space-y-5">
										<div className="flex items-start">
											<CheckCircle2
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Experienced Full-Stack Teams
												</h4>
												<p className="text-gray-600 text-sm">
													Senior developers with expertise across multiple
													technologies and frameworks.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle2
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Scalable Architectures
												</h4>
												<p className="text-gray-600 text-sm">
													Solutions designed to grow with your business without
													major refactoring.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle2
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Quality-First Approach
												</h4>
												<p className="text-gray-600 text-sm">
													Comprehensive testing, code reviews, and CI/CD
													practices ensure high-quality deliverables.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle2
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Security Best Practices
												</h4>
												<p className="text-gray-600 text-sm">
													Security built-in from the start, not added as an
													afterthought.
												</p>
											</div>
										</div>

										<div className="flex items-start">
											<CheckCircle2
												className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<h4 className="font-medium text-gray-900">
													Transparent Communication
												</h4>
												<p className="text-gray-600 text-sm">
													Regular updates and access to our project management
													tools keep you informed.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-primary/5 p-6 border-t border-gray-100">
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<Clock
												className="w-5 h-5 text-primary mr-2"
												strokeWidth={1.5}
											/>
											<span className="text-sm font-medium">
												Average Project Timeline
											</span>
										</div>
										<span className="font-semibold">2-6 months</span>
									</div>
								</div>
							</div>
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
							Our Technology Stack
						</h2>
						<p className="text-xl text-gray-600">
							We work with a wide range of modern technologies to build robust,
							scalable applications.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center mb-6">
								<div className="bg-primary/10 p-2 rounded-lg mr-3">
									<Laptop className="w-6 h-6 text-primary" strokeWidth={1.5} />
								</div>
								<h3 className="text-xl font-semibold text-gray-900">
									Frontend
								</h3>
							</div>
							<div className="grid grid-cols-2 gap-3">
								{technologies
									.filter((tech) => tech.category === 'Frontend')
									.map((tech, index) => (
										<div
											key={index}
											className="bg-muted rounded-lg py-2 px-3 text-center"
										>
											<span className="text-gray-700 font-medium">
												{tech.name}
											</span>
										</div>
									))}
							</div>
						</div>

						<div>
							<div className="flex items-center mb-6">
								<div className="bg-primary/10 p-2 rounded-lg mr-3">
									<Server className="w-6 h-6 text-primary" strokeWidth={1.5} />
								</div>
								<h3 className="text-xl font-semibold text-gray-900">Backend</h3>
							</div>
							<div className="grid grid-cols-2 gap-3">
								{technologies
									.filter((tech) => tech.category === 'Backend')
									.map((tech, index) => (
										<div
											key={index}
											className="bg-muted rounded-lg py-2 px-3 text-center"
										>
											<span className="text-gray-700 font-medium">
												{tech.name}
											</span>
										</div>
									))}
							</div>
						</div>

						<div>
							<div className="flex items-center mb-6">
								<div className="bg-primary/10 p-2 rounded-lg mr-3">
									<Database
										className="w-6 h-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-gray-900">
									Database
								</h3>
							</div>
							<div className="grid grid-cols-2 gap-3">
								{technologies
									.filter((tech) => tech.category === 'Database')
									.map((tech, index) => (
										<div
											key={index}
											className="bg-muted rounded-lg py-2 px-3 text-center"
										>
											<span className="text-gray-700 font-medium">
												{tech.name}
											</span>
										</div>
									))}
							</div>
						</div>

						<div>
							<div className="flex items-center mb-6">
								<div className="bg-primary/10 p-2 rounded-lg mr-3">
									<Globe className="w-6 h-6 text-primary" strokeWidth={1.5} />
								</div>
								<h3 className="text-xl font-semibold text-gray-900">
									Infrastructure
								</h3>
							</div>
							<div className="grid grid-cols-2 gap-3">
								{technologies
									.filter((tech) => tech.category === 'Infrastructure')
									.map((tech, index) => (
										<div
											key={index}
											className="bg-muted rounded-lg py-2 px-3 text-center"
										>
											<span className="text-gray-700 font-medium">
												{tech.name}
											</span>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="py-20 bg-muted">
				<div className="container-wide">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							Featured Projects
						</h2>
						<p className="text-xl text-gray-600">
							Explore some of our successful full-stack development projects
							across various industries.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-48 bg-primary/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<h3 className="text-2xl font-bold text-primary">Fintech</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Financial Analytics Platform
								</h4>
								<p className="text-gray-600 mb-4">
									A comprehensive analytics platform with real-time data
									processing and interactive dashboards for a fintech company.
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										React
									</span>
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										Node.js
									</span>
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										PostgreSQL
									</span>
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										AWS
									</span>
								</div>
								<Link
									to="/resources/case-studies"
									className="text-primary hover:underline font-medium inline-flex items-center"
								>
									View Case Study
								</Link>
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
									Patient Management System
								</h4>
								<p className="text-gray-600 mb-4">
									A secure, HIPAA-compliant platform for patient data
									management, appointment scheduling, and telemedicine.
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-tertiary/10 text-tertiary text-xs px-2 py-1 rounded">
										Angular
									</span>
									<span className="bg-tertiary/10 text-tertiary text-xs px-2 py-1 rounded">
										Django
									</span>
									<span className="bg-tertiary/10 text-tertiary text-xs px-2 py-1 rounded">
										MongoDB
									</span>
									<span className="bg-tertiary/10 text-tertiary text-xs px-2 py-1 rounded">
										Azure
									</span>
								</div>
								<Link
									to="/resources/case-studies"
									className="text-tertiary hover:underline font-medium inline-flex items-center"
								>
									View Case Study
								</Link>
							</div>
						</div>

						<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="h-48 bg-primary/10 relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<h3 className="text-2xl font-bold text-primary">
										E-commerce
									</h3>
								</div>
							</div>
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-900 mb-3">
									Marketplace Platform
								</h4>
								<p className="text-gray-600 mb-4">
									A scalable multi-vendor marketplace with real-time inventory
									management and advanced search functionality.
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										Next.js
									</span>
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										Express
									</span>
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										MySQL
									</span>
									<span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
										GCP
									</span>
								</div>
								<Link
									to="/resources/case-studies"
									className="text-primary hover:underline font-medium inline-flex items-center"
								>
									View Case Study
								</Link>
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<Link
							to="/resources/case-studies"
							className="btn bg-primary text-white hover:bg-primary/90 transition-colors"
						>
							View All Projects
						</Link>
					</div>
				</div>
			</section>

			<CTASection />
			<Footer />
		</div>
	);
};

export default FullStack;
