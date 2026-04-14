import { motion } from "motion/react";
import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { AnimatedRotateButton } from "../ui/button-rotate-1";

import { HeroDashboard } from "../HeroDashboard";

export const Hero = () => {

  const { isDark } = useTheme();
  return (
    <section className={`relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-start px-6 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      {/* Background Glows matching the template style but keeping Cloudify colors */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
      />

      {/* Centered Content Layout matching the SAA-S template */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm ${isDark ? "bg-white/5 border-white/10" : "bg-gray-100 border-gray-200"}`}
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Premium Web Design Agency
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tighter text-center max-w-4xl ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Websites That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Actually Convert.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base md:text-xl mb-10 max-w-2xl text-center leading-relaxed font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          We build high-performance digital experiences that turn visitors into loyal customers. Beautiful design meets conversion science.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-20 relative z-20 flex-col sm:flex-row w-full sm:w-auto"
        >
          <AnimatedRotateButton isDark={isDark} className="w-full sm:w-auto">
            <span className="px-8 py-3.5 font-bold flex gap-2 items-center text-base tracking-wide h-[52px] text-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </AnimatedRotateButton>

          <button 
            className={`font-bold h-14 px-8 rounded-xl transition-all border backdrop-blur-sm text-base relative group w-full sm:w-auto ${isDark ? "bg-white/5 text-white border-white/10 hover:bg-white/10" : "bg-gray-100 text-gray-900 border-gray-200 hover:bg-gray-200"}`}
          >
            <span className="relative z-10 flex items-center justify-center h-full">View Our Work</span>
          </button>
        </motion.div>

        {/* Large Centered Dashboard Visual */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="w-full max-w-5xl relative pb-20 perspective-1000"
        >
          {/* Central Glow matching template's glows.png approach but using responsive CSS */}
          <div
            className="absolute left-1/2 w-[120%] pointer-events-none z-0 opacity-40 mix-blend-screen"
            style={{
              top: "-20%",
              transform: "translateX(-50%)"
            }}
            aria-hidden="true"
          >
             <div className="w-full aspect-[2/1] rounded-[100%] bg-blue-500 blur-[80px] md:blur-[120px]" />
          </div>
          
          <div className="relative z-10 w-full group">
            <div className={`relative w-full rounded-2xl overflow-hidden border shadow-2xl backdrop-blur-sm transition-transform duration-700 ease-out sm:-rotate-x-2 sm:group-hover:rotate-x-0 ${isDark ? "bg-[#050505]/80 border-white/10 shadow-blue-900/40" : "bg-white/80 border-gray-200 shadow-gray-300/50"}`} style={{ transformStyle: 'preserve-3d' }}>
               
               {/* Browser Window Chrome */}
               <div className={`w-full h-8 flex items-center px-4 gap-2 border-b ${isDark ? "border-white/10 bg-[#0A0A0B]" : "border-gray-200 bg-white"}`}>
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className={`mx-auto flex items-center justify-center h-5 px-6 rounded text-[10px] font-mono ${isDark ? "bg-white/10 text-gray-400" : "bg-slate-100 text-gray-600 shadow-sm"}`}>
                    app.cloudify.com/dashboard
                  </div>
                  <div className="w-10"></div> {/* Spacer for symmetry */}
               </div>

              {/* Real Interactive Techie Dashboard instead of an image */}
              <HeroDashboard />
              
              <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent pointer-events-none ${isDark ? "from-black/30" : "from-white/10"}`} />

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
