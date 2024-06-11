import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WithLayout from "@/components/layout/WithLayout";
import { useNavigate } from "react-router-dom";

function CreateProductList() {
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

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="w-full max-w-6xl ">
      <h1 className="text-2xl font-bold">Products</h1>

      <div className="flex items-center justify-between my-6">
        <Input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
        />
        <Button
          onClick={() => {
            navigate("/createproduct");
          }}
        >
          Add New Product
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="h-full px-3 py-3">
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {product.description}
                </p>
              </div>
              <Button
                className="mt-3"
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
    </div>
  );
}

export default WithLayout(CreateProductList);
