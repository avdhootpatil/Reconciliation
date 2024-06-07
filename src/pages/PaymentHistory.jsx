import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import WithLayout from "@/components/layout/WithLayout";
import { Search } from "lucide-react";
import CalendarDaysIcon from "@/assets/CalendarDaysIcon";
import DownloadIcon from "@/assets/DownloadIcon";

function PaymentHistory() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold py-4">Payment History</h1>
      <div className="flex gap-4 mb-4">
        <div className="flex-1 max-w-[300px]">
          <Input placeholder="Search" />
        </div>
        <div className="flex-1 max-w-[300px] flex items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex justify-start items-start"
              >
                <CalendarDaysIcon className="h-5 w-5 mr-2  justify-start " />
                <span>Date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>
        </div>
        <Button variant="outline">
          <Search className="h-5 w-5" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payment Mode</TableHead>
            <TableHead>Payable Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount Paid</TableHead>
            <TableHead>Transaction ID.</TableHead>
            <TableHead>View Ack.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>UPI</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>16-02-2024</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>Transaction ID 0</TableCell>
            <TableCell>
              <Button variant="ghost">
                <DownloadIcon className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>UPI</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>16-02-2024</TableCell>
            <TableCell>9000</TableCell>
            <TableCell>Transaction ID 1</TableCell>
            <TableCell>
              <Button variant="ghost">
                <DownloadIcon className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>UPI</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>16-02-2024</TableCell>
            <TableCell>11000</TableCell>
            <TableCell>Transaction ID 2</TableCell>
            <TableCell>
              <Button variant="ghost">
                <DownloadIcon className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cheque</TableCell>
            <TableCell>15000</TableCell>
            <TableCell>16-02-2024</TableCell>
            <TableCell>15000</TableCell>
            <TableCell>Transaction ID 3</TableCell>
            <TableCell>
              <Button variant="ghost">
                <DownloadIcon className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>NEFT</TableCell>
            <TableCell>15000</TableCell>
            <TableCell>16-02-2024</TableCell>
            <TableCell>15000</TableCell>
            <TableCell>Transaction ID 4</TableCell>
            <TableCell>
              <Button variant="ghost">
                <DownloadIcon className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default WithLayout(PaymentHistory);
