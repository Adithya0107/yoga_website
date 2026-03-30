import { ChevronRight, Settings, User, Heart, Target, Bell, Palette, Volume2, Shield, Database, HelpCircle, Star, Info, LogOut, FileText, Flame, Clock, Menu, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";
import { WebLayout } from "../components/WebLayout";
import { StatusBar } from "../components/StatusBar";
import { SideMenu } from "../components/SideMenu";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export function ProfileScreen() {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <WebLayout>
    <div className="bg-transparent pb-24 md:pb-0">
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
      <StatusBar  />

      {/* Header */}
      <div className="px-6 pt-6 pb-6 flex items-center justify-between">
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
          Settings
        </h1>
        <button 
          onClick={() => setIsSideMenuOpen(true)}
          className="md:hidden p-2"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Profile Card */}
      <div className="px-6 pb-6">
        <button 
          className="w-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-5 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all"
          onClick={() => navigate("/settings/edit-profile")}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-xl font-bold truncate max-w-[150px]">{userData.name}</h2>
            <p className="text-sm text-gray-500 font-medium">Zen Enthusiast</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Stats */}
      <div className="px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-5 shadow-sm grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-2xl font-bold">{userData.streak}</span>
            </div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">DAY STREAK</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-4 h-4 text-purple-600" />
              <span className="text-2xl font-bold">{userData.minutes}</span>
            </div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">MINUTES</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-4 h-4 text-cyan-500" fill="currentColor" />
              <span className="text-2xl font-bold">{userData.level}</span>
            </div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">LEVEL</div>
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="px-6 pb-2 text-left">
        <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
          ACCOUNT
        </h2>
      </div>

      <div className="px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
          <button 
            className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/edit-profile")}
          >
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Edit Profile</h3>
              <p className="text-sm text-gray-500">Name, photo, bio</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/health-goals")}
          >
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Health Goals</h3>
              <p className="text-sm text-gray-500">Weight, targets</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            className="w-full p-5 flex items-center gap-4 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/profile-details")}
          >
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Profile Details</h3>
              <p className="text-sm text-gray-500">Goals, preferences, stats</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="px-6 pb-2 text-left">
        <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
          PREFERENCES
        </h2>
      </div>

      <div className="px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
          <button 
            className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/notifications")}
          >
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Bell className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Notifications</h3>
              <p className="text-sm text-gray-500">Reminders, alerts</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/appearance")}
          >
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Palette className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Appearance</h3>
              <p className="text-sm text-gray-500">Theme, display</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            className="w-full p-5 flex items-center gap-4 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/sounds-haptics")}
          >
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Volume2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Sounds & Haptics</h3>
              <p className="text-sm text-gray-500">Audio feedback</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Privacy & Security Section */}
      <div className="px-6 pb-2 text-left">
        <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
          PRIVACY & SECURITY
        </h2>
      </div>

      <div className="px-6 pb-6 text-left">
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
          <button 
            className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/security")}
          >
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Security</h3>
              <p className="text-sm text-gray-500">Password, 2FA, devices</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            className="w-full p-5 flex items-center gap-4 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/data-management")}
          >
            <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center flex-shrink-0">
              <Database className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Data Management</h3>
              <p className="text-sm text-gray-500">Export, delete account</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Support Section */}
      <div className="px-6 pb-2 text-left">
        <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
          SUPPORT
        </h2>
      </div>

      <div className="px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
          <button 
            className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/help-faq")}
          >
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Help & FAQ</h3>
              <p className="text-sm text-gray-500">Common questions</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            className="w-full p-5 flex items-center gap-4 border-b border-gray-50 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/rate-app")}
          >
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">Rate the App</h3>
              <p className="text-sm text-gray-500">Share your feedback</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            className="w-full p-5 flex items-center gap-4 hover:bg-transparent transition-colors"
            onClick={() => navigate("/settings/about")}
          >
            <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold">About</h3>
              <p className="text-sm text-gray-500">Version, licenses</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Dangerous Buttons */}
      <div className="px-6 pb-12 space-y-4">
        <button 
          className="w-full bg-white/60 backdrop-blur-xl border border-white/50 text-gray-600 py-5 rounded-3xl font-black uppercase tracking-wider text-sm shadow-sm flex items-center justify-center gap-3 active:scale-95 transition-all border-2 border-transparent hover:border-gray-100"
          onClick={() => navigate("/")}
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
        
        <button 
          className="w-full text-red-500 py-2 font-bold text-sm tracking-tight opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
          onClick={() => navigate("/settings/delete-account")}
        >
          <AlertTriangle className="w-4 h-4" />
          Permanently Delete Account
        </button>

        <p className="text-center text-[10px] font-bold text-gray-300 pointer-events-none mt-4 uppercase">
          ZenForge Fitness App v1.2.4
        </p>
      </div>

    </div>
    </WebLayout>
  );
}