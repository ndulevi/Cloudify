import { ArrowRight } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";

import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { FeaturedCaseStudy } from "./components/sections/FeaturedCaseStudy";
import { Stats } from "./components/sections/Stats";
import { PartnerTestimonials } from "./components/sections/PartnerTestimonials";
import { Testimonials } from "./components/sections/Testimonials";
import { Pricing } from "./components/sections/Pricing";
import { FAQ } from "./components/sections/FAQ";
import { Resources } from "./components/sections/Resources";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

function AppContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <Process />
        <FeaturedCaseStudy />
        <Stats />
        <PartnerTestimonials />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Resources />
        <CTA />
      </main>
      <Footer />
      
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-2">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
