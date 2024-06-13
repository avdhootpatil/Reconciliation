import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function BroadcastList() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <section>
        <div>
          <div className="flex justify-between mb-10">
            <h2 className="text-2xl font-bold mb-4">Previous Broadcasts</h2>
            <Button
              onClick={() => {
                navigate("/broadcast");
              }}
            >
              New Broadcast
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Summer Promo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  June 15, 2023
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1,234 recipients
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="outline" size="sm" onClick={() => {}}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Holiday Deals</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  December 1, 2022
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2,567 recipients
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="outline" size="sm" onClick={() => {}}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">New Year Offer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  January 1, 2023
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  3,890 recipients
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="outline" size="sm" onClick={() => {}}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Fall Savings</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  October 15, 2022
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  4,567 recipients
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="outline" size="sm" onClick={() => {}}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WithLayout(BroadcastList);
