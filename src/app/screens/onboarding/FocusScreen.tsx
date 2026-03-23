import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function FocusScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedFocus, setSelectedFocus] = useState<string>(userData.focus || "");

  const focusAreas = [
    "Back Pain",
    "Core Strength",
    "Legs & Glutes",
    "Full Body"
  ];

  const handleNext = () => {
    if (selectedFocus) {
      updateUserData({ focus: selectedFocus });
      navigate("/onboarding/frequency");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={8} 
      totalSteps={9} 
      onNext={handleNext}
      canProceed={!!selectedFocus}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          Focus area?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {focusAreas.map((area) => (
            <OptionButton
              key={area}
              selected={selectedFocus === area}
              onClick={() => setSelectedFocus(area)}
            >
              {area}
            </OptionButton>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}