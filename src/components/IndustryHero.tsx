import React from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from './ui/optimized-image';

interface IndustryHeroProps {
	title: string;
	description: string;
	backgroundImage: string;
	primaryCTA?: {
		text: string;
		link: string;
	};
	secondaryCTA?: {
		text: string;
		link: string;
	};
}

const IndustryHero: React.FC<IndustryHeroProps> = ({
	title,
	description,
	backgroundImage,
	primaryCTA = {
		text: 'Get Started',
		link: '/contact',
	},
	secondaryCTA = {
		text: 'View Case Studies',
		link: '/resources/case-studies',
	},
}) => {
	return (
		<div className="relative min-h-[500px] flex items-center">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0 w-full h-full">
				<OptimizedImage
					src={backgroundImage}
					alt={title}
					className="object-cover"
					fill
					priority
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-tertiary/80" />{' '}
				{/* Reduced opacity overlay */}
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
				<div className="max-w-3xl">
					<div className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
						{title}
					</div>
					<p className="text-lg text-white/90 mb-8">{description}</p>
					<div className="flex flex-wrap gap-4">
						<Link
							to={primaryCTA.link}
							className="bg-white text-tertiary hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-all"
						>
							{primaryCTA.text}
						</Link>
						<Link
							to={secondaryCTA.link}
							className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-all"
						>
							{secondaryCTA.text}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndustryHero;
