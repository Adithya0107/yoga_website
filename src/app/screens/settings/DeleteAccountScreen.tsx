import { ChevronLeft, AlertTriangle, Trash2, X, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { useUser } from "../../context/UserContext";

export function DeleteAccountScreen() {
  const navigate = useNavigate();
  const { userData, resetUserData } = useUser();
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmStep, setConfirmStep] = useState(0);

  const handleDelete = () => {
    setIsDeleting(true);
    // Simulate API call
    setTimeout(() => {
      resetUserData();
      navigate("/");
    }, 2000);
  };

  return (
    <WebLayout>
      <div className="min-h-screen bg-transparent pb-24 md:pb-0">
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white/60 backdrop-blur-xl border border-white/50 shrink-0">
          <button onClick={() => navigate("/settings/data-management")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Delete Account</h1>
        </div>

        {confirmStep === 0 && (
          <div className="px-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[40px] p-8 shadow-sm text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
              <h2 className="text-3xl font-black mb-4">Are you sure?</h2>
              <p className="text-gray-600 mb-8 font-semibold leading-relaxed">
                By deleting your account, you will permanently lose:
              </p>

              <div className="space-y-4 mb-10 text-left max-w-xs mx-auto">
                <div className="flex items-center gap-4">
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-gray-500 font-bold">Your 76kg goal progress</span>
                </div>
                <div className="flex items-center gap-4">
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-gray-500 font-bold">Intermediate routines</span>
                </div>
                <div className="flex items-center gap-4">
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-gray-500 font-bold">Training history & awards</span>
                </div>
                <div className="flex items-center gap-4">
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-gray-500 font-bold">Personalized AI coach data</span>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setConfirmStep(1)}
                  className="w-full bg-red-600 text-white py-5 rounded-3xl font-black uppercase tracking-wider text-sm shadow-xl hover:bg-red-700 transition-all active:scale-95"
                >
                  I want to delete my account
                </button>
                <button 
                  onClick={() => navigate("/profile")}
                  className="w-full text-gray-400 font-bold py-2 hover:text-gray-600 transition-colors"
                >
                  No, keep my account
                </button>
              </div>
            </div>
          </div>
        )}

        {confirmStep === 1 && (
          <div className="px-6 py-8 animate-in zoom-in-95 duration-500">
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[40px] p-8 shadow-sm text-center">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Trash2 className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-black mb-4">Final Validation</h2>
              <p className="text-gray-600 mb-8 font-bold leading-relaxed px-4">
                This action is irreversible. Are you absolutely certain you want to leave ZenForge?
              </p>

              <div className="space-y-4">
                <button 
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className={`w-full ${isDeleting ? 'bg-gray-400' : 'bg-red-600'} text-white py-5 rounded-3xl font-black uppercase tracking-wider text-sm shadow-xl flex items-center justify-center gap-3 active:scale-95`}
                >
                  {isDeleting ? (
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Confirm Final Deletion"
                  )}
                </button>
                {!isDeleting && (
                  <button 
                    onClick={() => setConfirmStep(0)}
                    className="w-full text-gray-400 font-bold py-2"
                  >
                    Go Back
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal-like Overlay for success */}
        {isDeleting && (
          <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
            <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center mb-10 shadow-sm">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
            </div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-4">
              Data Erased
            </h2>
            <p className="text-gray-400 font-bold max-w-xs leading-relaxed">
              Your account and history have been successfully removed. Redirecting you to the home screen...
            </p>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
