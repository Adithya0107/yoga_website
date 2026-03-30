import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Check } from "lucide-react";
import logoImage from "/src/assets/605287ed814451434f1270924b17af622adef8f9.png";
import { StatusBar } from "../../components/StatusBar";
import { useUser } from "../../context/UserContext";
import { api } from "../../utils/api";
import { toast } from "sonner";

export function CreatingPlanScreen() {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(20);
  const hasUpdated = useRef(false);

  const dynamicSteps = [
    `ANALYZING ${userData.weight}KG ${userData.gender.toUpperCase()} FOR ${userData.goal.toUpperCase()}...`,
    `CUSTOMIZING ${userData.experience.toUpperCase()} ROUTINES...`,
    `OPTIMIZING FOR ${userData.focus.toUpperCase()} RESULTS...`,
    "AI COACH IS FINALIZING YOUR TIMELINE...",
    "YOUR PERSONALIZED JOURNEY STARTS NOW!"
  ];

  useEffect(() => {
    // Simulate progress
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= dynamicSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 600);

    // Call API once
    if (!hasUpdated.current && userData.id) {
      hasUpdated.current = true;
      const updateProfile = async () => {
        try {
          await api.post('/user/update_profile', {
            user_id: userData.id,
            profile: {
              name: userData.name,
              age: userData.age,
              gender: userData.gender,
              height: userData.height,
              weight: userData.weight,
              goal: userData.goal,
              activityLevel: userData.activity,
              experience: userData.experience,
              focusArea: userData.focus,
              frequency: userData.frequency,
              dietaryPreference: userData.dietaryPreference
            }
          });
          
          // Wait for the simulation to catch up or just complete
          setTimeout(() => {
            navigate("/home");
          }, 6000); // Give enough time for steps to show
        } catch (error: any) {
          toast.error("Failed to save your plan: " + error.message);
          // Still navigate so they don't get stuck? Or show error?
          setTimeout(() => navigate("/home"), 6000);
        }
      };
      updateProfile();
    }

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [navigate, dynamicSteps.length, userData]);

  return (
    <div className="min-h-screen bg-white/60 backdrop-blur-xl border border-white/50 flex flex-col px-6 py-12">
      <StatusBar  className="absolute top-0 left-0 right-0" />

      {/* Back Button */}
      <div className="mb-12">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center shadow-md border border-gray-100"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
        {/* Logo with circles */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-purple-100 opacity-20"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-white/60 backdrop-blur-xl border border-white/50"></div>
          </div>
          <div className="relative flex items-center justify-center w-64 h-64">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center p-6 shadow-xl">
              <img src={logoImage} alt="Yoga" className="w-20 h-20 brightness-0 invert" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl mb-3 text-center text-purple-600 font-black">
          Creating Your Plan
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center mb-8 font-semibold">
          {dynamicSteps[currentStep]}
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mb-12">
          <div className="h-2 bg-transparent rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Steps Checklist */}
        <div className="w-full space-y-6">
          {dynamicSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Status Icon */}
              {index < currentStep ? (
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              ) : index === currentStep ? (
                <div className="w-6 h-6 rounded-full border-2 border-purple-600 border-t-transparent flex-shrink-0 mt-0.5 animate-spin" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex-shrink-0 mt-0.5" />
              )}

              {/* Step Text */}
              <p className={`text-sm font-bold uppercase tracking-wide ${
                index <= currentStep ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}