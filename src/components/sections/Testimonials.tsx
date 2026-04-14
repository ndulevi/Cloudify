import { Quote } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const Testimonials = () => {
  const { isDark } = useTheme();
  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`border rounded-[40px] p-12 md:p-20 text-center backdrop-blur-sm ${isDark ? "bg-gradient-to-br from-white/10 to-white/5 border-white/10" : "bg-gray-50 border-gray-200 shadow-sm"}`}>
          <Quote className="w-12 h-12 text-blue-600 mx-auto mb-10 opacity-50" />
          <p className={`text-2xl md:text-4xl font-medium mb-12 leading-tight italic ${isDark ? "text-white" : "text-gray-900"}`}>
            "Cloudify transformed our online presence. Within three months of launching our new site, our conversion rate jumped by 45% and our bounce rate dropped significantly."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-800 mb-4 overflow-hidden border-2 border-blue-600">
              <img src="https://picsum.photos/seed/person/200/200" alt="Sarah Jenkins, CEO of TechFlow giving a testimonial for Cloudify" referrerPolicy="no-referrer" />
            </div>
            <h4 className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>Sarah Jenkins</h4>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">CEO at TechFlow</p>
          </div>
        </div>
      </div>
    </section>
  );
};
