import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import logoImage from "/src/assets/605287ed814451434f1270924b17af622adef8f9.png";
import { StatusBar } from "../components/StatusBar";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-between px-6 py-12">
      <StatusBar  className="absolute top-0 left-0 right-0" />

      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        {/* Yoga Logo */}
        <div className="mb-6">
          <img src={logoImage} alt="Yoga Logo" className="w-32 h-32" />
        </div>

        <p className="text-purple-400 italic mb-12 text-lg" style={{ fontFamily: 'Georgia, serif' }}>
          Yoga is Everything
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl mb-6 text-center leading-tight" style={{ color: '#7C3AED' }}>
          Begin Your Evolution
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-center mb-12 text-base px-4">
          AI-powered yoga routines personalized for your unique body and goals.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-md space-y-4">
        <GradientButton onClick={() => navigate("/create-account")} showArrow={false}>
          Create Account
        </GradientButton>
        <button 
          onClick={() => navigate("/sign-in")}
          className="w-full py-4 text-purple-600 font-semibold text-lg"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}