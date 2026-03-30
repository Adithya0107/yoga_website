import { ReactNode } from "react";
import { motion } from "framer-motion";

interface OptionButtonProps {
  children: ReactNode;
  selected?: boolean;
  onClick: () => void;
}

export function OptionButton({ children, selected, onClick }: OptionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full py-5 px-8 rounded-[24px] text-lg font-bold transition-all duration-300 border-2 ${
        selected 
          ? 'bg-purple-500/10 border-purple-500 text-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md' 
          : 'bg-white/60 border-transparent text-gray-700 shadow-sm hover:shadow-md hover:bg-white/80 backdrop-blur-sm'
      }`}
    >
      {children}
    </motion.button>
  );
}