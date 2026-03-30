import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { InputField } from "../components/InputField";
import { X, Lock, Hash, Loader2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { api } from "../utils/api";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function ForgotPasswordSuccessScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!otp || !newPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      await api.post('/user/reset_password', {
        email,
        otp,
        new_password: newPassword
      });
      toast.success("Password reset successfully!");
      navigate("/sign-in");
    } catch (error: any) {
      toast.error(error.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/bg-zen.png")' }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <StatusBar className="relative z-10" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col px-6 pt-4 pb-12">
        {/* Close Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-end mb-4"
        >
          <button 
            onClick={() => navigate("/welcome")}
            className="w-10 h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/40 group hover:bg-white transition-all"
          >
            <X className="w-5 h-5 text-gray-700 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-[10px] font-bold uppercase tracking-wider mb-3">
            Secure
          </span>
          <h1 className="text-5xl font-black mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Reset
            </span>
            <br />
            Password
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
            We've sent a 6-digit code to <span className="text-purple-600 font-bold">{email || "your email"}</span>.
          </p>
        </motion.div>

        {/* Glass Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl border border-white/50 flex-1 flex flex-col"
        >
          <div className="space-y-6 mb-8">
            <InputField
              label="Verification Code"
              type="text"
              placeholder="123456"
              icon={<Hash className="w-5 h-5 text-purple-400" />}
              value={otp}
              onChange={setOtp}
            />

            <InputField
              label="New Password"
              type="password"
              placeholder="••••••••"
              icon={<Lock className="w-5 h-5 text-purple-400" />}
              value={newPassword}
              onChange={setNewPassword}
            />
          </div>
          
          <div className="space-y-6 mt-auto">
            <GradientButton onClick={handleResetPassword} showArrow={false} disabled={isLoading} className="h-16 text-xl">
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin mx-auto text-white" />
              ) : (
                "Reset Password"
              )}
            </GradientButton>

            <div className="text-center">
              <button 
                onClick={() => navigate("/sign-in")}
                className="text-sm font-semibold text-gray-500 hover:text-purple-600 transition-colors"
              >
                Back to Sign In
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

