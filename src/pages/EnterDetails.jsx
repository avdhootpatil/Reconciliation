import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WithLayout from "@/components/layout/WithLayout";
import { useNavigate } from "react-router-dom";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function EnterDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dependents");

  const [nominees, setNominees] = useState([
    {
      name: "",
      age: "",
      relation: "",
      dob: "",
    },
  ]);
  const handleAddNominee = () => {
    setNominees([
      ...nominees,
      {
        name: "",
        age: "",
        relation: "",
        dob: "",
      },
    ]);
  };
  const handleNomineeChange = (index, field, value) => {
    const updatedNominees = [...nominees];
    updatedNominees[index][field] = value;
    setNominees(updatedNominees);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Beneficiary Details</h1>
      <div className=" mx-auto ">
        <Tabs
          defaultValue="dependents"
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="mb-10">
            <TabsTrigger value="dependents">Dependent Details</TabsTrigger>
            <TabsTrigger value="nominees">Nominee Details</TabsTrigger>
          </TabsList>
          <TabsContent value="dependents">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spouse</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="spouse-name">Name</Label>
                      <Input id="spouse-name" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="spouse-age">Age</Label>
                      <Input
                        id="spouse-age"
                        type="number"
                        placeholder="Enter age"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="spouse-dob">Date of Birth</Label>
                      <Input id="spouse-dob" type="date" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Child 1</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="child1-name">Name</Label>
                      <Input id="child1-name" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child1-age">Age</Label>
                      <Input
                        id="child1-age"
                        type="number"
                        placeholder="Enter age"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child1-dob">Date of Birth</Label>
                      <Input id="child1-dob" type="date" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Child 2</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="child2-name">Name</Label>
                      <Input id="child2-name" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child2-age">Age</Label>
                      <Input
                        id="child2-age"
                        type="number"
                        placeholder="Enter age"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child2-dob">Date of Birth</Label>
                      <Input id="child2-dob" type="date" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end">
              <Button
                className="mt-3 "
                onClick={() => setActiveTab("nominees")}
              >
                Save and Next
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="nominees">
            <Card>
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle>Nominee Details</CardTitle>
                  <CardDescription>
                    Add multiple nominees and their details.
                  </CardDescription>
                </div>
                <div className="flex items-end space-y-2">
                  <Button onClick={() => handleAddNominee()}>
                    Add Nominee
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {nominees.map((nominee, index) => (
                  <div key={index} className="grid gap-4">
                    <div className="grid grid-cols-5 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`nominee-name-${index}`}>Name</Label>
                        <Input
                          id={`nominee-name-${index}`}
                          placeholder="Enter name"
                          value={nominee.name}
                          onChange={(e) =>
                            handleNomineeChange(index, "name", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`nominee-age-${index}`}>Age</Label>
                        <Input
                          id={`nominee-age-${index}`}
                          type="number"
                          placeholder="Enter age"
                          value={nominee.age}
                          onChange={(e) =>
                            handleNomineeChange(index, "age", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`nominee-relation-${index}`}>
                          Relation
                        </Label>
                        <Input
                          id={`nominee-relation-${index}`}
                          placeholder="Enter relation"
                          value={nominee.relation}
                          onChange={(e) =>
                            handleNomineeChange(
                              index,
                              "relation",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`nominee-dob-${index}`}>
                          Date of Birth
                        </Label>
                        <Input
                          id={`nominee-dob-${index}`}
                          type="date"
                          value={nominee.dob}
                          onChange={(e) =>
                            handleNomineeChange(index, "dob", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="child1-policy">Policy</Label>
                        <Select>
                          <SelectTrigger id="child1-policy" aria-label="Policy">
                            <SelectValue placeholder="Select Policy" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="policy1">Policy 1</SelectItem>
                            <SelectItem value="policy2">Policy 2</SelectItem>
                            <SelectItem value="policy3">Policy 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <div className="flex justify-end ">
              <Button
                className="mt-3 "
                onClick={() => navigate("/payment?path=cart")}
              >
                Save and Pay
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default WithLayout(EnterDetails);
