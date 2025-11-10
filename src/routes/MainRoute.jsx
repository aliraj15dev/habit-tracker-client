import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layouts/RootLayout";
import Home from "../pages/Home";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";
import PublicHabits from "../pages/PublicHabits";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "addhabit",
        element: (
          <PrivateRoute>
            <AddHabit></AddHabit>
          </PrivateRoute>
        ),
      },

      {
        path: "myhabits",
        element: (
          <PrivateRoute>
            <MyHabits></MyHabits>
          </PrivateRoute>
        )
      },
      { path: "publichabits", Component: PublicHabits },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "viewdetails", element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ), },
    ],
  },
]);

export default router;
