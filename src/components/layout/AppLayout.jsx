import {
  CircleUser,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function AppLayout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">KMD</span>
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                <Package className="h-4 w-4" />
                Profile
              </div>
              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/policy");
                }}
              >
                <Package className="h-4 w-4" />
                Products
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/bankassociation");
                }}
              >
                <Package className="h-4 w-4" />
                Bank Association
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/productlist");
                }}
              >
                <Package className="h-4 w-4" />
                Create Product
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/retirees");
                }}
              >
                <Package className="h-4 w-4" />
                Retirees
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/createcampaign");
                }}
              >
                <Package className="h-4 w-4" />
                Create Campaign
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/payments");
                }}
              >
                <Package className="h-4 w-4" />
                Payments
              </div>

              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/reports");
                }}
              >
                <Package className="h-4 w-4" />
                Reports
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/importdata");
                }}
              >
                <Package className="h-4 w-4" />
                Import Data
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/broadcastlist");
                }}
              >
                <Package className="h-4 w-4" />
                Messages
              </div>
              <div
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/offlinePayments");
                }}
              >
                <Package className="h-4 w-4" />
                Offline Payments
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </div>
                <div
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Profile
                </div>
                <div
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  onClick={() => {
                    navigate("/policy");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Products
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/bankassociation");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Bank Association
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/productlist");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Create Product
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/retirees");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Retirees
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/createcampaign");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Create Campaign
                </div>
                <div
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    navigate("/payments");
                  }}
                >
                  <Package className="h-5 w-5" />
                  Payments
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/reports");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Reports
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/importdata");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Import Data
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/broadcastlist");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Messages
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/offlinePayments");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Offline Payments
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-around gap-3">
            <a
              className=""
              onClick={() => {
                navigate("/cart");
              }}
            >
              <Button variant="secondary" size="icon" className="rounded-full">
                <ShoppingCart className="size-5" />
              </Button>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

AppLayout.defaultProps = {
  children: <></>,
};

AppLayout.propTypes = {
  children: PropTypes.element,
};
