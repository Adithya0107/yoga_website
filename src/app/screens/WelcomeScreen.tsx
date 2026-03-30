import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import logoImage from "/src/assets/605287ed814451434f1270924b17af622adef8f9.png";
import { StatusBar } from "../components/StatusBar";
import { motion } from "framer-motion";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Immersive Zen Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/bg-zen.png")' }}
      >
        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <StatusBar className="relative z-10" />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col px-6 pt-12 pb-12">
        
        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-4 bg-purple-400/20 blur-2xl rounded-full" />
              <img 
                src={logoImage} 
                alt="Yoga Logo" 
                className="w-[280px] h-[280px] -mt-8 relative z-10 drop-shadow-2xl mix-blend-multiply" 
              />
            </div>

            <h1 className="text-6xl font-black mb-6 tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Begin
              </span>
              <br />
              Your Evolution
            </h1>

            <p className="text-gray-500 text-xl max-w-sm mx-auto leading-relaxed">
              AI-powered yoga routines personalized for your unique body and goals.
            </p>
          </motion.div>
        </div>

        {/* Action Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/60 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl border border-white/50 space-y-4 max-w-lg mx-auto w-full"
        >
          <GradientButton onClick={() => navigate("/create-account")} showArrow={true} className="h-16 text-xl">
            Create Account
          </GradientButton>
          
          <button 
            onClick={() => navigate("/sign-in")}
            className="w-full py-5 text-gray-700 font-bold text-lg rounded-3xl hover:bg-white/40 transition-all flex items-center justify-center gap-2 group border border-transparent hover:border-white/50"
          >
            Already have an account? <span className="text-purple-600 group-hover:underline">Sign In</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}