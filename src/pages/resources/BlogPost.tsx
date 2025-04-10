
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { blogPosts } from './blogData';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      const currentPost = blogPosts.find((post) => post.id === parseInt(id));
      if (currentPost) {
        setPost(currentPost);
        
        // Find related posts in the same category
        const related = blogPosts
          .filter((p) => p.category === currentPost.category && p.id !== currentPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen">
          <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-gray-700">Blog Post Not Found</h1>
          <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/resources/blog"
            className="inline-flex items-center mt-6 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate placeholder content if no content exists
  const content = post.content || `
    # ${post.title}

    ${post.excerpt}

    ## Understanding ${post.title.split(' ').slice(-1)[0]}

    In today's rapidly evolving technological landscape, organizations are constantly seeking ways to optimize operations, enhance decision-making processes, and gain a competitive edge. This is where AI solutions come into play, offering transformative capabilities that can revolutionize how businesses operate.

    ## Key Benefits

    1. **Efficiency Gains**: Streamline operations and reduce manual effort through automation
    2. **Data-Driven Insights**: Extract valuable patterns and trends from vast datasets
    3. **Enhanced Decision Making**: Support critical business decisions with AI-powered recommendations
    4. **Scalability**: Handle growing data volumes and complexity with ease
    5. **Competitive Advantage**: Stay ahead of the curve by leveraging cutting-edge AI capabilities

    ## Implementation Strategies

    When implementing AI solutions, it's crucial to take a strategic approach. This involves carefully assessing business needs, identifying appropriate use cases, and developing a roadmap for integration. Working with experienced partners can significantly streamline this process and ensure optimal results.
  `;

  const paragraphs = content.split('\n\n');
  
  // Create BlogPosting structured data
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.exct.com/resources/blog/${post.id}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "EXACT AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.exct.com/media/exct-meta-preview.jpg",
        "width": 1200,
        "height": 630
      }
    },
    "articleBody": paragraphs.join(' ')
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${post.title} | EXACT AI Blog`}
        description={post.excerpt}
        keywords={`${post.category}, AI, artificial intelligence, ${post.title.toLowerCase()}`}
        canonicalUrl={`https://www.exct.com/resources/blog/${post.id}`}
        ogImage={post.image}
        ogType="article"
        schema={blogPostSchema}
        h1={post.title}
      />
      
      <article className="pt-32 pb-20">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-tertiary">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <Link to="/resources" className="text-gray-500 hover:text-tertiary">Resources</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <Link to="/resources/blog" className="text-gray-500 hover:text-tertiary">Blog</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-gray-800 truncate" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
          
          {/* Title Section */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-md">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" strokeWidth={1.5} />
                5 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <div className="flex items-center mr-6">
                <User className="w-5 h-5 mr-2" strokeWidth={1.5} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" strokeWidth={1.5} />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage
              src={post.image}
              alt={post.title}
              aspectRatio={21/9}
              priority={true}
              className="w-full"
            />
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => {
                  // Check if paragraph is a heading
                  if (paragraph.startsWith('# ')) {
                    return <h2 key={index} className="text-3xl font-bold mt-8 mb-6">{paragraph.substring(2)}</h2>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.substring(4)}</h3>;
                  } else {
                    return <p key={index} className="mb-6 text-gray-700 leading-relaxed">{paragraph}</p>;
                  }
                })}
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <h3 className="sr-only">Article Tags</h3>
                  {[post.category, ...['AI Development', 'Machine Learning', 'Data Science'].filter(c => c !== post.category).slice(0, 2)].map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/resources/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Post navigation */}
              <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Post navigation">
                <div className="flex justify-between">
                  {post.id > 1 && (
                    <Link 
                      to={`/resources/blog/${post.id - 1}`} 
                      className="inline-flex items-center text-tertiary hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
                      Previous Post
                    </Link>
                  )}
                  <div className="flex-1"></div>
                  <Link to="/resources/blog" className="text-tertiary hover:underline">
                    Back to All Posts
                  </Link>
                  <div className="flex-1"></div>
                  {post.id < blogPosts.length && (
                    <Link 
                      to={`/resources/blog/${post.id + 1}`} 
                      className="inline-flex items-center text-tertiary hover:underline"
                    >
                      Next Post
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" strokeWidth={1.5} />
                    </Link>
                  )}
                </div>
              </nav>
            </div>
            
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-medium mb-4">About the Author</h3>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                      <OptimizedImage
                        src={`https://randomuser.me/api/portraits/${post.author.includes('Sarah') || post.author.includes('Emily') || post.author.includes('Lisa') ? 'women' : 'men'}/${(post.id * 3) % 70}.jpg`}
                        alt={`${post.author} - AI Research Specialist at EXACT AI`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{post.author}</h4>
                      <p className="text-sm text-gray-600">AI Research Specialist</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-medium mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {[post.category, ...['AI Ethics', 'Machine Learning', 'Data Science'].filter(c => c !== post.category).slice(0, 4)].map((cat, index) => (
                      <Link 
                        key={index} 
                        to={`/resources/blog?category=${encodeURIComponent(cat)}`}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {relatedPosts.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link key={related.id} to={`/resources/blog/${related.id}`} className="group block">
                          <div className="flex gap-3">
                            <div className="w-24 h-16 rounded overflow-hidden">
                              <OptimizedImage
                                src={related.image}
                                alt={related.title}
                                className="w-full h-full object-cover"
                                width={96} // Specify dimensions for better CLS
                                height={64}
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="text-sm text-gray-500">{related.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default BlogPost;
