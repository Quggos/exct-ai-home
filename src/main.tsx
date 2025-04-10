
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

// Create preload links for critical resources with optimization for all devices
const preloadLinks = () => {
	// Add home page meta tags directly to ensure they're available to crawlers
	const initialMetaTags = [
		{ name: 'description', content: 'EXACT AI offers enterprise AI solutions: generative AI, development, consulting, and workflow automation for businesses.' },
		{ property: 'og:title', content: 'EXACT AI - Enterprise AI Solutions & Automation Services' },
		{ property: 'og:description', content: 'EXACT AI offers enterprise AI solutions: generative AI, development, consulting, and workflow automation for businesses.' },
		{ property: 'og:image', content: 'https://www.exct.com/media/exct-meta-preview.jpg' },
		{ property: 'og:url', content: 'https://www.exct.com' },
		{ property: 'og:type', content: 'website' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: 'EXACT AI - Enterprise AI Solutions & Automation Services' },
		{ name: 'twitter:description', content: 'EXACT AI offers enterprise AI solutions: generative AI, development, consulting, and workflow automation for businesses.' },
		{ name: 'twitter:image', content: 'https://www.exct.com/media/exct-meta-preview.jpg' }
	];
	
	// Add initial meta tags to ensure they're present before React mounts
	initialMetaTags.forEach(tag => {
		// Check if the tag already exists
		const selector = tag.name 
			? `meta[name="${tag.name}"]` 
			: `meta[property="${tag.property}"]`;
		const existingTag = document.querySelector(selector);
		
		if (!existingTag) {
			const metaTag = document.createElement('meta');
			if (tag.name) metaTag.setAttribute('name', tag.name);
			if (tag.property) metaTag.setAttribute('property', tag.property);
			metaTag.setAttribute('content', tag.content);
			document.head.appendChild(metaTag);
		}
	});

	// Preload the hero image as it's critical for both mobile and desktop
	const heroImage = document.createElement('link');
	heroImage.rel = 'preload';
	heroImage.href = '/media/hero-poster.jpg';
	heroImage.as = 'image';
	heroImage.type = 'image/jpeg';
	heroImage.setAttribute('media', 'all');
	document.head.appendChild(heroImage);

	// Preload OG image for social media crawlers
	const ogImage = document.createElement('link');
	ogImage.rel = 'preload';
	ogImage.href = '/media/exct-meta-preview.jpg';
	ogImage.as = 'image';
	ogImage.type = 'image/jpeg';
	document.head.appendChild(ogImage);

	// Preload video for desktop devices only (skip for mobile)
	if (window.innerWidth > 768) {
		const heroVideo = document.createElement('link');
		heroVideo.rel = 'preload';
		heroVideo.href = '/media/hero-bg-optimized.mp4';
		heroVideo.as = 'video';
		document.head.appendChild(heroVideo);
	}

	// Preload critical fonts
	const fontPreload = document.createElement('link');
	fontPreload.rel = 'preload';
	fontPreload.href =
		'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap';
	fontPreload.as = 'style';
	document.head.appendChild(fontPreload);
};

// Run preload links on startup
preloadLinks();

// Set up the Helmet context with proper SSR and hydration support
const helmetContext = {};

createRoot(document.getElementById('root')!).render(
	<HelmetProvider context={helmetContext}>
		<App />
	</HelmetProvider>
);
