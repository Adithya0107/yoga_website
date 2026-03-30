import { ChevronLeft, Camera, User, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { SideMenu } from "../../components/SideMenu";
import { WebLayout } from "../../components/WebLayout";
import { useUser } from "../../context/UserContext";

export function EditProfileScreen() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [name, setName] = useState(userData.name);
  const [bio, setBio] = useState("Zen Enthusiast");
  const [email, setEmail] = useState("aditya@yoga.com");
  const [username, setUsername] = useState(`@${userData.name.toLowerCase()}_zen`);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSave = () => {
    updateUserData({ name });
    navigate("/profile");
  };

  return (
    <WebLayout>
      <div className="min-h-screen bg-transparent pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white/60 backdrop-blur-xl border border-white/50 shrink-0">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Edit Profile</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Profile Photo */}
        <div className="px-6 pb-6 pt-6 bg-transparent">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-16 h-16 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-50">
                <Camera className="w-5 h-5 text-purple-600" />
              </button>
            </div>
            <button className="mt-4 text-sm font-bold text-purple-600">
              Change Photo
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 space-y-4 bg-transparent text-left">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none -ml-0"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="w-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="px-6 pt-8 pb-8 bg-transparent">
          <button 
            className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </WebLayout>
  );
}