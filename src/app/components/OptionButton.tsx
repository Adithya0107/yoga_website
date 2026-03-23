import { ReactNode } from "react";

interface OptionButtonProps {
  children: ReactNode;
  selected?: boolean;
  onClick: () => void;
}

export function OptionButton({ children, selected, onClick }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-5 px-8 rounded-full text-lg font-bold transition-all ${
        selected 
          ? 'bg-gradient-to-r from-purple-600 to-purple-600 text-white shadow-lg' 
          : 'bg-gray-50 text-gray-500 shadow-sm hover:shadow-md'
      }`}
    >
      {children}
    </button>
  );
}