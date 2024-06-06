import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import WithLayout from "@/components/layout/WithLayout";
import FileUpload from "@/components/ui/fileUpload";

function Payments() {
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
  const handleSubmitCheque = () => {};
  const handleSubmitDD = () => {};
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
        <CardHeader>
          <CardTitle>Payment Mode</CardTitle>
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
              <Button>Pay</Button>
            </div>
          )}
          {paymentMode === "offline" && (
            <div className="grid gap-4 mt-3 mb-3">
              <Tabs
                defaultValue="cheque"
                className="w-full"
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="cheque">Cheque</TabsTrigger>
                  <TabsTrigger value="dd">Demand Draft</TabsTrigger>
                </TabsList>
                <TabsContent value="cheque">
                  <div className=" flex flex-col">
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
                        Bank Name
                      </Label>
                      <Input
                        id="bankName"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        placeholder="Bank Name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="associationName">
                        Association Name
                      </Label>
                      <Input
                        id="associationName"
                        value={associationName}
                        onChange={(e) => setAssociationName(e.target.value)}
                        placeholder="Association Name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="favouredName">
                        In Favour Of
                      </Label>
                      <Input
                        id="favouredName"
                        value={favouredName}
                        onChange={(e) => setFavouredName(e.target.value)}
                        placeholder="In Favour Of"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="chequeFile">
                        Cheque File
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
                </TabsContent>
                <TabsContent value="dd">
                  <div className="flex flex-col">
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="ddNumber">
                        Demand Draft Number
                      </Label>
                      <Input
                        id="ddNumber"
                        value={ddNumber}
                        onChange={(e) => setDDNumber(e.target.value)}
                        placeholder="Demand Draft Number"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="ddPayableAt">
                        Payable At
                      </Label>
                      <Input
                        id="ddPayableAt"
                        value={ddPayableAt}
                        onChange={(e) => setDDPayableAt(e.target.value)}
                        placeholder="Payable At"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="ddAmount">
                        Amount
                      </Label>
                      <Input
                        id="ddAmount"
                        value={ddAmount}
                        onChange={(e) => setDDAmount(e.target.value)}
                        placeholder="Amount"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="ddFavouredName">
                        In Favour Of
                      </Label>
                      <Input
                        id="ddFavouredName"
                        value={ddFavouredName}
                        onChange={(e) => setDDFavouredName(e.target.value)}
                        placeholder="In Favour Of"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="mt-3" htmlFor="ddFile">
                        Demand Draft File
                      </Label>
                      <FileUpload id="ddFile" onChange={handleDDFileChange} />
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button onClick={handleSubmitDD}>Pay</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default WithLayout(Payments);
