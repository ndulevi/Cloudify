import { motion } from "motion/react";
import { TrendingUp, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const FeaturedCaseStudy = () => {
  const { isDark } = useTheme();
  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-gray-50"}`}>
      {/* Full section radiant grid background */}
      <div className={`absolute inset-0 bg-[size:40px_40px] pointer-events-none ${isDark ? "bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)]"}`} />
      
      {/* Global Glowing Bouncing Orbs */}
      <motion.div 
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        />
      <motion.div 
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`relative rounded-[3rem] overflow-hidden border ${isDark ? "border-white/10" : "border-gray-200 shadow-2xl"}`}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Cloudify SaaS growth case study graph showing revenue scaling" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute inset-x-8 bottom-8">
                {/* Embedded dynamic bouncing dashboards visually overlaying image */}
                <div className="flex gap-4 items-end">
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex-1 shadow-2xl shadow-black/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <div className="text-white/60 text-[10px] font-black uppercase tracking-widest">Revenue Growth</div>
                    </div>
                    <div className="text-blue-400 text-3xl font-black">+124%</div>
                    {/* Tiny animated graph */}
                    <div className="flex items-end gap-1 h-6 mt-3">
                      {[30, 50, 40, 70, 60, 90].map((h, i) => (
                        <motion.div 
                          key={i} 
                          animate={{ height: [`${h}%`, `${h+Math.random()*10}%`, `${h}%`] }} 
                          transition={{ duration: 2, repeat: Infinity }} 
                          className="w-full rounded-t-sm bg-gradient-to-t from-blue-600 to-blue-400" 
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex-1 shadow-2xl shadow-black/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                       <BarChart3 className="w-5 h-5 text-purple-400" />
                       <div className="text-white/60 text-[10px] font-black uppercase tracking-widest">Bounce Rate Drop</div>
                    </div>
                    <div className="text-purple-400 text-3xl font-black">-45%</div>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                       <span className="text-white/40 text-[10px]">PREV: 85%</span>
                       <span className="text-white font-black text-xs">NOW: 40%</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Decorative Vector Nodes */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -left-12 w-32 h-32 border border-dashed border-purple-500/30 rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"
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
              className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm ${isDark ? "bg-purple-500/10 border-purple-500/20" : "bg-purple-50 border-purple-100"}`}
            >
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em]">Featured Case Study</span>
            </motion.div>
            
            <h2 className={`text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Scaling <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">NexGen Tech</span> <br />
              to $10M ARR.
            </h2>
            
            <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              We completely overhauled NexGen's digital ecosystem, focusing on high-intent user flows and performance engineering. The result was a massive surge in qualified leads and a significantly reduced customer acquisition cost.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Full Platform Redesign",
                "Custom Analytics Integration",
                "Conversion Rate Optimization",
                "Performance Engineering"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${isDark ? "bg-purple-500/10 border-purple-500/30 text-purple-400" : "bg-purple-50 border-purple-200 text-purple-600"}`}>
                     <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item}</span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold px-8 py-4 rounded-xl transition-all border flex items-center gap-2 relative overflow-hidden group ${isDark ? "bg-white/5 text-white border-white/10" : "bg-gray-100 text-gray-900 border-gray-200"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Read Full Case Study</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
