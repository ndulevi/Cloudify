import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Zap, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDark ? "glass" : "bg-white/80 backdrop-blur-md border-b border-gray-200") : "bg-transparent"} py-4`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>Cloudify</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} text-sm font-medium transition-colors`}>
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDark ? "bg-white/5 text-yellow-400 hover:bg-white/10" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"} text-sm font-medium px-4 py-2 transition-colors`}>Login</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-600/20">
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDark ? "bg-white/5 text-yellow-400" : "bg-gray-100 text-gray-600"}`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className={isDark ? "text-white" : "text-gray-900"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 md:hidden ${isDark ? "bg-black border-white/10" : "bg-white border-gray-200"}`}
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg font-medium`}>{item.name}</a>
          ))}
          <hr className={isDark ? "border-white/10" : "border-gray-200"} />
          <button className="tech-gradient shadow-[0_0_15px_rgba(52,211,153,0.5)] text-slate-900 font-bold py-3 rounded-xl">Get Started</button>
        </motion.div>
      )}
    </nav>
  );
};
