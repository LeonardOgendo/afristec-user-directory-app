import { RouterProvider } from "react-router-dom"
import router from "./app/router";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 1500, style: { margin: "130px 90px 0 0", fontSize: "0.85rem", padding: "2px" } }} />
            <RouterProvider router={router}></RouterProvider>
       </>
    )
}

export default App