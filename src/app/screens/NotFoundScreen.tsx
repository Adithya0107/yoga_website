import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { StatusBar } from "../components/StatusBar";

export function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 flex flex-col items-center justify-center text-center">
      <StatusBar  className="absolute top-0 left-0 right-0" />
      
      <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-8">
        <span className="text-5xl">🧘‍♂️</span>
      </div>

      <h1 className="text-4xl font-black text-purple-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Pose Not Found</h2>
      <p className="text-gray-500 mb-12">
        We couldn't find the page you're looking for. Let's get you back on track.
      </p>

      <GradientButton onClick={() => navigate("/home")}>
        Back to Home
      </GradientButton>
    </div>
  );
}
