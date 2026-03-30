import { ChevronLeft, Target, TrendingUp, Activity, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";
import { useUser } from "../../context/UserContext";

export function HealthGoalsScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [currentWeight, setCurrentWeight] = useState(userData.weight || "76");
  const [targetWeight, setTargetWeight] = useState("70");
  const [weeklyGoal, setWeeklyGoal] = useState("4");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSave = () => {
    updateUserData({ weight: currentWeight });
    navigate("/profile");
  };

  return (
    <WebLayout>
      <div className="min-h-screen bg-transparent pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white/60 backdrop-blur-xl border border-white/50 shrink-0">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Health Goals</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Goal Cards */}
        <div className="px-6 pb-6 pt-6 bg-transparent mt-0">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm space-y-6">
            {/* Current Weight */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Current Weight
                  </div>
                  <h3 className="font-bold">Track your progress</h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  className="flex-1 bg-transparent rounded-2xl px-5 py-4 text-2xl font-bold border-2 border-transparent focus:border-purple-600 outline-none text-center"
                />
                <span className="text-lg font-bold text-gray-400">KG</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Target Weight */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Target Weight
                  </div>
                  <h3 className="font-bold">Set your goal</h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  className="flex-1 bg-transparent rounded-2xl px-5 py-4 text-2xl font-bold border-2 border-transparent focus:border-purple-600 outline-none text-center"
                />
                <span className="text-lg font-bold text-gray-400">KG</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Weekly Practice Goal */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Weekly Practice
                  </div>
                  <h3 className="font-bold">Sessions per week</h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={weeklyGoal}
                  onChange={(e) => setWeeklyGoal(e.target.value)}
                  className="flex-1 bg-transparent rounded-2xl px-5 py-4 text-2xl font-bold border-2 border-transparent focus:border-purple-600 outline-none text-center"
                />
                <span className="text-lg font-bold text-gray-400 uppercase">Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Goals */}
        <div className="px-6 pb-2 text-left bg-transparent">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Focus Areas
          </h2>
        </div>

        <div className="px-6 pb-6 bg-transparent">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
            {['Flexibility', 'Strength', 'Balance', 'Mindfulness', 'Stress Relief'].map((goal, index) => (
              <label key={index} className={`flex items-center justify-between p-5 ${index !== 4 ? 'border-b border-gray-50' : ''}`}>
                <span className="font-bold">{goal}</span>
                <input type="checkbox" className="w-6 h-6 rounded-lg border-2 border-gray-300 text-purple-600 focus:ring-purple-600" />
              </label>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="px-6 pt-2 pb-8 bg-transparent">
          <button 
            className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg"
            onClick={handleSave}
          >
            Save Goals
          </button>
        </div>
      </div>
    </WebLayout>
  );
}
