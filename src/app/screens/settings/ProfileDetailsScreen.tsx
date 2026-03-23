import { ChevronLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";
import { useUser } from "../../context/UserContext";

export function ProfileDetailsScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [age, setAge] = useState(userData.age || "");
  const [height, setHeight] = useState(userData.height || "");
  const [gender, setGender] = useState(userData.gender.toLowerCase() || "male");
  const [experience, setExperience] = useState(userData.experience.toLowerCase() || "beginner");
  const [frequency, setFrequency] = useState(userData.frequency || "Daily");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSave = () => {
    updateUserData({ 
      age, 
      height, 
      gender: gender.charAt(0).toUpperCase() + gender.slice(1), 
      experience: experience.charAt(0).toUpperCase() + experience.slice(1),
      frequency
    });
    navigate("/profile");
  };

  return (
    <WebLayout>
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white shrink-0">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Profile Details</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 pb-2 pt-6 bg-gray-50 text-left">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Demographics
          </h2>
        </div>

        <div className="px-6 space-y-4 bg-gray-50 text-left">
          {/* Age */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Age
            </label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full bg-white rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className="w-full bg-white rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setGender('male')}
                className={`py-4 rounded-2xl font-bold ${
                  gender === 'male'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white'
                    : 'bg-white text-gray-600 shadow-sm'
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender('female')}
                className={`py-4 rounded-2xl font-bold ${
                  gender === 'female'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white'
                    : 'bg-white text-gray-600 shadow-sm'
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Yoga Experience */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Yoga Experience Level
            </label>
            <div className="space-y-2">
              {[
                { value: 'beginner', label: 'Beginner', desc: 'New to yoga' },
                { value: 'intermediate', label: 'Intermediate', desc: '6-12 months experience' },
                { value: 'advanced', label: 'Advanced', desc: '1+ years experience' }
              ].map((level) => (
                <button
                  key={level.value}
                  onClick={() => setExperience(level.value)}
                  className={`w-full p-4 rounded-2xl text-left transition-all ${
                    experience === level.value
                      ? 'bg-purple-50 border-2 border-purple-600 shadow-sm'
                      : 'bg-white border-2 border-transparent shadow-sm'
                  }`}
                >
                  <div className="font-bold">{level.label}</div>
                  <div className="text-sm text-gray-500">{level.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Practice Frequency */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              How often do you practice?
            </label>
            <select 
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full bg-white rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none shadow-sm"
            >
              <option>Daily</option>
              <option>4-6 times per week</option>
              <option>2-3 times per week</option>
              <option>Once a week</option>
              <option>Occasionally</option>
              <option>1-2 days</option>
              <option>3-4 days</option>
              <option>5-6 days</option>
            </select>
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Preferred Practice Time
            </label>
            <select className="w-full bg-white rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none shadow-sm">
              <option>Morning (6am - 9am)</option>
              <option>Midday (10am - 2pm)</option>
              <option>Afternoon (3pm - 6pm)</option>
              <option>Evening (7pm - 9pm)</option>
              <option>Night (after 9pm)</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <div className="px-6 pt-8 pb-8 bg-gray-50">
          <button 
            className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg"
            onClick={handleSave}
          >
            Save Details
          </button>
        </div>
      </div>
    </WebLayout>
  );
}
