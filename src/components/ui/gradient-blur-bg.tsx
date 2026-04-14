import { cn } from "../../lib/utils";
import { useTheme } from "../../context/ThemeContext";

interface GradientBlurBgProps {
  variant?: "right" | "top";
  className?: string;
}

export const GradientBlurBg = ({ variant = "right", className }: GradientBlurBgProps) => {
  const { isDark } = useTheme();

  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none", className)}>
      {variant === "right" && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: isDark
              ? `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle 800px at 100% 200px, rgba(139,92,246,0.25), transparent)
              `
              : `
                linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px),
                radial-gradient(circle 800px at 100% 200px, rgba(213,197,255,0.5), transparent)
              `,
            backgroundSize: "96px 64px, 96px 64px, 100% 100%",
          }}
        />
      )}

      {variant === "top" && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: isDark
              ? `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle 800px at 0% 20%, rgba(139,92,246,0.25), transparent),
                radial-gradient(circle 800px at 100% 0%, rgba(59,130,246,0.25), transparent)
              `
              : `
                linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px),
                radial-gradient(circle 800px at 0% 20%, rgba(139,92,246,0.2), transparent),
                radial-gradient(circle 800px at 100% 0%, rgba(59,130,246,0.2), transparent)
              `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
        />
      )}
    </div>
  );
};
