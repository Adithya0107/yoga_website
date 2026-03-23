import { Flame, MoreVertical, Ruler } from "lucide-react";
import { useNavigate } from "react-router";
import { WebLayout } from "../components/WebLayout";

export function ConsistencyScreen() {
  const navigate = useNavigate();

  // Create 91 day grid
  const days = Array.from({ length: 91 }, (_, i) => i);

  return (
    <WebLayout>
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
      {/* Title */}
      <div className="px-6 pt-6 pb-2">
        <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
          CONSISTENCY IS KEY
        </h2>
      </div>

      {/* Consistency Card */}
      <div className="px-6 pt-4 pb-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h1 className="text-2xl font-black mb-6">Consistency is Key!</h1>

          {/* Date Range */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">START DATE</div>
              <div className="text-lg font-bold text-purple-600">8 Dec 2025</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">END DATE</div>
              <div className="text-lg font-bold text-purple-600">8 Mar 2026</div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-13 gap-1.5 mb-4">
            {days.map((day) => (
              <div 
                key={day} 
                className="aspect-square bg-gray-100 rounded"
              />
            ))}
          </div>

          {/* Progress */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">0 / 91 Days Completed</span>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-orange-500">Keep going!</span>
            </div>
          </div>
        </div>
      </div>

      {/* 15 Days Performance */}
      <div className="px-6 pb-6">
        <h2 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
          15 DAYS PERFORMANCE
        </h2>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Age */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👤</span>
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">AGE</div>
              <div className="flex items-center justify-center gap-2">
                <MoreVertical className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold">YRS</span>
              </div>
            </div>

            {/* Weight */}
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚖️</span>
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">WEIGHT</div>
              <div className="text-2xl font-bold">76 <span className="text-sm">KG</span></div>
            </div>

            {/* Height */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Ruler className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">HEIGHT</div>
              <div className="flex items-center justify-center gap-2">
                <MoreVertical className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold">CM</span>
              </div>
            </div>
          </div>

          {/* Health Status */}
          <div className="border-t border-gray-100 pt-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  HEALTH STATUS
                </div>
                <h3 className="text-2xl font-bold text-purple-600">Underweight</h3>
              </div>
              {/* Progress Circle */}
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="175.93"
                    strokeDashoffset="70.37"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold">60%</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Based on your BMI of 2.4 and 0 day consistency, your flexibility is excellent. Your recovery rate is 60% optimal.
            </p>

            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg">
              View Full Analysis
            </button>
          </div>
        </div>
      </div>

      {/* Bottom navigation removed (not used) */}
    </div>
    </WebLayout>
  );
}