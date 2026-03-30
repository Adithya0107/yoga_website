import { useState } from "react";
import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { InputField } from "../components/InputField";
import { X, Mail, Loader2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { api } from "../utils/api";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendResetLink = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      await api.post('/user/forgot_password', { email });
      toast.success("Verification code sent to your email");
      navigate("/forgot-password-success", { state: { email } });
    } catch (error: any) {
      toast.error(error.message || "Failed to send reset link");
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
            onClick={() => navigate("/sign-in")}
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
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-[10px] font-bold uppercase tracking-wider mb-3">
            Recovery
          </span>
          <h1 className="text-5xl font-black mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Forgot
            </span>
            <br />
            Password?
          </h1>
          <p className="text-gray-500 text-lg">
            Enter your email to receive a reset code.
          </p>
        </motion.div>

        {/* Glass Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl border border-white/50 flex-1 flex flex-col pt-10"
        >
          <div className="mb-8">
            <InputField
              label="Email Address"
              type="email"
              placeholder="Email Address"
              icon={<Mail className="w-5 h-5 text-purple-400" />}
              value={email}
              onChange={setEmail}
            />
          </div>
          
          <div className="space-y-6 mt-auto">
            <GradientButton onClick={handleSendResetLink} showArrow={false} disabled={isLoading} className="h-16 text-xl">
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin mx-auto text-white" />
              ) : (
                "Send Reset Link"
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

