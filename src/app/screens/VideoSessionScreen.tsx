import { useState, useEffect, useRef } from "react";
import { ChevronLeft, Maximize2, Minimize2, Trash2, Play, Pause, Volume2, SkipBack, SkipForward } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { useNavigate, useParams } from "react-router";
import { WebLayout } from "../components/WebLayout";
import { useUser } from "../context/UserContext";
import { api } from "../utils/api";
import { toast } from "sonner";

interface SessionData {
  id: string;
  title: string;
  duration: number; // in minutes
  intensity: string;
  videoUrl: string;
  caloriesPerMinute: number;
  benefits: string;
  focus: string;
  music: string;
  currentFocus: string;
}

const sessionDatabase: { [key: string]: SessionData } = {
  // BEGINNER
  "morning-weight-loss": {
    id: "morning-weight-loss",
    title: "Morning Weight Loss Yoga",
    duration: 15,
    intensity: "BEGINNER",
    videoUrl: "https://drive.google.com/file/d/1CiJ6OinOB4G9LUG3ZkXaC8subZXgQM2E/preview",
    caloriesPerMinute: 5.5,
    benefits: "Weight Loss & Energy",
    focus: "Flow",
    music: "Morning Vibes",
    currentFocus: "Sun Salutations"
  },
  "foundation-strength": {
    id: "foundation-strength",
    title: "Foundation Strength",
    duration: 20,
    intensity: "BEGINNER",
    videoUrl: "https://drive.google.com/file/d/1NnQLYTBl3C9t0NkAEXcqZPj0VFC8hJZo/preview",
    caloriesPerMinute: 6.0,
    benefits: "Stability & Core",
    focus: "Strength",
    music: "Steady Beats",
    currentFocus: "Warrior Series"
  },
  "gentle-flexibility": {
    id: "gentle-flexibility",
    title: "Gentle Flexibility",
    duration: 12,
    intensity: "BEGINNER",
    videoUrl: "https://drive.google.com/file/d/1T21K7CixthBs9J5F_fLAga2yueuHjTFo/preview",
    caloriesPerMinute: 3.5,
    benefits: "Mobility & Ease",
    focus: "Stretching",
    music: "Calm Winds",
    currentFocus: "Hip Openers"
  },
  "evening-zen": {
    id: "evening-zen",
    title: "Evening Zen",
    duration: 18,
    intensity: "BEGINNER",
    videoUrl: "https://drive.google.com/file/d/1QvLRSotpOiCH3D-wUemnqSPs6abXBusZ/preview",
    caloriesPerMinute: 3.0,
    benefits: "Stress Relief & Sleep",
    focus: "Relaxation",
    music: "Night Ambient",
    currentFocus: "Forward Folds"
  },
  "pranayama-basics": {
    id: "pranayama-basics",
    title: "Pranayama Basics",
    duration: 10,
    intensity: "BEGINNER",
    videoUrl: "https://drive.google.com/file/d/1ppW-d5X-0evOcBRZz1MrWOE74zq-POAz/preview",
    caloriesPerMinute: 2.0,
    benefits: "Lung Capacity & Focus",
    focus: "Breath",
    music: "Pure Silence",
    currentFocus: "Alternate Nostril"
  },
  // INTERMEDIATE
  "power-vinyasa": {
    id: "power-vinyasa",
    title: "Power Vinyasa Flow",
    duration: 30,
    intensity: "INTERMEDIATE",
    videoUrl: "https://drive.google.com/file/d/1kpGopYGwHxQpx83Ketpm_lvUj8yeieSu/preview",
    caloriesPerMinute: 8.5,
    benefits: "Cardio & Strength",
    focus: "Dynamic",
    music: "Power Beats",
    currentFocus: "Vinyasa Krama"
  },
  "core-balance-lab": {
    id: "core-balance-lab",
    title: "Core & Balance Lab",
    duration: 25,
    intensity: "INTERMEDIATE",
    videoUrl: "https://drive.google.com/file/d/1QvLRSotpOiCH3D-wUemnqSPs6abXBusZ/preview",
    caloriesPerMinute: 7.5,
    benefits: "Abs & Equilibrium",
    focus: "Core",
    music: "Electronic Zen",
    currentFocus: "Plank Variations"
  },
  "flow-lengthen": {
    id: "flow-lengthen",
    title: "Flow and Lengthen",
    duration: 22,
    intensity: "INTERMEDIATE",
    videoUrl: "https://drive.google.com/file/d/1fXbMVcUUgMq4K1lpWmrRFy38XhxT23iX/preview",
    caloriesPerMinute: 6.5,
    benefits: "Long Lean Muscles",
    focus: "Alignment",
    music: "Flow State",
    currentFocus: "Triangle Sequence"
  },
  "inner-harmonic": {
    id: "inner-harmonic",
    title: "Inner Harmonic Yoga",
    duration: 28,
    intensity: "INTERMEDIATE",
    videoUrl: "https://drive.google.com/file/d/1gyS-zxUysZ-OVD0Q94GLiCTYUemOJiuM/preview",
    caloriesPerMinute: 5.0,
    benefits: "Mental Clarity",
    focus: "Mindfulness",
    music: "Harmonic Bowls",
    currentFocus: "Balance Flow"
  },
  "active-breath-mastery": {
    id: "active-breath-mastery",
    title: "Active Breath Mastery",
    duration: 15,
    intensity: "INTERMEDIATE",
    videoUrl: "https://drive.google.com/file/d/1BUba8mjqXV-3QfMlTim2JyH4G18kGQen/preview",
    caloriesPerMinute: 4.5,
    benefits: "Endurance & Control",
    focus: "Breathwork",
    music: "Rhythmic Flow",
    currentFocus: "Kumbhaka"
  },
  // ADVANCED
  "metabolic-hiit": {
    id: "metabolic-hiit",
    title: "Metabolic HIIT Yoga",
    duration: 40,
    intensity: "ADVANCED",
    videoUrl: "https://drive.google.com/file/d/1ntlkiWYpGwP3sXNFrVCuY_DSxP7bWVe_/preview",
    caloriesPerMinute: 12.0,
    benefits: "Fat Burn & Agility",
    focus: "HIIT",
    music: "High Intensity",
    currentFocus: "Yoga Burpees"
  },
  "advance-arm-balanced": {
    id: "advance-arm-balanced",
    title: "Advanced Arm Balances",
    duration: 35,
    intensity: "ADVANCED",
    videoUrl: "https://drive.google.com/file/d/1SC7OFBaESJNqEbTpOa34Xkk1HZ_fHmLh/preview",
    caloriesPerMinute: 10.0,
    benefits: "Upper Body Mastery",
    focus: "Arm Balances",
    music: "Focus Beats",
    currentFocus: "Crow to Handstand"
  },
  "full-body-alchemy": {
    id: "full-body-alchemy",
    title: "Full Body Alchemy",
    duration: 45,
    intensity: "ADVANCED",
    videoUrl: "https://drive.google.com/file/d/1Grz2n0TneGYl2R2htn_ugB4IZYhehzzk/preview",
    caloriesPerMinute: 9.5,
    benefits: "Total Transformation",
    focus: "Full Body",
    music: "Alchemy Mix",
    currentFocus: "Peak Pose"
  },
  "meditation-motion": {
    id: "meditation-motion",
    title: "Meditation in Motion",
    duration: 50,
    intensity: "ADVANCED",
    videoUrl: "https://drive.google.com/file/d/1wvH_6juWJqw9swPVSPPBr6RFv9whObkl/preview",
    caloriesPerMinute: 5.0,
    benefits: "Deep Spiritual Connection",
    focus: "Spirit",
    music: "Ethereal Journey",
    currentFocus: "Slow Flow"
  },
  "virtual-energy-unlock": {
    id: "virtual-energy-unlock",
    title: "Virtual Energy Unlock Yoga",
    duration: 30,
    intensity: "ADVANCED",
    videoUrl: "https://drive.google.com/file/d/1tYdJ8kELN3qK1itLfip8Dbe1w6Nx7ZxS/preview",
    caloriesPerMinute: 8.0,
    benefits: "Chakra Alignment",
    focus: "Energy",
    music: "Vibrational Tones",
    currentFocus: "Kundalini Flow"
  },
  // FOCUS SPECIALIZED
  "vinyasa-flow-focus": {
    id: "vinyasa-flow-focus",
    title: "Vinyasa Flow",
    duration: 30,
    intensity: "INTERMEDIATE",
    videoUrl: "https://drive.google.com/file/d/1kpGopYGwHxQpx83Ketpm_lvUj8yeieSu/preview",
    caloriesPerMinute: 8.0,
    benefits: "Cardio & Strength",
    focus: "Movement",
    music: "Dynamic Flow",
    currentFocus: "Warrior Flow"
  },
  "hatha-yoga-focus": {
    id: "hatha-yoga-focus",
    title: "Hatha Yoga",
    duration: 45,
    intensity: "BEGINNER",
    videoUrl: "https://drive.google.com/file/d/157ViROKwiFTJXTBD_35ncqNLCR5RvQj4/preview",
    caloriesPerMinute: 4.5,
    benefits: "Balance & Discipline",
    focus: "Static Holds",
    music: "Classic Sitar",
    currentFocus: "Tree Pose"
  },
  "power-yoga-focus": {
    id: "power-yoga-focus",
    title: "Power Yoga",
    duration: 40,
    intensity: "ADVANCED",
    videoUrl: "https://drive.google.com/file/d/1SC7OFBaESJNqEbTpOa34Xkk1HZ_fHmLh/preview",
    caloriesPerMinute: 11.0,
    benefits: "Muscle Tone",
    focus: "Strength",
    music: "Heavy Zen",
    currentFocus: "Arm Balance Lab"
  },
  "restorative-yoga-focus": {
    id: "restorative-yoga-focus",
    title: "Restorative Yoga",
    duration: 60,
    intensity: "BEGINNER",
    videoUrl: "https://drive.google.com/file/d/12UL49_OAIGluZsmQ0Y_9uNbke1LLkYBd/preview",
    caloriesPerMinute: 2.5,
    benefits: "Deep Healing",
    focus: "Recovery",
    music: "Soft Piano",
    currentFocus: "Savasana"
  },
  "yin-yoga-relief-focus": {
    id: "yin-yoga-relief-focus",
    title: "Yin Yoga Relief",
    duration: 50,
    intensity: "INTERMEDIATE",
    videoUrl: "https://drive.google.com/file/d/13JtAsmLgX6NUyzupEd-GyWCyQ1rw-oNw/preview",
    caloriesPerMinute: 3.5,
    benefits: "Connective Tissue Health",
    focus: "Fascia",
    music: "Deep Ambient",
    currentFocus: "Deep Stretch"
  }
};

