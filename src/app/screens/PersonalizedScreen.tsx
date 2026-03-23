import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { ArrowLeft, Sparkles, Target, Leaf, BarChart3 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";

export function PersonalizedScreen() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "AI Yoga Guidance",
      description: "Smart pose detection and real-time corrections powered by AI.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Personalized Plans",
      description: "Workouts that adapt to your body type, goals, and progress.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Diet Recommendations",
      description: "Smart nutrition plans to complement your physical training.",
      badge: true,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      title: "Progress Tracking",
      description: "Detailed insights and analytics of your transformation journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <StatusBar  className="absolute top-0 left-0 right-0" />

      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="mb-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Header */}
      <h1 className="text-5xl mb-4 leading-tight" style={{ color: '#7C3AED' }}>
        Personalized For You
      </h1>
      <p className="text-gray-500 mb-8 text-base">
        Discover how ZenForge helps you achieve your wellness goals.
      </p>

      {/* Features List */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-sm relative">
            <div className="flex items-start gap-4">
              <div className={`${feature.iconBg} ${feature.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
            {feature.badge && (
              <div className="absolute top-6 right-6">
                <svg width="30" height="35" viewBox="0 0 30 35" fill="none">
                  <path d="M15 0L18 10H28L20 16L23 26L15 20L7 26L10 16L2 10H12L15 0Z" fill="#A78BFA"/>
                  <circle cx="15" cy="20" r="8" fill="#7C3AED"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="max-w-md mx-auto">
        <GradientButton onClick={() => navigate("/create-account")}>
          Start Personalization
        </GradientButton>
      </div>
    </div>
  );
}
