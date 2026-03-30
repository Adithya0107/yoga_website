import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { StatusBar } from "./StatusBar";
import { motion, AnimatePresence } from "framer-motion";

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  canProceed?: boolean;
}

export function OnboardingLayout({ 
  children, 
  currentStep, 
  totalSteps, 
  onNext,
  canProceed = true 
}: OnboardingLayoutProps) {
  const navigate = useNavigate();
  const progressPercentage = totalSteps <= 0 ? 0 : (currentStep / totalSteps) * 100;

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: 'url("/images/bg-zen.png")' }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[4px]" />
      </div>

      <StatusBar className="relative z-10" />

      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col max-w-xl mx-auto w-full px-6 pt-6 pb-8">
        {/* Header: Back & Progress */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/50 hover:bg-white transition-all group"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="text-right">
            <p className="text-purple-600 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
              Step {currentStep} of {totalSteps}
            </p>
            <div className="w-32 h-1.5 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Content Area with Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <div className="pt-8 mt-auto">
          <button
            onClick={onNext}
            disabled={!canProceed}
            className={`w-full py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
              canProceed 
                ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02]' 
                : 'bg-white/40 text-gray-400 cursor-not-allowed backdrop-blur-sm border border-white/50'
            }`}
          >
            {currentStep === totalSteps ? "Complete" : "Continue"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}