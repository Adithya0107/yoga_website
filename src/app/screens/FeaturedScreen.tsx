import { Play, Sparkles, Sun, Zap, Leaf, Moon, User } from "lucide-react";
import { useNavigate } from "react-router";
import { WebLayout } from "../components/WebLayout";

const yogaClasses = [
  {
    id: "vinyasa-flow-focus",
    title: "Vinyasa Flow",
    instructor: "Maya Zen",
    duration: "30 MIN",
    level: "BEGINNER",
    icon: Sparkles,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: "hatha-yoga-focus",
    title: "Hatha Yoga",
    instructor: "Sarah B.",
    duration: "45 MIN",
    level: "BEGINNER",
    icon: Sun,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: "power-yoga-focus",
    title: "Power Yoga",
    instructor: "Kai Strong",
    duration: "40 MIN",
    level: "ADVANCED",
    icon: Zap,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: "restorative-yoga-focus",
    title: "Restorative Yoga",
    instructor: "Luna Soft",
    duration: "60 MIN",
    level: "BEGINNER",
    icon: Leaf,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: "yin-yoga-relief-focus",
    title: "Yin Yoga Relief",
    instructor: "Elara M.",
    duration: "35 MIN",
    level: "INTERMEDIATE",
    icon: Moon,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: "active-breath-mastery",
    title: "Ashtanga Basic",
    instructor: "Jason P.",
    duration: "50 MIN",
    level: "ADVANCED",
    icon: User,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

export function FeaturedScreen() {
  const navigate = useNavigate();

  return (
    <WebLayout>
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-6 text-left">
        <div>
          <div className="text-xs font-black text-purple-600 uppercase tracking-widest mb-1">
            Featured Today
          </div>
          <h1 className="text-3xl font-black">Daily Picks</h1>
        </div>
      </div>

      {/* Yoga Classes List */}
      <div className="px-6 space-y-4">
        {yogaClasses.map((yogaClass, index) => {
          const IconComponent = yogaClass.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-[32px] p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-purple-100 group"
              onClick={() => navigate(`/video-session/${yogaClass.id}`)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Icon */}
              <div className={`${yogaClass.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                <IconComponent className={`w-8 h-8 ${yogaClass.iconColor}`} strokeWidth={2.5} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-lg font-black mb-1 text-gray-800 truncate">{yogaClass.title}</h3>
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <span className="truncate">{yogaClass.instructor}</span>
                  <span className="text-purple-200">•</span>
                  <span className="flex-shrink-0">{yogaClass.duration}</span>
                </div>
              </div>

              {/* Play Button */}
              <button className="w-12 h-12 bg-gray-900 group-hover:bg-purple-600 group-hover:scale-110 active:scale-95 transition-all rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Play className="w-5 h-5 text-white fill-current ml-1" />
              </button>
            </div>
          );
        })}
      </div>
      </div>
    </WebLayout>
  );
}