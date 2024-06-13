import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

function CreateRetiree() {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <h1 className="mb-8 text-3xl font-bold">Create Retiree</h1>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name of the Applicant</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pf-no">Pension Fund No. </Label>
            <Input id="pf-no" placeholder="Enter PF number" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bank-name">Retiree Bank Name </Label>
            <Select id="bank-name">
              <SelectTrigger>
                <SelectValue placeholder="Select bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bank1">Bank 1</SelectItem>
                <SelectItem value="bank2">Bank 2</SelectItem>
                <SelectItem value="bank3">Bank 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="association-name">Association Name</Label>
            <Select id="association-name">
              <SelectTrigger>
                <SelectValue placeholder="Select association" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="association1">Association 1</SelectItem>
                <SelectItem value="association2">Association 2</SelectItem>
                <SelectItem value="association3">Association 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <DatePicker
              Label="Date of birth"
              id="dob"
              type="date"
              placeholder="dd-mm-yyyy"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select id="gender">
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" type="tel" placeholder="123-456-7890" />
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your address" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              navigate("/policy");
            }}
          >
            Save & select product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default WithLayout(CreateRetiree);
