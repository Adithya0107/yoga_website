import { ChevronLeft, TrendingUp, Calendar, Award, Loader2, Save, Lock, History, Zap, CheckCircle2, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { WebLayout } from "../components/WebLayout";
import { useUser } from "../context/UserContext";
import { api } from "../utils/api";
import { toast } from "sonner";
import { motion } from "framer-motion";

const weekDays = [
  { day: "Sat", value: 30 },
  { day: "Sun", value: 45 },
  { day: "Mon", value: 20 },
  { day: "Tue", value: 60 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 35 },
  { day: "Fri", value: 50 }
];

const awards = [
  { title: "30 DAYS", subtitle: "APRIL MASTER", locked: true },
  { title: "60 DAYS", subtitle: "MAY MASTER", locked: true },
  { title: "90 DAYS", subtitle: "JUNE MASTER", locked: true }
];

const mockHistory = [
  { id: 1, type: "Morning Zen", date: "Today, 08:30 AM", duration: "25 min", calories: "120 kcal" },
  { id: 2, type: "Deep Stretch", date: "Yesterday, 06:15 PM", duration: "40 min", calories: "180 kcal" },
  { id: 3, type: "Power Flow", date: "24 Mar, 07:00 AM", duration: "30 min", calories: "210 kcal" },
];

const pickerMonths = ["November", "December", "January", "February", "March", "April", "May", "June", "July", "August"];
const pickerYears = ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];

