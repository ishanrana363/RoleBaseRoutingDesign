import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import UserLayout from "../layout/UserLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,

        children: [
            {
                path: "/",
                element: <div><h1>home page</h1></div>
            }
        ]
    },
    {
        path : "/login",
        element : <Login></Login>
    },
    {
        path : "/registration",
        element : <Registration></Registration>
    },
    {
        path : "/user-dashboard",
        element : <UserLayout></UserLayout>,
        children : [
            {
                path : "",
                element : <div>User Home page</div>
            }
        ]
    }
])