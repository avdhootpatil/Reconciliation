import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/dateRangePicker";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create new campaign
          </h1>
          <div>Enter the details for your new campaign.</div>
        </div>
        <div className="mt-4">
          <div className="grid">
            <div className="mb-5">
              <Label className="mb-2" htmlFor="campaign-name">
                Campaign Name
              </Label>
              <div style={{ width: "27.2%" }}>
                <Input className="w-full" id="campaign-name" />
              </div>
            </div>
            <div className="mb-5">
              <Label>Date Range</Label>
              <DateRangePicker />
            </div>
            <div>
              <Label>Life Insurance Products</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">MetLife</h3>
                    <Checkbox id="metlife" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    MetLife offers a wide range of life insurance products,
                    including term, whole, and universal life insurance. Their
                    policies are designed to provide financial protection for
                    your loved ones.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Prudential</h3>
                    <Checkbox id="prudential" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Prudential is a leading provider of life insurance, offering
                    a variety of products to meet your needs. Their policies can
                    help ensure your family's financial security.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">New York Life</h3>
                    <Checkbox id="new-york-life" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    New York Life has been protecting families for over 175
                    years. Their life insurance policies can provide peace of
                    mind and financial protection for your loved ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button onClick={() => navigate("/campaigns")}>
            Create Campaign
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WithLayout(CreateCampaign);
