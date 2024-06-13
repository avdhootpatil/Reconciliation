import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

function Broadcast() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">New Broadcast</h2>
      <Card className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <CardContent className="px-4 py-6">
          <form className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="bank-association">Bank Association</Label>
              <Select id="bank-association" defaultValue="acme-bank">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="acme-bank">Acme Bank</SelectItem>
                  <SelectItem value="bravo-bank">Bravo Bank</SelectItem>
                  <SelectItem value="charlie-bank">Charlie Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="campaign">Campaign</Label>
              <Select id="campaign" defaultValue="summer-promotion">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summer-promotion">
                    Summer Promotion
                  </SelectItem>
                  <SelectItem value="new-account">
                    New Account Promotion
                  </SelectItem>
                  <SelectItem value="holiday-sale">Holiday Sale</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                navigate("/broadcastlist");
              }}
            >
              Broadcast
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default WithLayout(Broadcast);
