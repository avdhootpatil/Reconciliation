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
import { Link, useNavigate } from "react-router-dom/dist";

const Login = () => {
  const navigate = useNavigate();
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
              <Input
                id="mobile"
                type="tel"
                placeholder="+91-9999999999"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="otp">One-Time Password</Label>
              <div className="flex items-center gap-2">
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
                <Button type="submit" className="w-full">
                  Send OTP
                </Button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign In
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
