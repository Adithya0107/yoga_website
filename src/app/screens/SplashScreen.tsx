import { useEffect } from "react";
import { useNavigate } from "react-router";
import logoImage from "/src/assets/605287ed814451434f1270924b17af622adef8f9.png";
import { StatusBar } from "../components/StatusBar";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-6">
      {/* Status Bar */}
      <StatusBar  className="absolute top-0 left-0 right-0" />

      {/* Yoga Logo */}
      <div className="mb-8">
        <img src={logoImage} alt="Yoga Logo" className="w-48 h-48" />
      </div>

      {/* Title */}
      <h1 className="text-4xl text-purple-400 italic" style={{ fontFamily: 'Georgia, serif' }}>
        Yoga is Everything
      </h1>
    </div>
  );
}