import { useState } from "react";
import { useNavigate } from "react-router";
import { GradientButton } from "../components/GradientButton";
import { InputField } from "../components/InputField";
import { X, User, Mail, Lock, Phone, Loader2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { useUser } from "../context/UserContext";
import { api } from "../utils/api";
import { toast } from "sonner";

export function CreateAccountScreen() {
  const navigate = useNavigate();
  const { updateUserData, login } = useUser();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (email !== email.toLowerCase()) {
      toast.error("Email must be in lowercase");
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    // Password strength validation (matches backend rules)
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    const missingReqs: string[] = [];
    if (!/[A-Z]/.test(password)) missingReqs.push("1 uppercase letter (A-Z)");
    if (!/[a-z]/.test(password)) missingReqs.push("1 lowercase letter (a-z)");
    if (!/[0-9]/.test(password)) missingReqs.push("1 number (0-9)");
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password)) missingReqs.push("1 special character (!@#$%^&*)");
    if (missingReqs.length > 0) {
      toast.error("Password must contain: " + missingReqs.join(", "));
      return;
    }

    setIsLoading(true);
    try {
      const result = await api.post('/user/register', {
        name: fullName,
        email: email,
        phone_number: phone,
        password: password
      });

      if (result.status === 'success') {
        login({
          id: result.user_id,
          name: fullName,
          email: email,
          phone_number: phone
        });
        toast.success("Account created successfully!");
        navigate("/onboarding/age");
      }
    } catch (error: any) {
      const errorMessage = error.message?.toLowerCase() || "";
      if (errorMessage.includes("exist") || errorMessage.includes("registered") || errorMessage.includes("already")) {
        toast.error("Email already existed");
        navigate("/sign-in");
      } else {
        toast.error(error.message || "Failed to create account");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 pb-24">
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
      <h1 className="text-5xl mb-3 leading-tight font-black text-left" style={{ color: '#7C3AED' }}>
        Create Account
      </h1>
      <p className="text-gray-500 mb-8 text-base text-left">
        Join ZenForge and start your journey
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-5 mb-8">
          <InputField
            label="Full Name"
            type="text"
            placeholder="Full Name"
            icon={<User className="w-5 h-5" />}
            value={fullName}
            onChange={(val) => setFullName(val)}
          />

          <InputField
            label="Email Address"
            type="email"
            placeholder="Email Address"
            icon={<Mail className="w-5 h-5" />}
            value={email}
            onChange={(val) => setEmail(val.toLowerCase())}
          />

          <InputField
            label="Phone Number"
            type="tel"
            placeholder="Phone Number"
            icon={<Phone className="w-5 h-5" />}
            value={phone}
            onChange={(val) => {
              const onlyNums = val.replace(/[^0-9]/g, '');
              if (onlyNums.length <= 10) {
                setPhone(onlyNums);
              }
            }}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            icon={<Lock className="w-5 h-5" />}
            value={password}
            onChange={(val) => setPassword(val)}
          />

          <InputField
            label="Re-enter Password"
            type="password"
            placeholder="Re-enter Password"
            icon={<Lock className="w-5 h-5" />}
            value={confirmPassword}
            onChange={(val) => setConfirmPassword(val)}
          />
        </div>

        {/* Create Account Button */}
        <div className="mb-6">
          <GradientButton
            type="submit"
            variant="secondary"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin mx-auto text-purple-600" /> : "Create Account"}
          </GradientButton>
        </div>
      </form>

      {/* Sign In Link */}
      <div className="text-center">
        <span className="text-gray-500">Already have an account? </span>
        <button
          onClick={() => navigate("/sign-in")}
          className="text-purple-600 font-semibold"
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}