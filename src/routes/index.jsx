import Login from "@/pages/Login";
import PaymentHistory from "@/pages/PaymentHistory";
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
];

export default routes;
