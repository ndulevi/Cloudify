import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

export const SocialProof = () => {
  const { isDark } = useTheme();
  const logos = [
    "Capital", "HubSpot", "shopify", "Venture", "slack", "anthemis", "okta",
    "montagu", "RADMOR", "webflow", "CRAFT", "NEXT.js", "MAC", "workday"
  ];

  // Double the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className={`py-24 border-y overflow-hidden relative ${isDark ? "bg-black border-white/5" : "bg-gray-50 border-gray-200"}`}>
      {/* Background Glowing Orb */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" 
      />
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500"
        >
          Trusted by Industry Leaders & Tech Giants
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Fades for edges */}
        <div className={`absolute inset-y-0 left-0 w-40 z-10 ${isDark ? "bg-gradient-to-r from-black to-transparent" : "bg-gradient-to-r from-gray-50 to-transparent"}`} />
        <div className={`absolute inset-y-0 right-0 w-40 z-10 ${isDark ? "bg-gradient-to-l from-black to-transparent" : "bg-gradient-to-l from-gray-50 to-transparent"}`} />

        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo}-${index}`} 
              className="flex items-center gap-3 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className={`transition-colors font-black text-3xl md:text-5xl tracking-tighter uppercase italic ${isDark ? "text-white/30 group-hover:text-white" : "text-gray-300 group-hover:text-gray-900"}`}>
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