export function ProgressScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [age, setAge] = useState(userData.age || "24");
  const [weight, setWeight] = useState(userData.weight || "0");
  const [height, setHeight] = useState(userData.height || "0");
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const startDate = userData.startDate || "2026-01-15";

  const getBMIInfo = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) return { status: "No Data", bmi: "0.0", color: "text-gray-400", description: "Enter weight and height to see your BMI analysis." };
    
    const bmi = w / (h * h);
    if (bmi < 18.5) return { 
      status: "Underweight", 
      bmi: bmi.toFixed(1), 
      color: "text-orange-500",
      description: "Your BMI indicates you are underweight. Focus on nutrient-dense meals and consistent strength-based yoga." 
    };
    if (bmi < 25) return { 
      status: "Normal", 
      bmi: bmi.toFixed(1), 
      color: "text-emerald-500",
      description: "Great job! Your BMI is in the healthy range. Maintain your consistency to stay fit and flexible." 
    };
    if (bmi < 30) return { 
      status: "Overweight", 
      bmi: bmi.toFixed(1), 
      color: "text-orange-600",
      description: "You are slightly above the healthy range. Increasing session frequency can help manage weight effectively." 
    };
    return { 
      status: "Obese", 
      bmi: bmi.toFixed(1), 
      color: "text-red-500",
      description: "Your BMI is in the obese range. Consult with a professional for a personalized fitness and diet plan." 
    };
  };

  const handleSaveChanges = async () => {
    if (!userData.id) return;
    setIsSaving(true);
    try {
      await api.post("/user/update_profile", {
        user_id: userData.id,
        profile: {
          ...userData,
          age,
          weight,
          height,
          dietaryPlan: userData.dietaryPreference // Match backend field name if needed
        }
      });
      updateUserData({ age, weight, height });
      toast.success("Health Data Saved!");
    } catch (error) {
      toast.error("Failed to save data");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (!userData.id) {
      navigate("/welcome");
      return;
    }

    const fetchData = async () => {
      try {
        const [statsRes, activityRes] = await Promise.all([
          api.get(`/user/get_stats/${userData.id}`),
          api.get(`/user/get_activity/${userData.id}`)
        ]);
        setStats(statsRes);
        setActivity(activityRes || []);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userData.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50/50">
        <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
      </div>
    );
  }

  return (
    <WebLayout>
      <div className="min-h-screen bg-transparent pb-32">
        {/* Header */}
        <div className="px-6 pt-12 pb-8 flex flex-col items-center">
          <h1 className="text-[32px] font-black text-[#7C3AED] tracking-tight">
            Activity
          </h1>
        </div>

        {/* Weekly Performance Section */}
        <div className="px-6 mb-8">
          <div className="flex justify-between items-center mb-4 px-2">
            <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">
              Weekly Performance
            </h2>
            <div className="px-3 py-1 bg-purple-100/50 rounded-full">
              <span className="text-[10px] font-black text-purple-600 uppercase tracking-wider">
                Live Data
              </span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/60 backdrop-blur-xl rounded-[40px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50"
          >
            <div className="flex justify-between items-end h-48 gap-2">
              {weekDays.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1 gap-4">
                  <div className="w-full relative flex-1 flex flex-col justify-end">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${item.value}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="w-full bg-[#F3F4F6] rounded-full relative group cursor-pointer"
                    >
                      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E5E7EB] rounded-full group-hover:bg-[#D1D5DB] transition-colors" />
                    </motion.div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-400">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Health Analysis Section */}
        <div className="px-6 mb-8">
          <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] mb-4 px-2">
            Health Analysis
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/60 backdrop-blur-xl rounded-[40px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50"
          >
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Age */}
              <div className="bg-[#FFF7ED] rounded-[32px] p-4 text-center border border-orange-100/50">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-xl">👤</span>
                </div>
                <input 
                  type="text" 
                  maxLength={3}
                  value={age} 
                  onChange={(e) => setAge(e.target.value.replace(/\D/g, '').slice(0, 3))}
                  className="w-full text-center bg-transparent text-xl font-black text-gray-800 focus:outline-none"
                />
                <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mt-1">Age (Yrs)</div>
              </div>

              {/* Weight */}
              <div className="bg-[#F5F3FF] rounded-[32px] p-4 text-center border border-purple-100/50">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-xl">⚖️</span>
                </div>
                <input 
                  type="text" 
                  maxLength={3}
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value.replace(/\D/g, '').slice(0, 3))}
                  className="w-full text-center bg-transparent text-xl font-black text-gray-800 focus:outline-none"
                />
                <div className="text-[10px] font-black text-purple-500 uppercase tracking-widest mt-1">Weight (Kg)</div>
              </div>

              {/* Height */}
              <div className="bg-[#F0F9FF] rounded-[32px] p-4 text-center border border-blue-100/50">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-xl">📏</span>
                </div>
                <input 
                  type="text" 
                  maxLength={3}
                  value={height} 
                  onChange={(e) => setHeight(e.target.value.replace(/\D/g, '').slice(0, 3))}
                  className="w-full text-center bg-transparent text-xl font-black text-gray-800 focus:outline-none"
                />
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mt-1">Height (Cm)</div>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => {
                  if (!weight || !height) {
                    toast.error("Enter weight and height first");
                    return;
                  }
                  setShowAnalysis(!showAnalysis);
                }}
                className="w-full py-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-sm font-black text-[#7C3AED] uppercase tracking-widest hover:bg-gray-50 transition-all"
              >
                {showAnalysis ? "Hide Analysis" : "View Full Analysis"}
              </button>

              <button 
                onClick={handleSaveChanges}
                disabled={isSaving}
                className="w-full py-4 rounded-2xl bg-[#7C3AED] shadow-lg shadow-purple-500/20 text-sm font-black text-white uppercase tracking-widest hover:bg-[#6D28D9] transition-all flex items-center justify-center gap-2"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Changes
              </button>
            </div>

            {showAnalysis && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8 pt-8 border-t border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Health Status</div>
                    <h3 className={`text-2xl font-black ${getBMIInfo().color}`}>{getBMIInfo().status}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Your BMI</div>
                    <div className="text-2xl font-black text-gray-800">{getBMIInfo().bmi}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-3xl p-6 mb-6 border border-purple-100">
                  <p className="text-sm text-purple-900 leading-relaxed font-bold">
                    {getBMIInfo().description}
                  </p>
                </div>

                {/* Sustainability indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sustainability</span>
                    <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest">75% GOOD</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden p-0.5">
                    <div className="h-full w-[75%] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Journey Shot Section */}
        <div className="px-6 mb-8">
          <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] mb-4 px-2">
            Journey Shot
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/60 backdrop-blur-xl rounded-[40px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-white/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#F9FAFB] rounded-3xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-gray-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-600 leading-tight mb-1">Journey Shot Locked</h3>
                <p className="text-xs font-medium text-purple-500">
                  Complete 15 more days streak<br/>to unlock
                </p>
              </div>
            </div>
            
            <button disabled className="w-full bg-[#E5E7EB] text-gray-400 rounded-full py-4 flex items-center justify-center gap-2 font-black tracking-wider transition-colors pointer-events-none">
              <Lock className="w-4 h-4" />
              LOCKED
            </button>
          </motion.div>
        </div>

        {/* Upcoming Awards Section */}
        <div className="px-6 mb-8">
          <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] mb-4 px-2">
            Upcoming Awards
          </h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex-shrink-0 w-[140px] bg-white/60 backdrop-blur-xl rounded-[32px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/50 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-[11px] font-black text-gray-400 mb-0.5 leading-none">
                  {award.title}
                </div>
                <div className="text-[11px] font-black text-gray-900 leading-tight">
                  {award.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Consistency Section */}
        <div className="px-6 mb-12">
          <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] mb-4 px-2">
            Consistency is Key
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/60 backdrop-blur-xl rounded-[40px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-6">
              119-Day Challenge
            </h3>
            
            <div className="flex justify-between items-center mb-8">
              <div className="relative group">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1 group-hover:text-purple-500 transition-colors">Start Date</p>
                <p className="text-sm font-bold text-purple-600">
                  {new Date(startDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
                <input 
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    if (e.target.value) {
                      updateUserData({ startDate: e.target.value });
                      toast.success("Start Date Updated!");
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">End Date</p>
                <p className="text-sm font-bold text-gray-400">May 14, {new Date(startDate).getFullYear()}</p>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-md ${
                    i < 12 ? 'bg-purple-100' : 
                    i === 12 ? 'bg-purple-600 shadow-[0_0_12px_rgba(124,58,237,0.4)]' : 
                    'bg-[#F3F4F6]'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </WebLayout>
  );
}