import { motion } from "motion/react";
import { Sparkles, Layout, Rocket, ShieldCheck, Settings } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { GradientBlurBg } from "../ui/gradient-blur-bg";

export const Process = () => {
  const { isDark } = useTheme();
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and competition to build a solid roadmap.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-400"
    },
    {
      step: "02",
      title: "Conversion Design",
      description: "Our designers craft high-fidelity interfaces focused on user psychology and conversion triggers.",
      icon: <Layout className="w-8 h-8" />,
      color: "from-purple-600 to-pink-500"
    },
    {
      step: "03",
      title: "Agile Development",
      description: "We build your site using modern technologies for maximum speed, security, and scalability.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "We launch your site and continuously monitor performance, making data-driven tweaks for growth.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-cyan-500 to-emerald-400"
    }
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-gray-50"}`} id="solutions">
      
      {/* New dual gradient background from UI skill */}
      <GradientBlurBg variant="right" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-blue-500" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-24 inline-flex items-center gap-2 border rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-xl ${isDark ? "bg-white/5 border-white/10 shadow-blue-500/10" : "bg-white border-blue-100"}`}
          >
            <Settings className="w-4 h-4 text-blue-400 animate-[spin_4s_linear_infinite]" />
            <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${isDark ? "text-gray-300" : "text-blue-600"}`}>The Blueprint</span>
          </motion.div>
          
          <h2 className={`text-6xl md:text-8xl font-black mb-8 tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}>
            Our Proven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Process</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-xl font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            A precision-engineered workflow designed to turn your vision into a high-converting digital powerhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative h-full"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${step.color} rounded-[2.5rem] blur opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              <div className={`relative h-full text-left p-10 rounded-[2.5rem] border backdrop-blur-xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${isDark ? "bg-black/80 border-white/10 group-hover:bg-black/60" : "bg-white border-gray-100 shadow-2xl shadow-gray-200 group-hover:shadow-blue-500/10"}`}>
                
                {/* Huge Watermark Number */}
                <div className={`absolute -bottom-4 -right-4 text-9xl font-black italic opacity-5 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {step.step}
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-white bg-gradient-to-br ${step.color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${isDark ? "bg-white/5 text-gray-400" : "bg-gray-100 text-gray-800"}`}>
                    Step {step.step}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed font-medium text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {step.description}
                  </p>
                </div>

                <div className={`mt-8 h-1 w-12 bg-gradient-to-r ${step.color} rounded-full group-hover:w-full transition-all duration-700`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
