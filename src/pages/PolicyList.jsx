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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WithLayout from "@/components/layout/WithLayout";
import { useNavigate } from "react-router-dom";

function PolicyList() {
  const navigate = useNavigate();
  const policyDetails = [
    {
      name: "Life Insurance",
      coverAmount: 500000,
      details:
        "This is a comprehensive life insurance policy that provides coverage in the event of death or disability.",
    },
    {
      name: "Health Insurance",
      coverAmount: 100000,
      details:
        "This health insurance policy covers a wide range of medical expenses, including hospitalization, outpatient treatment, and preventive care.",
    },
    {
      name: "Home Insurance",
      coverAmount: 300000,
      details:
        "This home insurance policy protects your property against damages caused by natural disasters, theft, and other covered events.",
    },
    {
      name: "Auto Insurance",
      coverAmount: 50000,
      details:
        "This auto insurance policy provides coverage for your vehicle, including liability, collision, and comprehensive protection.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [sumInsured, setSumInsured] = useState(0);
  const [includeSouse, setIncludeSouse] = useState(false);
  const [includeHandicappedChildren, setIncludeHandicappedChildren] =
    useState(false);
  const [handicappedChildrenCount, setHandicappedChildrenCount] = useState(0);
  const [handicappedChildrenDetails, setHandicappedChildrenDetails] = useState(
    []
  );
  const [spouseDetails, setSpouseDetails] = useState({
    name: "",
    age: "",
    dateOfBirth: "",
  });
  const filteredPolicies = policyDetails.filter((policy) =>
    policy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleViewDetails = (policy) => {
    setSelectedPolicy(policy);
  };
  const handleSumInsuredChange = (value) => {
    setSumInsured(value);
  };
  const handleIncludeSouseChange = () => {
    setIncludeSouse(!includeSouse);
  };
  const handleIncludeHandicappedChildrenChange = () => {
    setIncludeHandicappedChildren(!includeHandicappedChildren);
  };
  const handleHandicappedChildrenCountChange = (count) => {
    setHandicappedChildrenCount(count);
    setHandicappedChildrenDetails(
      Array(count).fill({
        name: "",
        age: "",
        dateOfBirth: "",
        gender: "",
      })
    );
  };
  const handleHandicappedChildrenDetailsChange = (index, field, value) => {
    const updatedDetails = [...handicappedChildrenDetails];
    updatedDetails[index][field] = value;
    setHandicappedChildrenDetails(updatedDetails);
  };
  const handleSpouseDetailsChange = (field, value) => {
    setSpouseDetails({
      ...spouseDetails,
      [field]: value,
    });
  };
  const calculatePremium = () => {
    let premium = 0;
    premium += sumInsured * 0.01;
    if (includeSouse) {
      premium += spouseDetails.age * 100;
    }
    if (includeHandicappedChildren) {
      premium += handicappedChildrenCount * 500;
    }
    return premium;
  };
  return (
    <div className="max-w-6xl  my-12 px-4 md:px-0">
      {selectedPolicy ? (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{selectedPolicy.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="sum-insured">Sum Insured</Label>
                    <Select
                      id="sum-insured"
                      value={sumInsured}
                      onValueChange={handleSumInsuredChange}
                    >
                      <SelectTrigger>
                        <SelectValue>{sumInsured}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={50000}>$50,000</SelectItem>
                        <SelectItem value={100000}>$100,000</SelectItem>
                        <SelectItem value={250000}>$250,000</SelectItem>
                        <SelectItem value={500000}>$500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Checkbox
                      checked={includeSouse}
                      onCheckedChange={handleIncludeSouseChange}
                      className="mr-3"
                    />
                    <Label htmlFor="include-spouse">Include Spouse</Label>
                  </div>
                  <div>
                    <Checkbox
                      checked={includeHandicappedChildren}
                      onCheckedChange={handleIncludeHandicappedChildrenChange}
                      className="mr-3"
                    />
                    <Label htmlFor="include-handicapped-children">
                      Include Handicapped Children
                    </Label>
                    {includeHandicappedChildren && (
                      <div className="mt-4">
                        <Label htmlFor="handicapped-children-count">
                          Number of Handicapped Children
                        </Label>
                        <Input
                          id="handicapped-children-count"
                          type="number"
                          min="0"
                          value={handicappedChildrenCount}
                          onChange={(e) =>
                            handleHandicappedChildrenCountChange(e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>
                  {includeHandicappedChildren &&
                    handicappedChildrenCount > 0 && (
                      <div className="space-y-4 border-t my-5 py-5">
                        <h3 className="text-lg font-bold">
                          Handicapped Children Details
                        </h3>
                        {handicappedChildrenDetails.map((child, index) => (
                          <div key={index} className="space-y-2">
                            <div>
                              <Label htmlFor={`child-name-${index}`}>
                                Name
                              </Label>
                              <Input
                                id={`child-name-${index}`}
                                value={child.name}
                                onChange={(e) =>
                                  handleHandicappedChildrenDetailsChange(
                                    index,
                                    "name",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor={`child-age-${index}`}>Age</Label>
                              <Input
                                id={`child-age-${index}`}
                                type="number"
                                min="0"
                                value={child.age}
                                onChange={(e) =>
                                  handleHandicappedChildrenDetailsChange(
                                    index,
                                    "age",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor={`child-dob-${index}`}>
                                Date of Birth
                              </Label>
                              <Input
                                id={`child-dob-${index}`}
                                type="date"
                                value={child.dateOfBirth}
                                onChange={(e) =>
                                  handleHandicappedChildrenDetailsChange(
                                    index,
                                    "dateOfBirth",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor={`child-gender-${index}`}>
                                Gender
                              </Label>
                              <Select
                                id={`child-gender-${index}`}
                                value={child.gender}
                                onValueChange={(e) =>
                                  handleHandicappedChildrenDetailsChange(
                                    index,
                                    "gender",
                                    e.target.value
                                  )
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue>
                                    {child.gender || "Select"}
                                  </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  {includeSouse && (
                    <div className="space-y-2 border-t pt-5 my-5">
                      <h3 className="text-lg font-bold">Spouse Details</h3>
                      <div>
                        <Label htmlFor="spouse-name">Name</Label>
                        <Input
                          id="spouse-name"
                          value={spouseDetails.name}
                          onChange={(e) =>
                            handleSpouseDetailsChange("name", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="spouse-age">Age</Label>
                        <Input
                          id="spouse-age"
                          type="number"
                          min="0"
                          value={spouseDetails.age}
                          onChange={(e) =>
                            handleSpouseDetailsChange("age", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="spouse-dob">Date of Birth</Label>
                        <Input
                          id="spouse-dob"
                          type="date"
                          value={spouseDetails.dateOfBirth}
                          onChange={(e) =>
                            handleSpouseDetailsChange(
                              "dateOfBirth",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Premium Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="premium">Premium</Label>
                    <Input id="premium" value={calculatePremium()} readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end	">
              <Button
                onClick={() => {
                  navigate("/payment");
                }}
                className="mt-5"
              >
                Go to payments
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <article>
          <div>
            <div className="flex items-center justify-between mb-10">
              <Input
                type="search"
                placeholder="Search policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md"
              />
            </div>
            <div className="space-y-4">
              {filteredPolicies.map((policy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{policy.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <div>
                      <Label htmlFor={`cover-amount-${index}`}>
                        Cover Amount
                      </Label>
                      <Select id={`cover-amount-${index}`}>
                        <SelectTrigger>
                          <SelectValue>{policy.coverAmount}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50000">$50,000</SelectItem>
                          <SelectItem value="100000">$100,000</SelectItem>
                          <SelectItem value="250000">$250,000</SelectItem>
                          <SelectItem value="500000">$500,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => handleViewDetails(policy)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </article>
      )}
    </div>
  );
}

export default WithLayout(PolicyList);
