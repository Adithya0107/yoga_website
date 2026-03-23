import { Menu, Clock, Star, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { SideMenu } from "../components/SideMenu";
import { WebLayout } from "../components/WebLayout";
import { useUser } from "../context/UserContext";
import { api } from "../utils/api";
import { toast } from "sonner";

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
            level: stats.level
          });
        }

        if (plans && plans.length > 0) {
          // Flatten poses from all days or just today
          const todayPlan = plans[0]; // Simplified
          const mappedSchedule = todayPlan.poses.map((pose: any, idx: number) => ({
            time: `${7 + idx}:00 AM`, // Mock times
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
      <div className="bg-gray-50 pb-20 md:pb-0">
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 pt-6 pb-4 bg-white md:bg-transparent shrink-0 text-left">
          <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent truncate max-w-[200px] md:max-w-none">
            {userData.name}
          </h1>
          <div className="w-10 md:hidden" /> {/* Spacer */}
        </div>

        {/* Stats Cards */}
        <div className="px-4 md:px-8 pb-6 bg-gray-50">
          <div className="grid grid-cols-3 gap-3">
            {/* Day Streak */}
            <button
              onClick={() => navigate("/consistency")}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left"
            >
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide mb-1">Day Streak</div>
              <div className="text-xl md:text-2xl font-bold">
                {userData.streak} <span className="text-xs md:text-sm text-gray-400 font-normal">Days</span>
              </div>
            </button>

            {/* Total Minutes */}
            <button
              onClick={() => navigate("/progress")}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left"
            >
              <div className="flex items-center gap-1 md:gap-2 mb-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-purple-600 shrink-0" />
                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Total</div>
              </div>
              <div className="text-xl md:text-2xl font-bold">
                {userData.minutes} <span className="text-xs md:text-sm text-gray-400 font-normal">Min</span>
              </div>
            </button>

            {/* Level */}
            <button
              onClick={() => navigate("/progress-detail")}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left"
            >
              <div className="flex items-center gap-1 md:gap-2 mb-1">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-cyan-500 shrink-0" fill="currentColor" />
                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Level</div>
              </div>
              <div className="text-xl md:text-2xl font-bold">
                {userData.level} <span className="text-xs md:text-sm text-gray-400 font-normal">Pro</span>
              </div>
            </button>
          </div>
        </div>

        {/* Activity Calendar */}
        <div className="px-4 md:px-8 pb-6 bg-gray-50">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider">Your Activity</h2>
              <span className="text-xs text-gray-400 uppercase tracking-wider">This Week</span>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 md:gap-2 mb-6">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
                const date = new Date();
                date.setDate(date.getDate() - (date.getDay() - 1) + index);
                const dateStr = date.toISOString().split('T')[0];
                const hasActivity = activity.some(a => a.date === dateStr);
                
                return (
                  <div key={index} className="text-center">
                    <div className="text-[10px] md:text-xs text-gray-400 mb-2">{day}</div>
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm mx-auto ${
                        hasActivity
                          ? 'bg-gradient-to-br from-purple-600 to-purple-400 text-white font-bold'
                          : 'text-gray-300'
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
              className="text-purple-600 font-bold text-sm w-full hover:text-purple-700 transition-colors"
            >
              View All Months
            </button>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="px-4 md:px-8 pb-24 bg-gray-50 text-left">
          <h2 className="text-xl font-black mb-4 uppercase tracking-tight">DAILY SCHEDULE</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm space-y-8">
            {schedule.length > 0 ? schedule.map((item, index) => (
              <div key={index} className="flex items-start gap-4 relative">
                {/* Icon */}
                <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 z-10`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>

                {/* Connector Line */}
                {index < schedule.length - 1 && (
                  <div className="absolute w-0.5 h-10 bg-gray-100 left-6 top-12 -ml-[1px]" />
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className={`text-xs font-bold mb-1 ${item.iconColor}`}>{item.time}</div>
                  <div className="text-sm font-bold text-gray-800">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </div>
              </div>
            )) : (
              <p className="text-gray-400 text-center py-8">No plan generated yet. Go to onboarding to create one!</p>
            )}
          </div>
        </div>

        {/* Side Menu */}
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </WebLayout>
  );
}