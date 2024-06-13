import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import WithLayout from "@/components/layout/WithLayout";
import { useNavigate } from "react-router-dom";

function Retirees() {
  const navigate = useNavigate();

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>Retiree Data</CardTitle>
              <CardDescription>
                View and manage retiree policy information.
              </CardDescription>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate("/createretiree");
                }}
              >
                {" "}
                Create Retiree
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Retiree Name</TableHead>
                  <TableHead>Policy Name</TableHead>
                  <TableHead>Sum Insured</TableHead>
                  <TableHead>Is Policy Active</TableHead>
                  <TableHead>Association Name</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <TableCell>John Doe</TableCell>
                  <TableCell>Retirement Plan A</TableCell>
                  <TableCell>$500,000</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>Retirees Association</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Send WhatsApp Notification
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Send WhatsApp Notification</DialogTitle>
                          <DialogDescription>
                            Enter a message to send to the retiree.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              placeholder="Enter your message"
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="mr-2">
                            Cancel
                          </Button>
                          <Button type="submit">Send</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>Retirement Plan B</TableCell>
                  <TableCell>$750,000</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>Retirees Association</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Send WhatsApp Notification
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Send WhatsApp Notification</DialogTitle>
                          <DialogDescription>
                            Enter a message to send to the retiree.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              placeholder="Enter your message"
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="mr-2">
                            Cancel
                          </Button>
                          <Button type="submit">Send</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Johnson</TableCell>
                  <TableCell>Retirement Plan C</TableCell>
                  <TableCell>$600,000</TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>Retirees Association</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Send WhatsApp Notification
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Send WhatsApp Notification</DialogTitle>
                          <DialogDescription>
                            Enter a message to send to the retiree.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="message" className="mb-5">
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              placeholder="Enter your message"
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="mr-2">
                            Cancel
                          </Button>
                          <Button type="submit">Send</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WithLayout(Retirees);
