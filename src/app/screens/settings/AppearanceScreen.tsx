import { ChevronLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function AppearanceScreen() {
  const navigate = useNavigate();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <WebLayout>
      <div className="min-h-screen bg-transparent pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white/60 backdrop-blur-xl border border-white/50">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Appearance</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Display Options */}
        <div className="px-6 pb-2 pt-6">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Display Options
          </h2>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="font-bold">Reduce Motion</h3>
                <p className="text-sm text-gray-500">Minimize animations</p>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input 
                  type="checkbox" 
                  checked={reduceMotion}
                  onChange={() => setReduceMotion(!reduceMotion)}
                  className="sr-only peer" 
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full transition-transform peer-checked:translate-x-5"></div>
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