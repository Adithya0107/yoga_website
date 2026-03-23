import { useNavigate, useSearchParams } from "react-router";
import { ChevronLeft, Maximize2, Volume2, Settings, Subtitles, Play, Minimize2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { useState } from "react";

// Mapping of program titles to Google Drive video IDs
const videoDriveIds: Record<string, string> = {
  "Morning Weight Loss Yoga": "1CiJ6OinOB4G9LUG3ZkXaC8subZXgQM2E",
  "Foundation Strength": "1NnQLYTBl3C9t0NkAEXcqZPj0VFC8hJZo",
  "Gentle Flexibility": "1T21K7CixthBs9J5F_fLAga2yueuHjTFo",
  "Evening Zen": "1QvLRSotpOiCH3D-wUemnqSPs6abXBusZ",
  "Pranayama Basics": "1ppW-d5X-0evOcBRZz1MrWOE74zq-POAz",
  "Power Vinyasa Flow": "1kpGopYGwHxQpx83Ketpm_lvUj8yeieSu",
  "Core & Balance Lab": "1QvLRSotpOiCH3D-wUemnqSPs6abXBusZ",
  "Flow and Lengthen": "1fXbMVcUUgMq4K1lpWmrRFy38XhxT23iX",
  "Inner Harmonic Yoga": "1gyS-zxUysZ-OVD0Q94GLiCTYUemOJiuM",
  "Active Breath Mastery": "1BUba8mjqXV-3QfMlTim2JyH4G18kGQen",
  "Metabolic HIIT Yoga": "1ntlkiWYpGwP3sXNFrVCuY_DSxP7bWVe_",
  "Advanced Arm Balances": "1SC7OFBaESJNqEbTpOa34Xkk1HZ_fHmLh",
  "Full Body Alchemy": "1Grz2n0TneGYl2R2htn_ugB4IZYhehzzk",
  "Meditation in Motion": "1wvH_6juWJqw9swPVSPPBr6RFv9whObkl",
  "Virtual Energy Unlock Yoga": "1tYdJ8kELN3qK1itLfip8Dbe1w6Nx7ZxS",
  "Vinyasa Flow": "1kpGopYGwHxQpx83Ketpm_lvUj8yeieSu",
  "Hatha Yoga": "157ViROKwiFTJXTBD_35ncqNLCR5RvQj4",
  "Power Yoga": "1SC7OFBaESJNqEbTpOa34Xkk1HZ_fHmLh",
  "Restorative Yoga": "12UL49_OAIGluZsmQ0Y_9uNbke1LLkYBd",
  "Yin Yoga Relief": "13JtAsmLgX6NUyzupEd-GyWCyQ1rw-oNw"
};

const sessionDetails: Record<string, any> = {
  "Morning Weight Loss Yoga": {
    calories: 0,
    intensity: "BEGINNER",
    goal: "10m",
    duration: "10:00",
    benefits: "Flexibility & Peace",
    focus: "Breathing",
    music: "Zen Ambient",
    currentFocus: "Sun Salutation A",
    currentDuration: "300s"
  },
  "Foundation Strength": {
    calories: 0,
    intensity: "BEGINNER",
    goal: "15m",
    duration: "15:00",
    benefits: "Strength Building",
    focus: "Core Stability",
    music: "Calm Focus",
    currentFocus: "Warrior Poses",
    currentDuration: "360s"
  },
  "Gentle Flexibility": {
    calories: 0,
    intensity: "BEGINNER",
    goal: "12m",
    duration: "12:00",
    benefits: "Increased Flexibility",
    focus: "Stretching",
    music: "Soft Piano",
    currentFocus: "Forward Folds",
    currentDuration: "240s"
  },
  "Evening Zen": {
    calories: 0,
    intensity: "BEGINNER",
    goal: "10m",
    duration: "10:00",
    benefits: "Relaxation & Sleep",
    focus: "Meditation",
    music: "Night Sounds",
    currentFocus: "Body Scan",
    currentDuration: "300s"
  },
  "Pranayama Basics": {
    calories: 0,
    intensity: "BEGINNER",
    goal: "8m",
    duration: "8:00",
    benefits: "Breath Control",
    focus: "Pranayama",
    music: "Ambient Waves",
    currentFocus: "Alternate Nostril",
    currentDuration: "180s"
  },
  "Power Vinyasa Flow": {
    calories: 0,
    intensity: "INTERMEDIATE",
    goal: "20m",
    duration: "20:00",
    benefits: "Cardio & Strength",
    focus: "Dynamic Flow",
    music: "Upbeat Rhythm",
    currentFocus: "Vinyasa Sequence",
    currentDuration: "420s"
  },
  "Core & Balance Lab": {
    calories: 0,
    intensity: "INTERMEDIATE",
    goal: "18m",
    duration: "18:00",
    benefits: "Core Strength",
    focus: "Balance",
    music: "Focus Beat",
    currentFocus: "Plank Variations",
    currentDuration: "380s"
  },
  "Flow and Lengthen": {
    calories: 0,
    intensity: "INTERMEDIATE",
    goal: "22m",
    duration: "22:00",
    benefits: "Flexibility Flow",
    focus: "Lengthening",
    music: "Smooth Jazz",
    currentFocus: "Hip Openers",
    currentDuration: "450s"
  },
  "Inner Harmonic Yoga": {
    calories: 0,
    intensity: "INTERMEDIATE",
    goal: "25m",
    duration: "25:00",
    benefits: "Mind-Body Balance",
    focus: "Harmony",
    music: "Crystal Bowls",
    currentFocus: "Mindful Movement",
    currentDuration: "500s"
  },
  "Active Breath Mastery": {
    calories: 0,
    intensity: "INTERMEDIATE",
    goal: "15m",
    duration: "15:00",
    benefits: "Advanced Breathing",
    focus: "Pranayama",
    music: "Tibetan Chants",
    currentFocus: "Kapalabhati",
    currentDuration: "320s"
  },
  "Metabolic HIIT Yoga": {
    calories: 0,
    intensity: "ADVANCED",
    goal: "30m",
    duration: "30:00",
    benefits: "Fat Burning",
    focus: "High Intensity",
    music: "Power Beats",
    currentFocus: "Jump Sequences",
    currentDuration: "600s"
  },
  "Advanced Arm Balances": {
    calories: 0,
    intensity: "ADVANCED",
    goal: "28m",
    duration: "28:00",
    benefits: "Upper Body Strength",
    focus: "Arm Balances",
    music: "Motivational",
    currentFocus: "Crow to Crane",
    currentDuration: "580s"
  },
  "Full Body Alchemy": {
    calories: 0,
    intensity: "ADVANCED",
    goal: "35m",
    duration: "35:00",
    benefits: "Total Transformation",
    focus: "Full Body",
    music: "Energetic Flow",
    currentFocus: "Complex Transitions",
    currentDuration: "700s"
  },
  "Meditation in Motion": {
    calories: 0,
    intensity: "ADVANCED",
    goal: "26m",
    duration: "26:00",
    benefits: "Moving Meditation",
    focus: "Mindfulness",
    music: "Ethereal Sounds",
    currentFocus: "Slow Flow",
    currentDuration: "540s"
  },
  "Virtual Energy Unlock Yoga": {
    calories: 0,
    intensity: "ADVANCED",
    goal: "32m",
    duration: "32:00",
    benefits: "Energy Activation",
    focus: "Chakra Work",
    music: "Frequency Healing",
    currentFocus: "Kundalini Activation",
    currentDuration: "640s"
  }
};

export function VideoPlayerScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Morning Weight Loss Yoga";
  const level = searchParams.get("level") || "beginner";
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const driveId = videoDriveIds[title] || videoDriveIds["Morning Weight Loss Yoga"];
  const details = sessionDetails[title] || sessionDetails["Morning Weight Loss Yoga"];

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <StatusBar  className="bg-white" />

      {!isFullscreen ? (
        <>
          {/* Header */}
          <div className="bg-white px-6 py-4 flex items-center justify-between">
            <button 
              onClick={() => navigate("/styles")}
              className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-purple-600" />
            </button>
            <div className="flex-1 text-center">
              <h1 className="text-sm font-black text-purple-600 uppercase tracking-wide">
                {title}
              </h1>
              <p className="text-xs text-gray-400">Session Activity</p>
            </div>
            <div className="w-10" />
          </div>

          {/* Video Player */}
          <div className="bg-white px-2 pt-2">
            <div className="relative bg-black rounded-xl overflow-hidden" style={{ height: "240px" }}>
              <iframe
                src={`https://drive.google.com/file/d/${driveId}/preview`}
                className="w-full h-full"
                allow="autoplay"
                title={title}
              />
              <button 
                onClick={toggleFullscreen}
                className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
              >
                <Maximize2 className="w-4 h-4 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 text-white text-sm font-bold flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="2"/>
                </svg>
                00:00
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white px-6 py-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-orange-500 font-bold uppercase mb-1 flex items-center gap-1">
                🔥 Calories
              </p>
              <p className="text-2xl font-black text-purple-600">{details.calories}</p>
            </div>
            <div>
              <p className="text-xs text-purple-500 font-bold uppercase mb-1 flex items-center gap-1">
                📊 Intensity
              </p>
              <p className="text-2xl font-black text-purple-600">{details.intensity}</p>
            </div>
            <div>
              <p className="text-xs text-green-500 font-bold uppercase mb-1 flex items-center gap-1">
                🎯 Goal
              </p>
              <p className="text-2xl font-black text-purple-600">{details.goal}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-purple-400 font-bold">0% COMPLETED</p>
              <p className="text-xs text-purple-400 font-bold">{details.duration}</p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
            </div>
          </div>

          {/* Class Details */}
          <div className="bg-white px-6 pb-6 text-left">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-wide mb-4">
              Class Details
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-xs text-purple-400 font-bold uppercase mb-1">Benefits</p>
                <p className="text-sm font-bold text-purple-600">{details.benefits}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-purple-400 font-bold uppercase mb-1">Focus</p>
                <p className="text-sm font-bold text-purple-600">{details.focus}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-purple-400 font-bold uppercase mb-1">Music</p>
                <p className="text-sm font-bold text-purple-600">{details.music}</p>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className="bg-white px-6 pb-6">
            <div className="bg-purple-50 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-bold uppercase">Current Focus</p>
                  <p className="text-base font-black text-purple-600">{details.currentFocus}</p>
                </div>
              </div>
              <p className="text-sm font-bold text-purple-400">{details.currentDuration}</p>
            </div>
          </div>

          {/* Start Button */}
          <div className="bg-white px-6 pb-8 flex items-center gap-4">
            <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-4 rounded-full font-black text-base uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg">
              <Play className="w-5 h-5 fill-current" />
              Start Practice
            </button>
            <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
              </svg>
            </button>
          </div>
        </>
      ) : (
        /* Fullscreen Video Player */
        <div className="fixed inset-0 bg-black z-50">
          <div className="relative w-full h-full">
            <iframe
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              className="w-full h-full"
              allow="autoplay"
              title={title}
            />
            
            {/* Top Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <button 
                onClick={toggleFullscreen}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Center Play Controls */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-16">
              <button className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  <span className="text-white text-xs mt-1">10</span>
                </div>
              </button>
              <button className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="black">
                  <rect x="8" y="6" width="4" height="20" rx="1"/>
                  <rect x="20" y="6" width="4" height="20" rx="1"/>
                </svg>
              </button>
              <button className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  <span className="text-white text-xs mt-1">10</span>
                </div>
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-4 px-4">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-white rounded-full" />
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <rect x="6" y="4" width="4" height="16" rx="1"/>
                      <rect x="14" y="4" width="4" height="16" rx="1"/>
                    </svg>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-xl">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                    <span className="text-white text-sm font-bold">2:24 / 14:00</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Subtitles className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1x</span>
                  </button>
                  <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Time Display */}
              <div className="mt-4 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  <span>00:00</span>
                </div>
                <span>-11:35</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}