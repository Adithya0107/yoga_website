import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";
import { Home, Compass, MessageCircle, TrendingUp, User, Menu, X } from "lucide-react";
import { useState } from "react";

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
    <div className="h-screen bg-[#F5F5F7] flex flex-col md:flex-row overflow-hidden">
      {/* Desktop Sidebar Navigation */}
      {showNav && (
        <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200 md:sticky md:top-0 md:h-screen">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
              ZenForge
            </h1>
            <p className="text-xs text-gray-500 mt-1">Transform Your Body & Mind</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                    active
                      ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg"
                      : "text-gray-600 hover:bg-purple-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-purple-50">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">Aditya</p>
                <p className="text-xs text-gray-500">Premium Member</p>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        {/* Mobile Header */}
        {showNav && (
          <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
            <h1 className="text-xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
              ZenForge
            </h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </header>
        )}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-white w-64 h-full p-4 space-y-2" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b border-gray-200 mb-4">
                <h2 className="text-xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                  ZenForge
                </h2>
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
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                      active
                        ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg"
                        : "text-gray-600 hover:bg-purple-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar h-[calc(100vh-64px)] md:h-screen overflow-x-hidden">
          {children}
        </main>

        {/* Mobile bottom navigation removed (not used) */}
      </div>
    </div>
  );
}
