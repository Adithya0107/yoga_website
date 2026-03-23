import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function GradientButton({ 
  children, 
  onClick, 
  variant = "primary",
  showArrow = true,
  className = "",
  type = "button",
  disabled = false
}: GradientButtonProps) {
  const baseStyles = "w-full py-4 px-8 rounded-3xl font-semibold text-lg flex items-center justify-center gap-2 transition-all";
  
  const variantStyles = variant === "primary"
    ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-xl"
    : "bg-white text-purple-600 border-2 border-purple-200 hover:border-purple-300";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed grayscale" : "";

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
    >
      <span className="flex-1 text-center">{children}</span>
      {showArrow && <ChevronRight className="w-6 h-6" />}
    </button>
  );
}

