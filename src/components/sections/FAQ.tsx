import { useState } from "react";
import { motion } from "motion/react";
import { HelpCircle, Minus, Plus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { GradientBlurBg } from "../ui/gradient-blur-bg";

export const FAQ = () => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects are completed within 4-8 weeks, depending on complexity. We prioritize quality while maintaining an efficient pace."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. Every site we build is fully responsive and optimized for all devices, ensuring a seamless experience for every visitor."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer various support and maintenance plans to keep your site running smoothly and securely long after launch."
    },
    {
      question: "How do you measure success?",
      answer: "We track key performance indicators like conversion rates, bounce rates, and average session duration to ensure your site is meeting its goals."
    }
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"}`}>
      <GradientBlurBg variant="right" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            <HelpCircle className="text-blue-500 w-10 h-10" />
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-colors ${isDark ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-200"}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full p-6 flex items-center justify-between text-left transition-colors ${isDark ? "hover:bg-white/5" : "hover:bg-gray-100"}`}
              >
                <span className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{faq.question}</span>
                {activeIndex === index ? <Minus className="text-blue-500" /> : <Plus className="text-gray-500" />}
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className={`p-6 pt-0 leading-relaxed border-t ${isDark ? "text-gray-400 border-white/5" : "text-gray-600 border-gray-100"}`}>
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
