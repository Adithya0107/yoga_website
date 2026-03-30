import { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Home, Compass, MessageCircle, TrendingUp, User, Menu, X } from "lucide-react";
import { StatusBar } from "./StatusBar";

interface WebLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function WebLayout({ children, showNav = true }: WebLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/home", icon: Home, label: "Home" },
    { path: "/styles", icon: Compass, label: "Explore" },
    { path: "/ai-coach", icon: MessageCircle, label: "AI Coach" },
    { path: "/progress", icon: TrendingUp, label: "Progress" },
    { path: "/profile", icon: User, label: "Profile" }
  ];

  const isActive = (path: string) => {
    if (path === "/profile" && location.pathname.startsWith("/settings")) return true;
    return location.pathname === path;
  };

  return (
    <div className="h-screen w-full relative flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Immersive Zen Background for the entire app */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: 'url("/images/bg-zen.png")' }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[8px]" />
      </div>

      {/* Desktop Sidebar Navigation */}
      {showNav && (
        <aside className="hidden md:flex md:flex-col md:w-72 bg-white/60 backdrop-blur-xl border-r border-white/50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative z-20">
          {/* Logo */}
          <div className="p-8 border-b border-white/30">
            <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent tracking-tight">
              ZenForge
            </h1>
            <p className="text-xs font-bold text-gray-500 mt-2 uppercase tracking-widest">Evolution</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-[20px] font-bold text-sm transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/20"
                      : "text-gray-600 hover:bg-white/60 hover:shadow-sm hover:scale-[1.02]"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-base">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Info */}
          <div className="p-6 border-t border-white/30">
            <div className="flex items-center gap-4 px-5 py-4 rounded-[24px] bg-white/50 backdrop-blur-md border border-white/60 shadow-sm cursor-pointer hover:bg-white/80 transition-all hover:scale-[1.02]" onClick={() => navigate("/profile")}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-inner">
                A
              </div>
              <div className="flex-1 text-left">
                <p className="text-base font-bold text-gray-800">Aditya</p>
                <p className="text-xs font-semibold text-purple-600">Premium</p>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-20 h-screen overflow-hidden">
        {/* Mobile Header */}
        {showNav && (
          <header className="md:hidden bg-white/60 backdrop-blur-xl border-b border-white/50 px-6 py-4 flex flex-col z-40 shadow-sm relative pt-12">
            <StatusBar className="absolute top-0 left-0 right-0 z-50 text-gray-800" />
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                ZenForge
              </h1>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-white/60 backdrop-blur-md rounded-full border border-gray-100/50 shadow-sm transition-transform active:scale-95"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-800" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
          </header>
        )}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-white/90 backdrop-blur-3xl w-72 h-full p-6 space-y-4 shadow-2xl border-r border-white/20 pt-16" onClick={(e) => e.stopPropagation()}>
              <div className="p-2 border-b border-gray-100/50 mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  ZenForge
                </h2>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                   <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-[24px] font-bold transition-all ${
                      active
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-md shadow-purple-500/20"
                        : "text-gray-600 hover:bg-white/60"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-lg">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative w-full h-full pb-32 md:pb-0">
          {children}
        </main>

        {/* Mobile Bottom Navigation Bar - Floating Premium Pill */}
        {showNav && (
          <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
            <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] p-2 flex items-center justify-between border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="flex flex-col items-center justify-center flex-1 py-1 gap-1 group"
                  >
                    <div className={`p-2 rounded-2xl transition-all duration-300 ${
                      active 
                        ? "bg-[#111827] text-white shadow-lg" 
                        : "text-gray-400 group-hover:text-gray-600 group-hover:bg-gray-100/50"
                    }`}>
                      {item.path === '/progress' ? (
                        <div className="flex items-end gap-[2px] h-5 w-5 justify-center pb-0.5">
                           <div className={`w-1 rounded-full ${active ? 'bg-white' : 'bg-gray-400'} h-2`} />
                           <div className={`w-1 rounded-full ${active ? 'bg-white' : 'bg-gray-400'} h-4`} />
                           <div className={`w-1 rounded-full ${active ? 'bg-white' : 'bg-gray-400'} h-3`} />
                        </div>
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-wider transition-colors duration-300 ${
                      active ? "text-[#111827]" : "text-gray-400"
                    }`}>
                      {item.label === 'Explore' ? 'Styles' : item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
