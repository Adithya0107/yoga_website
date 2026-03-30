import { useState, useEffect } from "react";
import { ChevronLeft, Loader2, X } from "lucide-react";
import { useNavigate } from "react-router";
import { WebLayout } from "../components/WebLayout";
import { useUser } from "../context/UserContext";
import { api } from "../utils/api";
import { toast } from "sonner";

// Helper to generate the next N months
function getNextNMonths(startDate: Date, n: number) {
  const months = [];
  for (let i = 0; i < n; i++) {
    const nextDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
    months.push(nextDate);
  }
  return months;
}

// Generate calendar cells for a given month and year
function getDaysInMonth(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingEmptyDays = firstDay === 0 ? 6 : firstDay - 1; // Start on Mon (0)
  
  const cells = [];
  for (let i = 0; i < leadingEmptyDays; i++) {
    cells.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push(new Date(year, month, i));
  }
  return cells;
}

const statusColors: Record<string, string> = {
  completed: "bg-emerald-500 text-white shadow-emerald-500/20 shadow-md",
  half: "bg-emerald-300 text-white",
  notdone: "bg-red-500 text-white",
  rest: "bg-purple-500 text-white",
  injury: "bg-white text-red-500 border-2 border-red-500",
  current: "bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-purple-500/20 shadow-md",
  none: "bg-transparent text-gray-400 font-normal"
};

const statusOptions = [
  { id: "completed", label: "completed yoga", dotClass: "bg-emerald-500" },
  { id: "half", label: "haf day yoga", dotClass: "bg-emerald-300" },
  { id: "notdone", label: "Notdone", dotClass: "bg-red-500" },
  { id: "rest", label: "Restday", dotClass: "bg-purple-500" },
  { id: "injury", label: "Injury", dotClass: "bg-red-500" }
];

export function ConsistencyScreen() {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [activities, setActivities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [detailStatus, setDetailStatus] = useState<string>("completed");
  const [detailNotes, setDetailNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const startCalDate = userData.startDate ? new Date(userData.startDate) : new Date();
  const displayMonths = getNextNMonths(startCalDate, 6); // 6 months view

  useEffect(() => {
    const fetchActivity = async () => {
      if (!userData.id) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await api.get(`/user/get_activity/${userData.id}`);
        if (data) setActivities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActivity();
  }, [userData.id]);

  const handleDayClick = (date: Date | null) => {
    if (!date) return;
    const dateStr = date.toISOString().split('T')[0];
    const existing = activities.find(a => a.date === dateStr);
    
    setSelectedDate(date);
    setDetailStatus(existing?.status || existing?.activity_type || "completed");
    setDetailNotes(existing?.notes || "");
  };

  const handleSaveStatus = async () => {
    if (!selectedDate || !userData.id) return;
    setIsSaving(true);
    const dateStr = selectedDate.toISOString().split('T')[0];
    
    try {
      await api.post('/user/add_progress', {
        user_id: userData.id,
        progress: {
          date: dateStr,
          status: detailStatus,
          notes: detailNotes
        }
      });
      toast.success("Status saved");
      
      // Update local state to reflect change immediately
      setActivities(prev => {
        const filtered = prev.filter(a => a.date !== dateStr);
        return [...filtered, { date: dateStr, status: detailStatus, notes: detailNotes }];
      });
      setSelectedDate(null);
    } catch (err: any) {
      toast.error(err.message || "Failed to save status");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <WebLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
        </div>
      </WebLayout>
    );
  }

  // Details View Drawer / Screen Overlay
  if (selectedDate) {
    return (
      <WebLayout>
        <div className="min-h-screen bg-transparent pb-24 md:pb-0 px-6 pt-10">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setSelectedDate(null)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-800"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-2xl font-black text-center mb-8">
            {selectedDate.getDate()} {selectedDate.toLocaleDateString("en-US", { month: "long" })} {selectedDate.getFullYear()}
          </h2>

          <div className="space-y-4 mb-8">
            {statusOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setDetailStatus(opt.id)}
                className={`w-full text-left bg-white/70 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 transition-all border shadow-sm ${detailStatus === opt.id ? 'border-purple-500 outline outline-2 outline-purple-100' : 'border-white'}`}
              >
                <div className={`w-3.5 h-3.5 rounded-full ${opt.dotClass}`} />
                <span className="font-bold text-gray-800 text-sm">{opt.label}</span>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-2 block">
              LEVEL NOTES
            </label>
            <input 
              type="text"
              value={detailNotes}
              onChange={(e) => setDetailNotes(e.target.value)}
              placeholder="Add a note about today..."
              className="w-full bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl p-4 placeholder:text-gray-400 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
          </div>

          <button
            onClick={handleSaveStatus}
            disabled={isSaving}
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-purple-500/30 flex items-center justify-center transition-colors mb-20 md:mb-0"
          >
            {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : "Save Status"}
          </button>
        </div>
      </WebLayout>
    );
  }

  // Calendar List View
  return (
    <WebLayout>
      <div className="min-h-screen bg-transparent pb-28 md:pb-0 px-6 pt-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 relative">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-800 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <h1 className="text-[22px] font-black text-[#7C3AED] absolute w-full text-center pointer-events-none tracking-tight">
            Your Activity
          </h1>
        </div>

        {/* Months */}
        <div className="space-y-10">
          {displayMonths.map((monthDate, i) => {
             const year = monthDate.getFullYear();
             const month = monthDate.getMonth();
             const days = getDaysInMonth(year, month);
             
             return (
               <div key={i}>
                 <h2 className="text-xl font-black text-gray-900 mb-6">
                   {monthDate.toLocaleDateString("en-US", { month: "long" })} {year}
                 </h2>
                 
                 <div className="grid grid-cols-7 gap-y-4 gap-x-2">
                   {days.map((dateObj, idx) => {
                     if (!dateObj) return <div key={`empty-${idx}`} />;
                     
                     const dateStr = dateObj.toISOString().split('T')[0];
                     const todayStr = new Date().toISOString().split('T')[0];
                     
                     // Find if user has activity submitted for this date
                     const userActivity = activities.find(a => a.date === dateStr);
                     
                     // Determine UI color Class
                     let stateClass = "bg-transparent text-gray-400 font-medium";
                     if (userActivity?.status) {
                       stateClass = statusColors[userActivity.status] || statusColors.completed;
                     } else if (userActivity) {
                       // Fallback if existing data lacks standard status (e.g. from /add_progress without exact match)
                       stateClass = statusColors.completed;
                     } else if (dateStr === todayStr) {
                       stateClass = statusColors.current;
                     }

                     return (
                       <div key={idx} className="flex justify-center">
                         <button
                           onClick={() => handleDayClick(dateObj)}
                           className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm transition-all hover:scale-110 focus:outline-none ${stateClass}`}
                         >
                           {dateObj.getDate()}
                         </button>
                       </div>
                     );
                   })}
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </WebLayout>
  );
}