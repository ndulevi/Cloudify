import { motion } from "motion/react";
import { BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { GradientBlurBg } from "../ui/gradient-blur-bg";

export const Pricing = () => {
  const { isDark } = useTheme();
  const plans = [
    {
      name: "Starter",
      price: "999",
      description: "Perfect for startups looking to establish a high-converting presence.",
      features: ["1 High-Conversion Landing Page", "Basic SEO Optimization", "Mobile-First Responsive Design", "Standard Support", "3 Rounds of Revisions"],
      cta: "Get Started",
      popular: false,
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Pro",
      price: "2,499",
      description: "Advanced engineering for growing brands that need maximum impact.",
      features: ["Up to 5 Custom Pages", "Advanced Conversion Strategy", "A/B Testing & Heatmaps", "Priority 24/7 Support", "Unlimited Revisions", "Custom Tech Integrations"],
      cta: "Scale Now",
      popular: true,
      color: "from-purple-600 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-scale digital dominance for established market leaders.",
      features: ["Full Digital Ecosystem", "Dedicated Project Manager", "Quarterly Growth Audits", "Custom API & Backend Dev", "White-Glove Onboarding"],
      cta: "Contact Sales",
      popular: false,
      color: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"}`} id="pricing">
      {/* Background Accents using GradientBlurBg top variant */}
      <GradientBlurBg variant="top" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm ${isDark ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-100"}`}
          >
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Investment</span>
          </motion.div>
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}>
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing Plans.</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Choose the perfect plan to accelerate your digital growth. No hidden fees, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-xl shadow-blue-600/20">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative h-full border rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 overflow-hidden backdrop-blur-sm ${isDark ? "bg-white/5 border-white/10 group-hover:border-white/20" : "bg-gray-50 border-gray-200 group-hover:border-gray-300 shadow-sm"} ${plan.popular ? (isDark ? "shadow-[0_0_50px_rgba(59,130,246,0.15)] border-blue-500/30 ring-1 ring-blue-500/20" : "shadow-xl border-blue-200 ring-1 ring-blue-100") : ""}`}>
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-10 flex items-baseline gap-1">
                  <span className={`text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}>
                    {plan.price !== "Custom" && "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-gray-500 font-medium">/project</span>}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${plan.popular ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20" : isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm"}`}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Decorative Tech Accents */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${plan.color} blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
