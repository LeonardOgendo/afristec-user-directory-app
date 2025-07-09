import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Users from "../features/users/UsersPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Users />,
            },
        ],
    },
]);

export default router;