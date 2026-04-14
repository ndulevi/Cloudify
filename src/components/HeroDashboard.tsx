import React from "react";
import { motion } from "motion/react";
import { BarChart3, TrendingUp, Users, Activity, Zap, Server, Shield, Globe } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const HeroDashboard = () => {
  const { isDark } = useTheme();

  return (
    <div className={`w-full h-[500px] sm:h-[600px] flex flex-col md:flex-row overflow-hidden font-sans ${isDark ? "bg-[#0A0A0B] text-white" : "bg-white text-slate-800"}`}>
      {/* Sidebar */}
      <div className={`hidden md:flex flex-col w-64 border-r p-6 justify-between ${isDark ? "border-white/5 bg-white/[0.02]" : "border-slate-200 bg-slate-50/50"}`}>
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-4 h-4 text-white fill-current" />
            </div>
            <span className="font-bold text-lg tracking-tight">Cloudify OS</span>
          </div>

          <div className="space-y-2">
            {[
              { icon: <Activity className="w-4 h-4" />, label: "Overview", active: true },
              { icon: <BarChart3 className="w-4 h-4" />, label: "Analytics", active: false },
              { icon: <Users className="w-4 h-4" />, label: "Audience", active: false },
              { icon: <Server className="w-4 h-4" />, label: "Infrastructure", active: false },
              { icon: <Shield className="w-4 h-4" />, label: "Security", active: false },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-default ${
                  item.active 
                    ? (isDark ? "bg-white/10 text-white" : "bg-slate-200 text-slate-900") 
                    : (isDark ? "text-slate-400 hover:bg-white/5 hover:text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900")
                }`}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`px-4 py-4 rounded-xl border flex items-center gap-3 ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden p-[1px]">
              <div className={`w-full h-full rounded-full ${isDark ? "bg-[#0A0A0B]" : "bg-white"} flex items-center justify-center`}>
                 <Globe className="w-5 h-5 text-blue-500" />
              </div>
           </div>
           <div>
             <div className="text-xs font-bold">System Status</div>
             <div className="text-[10px] text-emerald-500 flex items-center gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> All systems operational
             </div>
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6 overflow-hidden relative">
         {/* Background Grid inside dashboard */}
         <div className={`absolute inset-0 bg-[size:30px_30px] pointer-events-none ${isDark ? "bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)]"}`} />
         
        {/* Top Header */}
        <div className="flex justify-between items-end relative z-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">Live Revenue Feed</h2>
            <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>Updated just now</p>
          </div>
          <div className="flex gap-2">
            {["24h", "7d", "30d", "All"].map((t, i) => (
               <div key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-default ${i === 2 ? (isDark ? "bg-white text-black" : "bg-slate-900 text-white") : (isDark ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500")}`}>
                 {t}
               </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {[
            { label: "Total Revenue", value: "$124,592.00", change: "+14.5%", up: true },
            { label: "Active Sessions", value: "8,234", change: "+24.1%", up: true },
            { label: "Conversion Rate", value: "12.8%", change: "+2.4%", up: true },
            { label: "Bounce Rate", value: "24.1%", change: "-4.2%", up: true }, 
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              key={i} 
              className={`p-5 rounded-2xl border backdrop-blur-md flex flex-col justify-between h-[130px] sm:h-[140px] ${isDark ? "bg-white/5 border-white/10" : "bg-white/90 border-slate-200 shadow-sm"}`}
            >
              <div>
                <div className={`text-xs font-semibold mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{stat.label}</div>
                <div className="text-xl sm:text-2xl font-black tracking-tighter">{stat.value}</div>
              </div>
              <div className={`text-[10px] sm:text-xs font-bold flex items-center gap-1 ${stat.up ? "text-emerald-500" : "text-rose-500"}`}>
                {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
                {stat.change} vs last period
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Chart Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`flex-1 mt-2 rounded-[2rem] border relative overflow-hidden flex flex-col p-6 backdrop-blur-md ${isDark ? "bg-white/[0.02] border-white/10" : "bg-white/50 border-slate-200 shadow-sm"}`}
        >
          {/* Chart Header */}
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-500" />
               </div>
               <div>
                 <div className="text-xl font-bold">Traffic & Conversions</div>
                 <div className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>Real-time visitor processing</div>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className={`text-xs font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`}>Visitors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className={`text-xs font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`}>Converts</span>
              </div>
            </div>
          </div>

          {/* SVG Animated Chart */}
          <div className="flex-1 relative w-full flex items-end">
             {/* Y-axis labels */}
             <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-500 font-mono py-4">
               <span>10k</span>
               <span>7.5k</span>
               <span>5k</span>
               <span>2.5k</span>
               <span>0</span>
             </div>
             
             {/* Chart grid lines */}
             <div className="absolute inset-0 ml-8 flex flex-col justify-between py-5 border-l border-b border-slate-500/20">
               {[0, 1, 2, 3].map(i => (
                 <div key={i} className="w-full border-b border-dashed border-slate-500/20 h-0" />
               ))}
               
               {/* Animated Graph Lines using pure SVG */}
               <svg className="absolute inset-x-0 bottom-0 w-full h-[80%] preserve-3d overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                     <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                   </linearGradient>
                   <linearGradient id="gradientPurple" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                     <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                   </linearGradient>
                   <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                   </linearGradient>
                   <filter id="glowBlue" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="8" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                   <filter id="glowPurple" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="8" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                 </defs>
                 
                 {/* Blue Area & Line (Traffic) */}
                 <motion.path 
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 1 }}
                   transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
                   d="M 0 160 L 40 150 L 80 155 L 120 130 L 160 145 L 200 110 L 240 100 L 280 80 L 320 85 L 360 40 L 400 60 L 440 20 L 480 30 L 500 10"
                   fill="none"
                   stroke="#3b82f6"
                   strokeWidth="2"
                   filter="url(#glowBlue)"
                   vectorEffect="non-scaling-stroke"
                 />
                 <motion.path 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 2, delay: 1 }}
                   d="M 0 160 L 40 150 L 80 155 L 120 130 L 160 145 L 200 110 L 240 100 L 280 80 L 320 85 L 360 40 L 400 60 L 440 20 L 480 30 L 500 10 L 500 200 L 0 200 Z"
                   fill="url(#gradientBlue)"
                 />

                 {/* Purple Area & Line (Conversions) */}
                 <motion.path 
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 1 }}
                   transition={{ duration: 2.5, ease: "easeOut", delay: 0.6 }}
                   d="M 0 180 L 40 170 L 80 165 L 120 180 L 160 150 L 200 160 L 240 140 L 280 155 L 320 120 L 360 110 L 400 90 L 440 100 L 480 70 L 500 50"
                   fill="none"
                   stroke="#a855f7"
                   strokeWidth="2"
                   filter="url(#glowPurple)"
                   vectorEffect="non-scaling-stroke"
                 />
                 <motion.path 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 2, delay: 1.5 }}
                   d="M 0 180 L 40 170 L 80 165 L 120 180 L 160 150 L 200 160 L 240 140 L 280 155 L 320 120 L 360 110 L 400 90 L 440 100 L 480 70 L 500 50 L 500 200 L 0 200 Z"
                   fill="url(#gradientPurple)"
                 />
                 
                 {/* Real Data Points Every Single Node */}
                 {[
                    {x:0,y:160},{x:40,y:150},{x:80,y:155},{x:120,y:130},{x:160,y:145},{x:200,y:110},{x:240,y:100},{x:280,y:80},{x:320,y:85},{x:360,y:40},{x:400,y:60},{x:440,y:20},{x:480,y:30},{x:500,y:10}
                 ].map((point, index) => (
                   <circle key={`blue-${index}`} cx={point.x} cy={point.y} r="2" fill="#3b82f6" opacity="0.8" />
                 ))}
                 {[
                    {x:0,y:180},{x:40,y:170},{x:80,y:165},{x:120,y:180},{x:160,y:150},{x:200,y:160},{x:240,y:140},{x:280,y:155},{x:320,y:120},{x:360,y:110},{x:400,y:90},{x:440,y:100},{x:480,y:70},{x:500,y:50}
                 ].map((point, index) => (
                   <circle key={`purple-${index}`} cx={point.x} cy={point.y} r="2" fill="#a855f7" opacity="0.8" />
                 ))}

                 {/* Interactive Tooltip Simulation */}
                 <motion.g 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: [0, 1, 1, 0], x: [100, 240, 360, 440] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
                 >
                    <line x1="0" y1="0" x2="0" y2="200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    {/* Simulated Hover Circles */}
                    <circle cx="0" cy="100" r="4" fill="#3b82f6" stroke={isDark ? "#0f172a" : "#fff"} strokeWidth="2" />
                    <circle cx="0" cy="140" r="4" fill="#a855f7" stroke={isDark ? "#0f172a" : "#fff"} strokeWidth="2" />
                    
                    {/* Tooltip Box */}
                    <rect x="-40" y="30" width="80" height="42" rx="4" fill={isDark ? "#1e293b" : "#fff"} fillOpacity="0.95" stroke={isDark ? "#334155" : "#e2e8f0"} strokeWidth="1" />
                    <text x="0" y="44" fill={isDark ? "#94a3b8" : "#64748b"} fontSize="8" fontWeight="bold" textAnchor="middle">Oct 24</text>
                    <text x="-30" y="55" fill="#3b82f6" fontSize="8" fontWeight="bold">8.4k</text>
                    <text x="10" y="55" fill="#a855f7" fontSize="8" fontWeight="bold">3.2%</text>
                 </motion.g>
               </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
