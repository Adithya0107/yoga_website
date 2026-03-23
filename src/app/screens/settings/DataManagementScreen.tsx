import { ChevronLeft, Download, Trash2, Database, HardDrive, Menu, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function DataManagementScreen() {
  const navigate = useNavigate();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

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
          <h1 className="text-2xl font-black">Data Management</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Storage Info */}
        <div className="px-6 pb-6 pt-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                <HardDrive className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold">Storage Used</h3>
                <p className="text-sm text-gray-500">App data & cache</p>
              </div>
              <span className="text-2xl font-bold text-purple-600">24 MB</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-gradient-to-r from-purple-600 to-purple-400 font-bold"></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span className="font-bold">24 MB used</span>
              <span className="font-bold">100 MB total</span>
            </div>
          </div>
        </div>

        {/* Your Data */}
        <div className="px-6 pb-2 text-left">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Your Data
          </h2>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <button className="w-full p-5 flex items-center gap-4 border-b border-gray-50 text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Export Data</h3>
                <p className="text-sm text-gray-500">Download your information</p>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400 shrink-0 rotate-180" />
            </button>

            <button className="w-full p-5 flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                <Database className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Download History</h3>
                <p className="text-sm text-gray-500">All practice sessions</p>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400 shrink-0 rotate-180" />
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="px-6 pb-2 text-left">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-4">
            Danger Zone
          </h2>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <button className="w-full p-5 flex items-center gap-4 border-b border-gray-50 text-left transition-colors hover:bg-red-50">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Clear Cache</h3>
                <p className="text-sm text-gray-500">Free up storage space</p>
              </div>
            </button>

            <button 
              className="w-full p-5 flex items-center gap-4 border-b border-gray-50 text-left transition-colors hover:bg-red-50"
              onClick={() => {
                // Confirm clear data
              }}
            >
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-600">Delete All Data</h3>
                <p className="text-sm text-gray-500">Permanently remove recordings and history</p>
              </div>
            </button>

            <button 
              className="w-full p-5 flex items-center gap-4 text-left transition-colors bg-red-50 hover:bg-red-100"
              onClick={() => navigate("/settings/delete-account")}
            >
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-700">Delete Account</h3>
                <p className="text-sm text-red-600 font-semibold opacity-70">Reset everything and leave ZenForge</p>
              </div>
              <ChevronLeft className="w-5 h-5 text-red-400 shrink-0 rotate-180" />
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="px-6 pb-8">
          <div className="bg-blue-50 rounded-3xl p-6 text-left border border-blue-100 shadow-sm">
            <h3 className="font-bold text-blue-900 mb-2">Data Privacy & Security</h3>
            <p className="text-sm text-blue-800 leading-relaxed font-semibold">
              Your data is stored securely and is never shared with third parties. You can export or delete your data at any time. Account deletion is permanent and cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}
