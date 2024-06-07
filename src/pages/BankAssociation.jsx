import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function BankAssociation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCreateAssociation = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Bank Associations</h1>
        <Button onClick={handleCreateAssociation}>
          Create New Association
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold pt-4">Acme Bank</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Parent Association
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold pt-4">Acme Bank - West</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Child of Acme Bank
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold pt-4">Acme Bank - East</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Child of Acme Bank
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold pt-4">Zeta Bank</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Parent Association
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold pt-4">
                  Zeta Bank - North
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Child of Zeta Bank
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold pt-4">
                  Zeta Bank - South
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Child of Zeta Bank
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Association Name</Label>
              <Input id="name" placeholder="Enter association name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bank">Bank Name</Label>
              <Input id="bank" placeholder="Enter bank name" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Contact Name</Label>
              <Input id="contact-name" placeholder="Enter contact name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Contact Phone</Label>
              <Input id="contact-phone" placeholder="Enter contact phone" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Contact Email</Label>
            <Input id="contact-email" placeholder="Enter contact email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="parent">Parent Association</Label>
            <Select id="parent">
              <SelectTrigger>
                <SelectValue placeholder="Select parent association" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acme">Acme Bank</SelectItem>
                <SelectItem value="zeta">Zeta Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button
              variant="secondary"
              className="mr-2"
              onClick={handleDialogClose}
            >
              Cancel
            </Button>
            <Button>Create Association</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default WithLayout(BankAssociation);
