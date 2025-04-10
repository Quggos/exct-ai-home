import React, { lazy, Suspense } from 'react';
import SEO from '@/components/SEO';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

// Lazy load non-critical components for better mobile performance
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Industries = lazy(() => import('../components/Industries'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CTASection = lazy(() => import('../components/CTASection'));
const Footer = lazy(() => import('../components/Footer'));
const PartnersSection = lazy(() => import('@/components/PartnersSection'));
const OurServices = lazy(() => import('@/components/OurServices'));

// Simple loading fallback
const SectionLoader = () => (
	<div className="w-full py-12 flex justify-center items-center">
		<div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
	</div>
);
const Index = () => {
	const isMobile = useIsMobile();

	// Define structured data for the homepage
	const homePageSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'EXACT AI',
		url: 'https://www.exct.com/',
		logo: {
			'@type': 'ImageObject',
			url: 'https://www.exct.com/media/exct-meta-preview.jpg',
			width: 1200,
			height: 630,
		},
		description:
			'Enterprise-grade AI solutions including generative AI implementation, AI development, consulting, and workflow automation for businesses across industries.',
		sameAs: [
			'https://twitter.com/exactai',
			'https://www.linkedin.com/company/exct',
			'https://facebook.com/61574399337370/',
		],
		address: {
			'@type': 'PostalAddress',
			streetAddress: '123 AI Innovation Avenue',
			addressLocality: 'New York',
			addressRegion: 'NY',
			postalCode: '10001',
			addressCountry: 'United States',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+13155570024',
			contactType: 'customer service',
			email: 'contact@exct.com',
			availableLanguage: ['English'],
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://www.exct.com/search?q={search_term_string}',
			'query-input': 'required name=search_term_string',
		},
	};
	return (
		<div className="min-h-screen">
			<SEO
				title="EXACT AI - Enterprise AI Solutions & Automation Services"
				description="EXACT AI offers enterprise AI solutions: generative AI, development, consulting, and workflow automation for businesses."
				keywords="AI solutions, generative AI, workflow automation, AI consulting, enterprise AI, custom AI development, business automation, artificial intelligence"
				canonicalUrl="https://www.exct.com"
				ogImage="/media/exct-meta-preview.jpg"
				schema={homePageSchema}
				h1="Custom AI Automation for Your Business"
			/>

			<main>
				{/* Critical path rendering - load immediately */}
				<Hero />
				<AboutSection />

				{/* Quick links section for better internal linking */}

				{/* Non-critical components - load when visible/needed */}
				<Suspense fallback={<SectionLoader />}>
					<OurServices />
					<Industries />
					<WhyChooseUs />
					<PartnersSection />
					<Testimonials />
					<CTASection />
				</Suspense>
			</main>

			<Suspense fallback={<SectionLoader />}>
				<Footer />
			</Suspense>
		</div>
	);
};
export default Index;
