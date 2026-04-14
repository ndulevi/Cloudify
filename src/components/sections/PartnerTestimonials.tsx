import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const PartnerTestimonials = () => {
  const { isDark } = useTheme();
  
  const partners = [
    {
      name: "Microsoft",
      role: "Enterprise Partner",
      quote: "Cloudify's architectural approach completely revitalized our mutual clients' front-end ecosystems. A true powerhouse in conversion-driven design.",
      logo: "M",
      color: "from-blue-600 to-cyan-400"
    },
    {
      name: "Stripe",
      role: "Payments Partner",
      quote: "The seamless integration of transactional flows with top-tier user experience makes Cloudify an elite agency in the tech space.",
      logo: "S",
      color: "from-purple-600 to-pink-500"
    },
    {
      name: "Vercel",
      role: "Infrastructure Partner",
      quote: "An agency that truly understands the edge. Their commitment to sub-second load times aligns perfectly with our vision for the web.",
      logo: "V",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`} id="partners">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 border rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-xl ${isDark ? "bg-white/5 border-white/10 shadow-black/50" : "bg-white border-blue-100 shadow-blue-500/10"}`}
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${isDark ? "text-gray-300" : "text-blue-600"}`}>Verified Partners</span>
          </motion.div>
          
          <h2 className={`text-5xl md:text-7xl font-black mb-8 tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}>
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Industry Giants</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-xl font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Our engineering standards are recognized by the technology leaders powering the modern web.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${partner.color} rounded-[2.5rem] blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              
              <div className={`relative h-full p-10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 overflow-hidden ${isDark ? "bg-white/5 border border-white/10 backdrop-blur-xl group-hover:bg-white/[0.08]" : "bg-white border border-gray-100 shadow-2xl shadow-blue-900/5 group-hover:shadow-blue-900/10"}`}>
                
                {/* Deco Tech Background */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Quote className="w-32 h-32" />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-3xl font-black border tracking-tighter shadow-lg shadow-black/20 ${isDark ? "bg-black/50 border-white/10" : "bg-gray-50 border-gray-200"}`}>
                    <span className={`bg-gradient-to-br ${partner.color} bg-clip-text text-transparent`}>{partner.logo}</span>
                  </div>
                  
                  <p className={`text-xl leading-relaxed mb-8 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    "{partner.quote}"
                  </p>
                </div>
                
                <div className="mt-auto relative z-10 pt-8 border-t border-dashed border-gray-500/20 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${partner.color} shadow-lg shadow-black/20`}>
                    <span className="font-bold">{partner.name[0]}</span>
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>{partner.name}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mt-1">{partner.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
