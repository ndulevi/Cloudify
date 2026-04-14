import { motion } from "motion/react";
import { BarChart3, TrendingUp, Layout, Users } from "lucide-react";
import { GlowingCard } from "../ui/glowing-card";
import { useTheme } from "../../context/ThemeContext";

export const Stats = () => {
  const { isDark } = useTheme();
  const stats = [
    { label: "Revenue Generated", value: "$250M+", icon: <BarChart3 className="w-6 h-6" />, color: "from-blue-500 to-cyan-400" },
    { label: "Avg. Conversion Lift", value: "85%", icon: <TrendingUp className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { label: "Websites Launched", value: "500+", icon: <Layout className="w-6 h-6" />, color: "from-orange-500 to-yellow-400" },
    { label: "Client Satisfaction", value: "99%", icon: <Users className="w-6 h-6" />, color: "from-green-500 to-emerald-400" },
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"}`}>
      {/* Dynamic Background Glowing Orbs */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="w-full h-[250px]"
            >
              <GlowingCard 
                title={stat.label}
                value={stat.value}
                className="w-full h-full shadow-lg"
                icon={
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
