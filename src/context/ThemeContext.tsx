import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen font-sans selection:bg-blue-500/30 transition-colors duration-300 ${isDark ? "bg-[#050505]" : "bg-white"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
