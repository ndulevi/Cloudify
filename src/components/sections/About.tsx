import { motion } from "motion/react";
import { Users, ArrowRight } from "lucide-react";
import AboutVisual from "../AboutVisual";
import { useTheme } from "../../context/ThemeContext";

export const About = () => {
  const { isDark } = useTheme();
  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-slate-900" : "bg-slate-50"}`} id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square flex items-center justify-center"
          >
            {/* The Neural Core Visual */}
            <div className={`relative w-full h-full rounded-[3rem] border overflow-hidden flex items-center justify-center backdrop-blur-3xl ${isDark ? "bg-black/40 border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.1)]" : "bg-white/40 border-gray-200 shadow-2xl"}`}>
              
              <AboutVisual isDark={isDark} />
            </div>
            
            {/* Dynamic Background Atmosphere */}
            <motion.div 
              animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }} 
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10" 
            />
            <motion.div 
              animate={{ x: [20, -20, 20], y: [10, -10, 10] }} 
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm ${isDark ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-100"}`}
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Our Identity</span>
            </motion.div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              We Build Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Masterpieces.</span>
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Cloudify is more than just a web agency. We are a team of conversion engineers, design visionaries, and performance specialists dedicated to scaling your brand.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-3xl font-black text-blue-500 mb-2">10+</div>
                <div className={`text-sm font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-gray-400"}`}>Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-500 mb-2">250+</div>
                <div className={`text-sm font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-gray-400"}`}>Happy Clients</div>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold px-8 py-4 rounded-xl transition-all border flex items-center gap-2 relative overflow-hidden group ${isDark ? "bg-white/5 text-white border-white/10" : "bg-gray-100 text-gray-900 border-gray-200"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Learn More About Us</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
