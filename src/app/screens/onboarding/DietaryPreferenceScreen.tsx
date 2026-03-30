import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function DietaryPreferenceScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedPreference, setSelectedPreference] = useState<string>(userData.dietaryPreference || "");

  const preferences = [
    "Vegetarian",
    "Non-Vegetarian",
    "Both"
  ];

  const handleNext = () => {
    if (selectedPreference) {
      updateUserData({ dietaryPreference: selectedPreference });
      navigate("/onboarding/goal");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={5} 
      totalSteps={10} 
      onNext={handleNext}
      canProceed={!!selectedPreference}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          Dietary preference?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {preferences.map((pref) => (
            <OptionButton
              key={pref}
              selected={selectedPreference === pref}
              onClick={() => setSelectedPreference(pref)}
            >
              {pref}
            </OptionButton>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}
