
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
	title: string;
	description: string;
	keywords?: string;
	canonicalUrl?: string;
	ogImage?: string;
	ogType?: string;
	twitterCard?: string;
	schema?: Record<string, unknown>;
	noindex?: boolean;
	h1?: string;
}

const SEO: React.FC<SEOProps> = ({
	title,
	description,
	keywords,
	canonicalUrl,
	ogImage = 'https://www.exct.com/media/exct-meta-preview.jpg',
	ogType = 'website',
	twitterCard = 'summary_large_image',
	schema,
	noindex = false,
	h1,
}) => {
	const location = useLocation();
	
	// Generate a dynamic canonical URL if one isn't provided
	const dynamicCanonicalUrl = canonicalUrl || `https://www.exct.com${location.pathname}`;

	// Format the title to ensure it has the brand name
	const formattedTitle = title.includes('EXACT AI')
		? title
		: `${title} | EXACT AI`;

	// Ensure the OG image has an absolute URL
	const absoluteOgImage = ogImage.startsWith('http')
		? ogImage
		: `https://www.exct.com${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

	return (
		<>
			<Helmet prioritizeSeoTags>
				{/* Basic Meta Tags */}
				<title>{formattedTitle}</title>
				<meta name="description" content={description} />
				{keywords && <meta name="keywords" content={keywords} />}
				{noindex && <meta name="robots" content="noindex, nofollow" />}
				
				{/* Canonical Link Tag */}
				<link rel="canonical" href={dynamicCanonicalUrl} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content={ogType} />
				<meta property="og:title" content={formattedTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={absoluteOgImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="EXACT AI" />
				<meta property="og:url" content={dynamicCanonicalUrl} />

				{/* Twitter */}
				<meta name="twitter:card" content={twitterCard} />
				<meta name="twitter:title" content={formattedTitle} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={absoluteOgImage} />
				<meta name="twitter:domain" content="exct.com" />

				{/* Mobile-specific meta tags */}
				<meta name="format-detection" content="telephone=no" />
				<meta name="theme-color" content="#0f172a" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>

				{/* Language and geo meta tags */}
				<meta name="language" content="English" />
				<meta name="geo.region" content="US" />
				
				{/* Ensure the schema data is properly formatted */}
				{schema && (
					<script type="application/ld+json">{JSON.stringify(schema)}</script>
				)}
			</Helmet>

			{h1 && <h1 className="sr-only">{h1}</h1>}
		</>
	);
};

export default SEO;
