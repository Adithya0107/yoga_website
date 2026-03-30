import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useUser } from "../../context/UserContext";

export function HeightScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [height, setHeight] = useState(parseInt(userData.height) || 170);

  const handleNext = () => {
    updateUserData({ height: height.toString() });
    navigate("/onboarding/weight");
  };

  const increment = () => setHeight(prev => Math.min(prev + 1, 250));
  const decrement = () => setHeight(prev => Math.max(prev - 1, 100));

  return (
    <OnboardingLayout 
      currentStep={3} 
      totalSteps={10} 
      onNext={handleNext}
      canProceed={true}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          What's your height?
        </h1>

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Height Picker */}
          <div className="flex flex-col items-center">
            <button 
              onClick={increment}
              className="p-4 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ChevronUp className="w-8 h-8 text-gray-400" />
            </button>

            <div className="py-8">
              <div className="text-8xl flex items-baseline">
                <span className="text-gray-400">{height}</span>
                <span className="text-purple-300">cm</span>
              </div>
            </div>

            <button 
              onClick={decrement}
              className="p-4 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </button>
          </div>

          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mt-8">
            Centimeters
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
}