export function VideoSessionScreen() {
  const navigate = useNavigate();
  const { sessionId } = useParams<{ sessionId: string }>();
  const { userData } = useUser();
  
  // Get session data
  const session = sessionDatabase[sessionId || "morning-weight-loss"] || sessionDatabase["morning-weight-loss"];
  
  // Session state
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [videoUrl, setVideoUrl] = useState(session.videoUrl);
  const timerRef = useRef<any>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Calculate metrics
  const totalSeconds = session.duration * 60;
  const progress = Math.min((elapsedSeconds / totalSeconds) * 100, 100);
  const caloriesBurned = Math.floor((elapsedSeconds / 60) * session.caloriesPerMinute);
  const remainingSeconds = Math.max(totalSeconds - elapsedSeconds, 0);
  
  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Timer logic
  useEffect(() => {
    if (isPlaying && elapsedSeconds < totalSeconds) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => {
          const newTime = prev + 1;
          if (newTime >= totalSeconds) {
            setIsPlaying(false);
            setIsCompleted(true);
            return totalSeconds;
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, elapsedSeconds, totalSeconds]);

  // Save session data when completed
  useEffect(() => {
    if (isCompleted && userData.id) {
      const saveSessionToBackend = async () => {
        try {
          await api.post('/yoga/save_session', {
            user_id: userData.id,
            style_name: session.title,
            level: session.intensity,
            total_duration: session.duration,
            actual_duration: Math.floor(elapsedSeconds / 60),
            completion_percentage: progress,
            status: "Completed",
            calories: caloriesBurned
          });
          toast.success("Practice session saved!");
        } catch (error: any) {
          console.error("Failed to save session:", error);
          toast.error("Could not sync practice to cloud.");
        }
      };
      saveSessionToBackend();

      const sessionData = {
        sessionId: session.id,
        title: session.title,
        date: new Date().toISOString(),
        duration: session.duration,
        caloriesBurned,
        intensity: session.intensity,
        completed: true
      };
      
      const savedSessions = JSON.parse(localStorage.getItem("yogaSessions") || "[]");
      savedSessions.push(sessionData);
      localStorage.setItem("yogaSessions", JSON.stringify(savedSessions));
    }
  }, [isCompleted, session, caloriesBurned, userData.id]);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Start/Stop practice
  const handleStartStop = () => {
    if (!isPlaying) {
      // Add autoplay parameter to the URL to force the video to start inside
      // We also add &muted=1 to potentially bypass autoplay blocks in some browsers
      const autoplayUrl = session.videoUrl + (session.videoUrl.includes('?') ? '&' : '?') + 'autoplay=1';
      setVideoUrl(autoplayUrl);
    }
    
    if (isCompleted) {
      setElapsedSeconds(0);
      setIsCompleted(false);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Reset session
  const handleReset = () => {
    setIsPlaying(false);
    setElapsedSeconds(0);
    setIsCompleted(false);
  };

  return (
    <WebLayout>
      <div className="flex-1 bg-[#F5F5F7] flex flex-col overflow-y-auto h-[calc(100vh-64px)] md:h-screen no-scrollbar">
        {/* Header */}
        <div className="px-6 pt-6 pb-6 bg-white sticky top-0 z-20 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center transition-transform active:scale-90"
            >
              <ChevronLeft className="w-5 h-5 text-purple-600" />
            </button>

            <div className="text-center">
              <h1 className="text-sm font-black text-purple-600 uppercase tracking-wide">
                {session.title}
              </h1>
              <p className="text-xs text-gray-400 mt-1 font-bold">Session Activity</p>
            </div>

            <div className="w-10" />
          </div>
        </div>

        {/* Video Player Section */}
        <div className="bg-white px-2 pt-2 pb-6">
          <div 
            ref={videoContainerRef}
            className="relative bg-black rounded-[40px] overflow-hidden shadow-2xl group transition-all duration-500"
            style={{ height: isFullscreen ? "100vh" : "70vh" }}
          >
            {/* Embedded Google Drive Video */}
            <iframe
              key={videoUrl} // Use key to force iframe to reload with new URL
              src={videoUrl}
              className="absolute inset-0 w-full h-full border-none z-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={session.title}
            />

            {/* Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8">
              {/* Top Bar */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Now Playing</span>
                  <h2 className="text-white font-black text-lg">{session.title}</h2>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 text-white hover:bg-white/20">
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="space-y-6">
                {/* Progress Scrubber */}
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/20 rounded-full relative group/scrubber cursor-pointer overflow-hidden">
                    <div 
                      className="absolute h-full bg-purple-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-white/60 tracking-widest">
                    <span>{formatTime(elapsedSeconds)}</span>
                    <span>{formatTime(totalSeconds)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button className="text-white/60 hover:text-white transition-colors">
                      <SkipBack className="w-6 h-6 fill-current" />
                    </button>
                    <button
                      onClick={handleStartStop}
                      className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl active:scale-95 transition-all"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-purple-600 fill-current" />
                      ) : (
                        <Play className="w-8 h-8 text-purple-600 fill-current translate-x-0.5" />
                      )}
                    </button>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <SkipForward className="w-6 h-6 fill-current" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">HD 1080P</span>
                    <button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 text-white hover:bg-white/20"
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-5 h-5" />
                      ) : (
                        <Maximize2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Play Button Overlay (when not playing and hover not active) */}
            {!isPlaying && !isFullscreen && (
              <div 
                onClick={handleStartStop}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer group-hover:opacity-0 transition-opacity z-10"
              >
                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 hover:scale-110 hover:bg-white/30 transition-all duration-300">
                  <Play className="w-10 h-10 text-white fill-current translate-x-1" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Area */}
        <div className="bg-white flex-1 rounded-t-[48px] shadow-[0_-30px_60px_rgba(0,0,0,0.05)] -mt-10 relative z-10 p-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-left bg-orange-50/50 p-6 rounded-[32px] border border-orange-100/50">
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Calories</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-4xl font-black text-gray-800">{caloriesBurned}</p>
                  <p className="text-xs font-bold text-gray-400">kcal</p>
                </div>
              </div>
              <div className="text-left bg-purple-50/50 p-6 rounded-[32px] border border-purple-100/50">
                <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-1">Intensity</p>
                <p className="text-4xl font-black text-purple-600 uppercase">{session.intensity.substring(0, 3)}</p>
              </div>
              <div className="text-left bg-green-50/50 p-6 rounded-[32px] border border-green-100/50">
                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1">Goal</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-4xl font-black text-gray-800">{session.duration}</p>
                  <p className="text-xs font-bold text-gray-400">min</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-end mb-4 px-2">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Training Progress</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-purple-600">{Math.round(progress)}</span>
                    <span className="text-xs font-bold text-purple-400">%</span>
                  </div>
                </div>
                <div className="h-6 bg-gray-50 rounded-full overflow-hidden border border-gray-100 p-1">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-700 shadow-md relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:24px_24px] animate-[progress-bar-stripes_1s_linear_infinite]" />
                  </div>
                </div>
              </div>

              {/* Details & Posture */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-[32px] p-6 text-left border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Primary Benefit</p>
                    <p className="text-lg font-black text-gray-800 leading-tight">{session.benefits}</p>
                  </div>
                  <div className="bg-gray-50 rounded-[32px] p-6 text-left border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Core Focus</p>
                    <p className="text-lg font-black text-gray-800 leading-tight">{session.focus}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-[40px] p-8 text-white shadow-2xl shadow-purple-200 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-colors" />
                  
                  <div className="relative z-10 text-left">
                    <p className="text-[10px] font-bold text-purple-200 uppercase tracking-widest mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
                       Current Posture
                    </p>
                    <h4 className="text-3xl font-black">{session.currentFocus}</h4>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-between relative z-10">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-purple-600 bg-purple-400" />
                      ))}
                    </div>
                    <div className="bg-white/20 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/20">
                      <span className="text-2xl font-black tabular-nums">{formatTime(remainingSeconds)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 flex gap-6">
                <button
                  onClick={handleStartStop}
                  className={`flex-1 rounded-[32px] py-6 font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 ${
                    isPlaying 
                    ? "bg-white text-gray-900 border-2 border-gray-100" 
                    : "bg-gray-900 text-white shadow-gray-900/20"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-current" />
                      Pause Session
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current" />
                      {isCompleted ? "Restart Practice" : "Resume Practice"}
                    </>
                  )}
                </button>
                
                {(isPlaying || elapsedSeconds > 0) && (
                  <button
                    onClick={handleReset}
                    className="w-20 h-20 bg-red-50 text-red-500 rounded-[32px] flex items-center justify-center border-2 border-red-100 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 active:scale-90 shadow-lg shadow-red-100"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Completion Modal */}
        {isCompleted && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-[100] px-6">
            <div className="bg-white rounded-[56px] p-12 w-full max-w-md text-center shadow-2xl animate-in zoom-in-95 duration-500 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
              
              <div className="w-28 h-28 bg-purple-50 rounded-[40px] flex items-center justify-center mx-auto mb-8 shadow-inner">
                <span className="text-6xl">🧘‍♂️</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">Zen Achieved</h2>
              <p className="text-gray-400 font-bold mb-10">You've reached your daily goal. Your body thanks you.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-gray-50/50 rounded-[32px] p-6 border border-gray-100">
                  <p className="text-3xl font-black text-purple-600">{session.duration}m</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mt-1">Duration</p>
                </div>
                <div className="bg-gray-50/50 rounded-[32px] p-6 border border-gray-100">
                  <p className="text-3xl font-black text-orange-500">{caloriesBurned}</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mt-1">Kcal Burned</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setIsCompleted(false);
                    navigate(-1);
                  }}
                  className="bg-purple-600 text-white rounded-[28px] py-6 font-black uppercase tracking-widest text-xs shadow-2xl shadow-purple-600/20 active:scale-95 transition-all"
                >
                  Complete & Save
                </button>
                <button
                  onClick={() => {
                    setElapsedSeconds(0);
                    setIsCompleted(false);
                    setIsPlaying(true);
                  }}
                  className="text-gray-400 font-black uppercase tracking-widest text-[10px] py-2 hover:text-purple-600 transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
