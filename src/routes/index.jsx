import PaymentHistory from "@/pages/PaymentHistory";
import PolicyDetails from "@/pages/PolicyDetails";
import Profile from "@/pages/Profile";

const routes = [
  {
    exact: true,
    path: "/",
    component: <Profile />,
  },
  {
    exact: true,
    path: "/policy",
    component: <PolicyDetails />,
  },
  {
    exact: true,
    path: "/payments",
    component: <PaymentHistory />,
  },
];

export default routes;
