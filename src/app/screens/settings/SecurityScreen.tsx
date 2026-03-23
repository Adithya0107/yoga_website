import { ChevronLeft, Menu, Shield, Lock, Smartphone, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function SecurityScreen() {
  const navigate = useNavigate();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignOutOther = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <WebLayout>
      <div className="min-h-screen bg-[#F9FAFB] pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-4 pt-4 pb-6 bg-white shrink-0">
          <button 
            onClick={() => navigate("/profile")} 
            className="w-10 h-10 flex items-center justify-center p-0 -ml-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Security</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Success Toast */}
        {showSuccess && (
          <div className="mx-6 mt-4 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-sm font-bold text-green-700">All other devices signed out</span>
          </div>
        )}

        {/* Password & Authentication Section */}
        <div className="px-6 pb-4 pt-6 text-left">
          <h2 className="text-xs font-bold text-[#9810FA] uppercase tracking-[0.6px] mb-4">
            Password & Authentication
          </h2>
        </div>

        <div className="px-6 pb-6 text-left">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* Change Password */}
            <button className="w-full px-5 py-5 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-[#F3E8FF] rounded-[14px] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#9810FA]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-[-0.44px]">Change Password</h3>
                <p className="text-sm font-medium text-[#6A7282] tracking-[-0.15px]">Update your password</p>
              </div>
              <ChevronLeft className="w-5 h-5 text-[#99A1AF] shrink-0 rotate-180" />
            </button>
            
            <button className="w-full px-5 py-5 flex items-center gap-4 text-left border-t border-gray-50 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-blue-50 rounded-[14px] flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-[-0.44px]">Two-Factor Auth</h3>
                <p className="text-sm font-medium text-[#6A7282] tracking-[-0.15px]">Secure your account access</p>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded-full uppercase">On</div>
            </button>
          </div>
        </div>

        {/* Devices Section */}
        <div className="px-6 pb-4 text-left">
          <h2 className="text-xs font-bold text-[#9810FA] uppercase tracking-[0.6px] mb-4">
            Authorized Devices
          </h2>
        </div>

        <div className="px-6 pb-6 text-left">
          <div className="bg-white rounded-3xl p-5 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-[14px] flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-[-0.44px]">iPhone 15 Pro Max</h3>
                <p className="text-xs font-bold text-[#6A7282] tracking-[-0.15px] uppercase">Current device • Active now</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 opacity-50">
              <div className="w-10 h-10 bg-gray-100 rounded-[14px] flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-[-0.44px]">MacBook Pro M3</h3>
                <p className="text-xs font-bold text-[#6A7282] tracking-[-0.15px] uppercase">Last active: 2 hours ago</p>
              </div>
            </div>

            <button 
              onClick={handleSignOutOther}
              className="w-full h-12 rounded-2xl bg-red-50 text-red-600 font-black text-sm tracking-tight active:scale-95 transition-transform"
            >
              Sign Out All Other Devices
            </button>
          </div>
        </div>

        {/* Save Settings Button */}
        <div className="px-6 pb-8">
          <button 
            className="w-full h-14 bg-gradient-to-r from-[#9810FA] to-[#C27AFF] text-white rounded-full font-black uppercase tracking-[0.55px] text-sm shadow-xl active:scale-95 transition-transform"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Save Security Settings
          </button>
        </div>
      </div>
    </WebLayout>
  );
}