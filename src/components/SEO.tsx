
import React, { useEffect } from 'react';
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

	// Special handling for the home page (root route)
	const isHomePage = location.pathname === '/';

	useEffect(() => {
		// Update the document title immediately for better UX
		document.title = formattedTitle;
		
		// Only add additional meta tags for the homepage
		if (isHomePage) {
			// Create and append meta tags directly to ensure they're present before React hydration
			const homePageMetaTags = [
				{ property: 'og:title', content: formattedTitle },
				{ property: 'og:description', content: description },
				{ property: 'og:image', content: absoluteOgImage },
				{ property: 'og:url', content: dynamicCanonicalUrl },
				{ name: 'description', content: description },
				{ name: 'twitter:card', content: twitterCard },
				{ name: 'twitter:title', content: formattedTitle },
				{ name: 'twitter:description', content: description },
				{ name: 'twitter:image', content: absoluteOgImage }
			];
			
			// Add meta tags to the head
			homePageMetaTags.forEach(tag => {
				const meta = document.createElement('meta');
				Object.entries(tag).forEach(([key, value]) => {
					meta.setAttribute(key, value);
				});
				document.head.appendChild(meta);
			});
			
			// Clean up function to remove meta tags on unmount
			return () => {
				// Create a new array here to avoid referencing undefined variable
				const cleanupMetaTags = [
					'og:title', 'og:description', 'og:image', 'og:url', 
					'description', 'twitter:card', 'twitter:title', 
					'twitter:description', 'twitter:image'
				];
				
				// Remove meta tags by name or property
				cleanupMetaTags.forEach(tagName => {
					const selector = `meta[name="${tagName}"], meta[property="${tagName}"]`;
					const tags = document.querySelectorAll(selector);
					tags.forEach(tag => {
						if (tag.parentNode) {
							tag.parentNode.removeChild(tag);
						}
					});
				});
			};
		}
		
		// No cleanup needed for non-home pages as Helmet will handle it
		return undefined;
	}, [formattedTitle, description, absoluteOgImage, dynamicCanonicalUrl, isHomePage, twitterCard]);

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
