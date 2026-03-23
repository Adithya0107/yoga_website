import { User, Star, Settings, Share2, LogOut, Calendar, X, ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { StatusBar } from "./StatusBar";
import { useUser } from "../context/UserContext";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useUser();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const isActive = (path: string) => {
    if (path === "/profile" && (location.pathname === "/profile" || location.pathname.startsWith("/settings"))) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Menu */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <StatusBar  />

        {/* Header/Back Button */}
        <div className="px-6 pt-4 pb-6 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center p-0 -ml-2 text-gray-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={onClose} className="p-2 -mr-2">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-purple-600 mb-2">{userData.name}</h2>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{userData.age || "18-24"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="10" height="9" rx="1"/>
                    <path d="M5 2v4M11 2v4"/>
                  </svg>
                  <span>March 2026</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleNavigate("/settings/edit-profile")}
              className="text-purple-600 font-bold text-sm"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-6 space-y-6">
          <button 
            onClick={() => handleNavigate("/profile")}
            className={`flex items-center gap-4 w-full text-left p-3 rounded-2xl transition-all ${
              isActive("/profile") ? 'bg-purple-50 text-purple-600' : 'text-gray-400'
            }`}
          >
            <User className={`w-6 h-6 ${isActive("/profile") ? 'text-purple-600' : 'text-gray-400'}`} />
            <span className="text-lg font-bold">Profile</span>
          </button>

          <button 
            onClick={() => handleNavigate("/settings/rate-app")}
            className={`flex items-center gap-4 w-full text-left p-3 rounded-2xl transition-all ${
              isActive("/settings/rate-app") ? 'bg-purple-50 text-purple-600' : 'text-gray-400'
            }`}
          >
            <Star className={`w-6 h-6 ${isActive("/settings/rate-app") ? 'text-purple-600' : 'text-gray-400'}`} />
            <span className="text-lg font-bold">Rate Us</span>
          </button>

          <button 
            onClick={() => handleNavigate("/profile")}
            className={`flex items-center gap-4 w-full text-left p-3 rounded-2xl transition-all ${
              isActive("/settings") ? 'bg-purple-50 text-purple-600' : 'text-gray-400'
            }`}
          >
            <Settings className={`w-6 h-6 ${isActive("/settings") ? 'text-purple-600' : 'text-gray-400'}`} />
            <span className="text-lg font-bold">Settings</span>
          </button>

          <button className="flex items-center gap-4 w-full text-left p-3 rounded-2xl text-gray-400">
            <Share2 className="w-6 h-6 text-gray-400" />
            <span className="text-lg font-bold">Share App</span>
          </button>

          <div className="mt-8 pt-8 border-t border-gray-50">
            <button 
              onClick={() => handleNavigate("/sign-in")}
              className="flex items-center gap-4 w-full text-left p-3 rounded-2xl text-red-500"
            >
              <LogOut className="w-6 h-6 text-red-500" />
              <span className="text-lg font-bold">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
