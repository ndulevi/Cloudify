import React from "react";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonDemo() {
  return (
    <div className="flex gap-3">
      
      <Button size={"icon"} className="relative p-0.5 overflow-hidden">
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "inline-flex size-full items-center text-primary-foreground justify-center rounded-sm backdrop-blur-3xl"
          )}
        >
          <Moon className="w-5 h-5"/>
        </span>
      </Button>
 
      <Button
        className="relative p-0.5 inline-flex overflow-hidden group"
      >
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "inline-flex size-full items-center text-primary-foreground justify-center rounded-sm px-6 backdrop-blur-3xl"
          )}
        >
          Rotate Background
        </span>
      </Button>

      <Button size={"icon"} className="relative p-0.5 overflow-hidden">
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "inline-flex size-full items-center justify-center text-foreground rounded-sm bg-background backdrop-blur-3xl"
          )}
        >
          <Moon className="w-5 h-5"/>
        </span>
      </Button>

      <Button
        className="relative p-0.5 inline-flex overflow-hidden"
      >
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "inline-flex size-full text-foreground items-center justify-center rounded-sm bg-background px-6 backdrop-blur-3xl transition-colors group-hover:bg-background/90"
          )}
        >
          Rotate Border
        </span>
      </Button>
    </div>
  );
}

export function AnimatedRotateButton({ children, className, onClick, isDark = true }: { children: React.ReactNode, className?: string, onClick?: () => void, isDark?: boolean }) {
  return (
    <Button
      onClick={onClick}
      className={cn("relative p-0.5 inline-flex overflow-hidden group border-0", className)}
      style={{ height: 'auto', padding: '0.125rem' }}
    >
      <span
        className={cn(
          "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
          isDark 
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#fff_50%,#3b82f6_100%)]" // blue outline effect
            : "bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#fff_50%,#2563eb_100%)]"
        )}
      />
      <span
        className={cn(
          "inline-flex size-full items-center justify-center rounded-xl backdrop-blur-3xl transition-colors w-full",
          isDark ? "bg-black/80 text-white group-hover:bg-black/60" : "bg-white/90 text-gray-900 group-hover:bg-white"
        )}
      >
        {children}
      </span>
    </Button>
  );
}
