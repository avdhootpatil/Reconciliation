import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom/dist";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 md:px-6 lg:py-24">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <CircleCheckIcon className="h-16 w-16 text-green-500" />
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Payment Successful
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Thank you for your payment. Your order is now being processed.
            </p>
          </div>
          <div className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Order Number
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  #12345
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Amount
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  ₹95643
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Payment Method
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Visa ending in 1234
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Transaction ID
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  ABC123
                </span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => navigate("/")}
            className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Go to Home
          </Button>
        </div>
      </main>
    </div>
  );
}

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
