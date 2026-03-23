import { ChevronLeft, Bell, Calendar, Trophy, Heart, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function NotificationsScreen() {
  const navigate = useNavigate();
  const [reminders, setReminders] = useState(true);
  const [achievements, setAchievements] = useState(true);
  const [tips, setTips] = useState(false);
  const [streaks, setStreaks] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <WebLayout>
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Notifications</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Practice Reminders */}
        <div className="px-6 pb-2 pt-6">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Practice Reminders
          </h2>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold">Daily Reminders</h3>
                  <p className="text-sm text-gray-500">Get practice notifications</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={reminders}
                  onChange={() => setReminders(!reminders)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>

            {reminders && (
              <div className="p-5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Reminder Time
                </label>
                <input
                  type="time"
                  defaultValue="09:00"
                  className="w-full bg-gray-50 rounded-2xl px-5 py-3 text-base border-2 border-transparent focus:border-purple-600 outline-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Activity Notifications */}
        <div className="px-6 pb-2">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Activity Updates
          </h2>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold">Achievements</h3>
                  <p className="text-sm text-gray-500">Milestones & badges</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={achievements}
                  onChange={() => setAchievements(!achievements)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-5 border-b border-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold">Streak Updates</h3>
                  <p className="text-sm text-gray-500">Daily consistency alerts</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={streaks}
                  onChange={() => setStreaks(!streaks)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold">Wellness Tips</h3>
                  <p className="text-sm text-gray-500">Health insights</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={tips}
                  onChange={() => setTips(!tips)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="px-6 pt-2 pb-8">
          <button 
            className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg"
            onClick={() => navigate("/profile")}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </WebLayout>
  );
}
