import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import WithLayout from "@/components/layout/WithLayout";

function Campaigns() {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Summer Promotion",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      products: ["MetLife", "Prudential", "New York Life"],
    },
    {
      id: 2,
      name: "Holiday Deals",
      startDate: "2023-11-15",
      endDate: "2023-12-31",
      products: ["MetLife", "New York Life"],
    },
    {
      id: 3,
      name: "Spring Savings",
      startDate: "2024-03-01",
      endDate: "2024-05-31",
      products: ["Prudential", "New York Life"],
    },
  ]);

  return (
    <div className="container mx-auto ">
      <div className="grid gap-8">
        <div className="flex justify-end"></div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Manage Campaigns
            </h1>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              View and create new campaigns for your life insurance products.
            </p>
          </div>
          <Button onClick={() => navigate("/createcampaign")}>
            Create New Campaign
          </Button>
        </div>
        <div className="border rounded-lg shadow-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Products</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>{campaign.startDate}</TableCell>
                  <TableCell>{campaign.endDate}</TableCell>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>
                    {campaign.products.map((product, index) => (
                      <span key={index} className="mr-2">
                        {product}
                      </span>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default WithLayout(Campaigns);
