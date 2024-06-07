import WithLayout from "@/components/layout/WithLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/datePicker";
import FileUpload from "@/components/ui/fileUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

function Payments() {
  const navigate = useNavigate();
  const [paymentMode, setPaymentMode] = useState("online");
  const [activeTab, setActiveTab] = useState("cheque");
  const [chequeNumber, setChequeNumber] = useState("");
  const [chequeAmount, setChequeAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [associationName, setAssociationName] = useState("");
  const [favouredName, setFavouredName] = useState("");
  const [chequeFile, setChequeFile] = useState(null);
  const [ddNumber, setDDNumber] = useState("");
  const [ddPayableAt, setDDPayableAt] = useState("");
  const [ddAmount, setDDAmount] = useState("");
  const [ddFavouredName, setDDFavouredName] = useState("");
  const [ddFile, setDDFile] = useState(null);
  const policyDetails = {
    policyName: "Health Insurance",
    sumInsured: "₹5,00,000",
    spouseChildren: "Spouse and 2 Children",
    topUp: "₹1,00,000",
    premium: "₹12,000 p.a.",
  };
  const handlePaymentModeChange = (mode) => {
    setPaymentMode(mode);
  };
  const handleChequeFileChange = (event) => {
    setChequeFile(event.target.files[0]);
  };
  const handleDDFileChange = (event) => {
    setDDFile(event.target.files[0]);
  };
  const handleSubmitCheque = () => {
    navigate("/paymentsuccess");
  };
  const handleSubmitDD = () => {
    navigate("/paymentsuccess");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Policy Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="policyName">Policy Name</Label>
            <div>{policyDetails.policyName}</div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sumInsured">Sum Insured</Label>
            <div>{policyDetails.sumInsured}</div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="spouseChildren">Spouse and Children</Label>
            <div>{policyDetails.spouseChildren}</div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="topUp">Top Up Amount</Label>
            <div>{policyDetails.topUp}</div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="premium">Premium</Label>
            <div>{policyDetails.premium}</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Payment Mode</CardTitle>
          <Badge className="font-medium w-60 h-11 flex justify-between px-5">
            <Label htmlFor="premium">Amout Payable</Label>
            <div className="text-lg">₹10000</div>
          </Badge>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="grid gap-2">
            <Label className="mb-2" htmlFor="paymentMode">
              Payment Mode
            </Label>
            <Select
              id="paymentMode"
              value={paymentMode}
              onValueChange={handlePaymentModeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Payment Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {paymentMode === "online" && (
            <div className="flex justify-end mt-2">
              <Button onClick={() => navigate("/paymentsuccess")}>Pay</Button>
            </div>
          )}
          {paymentMode === "offline" && (
            <div className="grid gap-4 mt-3 mb-3">
              {/* <Tabs
                defaultValue="cheque"
                className="w-full"
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="cheque">Cheque</TabsTrigger>
                </TabsList> */}
              {/* <TabsContent value="cheque"> */}
              <div className=" flex flex-col mt-5">
                <div className="grid gap-2">
                  <Label htmlFor="chequeNumber">Cheque Number</Label>
                  <Input
                    id="chequeNumber"
                    value={chequeNumber}
                    onChange={(e) => setChequeNumber(e.target.value)}
                    placeholder="Cheque Number"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="mt-3" htmlFor="chequeAmount">
                    Amount
                  </Label>
                  <Input
                    id="chequeAmount"
                    value={chequeAmount}
                    onChange={(e) => setChequeAmount(e.target.value)}
                    placeholder="Amount"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="mt-3" htmlFor="bankName">
                    Bank Name{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      (The bank name on the cheque)
                    </span>
                  </Label>
                  <Input
                    id="bankName"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    placeholder="Bank Name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dob" className="mt-3">
                    Date{" "}
                  </Label>
                  <DatePicker
                    Label="Date of birth"
                    id="dob"
                    type="date"
                    placeholder="dd-mm-yyyy"
                  />
                </div>

                <div className="grid gap-2">
                  <Label className="mt-3" htmlFor="favouredName">
                    In Favour Of
                  </Label>
                  <Select id="favouredName">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Association" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank1">Association 1</SelectItem>
                      <SelectItem value="bank2">Association 2</SelectItem>
                      <SelectItem value="bank3">Association 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label className="mt-3" htmlFor="chequeFile">
                    Cheque Photo
                  </Label>
                  <FileUpload
                    id="chequeFile"
                    onChange={handleChequeFileChange}
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <Button onClick={handleSubmitCheque}>Pay</Button>
                </div>
              </div>
              {/* </TabsContent> */}
              {/* </Tabs> */}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default WithLayout(Payments);
