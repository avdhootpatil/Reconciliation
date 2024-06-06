import WithLayout from "@/components/layout/WithLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function OfflinePayments() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Offline Payments</h1>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Retiree Name</TableHead>
              <TableHead>Payment Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Association Name</TableHead>
              <TableHead>In Favour Of</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Cash</TableCell>
              <TableCell>$500.00</TableCell>
              <TableCell>2023-06-01</TableCell>
              <TableCell>ABC Retirement Association</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>
                <Badge variant="pending">Pending</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <EyeIcon className="w-4 h-4" />
                      <span className="sr-only">View Payment</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Payment Details</DialogTitle>
                      <DialogDescription>
                        Review the payment details and take action.
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="font-medium">Retiree Name:</div>
                          <div>John Doe</div>
                        </div>
                        <div>
                          <div className="font-medium">Payment Type:</div>
                          <div>Cash</div>
                        </div>
                        <div>
                          <div className="font-medium">Amount:</div>
                          <div>$500.00</div>
                        </div>
                        <div>
                          <div className="font-medium">Date:</div>
                          <div>2023-06-01</div>
                        </div>
                        <div>
                          <div className="font-medium">Association Name:</div>
                          <div>ABC Retirement Association</div>
                        </div>
                        <div>
                          <div className="font-medium">In Favour Of:</div>
                          <div>Jane Smith</div>
                        </div>
                        <div>
                          <div className="font-medium">Status:</div>
                          <div>
                            <Badge variant="pending">Pending</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <img
                          src="/placeholder.svg"
                          alt="Payment Screenshot"
                          width={600}
                          height={400}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <div>
                        <Button variant="ghost">Cancel</Button>
                      </div>
                      <Button>Accept</Button>
                      <Button variant="danger">Reject</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Check</TableCell>
              <TableCell>$750.00</TableCell>
              <TableCell>2023-05-15</TableCell>
              <TableCell>XYZ Retirement Association</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>
                <Badge variant="accepted">Accepted</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <EyeIcon className="w-4 h-4" />
                      <span className="sr-only">View Payment</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Payment Details</DialogTitle>
                      <DialogDescription>
                        Review the payment details.
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="font-medium">Retiree Name:</div>
                          <div>Jane Smith</div>
                        </div>
                        <div>
                          <div className="font-medium">Payment Type:</div>
                          <div>Check</div>
                        </div>
                        <div>
                          <div className="font-medium">Amount:</div>
                          <div>$750.00</div>
                        </div>
                        <div>
                          <div className="font-medium">Date:</div>
                          <div>2023-05-15</div>
                        </div>
                        <div>
                          <div className="font-medium">Association Name:</div>
                          <div>XYZ Retirement Association</div>
                        </div>
                        <div>
                          <div className="font-medium">In Favour Of:</div>
                          <div>John Doe</div>
                        </div>
                        <div>
                          <div className="font-medium">Status:</div>
                          <div>
                            <Badge variant="accepted">Accepted</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <img
                          src="/placeholder.svg"
                          alt="Payment Screenshot"
                          width={200}
                          height={200}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <div>
                        <Button variant="ghost">Accept</Button>
                        <Button variant="ghost">Reject</Button>
                        <Button variant="ghost">Close</Button>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>Cash</TableCell>
              <TableCell>$300.00</TableCell>
              <TableCell>2023-04-30</TableCell>
              <TableCell>DEF Retirement Association</TableCell>
              <TableCell>Sarah Lee</TableCell>
              <TableCell>
                <Badge variant="rejected">Rejected</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <EyeIcon className="w-4 h-4" />
                      <span className="sr-only">View Payment</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Payment Details</DialogTitle>
                      <DialogDescription>
                        Review the payment details.
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="font-medium">Retiree Name:</div>
                          <div>Michael Johnson</div>
                        </div>
                        <div>
                          <div className="font-medium">Payment Type:</div>
                          <div>Cash</div>
                        </div>
                        <div>
                          <div className="font-medium">Amount:</div>
                          <div>$300.00</div>
                        </div>
                        <div>
                          <div className="font-medium">Date:</div>
                          <div>2023-04-30</div>
                        </div>
                        <div>
                          <div className="font-medium">Association Name:</div>
                          <div>DEF Retirement Association</div>
                        </div>
                        <div>
                          <div className="font-medium">In Favour Of:</div>
                          <div>Sarah Lee</div>
                        </div>
                        <div>
                          <div className="font-medium">Status:</div>
                          <div>
                            <Badge variant="rejected">Rejected</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <img
                          src="/placeholder.svg"
                          alt="Payment Screenshot"
                          width={200}
                          height={200}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <div>
                        <Button variant="ghost">Accept</Button>
                        <Button variant="ghost">Reject</Button>
                        <Button variant="ghost">Close</Button>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
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

export default WithLayout(OfflinePayments);
