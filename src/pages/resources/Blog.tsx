
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts, categories } from './blogData';
import { OptimizedImage } from '@/components/ui/optimized-image';
import SEO from '@/components/SEO';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Define structured data for the blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "AI Blog | Latest Insights & Trends | EXACT AI",
    "description": "Stay updated with the latest trends, best practices, and insights in AI and data science through EXACT AI's expert blog posts and articles.",
    "publisher": {
      "@type": "Organization",
      "name": "EXACT AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.exct.com/media/exct-meta-preview.jpg"
      }
    },
    "blogPost": blogPosts.slice(0, 5).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image
    }))
  };

  // Filter posts based on selected category
  const filteredPosts = blogPosts.filter((post) => {
    return selectedCategory ? post.category === selectedCategory : true;
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Blog | Latest Insights & Trends | EXACT AI"
        description="Stay updated with the latest trends, best practices, and insights in AI and data science through EXACT AI's expert blog posts and articles."
        keywords="AI blog, artificial intelligence trends, AI insights, machine learning articles, data science blog"
        canonicalUrl="https://www.exct.com/resources/blog"
        schema={blogSchema}
        h1="AI Blog: Insights & Knowledge"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-tertiary" aria-labelledby="blog-title">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Insights & Knowledge
            </h1>
            <p className="text-xl text-white/80 mb-8 text-center">
              Stay updated with the latest trends, best practices, and insights in AI and data science.
            </p>
            
            {/* Category filter */}
            <div className="flex justify-center">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full max-w-xs"
                aria-label="Filter blog posts by category"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-white" aria-label="Blog posts">
        <div className="container-wide">
          <h2 className="sr-only">Featured AI and Technology Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="border border-gray-200 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      aspectRatio={16/9}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      priority={post.id <= 3} // Prioritize loading first 3 images
                    />
                  </div>
                  <div className="px-6 py-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="text-sm text-primary font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      <Link to={`/resources/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="w-4 h-4 mr-1" strokeWidth={1.5} aria-hidden="true" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" strokeWidth={1.5} aria-hidden="true" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link to={`/resources/blog/${post.id}`} className="text-primary font-medium flex items-center hover:underline mt-auto">
                      Read More <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try selecting a different category to see more articles.</p>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related resources section - for better internal linking */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-4">Explore how our AI solutions have transformed businesses across industries.</p>
              <Link to="/resources/case-studies" className="text-primary font-medium hover:underline">View Case Studies</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <p className="text-gray-600 mb-4">Discover our comprehensive range of AI and automation services.</p>
              <Link to="/services" className="text-primary font-medium hover:underline">Explore Services</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Industry Solutions</h3>
              <p className="text-gray-600 mb-4">Learn how our AI solutions address industry-specific challenges.</p>
              <Link to="/industries" className="text-primary font-medium hover:underline">View Industries</Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;
