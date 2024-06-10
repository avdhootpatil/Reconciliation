import BankAssociation from "@/pages/BankAssociation";
import CreateProduct from "@/pages/CreateProduct";
import CreateProductList from "@/pages/CreateProductList";
import Cart from "@/pages/Cart";
import ImportData from "@/pages/ImportData";
import Login from "@/pages/Login";
import Messages from "@/pages/Messages";
import OfflinePayments from "@/pages/OfflinePayments";
import PaymentHistory from "@/pages/PaymentHistory";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Payments from "@/pages/Payments";
import PolicyList from "@/pages/PolicyList";
import Profile from "@/pages/Profile";
import Reports from "@/pages/Reports";
import Retirees from "@/pages/Retirees";
import SignUp from "@/pages/SignUp";

const routes = [
  {
    exact: true,
    path: "/",
    component: <Profile />,
  },
  {
    exact: true,
    path: "/policy",
    component: <PolicyList />,
  },
  {
    exact: true,
    path: "/payments",
    component: <PaymentHistory />,
  },
  {
    exact: true,
    path: "/signup",
    component: <SignUp />,
  },
  {
    exact: true,
    path: "/login",
    component: <Login />,
  },
  {
    exact: true,
    path: "/payment",
    component: <Payments />,
  },
  {
    exact: true,
    path: "/paymentsuccess",
    component: <PaymentSuccess />,
  },
  {
    exact: true,
    path: "/bankassociation",
    component: <BankAssociation />,
  },
  {
    exact: true,
    path: "/retirees",
    component: <Retirees />,
  },

  {
    exact: true,
    path: "/reports",
    component: <Reports />,
  },

  {
    exact: true,
    path: "/messages",
    component: <Messages />,
  },
  {
    exact: true,
    path: "/importdata",
    component: <ImportData />,
  },
  {
    exact: true,
    path: "/offlinepayments",
    component: <OfflinePayments />,
  },
  {
    exact: true,
    path: "/createproduct",
    component: <CreateProduct />,
  },

  {
    exact: true,
    path: "/productlist",
    component: <CreateProductList />,
  },
  {
    exact: true,
    path: "/cart",
    component: <Cart />,
  },
];

export default routes;
