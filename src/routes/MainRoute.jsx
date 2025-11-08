import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layouts/RootLayout";
import Home from "../pages/Home";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";
import PublicHabits from "../pages/PublicHabits";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path:'/', Component:RootLayout,
        children:[
            {index:true, Component:Home},
            {path:'addhabit', Component:AddHabit},
            {path:'myhabits', Component:MyHabits},
            {path:'publichabits', Component:PublicHabits},
            {path:'login', Component:Login},
            {path:'signup', Component:Signup},
        ]
    }
])

export default router;