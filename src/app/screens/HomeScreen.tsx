import { Menu, Clock, Star, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { SideMenu } from "../components/SideMenu";
import { WebLayout } from "../components/WebLayout";
import { useUser } from "../context/UserContext";
import { api } from "../utils/api";
import { getDietPlan } from "../utils/dietData";
import { Utensils, Droplet, Info } from "lucide-react";

export function HomeScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [schedule, setSchedule] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activity, setActivity] = useState<any[]>([]);

  useEffect(() => {
    if (!userData.id) {
      navigate("/welcome");
      return;
    }

    const fetchData = async () => {
      try {
        const [stats, plans, activityData] = await Promise.all([
          api.get(`/user/get_stats/${userData.id}`),
          api.get(`/user/plan/${userData.id}`),
          api.get(`/user/get_activity/${userData.id}`)
        ]);

        if (stats) {
          updateUserData({
            streak: stats.streak_days,
            minutes: stats.total_minutes,
            calories: stats.total_calories,
            level: stats.level
          });
        }

        if (plans && plans.length > 0) {
          const todayPlan = plans[0];
          const mappedSchedule = todayPlan.poses.map((pose: any, idx: number) => ({
            time: `${7 + idx}:00 AM`, 
            title: pose.name,
            description: pose.benefits || "Yoga practice",
            icon: "🧘",
            color: idx % 2 === 0 ? "bg-purple-100" : "bg-cyan-100",
            iconColor: idx % 2 === 0 ? "text-purple-600" : "text-cyan-600"
          }));
          setSchedule(mappedSchedule);
        }

        if (activityData) {
          setActivity(activityData);
        }
      } catch (error: any) {
        console.error("Error fetching home data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userData.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
      </div>
    );
  }

  return (
    <WebLayout>
      <div className="pb-20 md:pb-8 pt-6 md:pt-10 px-4 md:px-8 space-y-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between shrink-0 text-left mb-2 md:mb-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-800 drop-shadow-sm">
            Good Morning, <br className="md:hidden" />
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              {userData.name}
            </span>
          </h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Day Streak */}
          <button
            onClick={() => navigate("/consistency")}
            className="bg-white/60 backdrop-blur-xl rounded-[32px] p-6 shadow-sm border border-white/50 hover:shadow-md hover:bg-white/70 transition-all cursor-pointer text-left focus:outline-none"
          >
            <div className="text-[10px] md:text-xs text-purple-600 font-bold uppercase tracking-widest mb-2">Day Streak</div>
            <div className="text-3xl md:text-4xl font-black text-gray-800">
              {userData.streak} <span className="text-sm md:text-base text-gray-500 font-bold ml-1">Days</span>
            </div>
          </button>

          {/* Total Minutes */}
          <button
            onClick={() => navigate("/progress")}
            className="bg-white/60 backdrop-blur-xl rounded-[32px] p-6 shadow-sm border border-white/50 hover:shadow-md hover:bg-white/70 transition-all cursor-pointer text-left focus:outline-none"
          >
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
              <div className="text-[10px] md:text-xs text-cyan-600 font-bold uppercase tracking-widest">Total Time</div>
            </div>
            <div className="text-3xl md:text-4xl font-black text-gray-800">
              {userData.minutes} <span className="text-sm md:text-base text-gray-500 font-bold ml-1">Min</span>
            </div>
          </button>

          {/* Calories */}
          <button
            onClick={() => navigate("/progress-detail")}
            className="bg-white/60 backdrop-blur-xl rounded-[32px] p-6 shadow-sm border border-white/50 hover:shadow-md hover:bg-white/70 transition-all cursor-pointer text-left focus:outline-none"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-[10px] md:text-xs text-orange-600 font-bold uppercase tracking-widest">Calories</div>
            </div>
            <div className="text-3xl md:text-4xl font-black text-gray-800">
              {userData.calories} <span className="text-sm md:text-base text-gray-500 font-bold ml-1">Kcal</span>
            </div>
          </button>
        </div>

        {/* Activity Calendar */}
        <div className="bg-white/60 backdrop-blur-xl rounded-[40px] p-8 shadow-sm border border-white/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-widest">Your Activity</h2>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full">This Week</span>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-8">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
              const date = new Date();
              date.setDate(date.getDate() - (date.getDay() - 1) + index);
              const dateStr = date.toISOString().split('T')[0];
              const hasActivity = activity.some(a => a.date === dateStr);
              
              return (
                <div key={index} className="text-center">
                  <div className="text-xs font-bold text-gray-400 mb-3">{day}</div>
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-[16px] flex items-center justify-center text-sm font-black mx-auto shadow-sm tracking-tighter ${
                      hasActivity
                        ? 'bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-purple-500/20 shadow-md'
                        : 'bg-white/50 text-gray-400 border border-white/60'
                    }`}
                  >
                    {date.getDate()}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => navigate("/consistency")}
            className="text-purple-600 font-bold text-sm w-full hover:text-purple-700 transition-colors py-2"
          >
            View All Months
          </button>

          {/* Daily Activity Log */}
          {activity.length > 0 && (
            <div className="mt-8 space-y-3">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 pl-1">Recent Activity</h3>
              {activity.slice(0, 3).map((act, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/40 p-5 rounded-[28px] border border-white/60">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-800">
                        {new Date(act.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                      </div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{act.status}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-gray-800">{act.minutes} <span className="text-[10px] text-gray-400 font-bold ml-1">MIN</span></div>
                    <div className="text-sm font-black text-orange-500">{act.calories || 0} <span className="text-[10px] text-gray-400 font-bold ml-1">KCAL</span></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* Personalized Diet Plan */}
        <div className="pt-4 text-left">
          <div className="flex items-center justify-between mb-6 pl-2">
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-800">Diet Plan</h2>
            <div className={`px-4 py-1.5 rounded-full border ${
              userData.dietaryPreference === 'Non-Vegetarian' 
                ? 'bg-red-100 border-red-200' 
                : userData.dietaryPreference === 'Both'
                ? 'bg-blue-100 border-blue-200'
                : 'bg-green-100 border-green-200'
            }`}>
              <span className={`text-xs font-black uppercase tracking-widest ${
                userData.dietaryPreference === 'Non-Vegetarian' 
                  ? 'text-red-600' 
                  : userData.dietaryPreference === 'Both'
                  ? 'text-blue-600'
                  : 'text-green-600'
              }`}>
                {userData.dietaryPreference || 'Vegetarian'}
              </span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-xl rounded-[40px] p-8 shadow-sm border border-white/50 space-y-8">
            {getDietPlan(userData.goal, userData.dietaryPreference).map((diet, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-green-50 rounded-[20px] flex items-center justify-center shrink-0 border border-green-100">
                    <Utensils className="w-7 h-7 text-green-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-xs font-black text-green-600 uppercase tracking-widest mb-1">{diet.time}</div>
                    <div className="text-lg font-black text-gray-800 mb-2">{diet.name}</div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {diet.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-gray-600 border border-gray-100 shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>

                    {diet.juices && diet.juices.length > 0 && (
                      <div className="flex items-center gap-2 mt-2 bg-blue-50/50 p-3 rounded-2xl border border-blue-100">
                        <Droplet className="w-4 h-4 text-blue-500" />
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-wider">Juices:</span>
                        <span className="text-xs font-bold text-blue-700">{diet.juices.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
                {idx < getDietPlan(userData.goal, userData.dietaryPreference).length - 1 && (
                  <div className="absolute left-7 top-14 bottom-[-32px] w-[1px] bg-gray-100" />
                )}
              </div>
            ))}

            <div className="mt-6 p-6 bg-purple-50 rounded-3xl border border-purple-100 flex items-start gap-4">
              <Info className="w-6 h-6 text-purple-600 shrink-0" />
              <div>
                <p className="text-xs font-black text-purple-600 uppercase tracking-wider mb-1">Coach Note</p>
                <p className="text-sm text-purple-800 font-medium italic">
                  "This plan is optimized for {userData.goal || 'Flexibility'}. Stay hydrated and listen to your body!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Menu */}
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </WebLayout>
  );
}