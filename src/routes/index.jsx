import Login from "@/pages/Login";
import PaymentHistory from "@/pages/PaymentHistory";
import PolicyDetails from "@/pages/PolicyDetails";
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
    component: <PolicyDetails />,
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
];

export default routes;
