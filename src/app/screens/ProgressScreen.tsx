import { ChevronLeft, TrendingUp, Calendar, Award, Loader2, Save } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { WebLayout } from "../components/WebLayout";
import { useUser } from "../context/UserContext";
import { api } from "../utils/api";
import { toast } from "sonner";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const journeySteps = [
  { title: "BEGINNER", subtitle: "Starting the journey", level: 1, unlocked: true },
  { title: "DEDICATED", subtitle: "Consistency unlocked", level: 5, unlocked: false },
  { title: "MASTER", subtitle: "Strength mastery", level: 15, unlocked: false },
  { title: "ELITE", subtitle: "Peak performance", level: 30, unlocked: false },
  { title: "PRO FLOW", subtitle: "Transformation complete", level: 50, unlocked: false }
];

export function ProgressScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [stats, setStats] = useState<any>(null);
  const [healthData, setHealthData] = useState({
    age: userData.age || "25",
    weight: userData.weight || "0",
    height: userData.height || "0"
  });

  useEffect(() => {
    if (!userData.id) {
      navigate("/welcome");
      return;
    }

    const fetchStats = async () => {
      try {
        const result = await api.get(`/user/get_stats/${userData.id}`);
        setStats(result);
        if (result) {
          setHealthData({
            age: userData.age || result.age || "25",
            weight: userData.weight || result.weight || "0",
            height: userData.height || result.height || "0"
          });
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, [userData.id, userData.age, userData.weight, userData.height]);

  const handleSave = async () => {
    if (!userData.id) return;
    setIsSaving(true);
    try {
      await api.post('/user/add_progress', {
        user_id: userData.id,
        progress: {
          weight: healthData.weight,
          height: healthData.height,
          age: healthData.age,
          health_status: stats?.health_status || "Normal",
          image_path: ""
        }
      });
      
      // Also update user profile
      await api.post('/user/update_profile', {
        user_id: userData.id,
        profile: {
          ...userData,
          weight: healthData.weight,
          height: healthData.height,
          age: healthData.age
        }
      });

      updateUserData({
        weight: healthData.weight,
        height: healthData.height,
        age: healthData.age
      });

      toast.success("Progress saved successfully!");
    } catch (error: any) {
      toast.error("Failed to save progress: " + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
      </div>
    );
  }

  return (
    <WebLayout>
      <div className="bg-gray-50 pb-24 md:pb-0 text-left">
        {/* Header */}
        <div className="px-6 pt-6 pb-6 bg-white">
          <h1 className="text-4xl font-black text-purple-600 text-center uppercase">
            Activity
          </h1>
        </div>

        {/* Stats Cards */}
        <div className="px-6 py-6 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-4xl font-black mb-1">{stats?.total_minutes || 0}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Total Mins</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" className="text-green-500"/>
              </svg>
            </div>
            <div className="text-4xl font-black mb-1">{stats?.sessions || 0}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Sessions</div>
          </div>
        </div>

        {/* AI Zen Coach Insight */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                  AI ZEN COACH
                </div>
                <h3 className="font-bold">Personalized Insight</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              You're doing great, {userData.name}! Your {stats?.streak_days || 0}-day streak is impressive. You are currently at Level {stats?.level || 1}. Keep pushing towards being a Zen Master!
            </p>
          </div>
        </div>

        {/* Hero Mastery Journey */}
        <div className="px-6 pb-6">
          <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
            HERO MASTERY JOURNEY
          </h2>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="space-y-6">
              {journeySteps.map((step, index) => {
                const isUnlocked = (stats?.level || 1) >= step.level;
                return (
                  <div key={index} className="relative">
                    {index < journeySteps.length - 1 && (
                      <div className="absolute left-[19px] top-12 w-0.5 h-12 bg-gray-100" />
                    )}
                    <div className="flex items-start gap-4">
                      {isUnlocked ? (
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-gray-300" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`font-bold ${isUnlocked ? 'text-black' : 'text-gray-400'}`}>
                              {step.title}
                            </h3>
                            <p className={`text-sm ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                              {step.subtitle}
                            </p>
                            {!isUnlocked && (
                              <p className="text-sm text-purple-500 mt-1 font-semibold">
                                Reach Level {step.level} to unlock
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Health Analysis */}
        <div className="px-6 pb-6">
          <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
            HEALTH ANALYSIS
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-orange-50 rounded-3xl p-4 flex flex-col items-center">
              <input
                type="number"
                value={healthData.age}
                onChange={(e) => setHealthData({...healthData, age: e.target.value})}
                className="w-full text-3xl font-black text-orange-500 text-center bg-transparent border-b-2 border-orange-200 focus:border-orange-500 outline-none mb-1"
              />
              <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mt-1">AGE</p>
            </div>
            <div className="bg-purple-50 rounded-3xl p-4 flex flex-col items-center">
              <input
                type="number"
                value={healthData.weight}
                onChange={(e) => setHealthData({...healthData, weight: e.target.value})}
                className="w-full text-3xl font-black text-purple-600 text-center bg-transparent border-b-2 border-purple-200 focus:border-purple-600 outline-none mb-1"
              />
              <p className="text-xs text-purple-600 font-bold uppercase tracking-wider mt-1">WEIGHT</p>
            </div>
            <div className="bg-cyan-50 rounded-3xl p-4 flex flex-col items-center">
              <input
                type="number"
                value={healthData.height}
                onChange={(e) => setHealthData({...healthData, height: e.target.value})}
                className="w-full text-3xl font-black text-cyan-500 text-center bg-transparent border-b-2 border-cyan-200 focus:border-cyan-500 outline-none mb-1"
              />
              <p className="text-xs text-cyan-500 font-bold uppercase tracking-wider mt-1">HEIGHT</p>
            </div>
          </div>
        </div>

        {/* Health Status */}
        <div className="px-6 pb-6">
          <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
            HEALTH STATUS
          </h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-black text-purple-600">{stats?.health_status || "Normal"}</h3>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="32" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                  <circle
                    cx="40" cy="40" r="32" stroke="#7C3AED" strokeWidth="8" fill="none"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    strokeDashoffset={`${2 * Math.PI * 32 * (1 - (stats?.recovery_rate || 80) / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-black text-purple-600">{stats?.recovery_rate || 80}%</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              BMI: {stats?.bmi || 20.8}. Your {stats?.streak_days || 0}-day streak shows growing consistency. Recovery rate {stats?.recovery_rate || 80}%.
            </p>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="px-6 pb-32">
          <button 
            disabled={isSaving}
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-4 rounded-full font-black text-base uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            SAVE CHANGES
          </button>
        </div>
      </div>
    </WebLayout>
  );
}

function CheckIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}