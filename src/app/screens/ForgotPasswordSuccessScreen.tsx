import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { InputField } from "../components/InputField";
import { X, Lock, Hash, Loader2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { api } from "../utils/api";
import { toast } from "sonner";

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
    <div className="min-h-screen bg-gray-100 px-6 py-12 text-left">
      <StatusBar  className="absolute top-0 left-0 right-0" />

      {/* Close Button */}
      <div className="flex justify-end mb-8">
        <button 
          onClick={() => navigate("/welcome")}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Header */}
      <h1 className="text-5xl mb-3 leading-tight font-black" style={{ color: '#7C3AED' }}>
        Reset Password
      </h1>
      <p className="text-gray-500 mb-8 text-base">
        We've sent a 6-digit code to <span className="text-purple-600 font-bold">{email}</span>. Please enter it below along with your new password.
      </p>

      {/* Form */}
      <div className="space-y-5 mb-8">
        <InputField
          label="Verification Code"
          type="text"
          placeholder="123456"
          icon={<Hash className="w-5 h-5" />}
          value={otp}
          onChange={(val) => setOtp(val)}
        />

        <InputField
          label="New Password"
          type="password"
          placeholder="••••••••"
          icon={<Lock className="w-5 h-5" />}
          value={newPassword}
          onChange={(val) => setNewPassword(val)}
        />
      </div>

      {/* Reset Password Button */}
      <div className="mb-6">
        <GradientButton onClick={handleResetPassword} showArrow={false} disabled={isLoading}>
          {isLoading ? <Loader2 className="w-6 h-6 animate-spin mx-auto text-purple-600" /> : "Reset Password"}
        </GradientButton>
      </div>

      {/* Back to Sign In Link */}
      <div className="text-center">
        <button 
          onClick={() => navigate("/sign-in")}
          className="text-gray-500 font-medium"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
}

