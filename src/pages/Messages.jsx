import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import WithLayout from "@/components/layout/WithLayout";
import { Input } from "@/components/ui/input";

function Messages() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-6 md:p-10">
      <div>
        <h1 className="text-3xl font-bold">WhatsApp Message Broadcaster</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Send messages to bank association groups and retirees.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Select Bank Associations</CardTitle>
            <CardDescription>
              Choose the bank associations you want to send the message to.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="association-1" />
                <label htmlFor="association-1" className="text-sm font-medium">
                  Association of Small Banks
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="association-2" />
                <label htmlFor="association-2" className="text-sm font-medium">
                  National Banking Association
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="association-3" />
                <label htmlFor="association-3" className="text-sm font-medium">
                  Community Banking Alliance
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="association-4" />
                <label htmlFor="association-4" className="text-sm font-medium">
                  Rural Banking Network
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Compose Message</CardTitle>
            <CardDescription>
              Write the message you want to send to the selected groups.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Type your message here..."
              className="min-h-[200px]"
            />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Select Retirees</CardTitle>
          <CardDescription>
            Choose the retirees you want to send the message to.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-10">
            <Input
              type="search"
              placeholder="Search Retirees..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="retiree-1" />
              <label htmlFor="retiree-1" className="text-sm font-medium">
                John Doe
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="retiree-2" />
              <label htmlFor="retiree-2" className="text-sm font-medium">
                Jane Smith
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="retiree-3" />
              <label htmlFor="retiree-3" className="text-sm font-medium">
                Michael Johnson
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="retiree-4" />
              <label htmlFor="retiree-4" className="text-sm font-medium">
                Sarah Lee
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default WithLayout(Messages);
