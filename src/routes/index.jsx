import BankAssociation from "@/pages/BankAssociation";
import Broadcast from "@/pages/Broadcast";
import BroadcastList from "@/pages/BroadcastList";
import Cart from "@/pages/Cart";
import CreateCampaign from "@/pages/CreateCampaign";
import CreateProduct from "@/pages/CreateProduct";
import CreateProductList from "@/pages/CreateProductList";
import CreateRetiree from "@/pages/CreateRetiree";
import EnterDetails from "@/pages/EnterDetails";
import ImportData from "@/pages/ImportData";
import Login from "@/pages/Login";
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
    path: "/broadcastlist",
    component: <BroadcastList />,
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
  {
    exact: true,
    path: "/createcampaign",
    component: <CreateCampaign />,
  },
  {
    exact: true,
    path: "/enterdetails",
    component: <EnterDetails />,
  },

  {
    exact: true,
    path: "/createretiree",
    component: <CreateRetiree />,
  },
  {
    exact: true,
    path: "/broadcast",
    component: <Broadcast />,
  },
];

export default routes;
