import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import WithLayout from "@/components/layout/WithLayout";
import { DatePicker } from "@/components/ui/datePicker";

function Profile() {
  const [activeTab, setActiveTab] = useState("my-policies");
  const [nominees, setNominees] = useState([
    { name: "", dob: "", relation: "" },
  ]);
  const addNominee = () => {
    setNominees([...nominees, { name: "", dob: "", relation: "" }]);
  };
  const handleNomineeChange = (index, field, value) => {
    const updatedNominees = [...nominees];
    updatedNominees[index][field] = value;
    setNominees(updatedNominees);
  };
  const policies = [
    {
      id: 1,
      name: "Life Insurance",
      sumInsured: 500000,
      topUp: true,
      isActive: true,
    },
    {
      id: 2,
      name: "Health Insurance",
      sumInsured: 200000,
      topUp: false,
      isActive: true,
    },
    {
      id: 3,
      name: "Accident Insurance",
      sumInsured: 100000,
      topUp: true,
      isActive: false,
    },
    {
      id: 4,
      name: "Travel Insurance",
      sumInsured: 50000,
      topUp: false,
      isActive: true,
    },
  ];
  return (
    <article className="prose prose-gray px-4 md:px-0 dark:prose-invert">
      <div>
        <Tabs
          defaultValue="basic-details"
          // className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="mb-10">
            <TabsTrigger value="my-policies">My Policies</TabsTrigger>
            <TabsTrigger value="basic-details">Basic Details</TabsTrigger>
            <TabsTrigger value="bank-association">
              Bank & Association
            </TabsTrigger>
            <TabsTrigger value="nominee">Nominee</TabsTrigger>
          </TabsList>
          <TabsContent value="basic-details">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name of the Applicant</Label>
                  <Input id="name" placeholder="Enter your name" />
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
                  <Label htmlFor="dob">Date of Birth</Label>
                  <DatePicker
                    Label="Date of birth"
                    id="dob"
                    type="date"
                    placeholder="dd-mm-yyyy"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your address" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" type="tel" placeholder="123-456-7890" />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bank-association">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bank-name">Bank Name</Label>
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
                      <SelectItem value="association1">
                        Association 1
                      </SelectItem>
                      <SelectItem value="association2">
                        Association 2
                      </SelectItem>
                      <SelectItem value="association3">
                        Association 3
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pf-no">PF No/Emp ID (Optional)</Label>
                  <Input
                    id="pf-no"
                    placeholder="Enter PF number or employee ID"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="nominee">
            <div className="space-y-4">
              {nominees.map((nominee, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 border-b pb-5"
                >
                  <div className="space-y-2">
                    <Label htmlFor={`nominee-name-${index}`}>
                      Nominee Name
                    </Label>
                    <Input
                      id={`nominee-name-${index}`}
                      placeholder="Enter nominee name"
                      value={nominee.name}
                      onChange={(e) =>
                        handleNomineeChange(index, "name", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`nominee-dob-${index}`}>
                      Date of Birth
                    </Label>
                    <DatePicker
                      id={`nominee-dob-${index}`}
                      type="date"
                      placeholder="dd-mm-yyyy"
                      value={nominee.dob}
                      onChange={(e) =>
                        handleNomineeChange(index, "dob", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`nominee-relation-${index}`}>
                      Relation with Nominee
                    </Label>
                    <Input
                      id={`nominee-relation-${index}`}
                      placeholder="Enter relation"
                      value={nominee.relation}
                      onChange={(e) =>
                        handleNomineeChange(index, "relation", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
              <Button onClick={addNominee}>Add Nominee</Button>
            </div>
          </TabsContent>
          <TabsContent value="my-policies">
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Number</TableHead>
                    <TableHead>Policy Name</TableHead>
                    <TableHead>Sum Insured</TableHead>
                    <TableHead>Top Up</TableHead>
                    <TableHead>Is Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {policies.map((policy) => (
                    <TableRow key={policy.id}>
                      <TableCell>{policy.id}</TableCell>
                      <TableCell>{policy.name}</TableCell>
                      <TableCell>
                        ${policy.sumInsured.toLocaleString()}
                      </TableCell>
                      <TableCell>{policy.topUp ? "Yes" : "No"}</TableCell>
                      <TableCell>{policy.isActive ? "Yes" : "No"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </article>
  );
}

export default WithLayout(Profile);
