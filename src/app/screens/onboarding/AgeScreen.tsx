import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function AgeScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedAge, setSelectedAge] = useState<string>(userData.age || "");

  const ageRanges = [
    "18-24", "25-34",
    "35-44", "45-54",
    "55-64", "65+"
  ];

  const handleNext = () => {
    if (selectedAge) {
      updateUserData({ age: selectedAge });
      navigate("/onboarding/gender");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={1} 
      totalSteps={9} 
      onNext={handleNext}
      canProceed={!!selectedAge}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          How old are you?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {ageRanges.map((range) => (
            <OptionButton
              key={range}
              selected={selectedAge === range}
              onClick={() => setSelectedAge(range)}
            >
              {range}
            </OptionButton>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}
