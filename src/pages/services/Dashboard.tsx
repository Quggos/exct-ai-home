import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import ServiceHero from '../../components/ServiceHero';
import { Link } from 'react-router-dom';
import { BarChart4, LineChart, Activity, Layers, Database, Workflow, Target } from 'lucide-react';

const Dashboard = () => {
  const heroRightContent = (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-start gap-6 mb-8">
          <div className="bg-primary/10 p-4 rounded-lg">
            <BarChart4 className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Visualizations</h3>
            <p className="text-gray-600">
              Create dynamic, interactive charts and graphs that make complex data easily understandable.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-6 mb-8">
          <div className="bg-primary/10 p-4 rounded-lg">
            <Activity className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
            <p className="text-gray-600">
              Track key metrics in real-time with live updates and automated alerts for critical changes.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-6">
          <div className="bg-primary/10 p-4 rounded-lg">
            <Layers className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-source Integration</h3>
            <p className="text-gray-600">
              Seamlessly integrate data from multiple sources into a unified, comprehensive dashboard view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      
      <ServiceHero
        badge="Data Visualization"
        title="Dashboard Development"
        description="Transform your data into actionable insights with custom dashboards designed to meet your specific business needs."
        primaryCTA={{
          text: "Request Consultation",
          link: "/contact"
        }}
        secondaryCTA={{
          text: "View Case Studies",
          link: "/resources/case-studies"
        }}
        rightContent={heroRightContent}
      />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
                Data Visualization
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Unlock the Power of Your Data</h2>
              <p className="text-gray-600 mb-6">
                Our dashboard development services transform complex data into clear, interactive visualizations that help you make informed decisions quickly. We create custom solutions that integrate with your existing systems and provide real-time insights.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need executive dashboards, operational metrics, or customer analytics, our team creates intuitive interfaces that highlight what matters most to your business.
              </p>
              <div className="bg-gray-50 border-l-4 border-tertiary p-4 mb-6">
                <p className="text-gray-700">
                  "The dashboard EXACT AI created for us has transformed how we make decisions. We can now see trends and respond to issues in real-time."
                </p>
                <p className="text-sm text-gray-500 mt-2">— Financial Services Client</p>
              </div>
            </div>
            <div className="bg-tertiary/5 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <BarChart4 className="text-tertiary mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-2">Data Visualization</h3>
                    <p className="text-sm text-gray-600">Interactive charts and graphs that make complex data understandable</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <LineChart className="text-tertiary mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-2">Trend Analysis</h3>
                    <p className="text-sm text-gray-600">Identify patterns and forecast future trends</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <Activity className="text-tertiary mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-2">Real-time Monitoring</h3>
                    <p className="text-sm text-gray-600">Live updates to keep you informed at all times</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <Layers className="text-tertiary mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-2">Multi-source Integration</h3>
                    <p className="text-sm text-gray-600">Connect all your data systems in one place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">How We Build Your Dashboard</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our methodical approach ensures we create dashboards that meet your specific needs and provide lasting value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-tertiary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Database className="text-tertiary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Data Assessment</h3>
              <p className="text-gray-600">
                We begin by understanding your data sources, quality, and structure to identify the best visualization approach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-tertiary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Workflow className="text-tertiary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Dashboard Design</h3>
              <p className="text-gray-600">
                We create wireframes and prototypes, focusing on user experience and ensuring the most important insights are highlighted.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-tertiary/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Target className="text-tertiary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Implementation & Training</h3>
              <p className="text-gray-600">
                We develop the dashboard, integrate it with your systems, and provide comprehensive training to ensure adoption.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 text-sm font-medium mb-4">
              Technologies
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Dashboard Technologies We Use</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We leverage the best tools to create powerful, customized dashboards for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {['Tableau', 'Power BI', 'D3.js', 'Grafana', 'Looker', 'Custom React'].map((tech, index) => (
              <div key={index} className="p-6 border border-gray-100 rounded-lg text-center hover:border-tertiary hover:shadow-sm transition-all">
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Dashboard;
