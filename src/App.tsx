
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Header from "./components/Header";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Blog from "./pages/resources/Blog";
import BlogPost from "./pages/resources/BlogPost";
import CaseStudies from "./pages/resources/CaseStudies";
import CaseStudyDetail from "./pages/resources/CaseStudyDetail";
import Expertise from "./pages/resources/Expertise";
import Testimonials from "./pages/resources/Testimonials";
import FAQ from "./pages/resources/FAQ";
import FreeConsultation from "./pages/FreeConsultation";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Main Pages
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";

// Service Pages
import GenerativeAI from "./pages/services/GenerativeAI";
import AIDevelopment from "./pages/services/AIDevelopment";
import AIConsulting from "./pages/services/AIConsulting";
import WorkflowAutomation from "./pages/services/WorkflowAutomation";
import FullStack from "./pages/services/FullStack";
import UXDesign from "./pages/services/UXDesign";
import Dashboard from "./pages/services/Dashboard";
import LeadGeneration from "./pages/services/LeadGeneration";

// Industry Pages
import Ecommerce from "./pages/industries/Ecommerce";
import Finance from "./pages/industries/Finance";
import Healthcare from "./pages/industries/Healthcare";
import Government from "./pages/industries/Government";
import Nonprofit from "./pages/industries/Nonprofit";
import RealEstate from "./pages/industries/RealEstate";
import Private from "./pages/industries/Private";
import Space from "./pages/industries/Space";
import Technology from "./pages/industries/Technology";
import Transportation from "./pages/industries/Transportation";
import AIML from "./pages/industries/AIML";
import Travel from "./pages/industries/Travel";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/free-automation-consultation" element={<PageTransition><FreeConsultation /></PageTransition>} />
        
        {/* Main Sections */}
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        
        {/* Resource Routes */}
        <Route path="/resources/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/resources/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/resources/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/resources/case-studies/:id" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
        <Route path="/resources/expertise" element={<PageTransition><Expertise /></PageTransition>} />
        <Route path="/resources/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/resources/faq" element={<PageTransition><FAQ /></PageTransition>} />
        
        {/* Service Routes */}
        <Route path="/services/generative-ai" element={<PageTransition><GenerativeAI /></PageTransition>} />
        <Route path="/services/ai-development" element={<PageTransition><AIDevelopment /></PageTransition>} />
        <Route path="/services/ai-consulting" element={<PageTransition><AIConsulting /></PageTransition>} />
        <Route path="/services/workflow-automation" element={<PageTransition><WorkflowAutomation /></PageTransition>} />
        <Route path="/services/full-stack" element={<PageTransition><FullStack /></PageTransition>} />
        <Route path="/services/ux-design" element={<PageTransition><UXDesign /></PageTransition>} />
        <Route path="/services/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
        <Route path="/services/lead-generation" element={<PageTransition><LeadGeneration /></PageTransition>} />
        
        {/* Industry Routes */}
        <Route path="/industries/ecommerce" element={<PageTransition><Ecommerce /></PageTransition>} />
        <Route path="/industries/finance" element={<PageTransition><Finance /></PageTransition>} />
        <Route path="/industries/healthcare" element={<PageTransition><Healthcare /></PageTransition>} />
        <Route path="/industries/government" element={<PageTransition><Government /></PageTransition>} />
        <Route path="/industries/nonprofit" element={<PageTransition><Nonprofit /></PageTransition>} />
        <Route path="/industries/realestate" element={<PageTransition><RealEstate /></PageTransition>} />
        <Route path="/industries/private" element={<PageTransition><Private /></PageTransition>} />
        <Route path="/industries/space" element={<PageTransition><Space /></PageTransition>} />
        <Route path="/industries/technology" element={<PageTransition><Technology /></PageTransition>} />
        <Route path="/industries/transportation" element={<PageTransition><Transportation /></PageTransition>} />
        <Route path="/industries/ai-ml" element={<PageTransition><AIML /></PageTransition>} />
        <Route path="/industries/travel" element={<PageTransition><Travel /></PageTransition>} />
        
        {/* 404 route - must be last */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative">
          <Header />
          <div className="relative">
            <AnimatedRoutes />
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
