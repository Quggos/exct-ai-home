
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

// Create preload links for critical resources with optimization for all devices
const preloadLinks = () => {
	// Preload the hero image as it's critical for both mobile and desktop
	const heroImage = document.createElement('link');
	heroImage.rel = 'preload';
	heroImage.href = '/media/hero-poster.jpg';
	heroImage.as = 'image';
	heroImage.type = 'image/jpeg';
	heroImage.setAttribute('media', 'all');
	document.head.appendChild(heroImage);

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

// Execute preload links
preloadLinks();

// Set up the Helmet context with proper SSR and hydration support
const helmetContext = {};

createRoot(document.getElementById('root')!).render(
	<HelmetProvider context={helmetContext}>
		<App />
	</HelmetProvider>
);
