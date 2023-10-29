import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { Calendar, Checkin, Dashboard, Form, Home, Login } from "../pages";
import { User } from "firebase/auth";
import useAuth from "../firebase/useAuth";

function createAuthRouter(user: User | null) {
    return createBrowserRouter([
        {
            path: "/",
            element: user ? <Home /> : <Login />,
        },
        {
            path: "/form",
            element: <Form />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/checkin",
            element: <Checkin />,
        },
        {
            path: "/calendar",
            element: <Calendar />,
        },
    ]);
}

const RouterProviderInstance = () => {
    const user = useAuth();
    const router = createAuthRouter(user);

    return <RouterProvider router={router} />;
};

export default RouterProviderInstance;
