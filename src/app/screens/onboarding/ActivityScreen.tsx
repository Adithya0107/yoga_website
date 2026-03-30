import { useState } from "react";
import { useNavigate } from "react-router";
import { OnboardingLayout } from "../../components/OnboardingLayout";
import { OptionButton } from "../../components/OptionButton";
import { useUser } from "../../context/UserContext";

export function ActivityScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [selectedActivity, setSelectedActivity] = useState<string>(userData.activity || "Lightly Active");

  const activities = [
    "Sedentary",
    "Lightly Active",
    "Active",
    "Very Active"
  ];

  const handleNext = () => {
    if (selectedActivity) {
      updateUserData({ activity: selectedActivity });
      navigate("/onboarding/experience");
    }
  };

  return (
    <OnboardingLayout 
      currentStep={7} 
      totalSteps={10} 
      onNext={handleNext}
      canProceed={!!selectedActivity}
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl mb-12 leading-tight text-purple-600 font-black">
          Activity level?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {activities.map((activity) => (
            <OptionButton
              key={activity}
              selected={selectedActivity === activity}
              onClick={() => setSelectedActivity(activity)}
            >
              {activity}
            </OptionButton>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}