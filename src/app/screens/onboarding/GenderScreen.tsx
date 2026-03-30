import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function GenderScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedGender, setSelectedGender] = useState<string>(userData.gender || "");

  const handleNext = () => {
    if (selectedGender) {
      updateUserData({ gender: selectedGender });
      navigate("/onboarding/height");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={2} 
      totalSteps={10} 
      onNext={handleNext}
      canProceed={!!selectedGender}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          What's your gender?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <OptionButton
            selected={selectedGender === "Male"}
            onClick={() => setSelectedGender("Male")}
          >
            Male
          </OptionButton>
          <OptionButton
            selected={selectedGender === "Female"}
            onClick={() => setSelectedGender("Female")}
          >
            Female
          </OptionButton>
          <OptionButton
            selected={selectedGender === "Other"}
            onClick={() => setSelectedGender("Other")}
          >
            Other
          </OptionButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}
