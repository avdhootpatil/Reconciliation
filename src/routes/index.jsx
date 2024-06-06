import Login from "@/pages/Login";
import PaymentHistory from "@/pages/PaymentHistory";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Payments from "@/pages/Payments";
import PolicyList from "@/pages/PolicyList";
import Profile from "@/pages/Profile";
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
];

export default routes;
