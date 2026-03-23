import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function ExperienceScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedExperience, setSelectedExperience] = useState<string>(userData.experience || "");

  const experiences = [
    "Beginner",
    "Intermediate",
    "Advanced"
  ];

  const handleNext = () => {
    if (selectedExperience) {
      updateUserData({ experience: selectedExperience });
      navigate("/onboarding/focus");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={7} 
      totalSteps={9} 
      onNext={handleNext}
      canProceed={!!selectedExperience}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          Yoga experience?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {experiences.map((experience) => (
            <OptionButton
              key={experience}
              selected={selectedExperience === experience}
              onClick={() => setSelectedExperience(experience)}
            >
              {experience}
            </OptionButton>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}