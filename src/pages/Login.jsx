import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const handleContinue = () => {
    setShowOTP(true);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your mobile number below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+1 (555) 555-5555"
                  required
                  disabled={showOTP}
                />
              </div>
              {!showOTP && (
                <Button onClick={handleContinue} className="w-full mt-2">
                  Continue
                </Button>
              )}
            </div>
            {showOTP && (
              <div className="grid gap-2">
                <Label htmlFor="otp">One-Time Password</Label>
                <div className="flex items-center w-full">
                  <InputOTP maxLength={6} pattern="^[0-9]+$">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <Button
                  onClick={() => navigate("/")}
                  type="submit"
                  className="w-full"
                >
                  Continue
                </Button>
              </div>
            )}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a
              onClick={() => navigate("/signup")}
              className="underline cursor-pointer"
            >
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
