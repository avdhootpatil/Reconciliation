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
import { ShieldCheckIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom/dist";

function Payments() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const path = queryParams.get("path");

  const [paymentMode, setPaymentMode] = useState("online");
  const [chequeNumber, setChequeNumber] = useState("");
  const [chequeAmount, setChequeAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [associationName, setAssociationName] = useState("");
  const [favouredName, setFavouredName] = useState("");
  const [chequeFile, setChequeFile] = useState(null);

  const [policies, setPolicies] = useState([
    {
      policyName: "Health Insurance",
      sumInsured: "₹5,00,000",
      spouseChildren: "Spouse and 2 Children",
      topUp: "₹1,00,000",
      premium: "₹12,000 p.a.",
    },
    {
      policyName: "Life Insurance",
      sumInsured: "₹10,00,000",
      spouseChildren: "Spouse and 3 Children",
      topUp: "₹2,00,000",
      premium: "₹20,000 p.a.",
    },
  ]);
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
      <div className="grid gap-6">
        {path === "cart" ? (
          policies.map((policy, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] dark:from-gray-800 dark:to-gray-900 shadow-lg"
            >
              <CardHeader className="bg-white dark:bg-gray-800 rounded-t-lg p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">
                    {policy.policyName}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor={`sumInsured-${index}`}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Sum Insured
                    </Label>
                    <div className="text-lg font-bold">{policy.sumInsured}</div>
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor={`spouseChildren-${index}`}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Spouse and Children
                    </Label>
                    <div className="text-lg font-bold">
                      {policy.spouseChildren}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor={`topUp-${index}`}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Top Up Amount
                    </Label>
                    <div className="text-lg font-bold">{policy.topUp}</div>
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor={`premium-${index}`}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Premium
                    </Label>
                    <div className="text-lg font-bold">{policy.premium}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card
            key={policies[0]}
            className="bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] dark:from-gray-800 dark:to-gray-900 shadow-lg"
          >
            <CardHeader className="bg-white dark:bg-gray-800 rounded-t-lg p-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold">
                  {policies[0].policyName}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor={`sumInsured-${policies[0]}`}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Sum Insured
                  </Label>
                  <div className="text-lg font-bold">
                    {policies[0].sumInsured}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor={`spouseChildren-${policies[0]}`}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Spouse and Children
                  </Label>
                  <div className="text-lg font-bold">
                    {policies[0].spouseChildren}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor={`topUp-${policies[0]}`}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Top Up Amount
                  </Label>
                  <div className="text-lg font-bold">{policies[0].topUp}</div>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor={`premium-${policies[0]}`}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Premium
                  </Label>
                  <div className="text-lg font-bold">{policies[0].premium}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

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
