import { useEffect } from "react";
import { useNavigate } from "react-router";
import logoImage from "/src/assets/605287ed814451434f1270924b17af622adef8f9.png";
import { StatusBar } from "../components/StatusBar";
import { motion } from "framer-motion";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* Zen Background with Soft Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: 'url("/images/bg-zen.png")' }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[4px]" />
      </div>

      <StatusBar className="relative z-10" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-12"
        >
          <div className="absolute -inset-8 bg-purple-400/20 blur-[60px] rounded-full animate-pulse" />
          <img 
            src={logoImage} 
            alt="Yoga Logo" 
            className="w-56 h-56 relative z-10 drop-shadow-[0_20px_50px_rgba(124,58,237,0.15)]" 
          />
        </motion.div>

        {/* Animated Title Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md text-purple-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border border-white/40 mb-2">
            Z E N F O R G E
          </span>
          <h1 className="text-4xl text-gray-800 font-extralight tracking-widest uppercase">
            Yoga is <span className="font-black text-purple-600">Everything</span>
          </h1>
          
          <div className="w-48 h-[2px] bg-gray-200/50 mt-12 overflow-hidden mx-auto rounded-full backdrop-blur-sm">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-purple-400 to-cyan-400"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}