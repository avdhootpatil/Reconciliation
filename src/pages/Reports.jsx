import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

function Reports() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button variant="outline" size="sm">
          <DownloadIcon className="h-4 w-4 mr-2" />
          Download All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily Count Association-Wise</CardTitle>
            <CardDescription>
              Download a report of daily counts by association, including
              options chosen and premium.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Forms</CardTitle>
            <CardDescription>
              Download a daily dump of all completed forms.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Incomplete Transactions</CardTitle>
            <CardDescription>
              Download a daily dump of all incomplete transactions.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bounced Payments</CardTitle>
            <CardDescription>
              Download a report of all bounced payments.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reconciled Online Payments</CardTitle>
            <CardDescription>
              Download a report of all reconciled online payments.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Offline Payments</CardTitle>
            <CardDescription>
              Download a report of offline payments, including reconciled and
              not reconciled.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Correction Report</CardTitle>
            <CardDescription>
              Download a report of all corrections made.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Refund Report</CardTitle>
            <CardDescription>
              Download a report of all refunds processed.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bank Association-Wise Report</CardTitle>
            <CardDescription>
              Download a report of bank transfers by association, including
              options.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Insurance Company Report</CardTitle>
            <CardDescription>
              Download a report in the format required by insurance companies.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export default WithLayout(Reports);
