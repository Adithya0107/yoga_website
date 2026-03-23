import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { StatusBar } from "./StatusBar";

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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Status Bar */}
      <StatusBar  />

      {/* Back Button */}
      <div className="px-6 pt-6">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="px-6 pt-6">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Progress Text */}
      <div className="px-6 pt-4 flex justify-end">
        <div className="text-right">
          <p className="text-purple-500 text-xs font-bold uppercase tracking-wider mb-1">Progress</p>
          <p className="text-3xl">
            <span className="font-bold">{currentStep}</span>
            <span className="text-gray-400">/{totalSteps}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 pt-12 pb-6">
        {children}
      </div>

      {/* Next Button */}
      <div className="px-6 pb-12">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`w-full py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all ${
            canProceed 
              ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next Step
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}