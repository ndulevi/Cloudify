import { motion } from "motion/react";
import { Cpu, Activity, BarChart3, Code2, MousePointer2, Zap, Layers, Server } from "lucide-react";

export default function AboutVisual({ isDark }: { isDark: boolean }) {
  return (
    <div className={`relative w-full h-full min-h-[550px] rounded-[3rem] border-2 overflow-hidden p-6 md:p-8 backdrop-blur-3xl ${isDark ? "bg-[#0A0A0F] border-white/20 shadow-[0_0_150px_rgba(59,130,246,0.3)]" : "bg-white border-gray-300 shadow-2xl"}`}>
      
      {/* Background Ambience - Increased Opacity and Contrast */}
      <div className={`absolute inset-0 opacity-10 ${isDark ? "bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)]"} bg-[size:20px_20px]`} />
      
      {/* Container for the 4 Modular Quadrants */}
      <div className="relative w-full h-full grid grid-cols-2 grid-rows-2 gap-4 md:gap-6">
        
        {/* Quadrant 1: Discovery & Strategy (AI Core) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-[2rem] p-5 md:p-6 border-2 overflow-hidden flex flex-col justify-between ${isDark ? "bg-white/10 border-white/20 shadow-inner" : "bg-gray-50 border-gray-300 shadow-md"}`}
        >
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-2xl ${isDark ? "bg-blue-500/30 text-blue-300" : "bg-blue-100 text-blue-700"}`}>
              <Cpu className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className={`hidden sm:block text-xs font-black uppercase tracking-widest ${isDark ? "text-gray-400" : "text-gray-500"}`}>Strategy</div>
          </div>
          
          <div className="relative w-full h-32 mt-4 flex items-center justify-center">
             {/* Spinning AI Core representing strategy crunching */}
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-28 h-28 rounded-full border-[3px] border-dashed border-blue-400/60" />
             <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-20 h-20 rounded-full border-2 border-dotted border-purple-400/80" />
             <div className="absolute w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_35px_rgba(59,130,246,1)] animate-ping opacity-60" />
             <div className="absolute w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]" />
          </div>
          <div className={`mt-4 text-xs md:text-sm font-mono font-bold ${isDark ? "text-blue-300" : "text-blue-700"}`}>Analyzing Data...</div>
        </motion.div>

        {/* Quadrant 2: Conversion Design (UI/UX) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`relative rounded-[2rem] p-5 md:p-6 border-2 flex flex-col justify-between overflow-hidden ${isDark ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-400/30" : "bg-gradient-to-br from-indigo-100 to-purple-100 border-indigo-300"}`}
        >
          <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-2xl ${isDark ? "bg-purple-500/30 text-purple-300" : "bg-purple-200 text-purple-700"}`}>
              <Layers className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className={`hidden sm:block text-xs font-black uppercase tracking-widest ${isDark ? "text-purple-400" : "text-purple-600"}`}>UI / UX</div>
          </div>
          
          {/* Wireframe Mockup Blocks */}
          <div className="space-y-4 relative w-full mt-auto">
            <motion.div animate={{ width: ["60%", "80%", "60%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className={`h-4 rounded-full ${isDark ? "bg-white/30" : "bg-black/20"}`} />
            <motion.div animate={{ width: ["90%", "70%", "90%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className={`h-6 rounded-lg ${isDark ? "bg-purple-400/60" : "bg-purple-500/40"}`} />
            <div className="flex gap-3">
               <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }} className={`flex-1 h-10 rounded-lg ${isDark ? "bg-white/20" : "bg-black/10"}`} />
               <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className={`flex-1 h-10 rounded-lg ${isDark ? "bg-blue-400/60" : "bg-blue-500/40"}`} />
            </div>
          </div>
        </motion.div>

        {/* Quadrant 3: Agile Development (Code Environment) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`relative rounded-[2rem] p-5 md:p-6 border-2 flex flex-col overflow-hidden ${isDark ? "bg-[#111111] border-white/20" : "bg-[#222222] border-gray-900"}`}
        >
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
          </div>
          
          <div className="font-mono text-[11px] md:text-sm leading-loose whitespace-pre mt-auto">
            <span className="text-pink-400 font-bold">const</span> <span className="text-blue-400 font-bold">deploy</span> = <span className="text-yellow-300 font-bold">async</span> () {"=>"} {"{"}<br/>
            &nbsp;&nbsp;<span className="text-pink-400 font-bold">await</span> <span className="text-blue-400 font-bold">optimizeCode</span>();<br/>
            &nbsp;&nbsp;<span className="text-pink-400 font-bold">return</span> <span className="text-green-400 font-bold">"Deployed🚀"</span>;<br/>
            {"}"};<br/>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-3 h-5 mt-2 inline-block bg-white" 
            />
          </div>
        </motion.div>

        {/* Quadrant 4: Launch & Optimize (Analytics Dash) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`relative rounded-[2rem] p-5 md:p-6 border-2 flex flex-col justify-between overflow-hidden ${isDark ? "bg-white/10 border-white/20 shadow-lg" : "bg-white border-gray-300 shadow-md"}`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className={`text-xs font-black uppercase tracking-widest ${isDark ? "text-gray-400" : "text-gray-500"}`}>Growth</div>
              <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg mt-1">+84.2k</div>
            </div>
            <div className={`p-3 rounded-2xl hidden sm:block ${isDark ? "bg-emerald-500/30 text-emerald-300" : "bg-emerald-100 text-emerald-700"}`}>
              <BarChart3 className="w-10 h-10" />
            </div>
          </div>
          
          {/* Animated Bar Chart */}
          <div className="flex items-end justify-between h-20 md:h-28 gap-2 w-full mt-auto">
            {[20, 35, 25, 50, 45, 75, 60, 95].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), type: "spring", bounce: 0.4 }}
                className={`w-full rounded-t-md ${i === 7 ? "bg-gradient-to-t from-emerald-400 to-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.8)]" : (isDark ? "bg-white/20 hover:bg-white/40" : "bg-gray-300 hover:bg-gray-400")} transition-colors cursor-pointer`}
              />
            ))}
          </div>
        </motion.div>
        
      </div>

      {/* Floating Center Overlay Badge (Connection Engine) */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 md:p-6 backdrop-blur-2xl border-2 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.8)] ${isDark ? "bg-blue-600/30 border-blue-400/50 text-blue-200" : "bg-blue-100/90 border-blue-300 text-blue-700"}`}
      >
        <Zap className="w-10 h-10 md:w-14 md:h-14 fill-current drop-shadow-[0_0_15px_rgba(59,130,246,1)]" />
      </motion.div>

      {/* Interactive Cursor Simulation */}
      <motion.div
        animate={{ 
          x: [60, -120, 100, 60], 
          y: [60, 80, -100, 60] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-40 pointer-events-none drop-shadow-2xl"
      >
        <MousePointer2 className="w-12 h-12 text-white fill-black" />
        <motion.div 
          animate={{ scale: [1, 3], opacity: [0.9, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          className="absolute top-2 left-2 w-6 h-6 rounded-full border-[4px] border-white" 
        />
      </motion.div>

    </div>
  );
}
