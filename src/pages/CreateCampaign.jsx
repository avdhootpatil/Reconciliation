import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WithLayout from "@/components/layout/WithLayout";

function CreateCampaign() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 lg:py-16">
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create a New Campaign
          </h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            Select the life insurance providers and target bank association for
            your campaign.
          </p>
        </div>
        <div className="grid gap-6">
          <div>
            <h2 className="text-xl font-bold">Life Insurance Providers</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">MetLife</h3>
                  <Checkbox id="metlife" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  MetLife offers a wide range of life insurance products,
                  including term, whole, and universal life insurance. Their
                  policies are designed to provide financial protection for your
                  loved ones.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Prudential</h3>
                  <Checkbox id="prudential" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Prudential is a leading provider of life insurance, offering a
                  variety of products to meet your needs. Their policies can
                  help ensure your family's financial security.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">New York Life</h3>
                  <Checkbox id="new-york-life" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  New York Life has been protecting families for over 175 years.
                  Their life insurance policies can provide peace of mind and
                  financial protection for your loved ones.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Target Bank Association</h2>
            <div className="mt-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a bank association" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="bank-a">Bank A</SelectItem>
                    <SelectItem value="bank-b">Bank B</SelectItem>
                    <SelectItem value="bank-c">Bank C</SelectItem>
                    <SelectItem value="bank-d">Bank D</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Send Campaign
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WithLayout(CreateCampaign);
