
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
	isHomePage?: boolean;
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
	isHomePage = false,
}) => {
	const location = useLocation();
	
	// Generate a dynamic canonical URL if one isn't provided
	const dynamicCanonicalUrl = canonicalUrl || `https://www.exct.com${location.pathname}`;

	// Format the title to ensure it has the brand name
	const formattedTitle = title.includes('EXACT AI')
		? title
		: `${title} | EXACT AI`;

	// Ensure absolute URL for ogImage
	const absoluteOgImage = ogImage.startsWith('http')
		? ogImage
		: `https://www.exct.com${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

	// Force update meta tags by adding a key with current timestamp
	const metaKey = `meta-${Date.now()}`;

	// Special handling for home page
	useEffect(() => {
		if (isHomePage) {
			// For home page, force a higher priority for meta tags
			document.title = formattedTitle;
			
			// Directly inject critical meta tags for the home page
			const metaTags = [
				{ name: 'description', content: description },
				{ property: 'og:title', content: formattedTitle },
				{ property: 'og:description', content: description },
				{ property: 'og:image', content: absoluteOgImage },
				{ property: 'og:url', content: dynamicCanonicalUrl },
				{ property: 'og:type', content: ogType },
				{ name: 'twitter:card', content: twitterCard },
				{ name: 'twitter:title', content: formattedTitle },
				{ name: 'twitter:description', content: description },
				{ name: 'twitter:image', content: absoluteOgImage }
			];
			
			// Remove any existing tags with the same names/properties
			metaTags.forEach(tag => {
				const selector = tag.name 
					? `meta[name="${tag.name}"]` 
					: `meta[property="${tag.property}"]`;
				const existingTags = document.querySelectorAll(selector);
				existingTags.forEach(existingTag => existingTag.remove());
			});
			
			// Add the new tags
			metaTags.forEach(tag => {
				const metaTag = document.createElement('meta');
				if (tag.name) metaTag.setAttribute('name', tag.name);
				if (tag.property) metaTag.setAttribute('property', tag.property);
				metaTag.setAttribute('content', tag.content);
				document.head.appendChild(metaTag);
			});
		}

		// Preload the OG image to ensure it's available for social media crawlers
		const ogImagePreload = document.createElement('link');
		ogImagePreload.rel = 'preload';
		ogImagePreload.href = absoluteOgImage;
		ogImagePreload.as = 'image';
		ogImagePreload.type = ogImage.endsWith('.jpg') ? 'image/jpeg' : 'image/png';
		document.head.appendChild(ogImagePreload);

		return () => {
			// Clean up preloaded resources when component unmounts
			if (document.head.contains(ogImagePreload)) {
				document.head.removeChild(ogImagePreload);
			}
			
			// Clean up directly injected meta tags when unmounting
			if (isHomePage) {
				metaTags.forEach(tag => {
					const selector = tag.name 
						? `meta[name="${tag.name}"]` 
						: `meta[property="${tag.property}"]`;
					const existingTags = document.querySelectorAll(selector);
					existingTags.forEach(existingTag => {
						if (existingTag.parentNode === document.head) {
							document.head.removeChild(existingTag);
						}
					});
				});
			}
		};
	}, [absoluteOgImage, ogImage, isHomePage, formattedTitle, description, dynamicCanonicalUrl, ogType, twitterCard]);

	return (
		<>
			{/* Using key to force re-render of Helmet */}
			<Helmet key={metaKey} prioritizeSeoTags={true}>
				{/* Basic Meta Tags */}
				<title>{formattedTitle}</title>
				<meta name="description" content={description} />
				{keywords && <meta name="keywords" content={keywords} />}
				{noindex && <meta name="robots" content="noindex, nofollow" />}
				
				{/* Canonical Link Tag */}
				<link rel="canonical" href={dynamicCanonicalUrl} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content={ogType} />
				<meta property="og:url" content={dynamicCanonicalUrl} />
				<meta property="og:title" content={formattedTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={absoluteOgImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="EXACT AI" />
				
				{/* Additional Open Graph tags for better compatibility */}
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter */}
				<meta name="twitter:card" content={twitterCard} />
				<meta name="twitter:url" content={dynamicCanonicalUrl} />
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

				{schema && (
					<script type="application/ld+json">{JSON.stringify(schema)}</script>
				)}
			</Helmet>

			{/* Add a visible h1 for accessibility if provided */}
			{h1 && <h1 className="sr-only">{h1}</h1>}
		</>
	);
};

export default SEO;
