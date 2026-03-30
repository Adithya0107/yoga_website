import { Clock, Activity, Lock, Battery } from "lucide-react";
import { useNavigate } from "react-router";
import { WebLayout } from "../components/WebLayout";
import { StatusBar } from "../components/StatusBar";

export function ProgressDetailScreen() {
  const navigate = useNavigate();

  return (
    <WebLayout>
    <div className="min-h-screen bg-transparent pb-24 md:pb-0">
      <StatusBar  />

      {/* Recovery Focus Banner */}
      <div className="px-6 pt-6 pb-6">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-5 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Battery className="w-6 h-6 text-cyan-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                RECOVERY FOCUS
              </div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/50 px-3 py-1 rounded-full">
                <span className="text-xs font-bold uppercase tracking-wider">ACTIVE REST</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Your body needs a low-impact day. We suggest a 'Restorative Flow' to maintain you...
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold mb-1">0</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">TOTAL MINS</div>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <Activity className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold mb-1">0</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">SESSIONS</div>
          </div>
        </div>
      </div>

      {/* Weekly Performance */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            WEEKLY PERFORMANCE
          </h2>
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
            REAL-TIME DATA
          </span>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm">
          <div className="flex items-end justify-between gap-2 h-48 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-full bg-transparent rounded-lg" style={{ height: '100%' }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <span key={index}>{day}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Awards */}
      <div className="px-6 pb-6">
        <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
          UPCOMING AWARDS
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {['30 DAYS', '60 DAYS', '90 DAYS'].map((award, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-gray-300" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {award}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom navigation removed (not used) */}
    </div>
    </WebLayout>
  );
}