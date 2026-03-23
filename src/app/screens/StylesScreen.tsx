import { Play } from "lucide-react";
import { useNavigate } from "react-router";
import { WebLayout } from "../components/WebLayout";

const yogaPrograms = [
  // BEGINNER
  {
    id: "morning-weight-loss",
    title: "Morning Weight Loss Yoga",
    level: "beginner",
    color: "from-purple-600 to-purple-500",
    image: "https://images.unsplash.com/photo-1619011684100-e47db1857560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIweW9nYSUyMHN1bnJpc2UlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc3MzcxODc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "foundation-strength",
    title: "Foundation Strength",
    level: "beginner",
    color: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1695795749631-bc4067027a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBzdHJlbmd0aCUyMHBvc2UlMjB3YXJyaW9yfGVufDF8fHx8MTc3MzcxODc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "gentle-flexibility",
    title: "Gentle Flexibility",
    level: "beginner",
    color: "from-purple-600 to-purple-400",
    image: "https://images.unsplash.com/photo-1767611123906-04a7f3cb7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW50bGUlMjB5b2dhJTIwZmxleGliaWxpdHklMjBzdHJldGNoaW5nJTIwY2FsbXxlbnwxfHx8fDE3NzM3MTg3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "evening-zen",
    title: "Evening Zen",
    level: "beginner",
    color: "from-purple-500 to-purple-700",
    image: "https://images.unsplash.com/photo-1758272422634-e8ed8e252a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIweY9nYSUyMHplbiUyMG1lZGl0YXRpb24lMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzM3MTg3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "pranayama-basics",
    title: "Pranayama Basics",
    level: "beginner",
    color: "from-purple-400 to-purple-600",
    image: "https://images.unsplash.com/photo-1758599879787-03999f72d994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFuYXlhbWElMjBicmVhdGhpbmclMjB5b2dhJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzM3MTg3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  // INTERMEDIATE
  {
    id: "power-vinyasa",
    title: "Power Vinyasa Flow",
    level: "intermediate",
    color: "from-orange-500 to-orange-400",
    image: "https://images.unsplash.com/photo-1767611090583-8eb2f497734d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55YXNhJTIwZmxvdyUyMHlvZ2ElMjBkeW5hbWljJTIwbW92ZW1lbnR8ZW58MXx8fHwxNzczNzE4Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "core-balance-lab",
    title: "Core & Balance Lab",
    level: "intermediate",
    color: "from-orange-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1767611129191-a949e14849a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY29yZSUyMGJhbGFuY2UlMjBwbGFuayUyMHN0cmVuZ3RofGVufDF8fHx8MTc3MzcxODc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "flow-lengthen",
    title: "Flow and Lengthen",
    level: "intermediate",
    color: "from-orange-600 to-orange-400",
    image: "https://images.unsplash.com/photo-1720788074321-47666b7a4fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZmxvdyUyMHN0cmV0Y2hpbmclMjBsZW5ndGhlbmluZyUyMHBvc2V8ZW58MXx8fHwxNzczNzE4Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "inner-harmonic",
    title: "Inner Harmonic Yoga",
    level: "intermediate",
    color: "from-pink-500 to-pink-400",
    image: "https://images.unsplash.com/photo-1599447421382-437e6fb32fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJtb25pYyUyMHlvZ2ElMjBtZWRpdGF0aW9uJTIwaW5kb29yJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzcxODc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "active-breath-mastery",
    title: "Active Breath Mastery",
    level: "intermediate",
    color: "from-orange-500 to-pink-400",
    image: "https://images.unsplash.com/photo-1724833190236-0c25b6c94e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhdGglMjB3b3JrJTIweY9nYSUyMHByYW5heWFtYSUyMHByYWN0aWNlfGVufDF8fHx8MTc3MzcxODc40Hww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  // ADVANCED
  {
    id: "metabolic-hiit",
    title: "Metabolic HIIT Yoga",
    level: "advanced",
    color: "from-gray-900 to-gray-800",
    image: "https://images.unsplash.com/photo-1662385929994-e93be8a24dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbnNlJTIweY9nYSUyMGhpaXQlMjB3b3Jrb3V0JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzczNzE4NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "advance-arm-balanced",
    title: "Advanced Arm Balances",
    level: "advanced",
    color: "from-gray-800 to-gray-900",
    image: "https://images.unsplash.com/photo-1753018452010-6327eeaaa97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMHlvZ2ElMjBhcm0lMjBiYWxhbmNlJTIwaGFuZHN0YW5kfGVufDF8fHx8MTc3MzcxODc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "full-body-alchemy",
    title: "Full Body Alchemy",
    level: "advanced",
    color: "from-gray-900 to-gray-700",
    image: "https://images.unsplash.com/photo-1709607011948-f889640e7c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwYm9keSUyMHlvZ2ElMjBhbGNoZW15JTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzczNzE4NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "meditation-motion",
    title: "Meditation in Motion",
    level: "advanced",
    color: "from-gray-800 to-gray-950",
    image: "https://images.unsplash.com/photo-1654613412232-10aaf36df8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIweY9nYSUyMG1vdGlvbiUyMG1vdmVtZW50JTIwZmxvd3xlbnwxfHx8fDE3NzM3MTg3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "virtual-energy-unlock",
    title: "Virtual Energy Unlock Yoga",
    level: "advanced",
    color: "from-gray-700 to-gray-900",
    image: "https://images.unsplash.com/photo-1724833190236-0c25b6c94e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjB5b2dhJTIwc3Bpcml0dWFsJTIwY2hha3JhJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzczNzE4NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const focusAreaPrograms = [
  {
    id: "vinyasa-flow-focus",
    title: "Vinyasa Flow",
    color: "from-purple-400 to-purple-300",
    image: "https://images.unsplash.com/photo-1767611090583-8eb2f497734d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55YXNhJTIwZmxvdyUyMHlvZ2ElMjBkeW5hbWljJTIwbW92ZW1lbnR8ZW58MXx8fHwxNzczNzE4Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "hatha-yoga-focus",
    title: "Hatha Yoga",
    color: "from-blue-400 to-blue-300",
    image: "https://images.unsplash.com/photo-1658279445014-dcc466ac1192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXRoYSUyMHlvZ2ElMjB0cmFkaXRpb25hbCUyMGNsYXNzaWMlMjBwb3Nlc3xlbnwxfHx8fDE3NzM3MTg3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "power-yoga-focus",
    title: "Power Yoga",
    color: "from-red-400 to-red-300",
    image: "https://images.unsplash.com/photo-1767611086592-914038a66820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHlvZ2ElMjBpbnRlbnNlJTIwc3RyZW5ndGglMjB3b3Jrb3V0fGVufDF8fHx8MTc3MzcxODc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "restorative-yoga-focus",
    title: "Restorative Yoga",
    color: "from-green-400 to-green-300",
    image: "https://images.unsplash.com/photo-1567281060385-5c0995bd02bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0b3JhdGl2ZSUyMHlvZ2ElMjByZWxheGF0aW9uJTIwcHJvcHMlMjBibGFua2V0c3xlbnwxfHx8fDE3NzM3MTg3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "yin-yoga-relief-focus",
    title: "Yin Yoga Relief",
    color: "from-teal-400 to-teal-300",
    image: "https://images.unsplash.com/photo-1613602025754-04e1b4a24156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5aW4lMjB5b2dhJTIwc2xvdyUyMHBhc3NpdmUlMjBzdHJldGNoaW5nfGVufDF8fHx8MTc3MzcxODc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const levels = [
  { name: "BEGINNER", programs: yogaPrograms.filter(p => p.level === "beginner") },
  { name: "INTERMEDIATE", programs: yogaPrograms.filter(p => p.level === "intermediate") },
  { name: "ADVANCED", programs: yogaPrograms.filter(p => p.level === "advanced") }
];

export function StylesScreen() {
  const navigate = useNavigate();

  return (
    <WebLayout>
      <div className="bg-gray-50 pb-24 md:pb-0">
        {/* Header */}
        <div className="px-6 pt-6 pb-6 text-left">
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Explore
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {levels.map((level) => (
            <div key={level.name} className="text-left">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider px-6 mb-4">
                {level.name}
              </h2>
              <div className="flex gap-4 overflow-x-auto px-6 pb-2 no-scrollbar snap-x snap-mandatory">
                {level.programs.map((program, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 rounded-[32px] overflow-hidden shadow-sm snap-start bg-white group hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex h-44">
                      <div
                        className={`flex-[1.2] bg-gradient-to-br ${program.color} p-7 flex flex-col justify-between relative`}
                      >
                        <div className="relative z-10">
                          <h3 className="text-2xl font-black text-white leading-tight mb-2">
                            {program.title}
                          </h3>
                        </div>

                        <div className="relative z-10">
                          <button 
                            onClick={() => navigate(`/video-session/${program.id}`)}
                            className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 group/play shadow-xl active:scale-95"
                          >
                            <span className="text-xs font-black uppercase tracking-widest">Start Now</span>
                            <div className="w-8 h-8 bg-white/30 group-hover/play:bg-purple-600 rounded-xl flex items-center justify-center transition-colors">
                              <Play className="h-4 w-4 fill-current group-hover/play:text-white" />
                            </div>
                          </button>
                        </div>
                        
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                      </div>

                      <div
                        className="flex-1 bg-cover bg-center grayscale shadow-inner"
                        style={{ backgroundImage: `url(${program.image})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Specialized Styles */}
          <div className="text-left">
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider px-6 mb-4">
              Specialized Styles
            </h2>
            <div className="flex gap-4 overflow-x-auto px-6 pb-8 no-scrollbar snap-x snap-mandatory">
              {focusAreaPrograms.map((program, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 rounded-[32px] overflow-hidden shadow-sm snap-start bg-white group hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex h-44">
                    <div
                      className={`flex-[1.2] bg-gradient-to-br ${program.color} p-7 flex flex-col justify-between relative`}
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-black text-white leading-tight mb-2">
                          {program.title}
                        </h3>
                      </div>

                      <div className="relative z-10">
                        <button 
                          onClick={() => navigate(`/video-session/${program.id}`)}
                          className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 group/play shadow-xl active:scale-95"
                        >
                          <span className="text-xs font-black uppercase tracking-widest">Start Now</span>
                          <div className="w-8 h-8 bg-white/30 group-hover/play:bg-purple-600 rounded-xl flex items-center justify-center transition-colors">
                            <Play className="h-4 w-4 fill-current group-hover/play:text-white" />
                          </div>
                        </button>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                    </div>

                    <div
                      className="flex-1 bg-cover bg-center grayscale shadow-inner"
                      style={{ backgroundImage: `url(${program.image})` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}