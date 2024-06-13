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
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WithLayout from "@/components/layout/WithLayout";
function PolicyList() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <section className=" ">
        <div className=" mx-auto grid gap-6">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center ">
              <Checkbox className="mr-3" />
              <CardTitle>Life Insurance</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="life-sum-insured">Sum Insured</Label>
                <Select id="life-sum-insured" defaultValue="100000">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sum Insured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50000">₹50,000</SelectItem>
                    <SelectItem value="100000">₹1,00,000</SelectItem>
                    <SelectItem value="200000">₹2,00,000</SelectItem>
                    <SelectItem value="500000">₹5,00,000</SelectItem>
                    <SelectItem value="1000000">₹10,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left">Self</th>
                      <th className="px-4 py-2 text-left">Wife</th>
                      <th className="px-4 py-2 text-left">Child 1</th>
                      <th className="px-4 py-2 text-left">Child 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">₹1,000</td>
                      <td className="px-4 py-2">
                        <Checkbox className="mr-3" id="life-wife" />
                        ₹800
                      </td>
                      <td className="px-4 py-2">
                        <Checkbox className="mr-3" id="life-child1" />
                        ₹500
                      </td>
                      <td className="px-4 py-2">
                        <Checkbox className="mr-3" id="life-child2" />
                        ₹500
                      </td>
                    </tr>
                    {/*  */}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end items-center border-t py-5">
                <div className="font-medium">Total Premium: ₹10,300</div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center ">
              <Checkbox className="mr-3" />
              <CardTitle>Life Insurance</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="life-sum-insured">Sum Insured</Label>
                <Select id="life-sum-insured" defaultValue="100000">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sum Insured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50000">₹50,000</SelectItem>
                    <SelectItem value="100000">₹1,00,000</SelectItem>
                    <SelectItem value="200000">₹2,00,000</SelectItem>
                    <SelectItem value="500000">₹5,00,000</SelectItem>
                    <SelectItem value="1000000">₹10,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left">Self</th>
                      <th className="px-4 py-2 text-left">Wife</th>
                      <th className="px-4 py-2 text-left">Child 1</th>
                      <th className="px-4 py-2 text-left">Child 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">₹1,000</td>
                      <td className="px-4 py-2">
                        <Checkbox className="mr-3" id="life-wife" />
                        ₹800
                      </td>
                      <td className="px-4 py-2">
                        <Checkbox className="mr-3" id="life-child1" />
                        ₹500
                      </td>
                      <td className="px-4 py-2">
                        <Checkbox className="mr-3" id="life-child2" />
                        ₹500
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end items-center border-t py-5">
                <div className="font-medium">Total Premium: ₹10,300</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex  justify-between">
            <div className="text-lg "> Total Premium: ₹20600</div>
            <Button className=" px-5" onClick={() => navigate("/enterdetails")}>
              Enter Beneficiary Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WithLayout(PolicyList);
