import { motion } from "motion/react";
import { Sparkles, MousePointer2, CheckCircle2, Quote, Layout, Settings, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const Services = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"}`} id="services">
      {/* Dynamic Background Glowing Orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -left-[10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 -right-[10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" 
      />
      <div className={`absolute inset-0 bg-[size:40px_40px] pointer-events-none ${isDark ? "bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)]"}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center justify-center gap-2 border rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm ${isDark ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-100"}`}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-7xl font-bold leading-tight tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Services That <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Drive Growth.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-md text-lg md:text-xl leading-relaxed font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            We combine high-conversion psychological design with elite digital engineering.
          </motion.p>
        </div>

        {/* BENTO GRID ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px]">
          
          {/* Card 1: Conversion Design (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 md:col-span-2 ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-[-10px_-10px_30px_rgba(255,255,255,0.02)]" : "bg-white border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-full p-10 flex flex-col justify-between z-10 w-full lg:w-[60%]">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-8 group-hover:scale-110 transition-transform">
                  <MousePointer2 className="w-6 h-6" />
                </div>
                <h3 className={`text-3xl font-bold mb-4 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>Conversion-First Design</h3>
                <p className={`text-base font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  We strategically place every element to guide visitors toward action using proven psychological triggers.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap mt-8">
                {["A/B Testing", "Heatmaps", "UI/UX"].map((tag) => (
                  <span key={tag} className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border ${isDark ? "bg-black/30 border-white/10 text-gray-300 group-hover:border-blue-500/30" : "bg-gray-100 border-transparent text-gray-600"}`}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Bouncing Abstract Flow Vector */}
            <div className="absolute right-[-10%] top-[20%] w-[50%] h-[120%] pointer-events-none hidden lg:block perspective-1000">
              <motion.div 
                animate={{ y: [-15, 15, -15], rotateY: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={`w-full h-full rounded-[2rem] border-l border-t flex flex-col p-6 gap-4 transform rotate-[-5deg] backdrop-blur-md shadow-2xl ${isDark ? "bg-white/[0.03] border-white/20 shadow-blue-900/20" : "bg-white border-gray-200 shadow-gray-300/50"}`}
              >
                <div className={`w-full h-1/2 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-blue-500/20 flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-blue-500/40 blur-xl animate-pulse" />
                </div>
                <div className="flex gap-4">
                  <div className={`h-8 w-1/3 rounded-lg ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
                  <div className={`h-8 w-1/2 rounded-lg ${isDark ? "bg-blue-500/20" : "bg-blue-100"}`} />
                </div>
                <div className={`h-24 w-full rounded-xl flex items-end gap-2 p-3 ${isDark ? "bg-white/5" : "bg-gray-50"}`}>
                   {[40, 70, 45, 90, 60].map((h, i) => (
                     <motion.div key={i} animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }} transition={{ duration: 2+i, repeat: Infinity }} className={`w-full rounded-t-sm bg-gradient-to-t from-blue-600 to-cyan-400`} />
                   ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Strategic Copywriting (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`group relative overflow-hidden rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" : "bg-white border-gray-200 hover:shadow-xl hover:shadow-gray-200/50"}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
               <Quote className="w-32 h-32" />
            </div>
            <div className="relative h-full p-10 flex flex-col z-10 w-full">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-8 group-hover:rotate-[10deg] transition-transform">
                <Quote className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Strategic Copywriting</h3>
              <p className={`text-sm font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Words that sell. We craft compelling copy that resonates with pain points and drives action.
              </p>
              
              <div className={`mt-auto w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-20 group-hover:opacity-100 rounded-full transition-opacity`} />
            </div>
          </motion.div>

          {/* Card 3: Mobile Experience (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`group relative overflow-hidden rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 ${isDark ? "bg-white/5 border-white/10 hover:bg-emerald-500/5 hover:border-emerald-500/30" : "bg-white border-gray-200 hover:shadow-xl hover:shadow-gray-200/50"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-full p-10 flex flex-col z-10 w-full">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-8 group-hover:-translate-y-2 transition-transform">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Mobile-First</h3>
              <p className={`text-sm font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Providing flawless, highly-optimized mobile experiences mimicking native applications.
              </p>
              
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity"
              >
                 <Settings className={`w-40 h-40 ${isDark ? "text-white" : "text-gray-900"}`} />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4: Performance Engineering (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`group relative overflow-hidden rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 md:col-span-1 lg:col-span-2 ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-[-10px_-10px_30px_rgba(255,255,255,0.02)]" : "bg-white border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50"}`}
          >
             <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Abstract Tech Graphic inside the card */}
            <div className="absolute -top-[20%] -right-[5%] w-[60%] h-[150%] pointer-events-none hidden lg:block opacity-50 group-hover:opacity-100 transition-opacity duration-1000">
               <motion.div 
                 animate={{ y: [20, -20, 20] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                 className="w-full h-full"
               >
                 <div className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-purple-500/30 flex items-center justify-center backdrop-blur-md`}>
                    <div className="w-20 h-20 rounded-full border border-dashed border-purple-400/50 animate-[spin_10s_linear_infinite]" />
                 </div>
                 <div className={`absolute top-2/4 right-1/4 w-24 h-24 rounded-[2rem] border border-pink-500/30 flex items-center justify-center backdrop-blur-md transform rotate-12`}>
                   <Zap className="w-8 h-8 text-pink-400" />
                 </div>
                 {/* Connection Lines */}
                 <svg className="absolute inset-0 w-full h-full">
                    <line x1="30%" y1="35%" x2="60%" y2="55%" stroke="var(--tw-colors-purple-500)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                 </svg>
               </motion.div>
            </div>

            <div className="relative h-full p-10 flex flex-col justify-between z-10 w-full lg:w-[60%]">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className={`text-3xl font-bold mb-4 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>Performance Engineering</h3>
                <p className={`text-base font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Speed is a feature. We build insanely fast architectures pushing edge delivery and asset optimization.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap mt-8">
                 <div className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest border px-4 py-2 rounded-xl font-bold ${isDark ? "bg-purple-500/10 text-purple-400 border-purple-500/20" : "bg-purple-50 text-purple-600 border-purple-100"}`}>
                   <CheckCircle2 className="w-4 h-4" /> 0.4s LCP
                 </div>
                 <div className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest border px-4 py-2 rounded-xl font-bold ${isDark ? "bg-white/5 text-gray-400 border-white/10" : "bg-gray-100 text-gray-600 border-gray-200"}`}>
                   Core Web Vitals
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
