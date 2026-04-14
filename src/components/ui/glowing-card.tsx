import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import "./glowing-card.css";

export const GlowingCard = ({ 
  title, 
  value, 
  icon, 
  className 
}: { 
  title: string; 
  value: string; 
  icon?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("outer min-h-[160px]", className)}>
      <div className="dot"></div>
      <div className="card">
        {/* We use a ray to provide internal gradient highlight */}
        <div className="ray"></div>
        {icon && <div className="mb-6 scale-125">{icon}</div>}
        <div className="text text-5xl md:text-7xl font-black bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">{value}</div>
        <div className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-gray-300 mt-4">{title}</div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
    </div>
  );
};
