import { useState } from "react";
import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { InputField } from "../components/InputField";
import { X, Mail, Lock, Loader2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { api } from "../utils/api";
import { useUser } from "../context/UserContext";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function SignInScreen() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setIsLoading(true);
    try {
      const result = await api.post('/user/login', { email, password });
      if (result.status === 'success') {
        login(result.user);
        toast.success("Login successful!");
        navigate("/home");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in");
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
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-[10px] font-bold uppercase tracking-wider mb-3">
            Welcome Back
          </span>
          <h1 className="text-5xl font-black mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Renew
            </span> Your
            <br />
            Journey.
          </h1>
          <p className="text-gray-500 text-lg">
            Sign in to continue your path to zen.
          </p>
        </motion.div>

        {/* Glass Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl border border-white/50 flex-1"
        >
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="space-y-6 mb-8">
              <InputField
                label="Email Address"
                type="email"
                placeholder="name@example.com"
                icon={<Mail className="w-5 h-5 text-purple-400" />}
                value={email}
                onChange={setEmail}
              />
              
              <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={<Lock className="w-5 h-5 text-purple-400" />}
                value={password}
                onChange={setPassword}
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right -mt-4 mb-8">
              <button 
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm font-semibold text-purple-600 hover:text-cyan-500 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Action Section */}
            <div className="space-y-6">
              <GradientButton type="submit" disabled={isLoading} className="h-16 text-xl">
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                ) : (
                  "Sign In"
                )}
              </GradientButton>

              <div className="text-center">
                <p className="text-gray-500 text-sm mb-2">Don't have an account?</p>
                <button 
                  onClick={() => navigate("/create-account")}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-50 text-purple-600 font-bold text-sm border border-purple-100 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                >
                  CREATE NEW ACCOUNT
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}