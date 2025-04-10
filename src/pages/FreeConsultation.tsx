import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CalendlyInline from '../components/CalendlyInline';
import { ChevronLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const FreeConsultation = () => {
	// Schema for the page
	const pageSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Free Automation Consultation',
		description:
			'Book a free 30-minute consultation to discuss how EXACT AI can help automate your business workflows.',
		provider: {
			'@type': 'Organization',
			name: 'EXACT AI',
			url: 'https://www.exct.com',
		},
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
		},
	};

	return (
		<PageTransition>
			<SEO
				title="Free Automation Consultation | Book a 30-Minute Call | EXACT AI"
				description="Schedule your free 30-minute consultation with our AI automation experts. Discuss your business needs and discover how EXACT AI can streamline your workflows."
				keywords="free consultation, automation consultation, AI consultation, workflow automation, business automation, EXACT AI"
				canonicalUrl="https://www.exct.com/free-automation-consultation"
				schema={pageSchema}
				h1="Free Automation Consultation"
			/>

			<main className="pt-24 pb-16 min-h-screen bg-gray-50">
				<div className="container max-w-5xl mx-auto px-4">
					{/* Back button */}
					<Link
						to="/"
						className="inline-flex items-center text-tertiary hover:text-tertiary/80 mb-8 transition-colors"
					>
						<ChevronLeft className="h-4 w-4 mr-1" />
						<span>Back to Home</span>
					</Link>

					<div className="bg-white rounded-lg shadow-sm overflow-hidden">
						<div className="p-6 md:p-8 border-b border-gray-100">
							<h1 className="text-3xl md:text-4xl font-semibold text-tertiary mb-4">
								Free Automation Consultation
							</h1>

							<p className="text-gray-600 mb-6 max-w-3xl">
								Schedule a free 30-minute call with our automation experts.
								We'll discuss your business needs and explore how EXACT AI can
								help streamline your workflows and increase efficiency.
							</p>

							<div className="flex flex-wrap gap-4 mb-6">
								<div className="flex items-center bg-blue-50 px-4 py-2 rounded-md">
									<span className="text-tertiary font-medium">30 Minutes</span>
								</div>
								<div className="flex items-center bg-green-50 px-4 py-2 rounded-md">
									<span className="text-green-700 font-medium">
										Free Consultation
									</span>
								</div>
								<div className="flex items-center bg-purple-50 px-4 py-2 rounded-md">
									<span className="text-purple-700 font-medium">
										Expert Advice
									</span>
								</div>
							</div>
						</div>

						<div className="p-0 md:p-0">
							{/* Calendly Component */}
							<CalendlyInline
								url="https://calendly.com/daniel-exct/30min"
								height={700}
							/>
						</div>
					</div>
				</div>
			</main>
		</PageTransition>
	);
};

export default FreeConsultation;
