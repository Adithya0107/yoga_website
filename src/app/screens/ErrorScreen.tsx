import { AlertTriangle, Home, RefreshCcw, ChevronLeft } from "lucide-react";
import { useNavigate, useRouteError } from "react-router";
import { StatusBar } from "../components/StatusBar";

export function ErrorScreen() {
  const navigate = useNavigate();
  const error = useRouteError() as any;
  
  console.error("Route Error:", error);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <StatusBar  className="bg-white" />
      
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-sm font-black text-gray-900 uppercase tracking-widest">Application Error</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 bg-red-100 rounded-[32px] flex items-center justify-center mb-8 animate-bounce">
          <AlertTriangle className="w-12 h-12 text-red-600" />
        </div>
        
        <h2 className="text-3xl font-black text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-500 font-bold mb-10 max-w-xs leading-relaxed">
          We encountered an unexpected error. Don't worry, your progress is safe.
        </p>

        {error && (
          <div className="bg-red-50 p-4 rounded-2xl mb-10 w-full max-w-sm border border-red-100">
            <p className="text-xs font-mono text-red-700 break-words">
              {error.message || error.statusText || "Unknown Error"}
            </p>
          </div>
        )}

        <div className="w-full max-w-sm space-y-4">
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-gray-900 text-white rounded-3xl py-5 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all"
          >
            <RefreshCcw className="w-5 h-5" />
            Try Refreshing
          </button>
          
          <button 
            onClick={() => navigate("/home")}
            className="w-full bg-white text-gray-900 border-2 border-gray-100 rounded-3xl py-5 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 active:scale-95 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>
      </div>

      <div className="p-8 text-center">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
          ZenForge Support ID: #ERR-{Math.floor(Math.random() * 10000)}
        </p>
      </div>
    </div>
  );
}
