import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Comprehensive Auto Insurance",
      description:
        "Protect your vehicle with our top-of-the-line auto insurance coverage.",
    },
    {
      id: 2,
      name: "Homeowner's Insurance",
      description:
        "Safeguard your home and belongings with our reliable homeowner's insurance.",
    },
    {
      id: 3,
      name: "Life Insurance",
      description: "Secure your family's future with our life insurance plans.",
    },
    {
      id: 4,
      name: "Health Insurance",
      description:
        "Stay covered with our comprehensive health insurance options.",
    },
    {
      id: 5,
      name: "Renters Insurance",
      description:
        "Protect your rental property and personal items with our renters insurance.",
    },
    {
      id: 6,
      name: "Business Insurance",
      description:
        "Safeguard your business with our tailored insurance solutions.",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setShowDialog(true);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedProduct(null);
  };
  return (
    <div className="w-full max-w-6xl ">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="h-full relative py-5">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 mt-3"
              onClick={() => handleViewClick(product)}
            >
              <EyeIcon className="w-4 h-4" />
              <span className="sr-only">View {product.name}</span>
            </Button>
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {product.description}
                </p>
              </div>
              <Button
                onClick={() => {
                  navigate("/createproduct");
                }}
              >
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {showDialog && (
        <Dialog open={showDialog} onOpenChange={handleCloseDialog}>
          <DialogContent className="w-full max-w-md py-5 px-5">
            <DialogHeader>
              <DialogTitle>{selectedProduct?.name}</DialogTitle>
              <DialogDescription>Premium Chart</DialogDescription>
            </DialogHeader>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sum Insured</TableHead>
                    <TableHead>Spouse</TableHead>
                    <TableHead>Child 1</TableHead>
                    <TableHead>Child 2</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>$100,000</TableCell>
                    <TableCell>$50,000</TableCell>
                    <TableCell>$25,000</TableCell>
                    <TableCell>$25,000</TableCell>
                    <TableCell>$200,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <DialogFooter>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
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

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default WithLayout(CreateProductList);
