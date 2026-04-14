import { motion } from "motion/react";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { AnimatedRotateButton } from "../ui/button-rotate-1";

export const CTA = () => {
  const { isDark } = useTheme();
  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`relative rounded-[3rem] overflow-hidden border p-12 md:p-24 text-center shadow-2xl ${isDark ? "bg-black border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.15)]" : "bg-white border-blue-100 shadow-blue-500/10"}`}>
          
          {/* Intense Core Grid Background inside card */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPmNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          
          {/* Animated Glowing Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${isDark ? "bg-blue-600/30" : "bg-blue-400/20"}`} 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${isDark ? "bg-purple-600/30" : "bg-purple-400/20"}`} 
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 border rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-xl ${isDark ? "bg-white/5 border-white/10" : "bg-white border-blue-100"}`}
            >
              <Zap className="w-4 h-4 text-blue-500 fill-current animate-pulse" />
              <span className={`text-[11px] font-black text-blue-500 uppercase tracking-[0.3em]`}>Initialize Launch</span>
            </motion.div>
            
            <h2 className={`text-5xl md:text-7xl font-bold mb-8 tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}>
              Ready to turn visitors <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">into buyers?</span>
            </h2>
            <p className={`text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Join 500+ businesses that have scaled their revenue with our conversion-optimized digital products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedRotateButton isDark={isDark} className="w-full sm:w-auto">
                <span className="px-10 py-5 font-bold flex gap-3 items-center text-lg tracking-wide flex-1 text-center justify-center">
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </AnimatedRotateButton>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-bold px-10 py-4 h-[72px] rounded-2xl text-lg transition-all border backdrop-blur-md flex items-center justify-center ${isDark ? "bg-white/10 text-white border-white/20 hover:bg-white/20" : "bg-white/80 text-gray-900 border-gray-200 hover:bg-gray-50 shadow-lg"}`}
              >
                View Our Portfolio
              </motion.button>
            </div>
            
            {/* Trusted indicators */}
            <div className={`mt-16 pt-8 border-t flex flex-wrap justify-center gap-8 items-center text-sm font-bold uppercase tracking-widest ${isDark ? "border-white/10 text-gray-500" : "border-gray-200 text-gray-400"}`}>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Commitments</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Free Audit Included</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> 10-Minute Call</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
