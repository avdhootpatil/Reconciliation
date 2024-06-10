import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import WithLayout from "@/components/layout/WithLayout";

function CreateProduct() {
  const [spouseCoverage, setSpouseCoverage] = useState(false);
  const [handicappedChildrenCoverage, setHandicappedChildrenCoverage] =
    useState(false);
  const [handicappedChildren, setHandicappedChildren] = useState(0);
  const [sumInsuredOptions, setSumInsuredOptions] = useState([
    {
      sumInsured: "",
      selfOnly: "",
      spouse: "",
      children1: "",
      children2: "",
      total: "",
    },
  ]);
  const [policyType, setPolicyType] = useState("base");

  const handleSpouseCoverageChange = () => {
    setSpouseCoverage(!spouseCoverage);
  };

  const handleChildrenCoverageChange = () => {
    setHandicappedChildrenCoverage(!handicappedChildrenCoverage);

    if (!handicappedChildrenCoverage) {
      setHandicappedChildren(1);
    } else {
      setHandicappedChildren(0);
    }
  };

  const handleHandicappedChildrenChange = (value) => {
    if (value <= 2) {
      setHandicappedChildren(value);
    } else {
      setHandicappedChildren(2);
    }
  };
  const handleSumInsuredChange = (index, field, value) => {
    const updatedOptions = [...sumInsuredOptions];
    updatedOptions[index][field] = value;
    updatedOptions[index].total =
      parseFloat(value) +
      parseFloat(updatedOptions[index].spouse) +
      parseFloat(updatedOptions[index].children1) +
      parseFloat(updatedOptions[index].children2);
    setSumInsuredOptions(updatedOptions);
  };
  const handleAddOption = (event) => {
    event.preventDefault();
    setSumInsuredOptions([
      ...sumInsuredOptions,
      {
        sumInsured: "",
        selfOnly: "",
        spouse: "",
        children1: "",
        children2: "",
        total: "",
      },
    ]);
  };
  const handleRemoveOption = (index) => {
    const updatedOptions = [...sumInsuredOptions];
    updatedOptions.splice(index, 1);
    setSumInsuredOptions(updatedOptions);
  };
  const handlePolicyTypeChange = (value) => {
    setPolicyType(value);
  };
  return (
    <div className="container ">
      <h1 className="mb-8 text-3xl font-bold">Create Policy</h1>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="policyName">Policy Name</Label>
            <Input id="policyName" placeholder="Enter policy name" />
          </div>
          <div>
            <Label htmlFor="policyType">Policy Type</Label>
            <Select
              id="policyType"
              value={policyType}
              onValueChange={handlePolicyTypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select policy type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="base">Base Policy</SelectItem>
                <SelectItem value="topup">Top Up Policy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="basePolicyLink">Link to Base Policy</Label>
            <Select id="basePolicyLink" disabled={policyType === "base"}>
              <SelectTrigger>
                <SelectValue placeholder="Select base policy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="policy1">Policy 1</SelectItem>
                <SelectItem value="policy2">Policy 2</SelectItem>
                <SelectItem value="policy3">Policy 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <Checkbox
              id="spouseCoverage"
              checked={spouseCoverage}
              onCheckedChange={handleSpouseCoverageChange}
            />
            <Label htmlFor="spouseCoverage" className="ml-2">
              Spouse Coverage
            </Label>
          </div>
          <div>
            <Checkbox
              id="handicappedChildren"
              checked={handicappedChildrenCoverage}
              onCheckedChange={handleChildrenCoverageChange}
            />
            <Label htmlFor="handicappedChildren" className="ml-2">
              Handicapped Children Coverage
            </Label>
            {handicappedChildrenCoverage && (
              <div className="mt-2">
                <Input
                  type="number"
                  min="1"
                  max="2"
                  value={handicappedChildren}
                  onChange={(e) =>
                    handleHandicappedChildrenChange(parseInt(e.target.value))
                  }
                />
                <span className="ml-2">Handicapped Children</span>
              </div>
            )}
          </div>
        </div>
        <div>
          <Label>Sum Insured Options</Label>
          <div className="space-y-4">
            {sumInsuredOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-4">
                <Input
                  type="number"
                  placeholder="Enter sum insured"
                  value={option.sumInsured}
                  onChange={(e) =>
                    handleSumInsuredChange(index, "sumInsured", e.target.value)
                  }
                />
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    placeholder="Self Only "
                    value={option.selfOnly}
                    onChange={(e) =>
                      handleSumInsuredChange(index, "selfOnly", e.target.value)
                    }
                  />
                  {spouseCoverage && (
                    <Input
                      type="number"
                      placeholder="Spouse "
                      value={option.spouse}
                      onChange={(e) =>
                        handleSumInsuredChange(index, "spouse", e.target.value)
                      }
                    />
                  )}
                  {handicappedChildren === 1 && (
                    <Input
                      type="number"
                      placeholder="Children 1 "
                      value={option.children1}
                      onChange={(e) =>
                        handleSumInsuredChange(
                          index,
                          "children1",
                          e.target.value
                        )
                      }
                    />
                  )}
                  {handicappedChildren === 2 && (
                    <>
                      <Input
                        type="number"
                        placeholder="Children 2"
                        value={option.children1}
                        onChange={(e) =>
                          handleSumInsuredChange(
                            index,
                            "children1",
                            e.target.value
                          )
                        }
                      />
                      <Input
                        type="number"
                        placeholder="Children 2 Premium"
                        value={option.children2}
                        onChange={(e) =>
                          handleSumInsuredChange(
                            index,
                            "children2",
                            e.target.value
                          )
                        }
                      />
                    </>
                  )}
                  {/* <div className="font-medium">{option.total}</div> */}
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleRemoveOption(index)}
                >
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={handleAddOption}
              className="mt-5"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save Policy</Button>
        </div>
      </form>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function Trash2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

export default WithLayout(CreateProduct);
