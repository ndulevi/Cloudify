import { motion } from "motion/react";
import { Layout, ArrowRight, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const Resources = () => {
  const { isDark } = useTheme();
  const resources = [
    {
      title: "The Conversion Blueprint 2024",
      category: "E-Book",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      readTime: "15 min read"
    },
    {
      title: "Scaling SaaS with Design Psychology",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
      readTime: "10 min read"
    },
    {
      title: "Core Web Vitals: A Technical Guide",
      category: "Article",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      readTime: "12 min read"
    }
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"}`} id="resources">
      {/* Background Orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm ${isDark ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-100"}`}
            >
              <Layout className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Knowledge Base</span>
            </motion.div>
            <h2 className={`text-5xl md:text-6xl font-bold tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}>Latest Resources</h2>
          </div>
          <button className={`font-bold px-8 py-4 rounded-xl transition-all border flex items-center gap-2 ${isDark ? "bg-white/5 hover:bg-white/10 text-white border-white/10" : "bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200"}`}>
            View All Resources <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 border ${isDark ? "border-white/10" : "border-gray-200 shadow-lg"}`}>
                <img 
                  src={res.image} 
                  alt={res.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                    {res.category}
                  </div>
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>{res.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3 text-blue-500" />
                {res.readTime}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
