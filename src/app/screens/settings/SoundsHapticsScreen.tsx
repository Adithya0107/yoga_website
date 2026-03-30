import { ChevronLeft, Volume2, VolumeX, Vibrate, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function SoundsHapticsScreen() {
  const navigate = useNavigate();
  const [soundEffects, setSoundEffects] = useState(true);
  const [voiceGuidance, setVoiceGuidance] = useState(true);
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [haptics, setHaptics] = useState(true);
  const [volume, setVolume] = useState(70);
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
          <h1 className="text-2xl font-black">Sounds & Haptics</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="px-6 pb-6 pt-6">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Master Volume</h3>
                <p className="text-sm text-gray-500">Adjust overall sound level</p>
              </div>
              <span className="text-lg font-bold text-purple-600">{volume}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-purple-600"
            />
          </div>
        </div>

        {/* Sound Settings */}
        <div className="px-6 pb-2">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Sound Settings
          </h2>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">Sound Effects</h3>
                  <p className="text-sm text-gray-500">Button clicks, transitions</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={soundEffects}
                  onChange={() => setSoundEffects(!soundEffects)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-5 border-b border-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold">Voice Guidance</h3>
                  <p className="text-sm text-gray-500">Instructor audio cues</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={voiceGuidance}
                  onChange={() => setVoiceGuidance(!voiceGuidance)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  {backgroundMusic ? <Volume2 className="w-5 h-5 text-purple-600" /> : <VolumeX className="w-5 h-5 text-purple-600" />}
                </div>
                <div>
                  <h3 className="font-bold">Background Music</h3>
                  <p className="text-sm text-gray-500">Ambient session music</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={backgroundMusic}
                  onChange={() => setBackgroundMusic(!backgroundMusic)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Haptic Feedback */}
        <div className="px-6 pb-2">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Haptic Feedback
          </h2>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Vibrate className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold">Vibration</h3>
                  <p className="text-sm text-gray-500">Tactile feedback</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-7">
                <input
                  type="checkbox"
                  checked={haptics}
                  onChange={() => setHaptics(!haptics)}
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
