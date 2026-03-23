import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function FrequencyScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedFrequency, setSelectedFrequency] = useState<string>(userData.frequency || "");

  const frequencies = [
    "1-2 days",
    "3-4 days",
    "5-6 days",
    "Daily"
  ];

  const handleNext = () => {
    if (selectedFrequency) {
      updateUserData({ frequency: selectedFrequency });
      navigate("/onboarding/creating-plan");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={9} 
      totalSteps={9} 
      onNext={handleNext}
      canProceed={!!selectedFrequency}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          Workout frequency?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {frequencies.map((frequency) => (
            <OptionButton
              key={frequency}
              selected={selectedFrequency === frequency}
              onClick={() => setSelectedFrequency(frequency)}
            >
              {frequency}
            </OptionButton>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}