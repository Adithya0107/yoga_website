import { ChevronLeft, Heart, Code, Shield, FileText, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function AboutScreen() {
  const navigate = useNavigate();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <WebLayout>
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">About</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* App Icon & Info */}
        <div className="px-6 pb-6 pt-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-400 rounded-[28px] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-5xl">🧘‍♀️</span>
            </div>
            <h2 className="text-2xl font-black mb-2">Yoga Flow</h2>
            <p className="text-gray-500 mb-1">Version 1.0.0</p>
            <p className="text-sm text-gray-400">Build 2026.03.08</p>
          </div>
        </div>

        {/* Mission */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-left">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-left">
                  To make yoga accessible to everyone, helping people find balance, strength, and peace in their daily lives through mindful movement and personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <button className="w-full p-5 flex items-center gap-4 border-b border-gray-50 text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Terms of Service</h3>
                <p className="text-sm text-gray-500">User agreement</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full p-5 flex items-center gap-4 border-b border-gray-50 text-left">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Privacy Policy</h3>
                <p className="text-sm text-gray-500">How we protect your data</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full p-5 flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Open Source Licenses</h3>
                <p className="text-sm text-gray-500">Third-party libraries</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Credits */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold mb-4 text-left">Credits</h3>
            <div className="space-y-3 text-sm text-left">
              <div>
                <p className="font-semibold text-gray-700">Design & Development</p>
                <p className="text-gray-500">Yoga Flow Team</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Yoga Instructors</p>
                <p className="text-gray-500">Maya Zen, Sarah B., Kai Strong, Luna Soft</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">AI Technology</p>
                <p className="text-gray-500">Powered by advanced machine learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-8">
          <p className="text-center text-sm text-gray-400">
            Made with 💜 for yoga enthusiasts worldwide
          </p>
          <p className="text-center text-xs text-gray-400 mt-2">
            © 2026 Yoga Flow. All rights reserved.
          </p>
        </div>
      </div>
    </WebLayout>
  );
}
