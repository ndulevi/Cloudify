import { Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { GradientBars } from "../ui/gradient-bars-background";

export const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer className={`py-20 relative overflow-hidden border-t ${isDark ? "bg-black border-white/5" : "bg-slate-50 border-gray-200"}`}>
      
      <GradientBars 
        numBars={13} 
        gradientFrom={isDark ? "rgba(59, 130, 246, 0.4)" : "rgba(59, 130, 246, 0.15)"} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-current" />
              </div>
              <span className={`font-bold text-xl tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>Cloudify</span>
            </div>
            <p className={`max-w-sm leading-relaxed ${isDark ? "text-gray-500" : "text-gray-600"}`}>
              We help ambitious brands turn their digital presence into a high-performance sales engine.
            </p>
          </div>
          <div>
            <h4 className={`font-bold mb-6 uppercase text-xs tracking-widest ${isDark ? "text-white" : "text-gray-900"}`}>Company</h4>
            <ul className="space-y-4">
              {["About", "Services", "Portfolio", "Contact"].map(item => (
                <li key={item}><a href="#" className={`transition-colors ${isDark ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-6 uppercase text-xs tracking-widest ${isDark ? "text-white" : "text-gray-900"}`}>Connect</h4>
            <ul className="space-y-4">
              {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map(item => (
                <li key={item}><a href="#" className={`transition-colors ${isDark ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${isDark ? "border-white/5 text-gray-600" : "border-gray-100 text-gray-500"}`}>
          <p>© 2026 Cloudify Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}>Privacy Policy</a>
            <a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
