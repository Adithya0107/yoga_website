import { useState } from "react";
import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { InputField } from "../components/InputField";
import { X, Mail, Loader2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { api } from "../utils/api";
import { toast } from "sonner";

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
    <div className="min-h-screen bg-gray-100 px-6 py-12 text-left">
      <StatusBar  className="absolute top-0 left-0 right-0" />

      {/* Close Button */}
      <div className="flex justify-end mb-8">
        <button 
          onClick={() => navigate("/sign-in")}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Header */}
      <h1 className="text-5xl mb-3 leading-tight font-black" style={{ color: '#7C3AED' }}>
        Forgot Password
      </h1>
      <p className="text-gray-500 mb-8 text-base">
        Enter your registered email to receive a reset code.
      </p>

      {/* Form */}
      <div className="mb-8">
        <InputField
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          icon={<Mail className="w-5 h-5" />}
          value={email}
          onChange={(val) => setEmail(val)}
        />
      </div>

      {/* Send Reset Link Button */}
      <div className="mb-6 text-left">
        <GradientButton onClick={handleSendResetLink} showArrow={false} disabled={isLoading}>
          {isLoading ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : "Send Reset Link"}
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

