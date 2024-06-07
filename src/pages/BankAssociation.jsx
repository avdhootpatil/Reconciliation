import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import FileUpload from "@/components/ui/fileUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function BankAssociation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [chequeFile, setChequeFile] = useState(null);

  const handleCreateAssociation = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleAddContact = () => {
    setContacts([...contacts, { name: "", phone: "", email: "" }]);
  };
  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index][field] = value;
    setContacts(updatedContacts);
  };
  const handleContactRemove = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const handleChequeFileChange = (event) => {
    setChequeFile(event.target.files[0]);
  };
  return (
    <div className="max-w-6xl  my-5 px-4 md:px-0">
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
        <DialogContent className="space-y-4 overflow-scroll	">
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

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" placeholder="Enter your address" />
          </div>
          <div className="space-y-2">
            <Label className="mt-3" htmlFor="chequeFile">
              Mendate
            </Label>
            <FileUpload id="chequeFile" onChange={handleChequeFileChange} />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Contacts</h3>
              <Button variant="outline" onClick={handleAddContact}>
                Add Contact
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        value={contact.name}
                        onChange={(e) =>
                          handleContactChange(index, "name", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={contact.phone}
                        onChange={(e) =>
                          handleContactChange(index, "phone", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={contact.email}
                        onChange={(e) =>
                          handleContactChange(index, "email", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleContactRemove(index)}
                      >
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DialogFooter className="mt-5">
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

export default WithLayout(BankAssociation);
