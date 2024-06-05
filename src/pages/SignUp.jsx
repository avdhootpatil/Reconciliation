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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom/dist";
import ChevronDownIcon from "@/assets/ChevronDownIcon";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="+1 (123) 456-7890"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bank-name">Bank Name</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Select Bank</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Select Bank</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Bank of America</DropdownMenuItem>
                  <DropdownMenuItem>Chase</DropdownMenuItem>
                  <DropdownMenuItem>Wells Fargo</DropdownMenuItem>
                  <DropdownMenuItem>Citibank</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bank-association">Bank Association</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Select Association</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Select Association</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Visa</DropdownMenuItem>
                  <DropdownMenuItem>Mastercard</DropdownMenuItem>
                  <DropdownMenuItem>American Express</DropdownMenuItem>
                  <DropdownMenuItem>Discover</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
