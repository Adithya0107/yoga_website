import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function GoalScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedGoal, setSelectedGoal] = useState<string>(userData.goal || "");

  const goals = [
    "Lose Weight",
    "Gain Muscle",
    "Flexibility",
    "Stress Relief"
  ];

  const handleNext = () => {
    if (selectedGoal) {
      updateUserData({ goal: selectedGoal });
      navigate("/onboarding/activity");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={5} 
      totalSteps={9} 
      onNext={handleNext}
      canProceed={!!selectedGoal}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          What's your goal?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {goals.map((goal) => (
            <OptionButton
              key={goal}
              selected={selectedGoal === goal}
              onClick={() => setSelectedGoal(goal)}
            >
              {goal}
            </OptionButton>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}