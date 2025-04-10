import React from 'react';

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description
}) => {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="container-wide">
        <div className="max-w-3xl">
          <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
            {badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-tertiary mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero; 