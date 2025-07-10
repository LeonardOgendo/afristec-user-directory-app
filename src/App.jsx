import { RouterProvider } from "react-router-dom"
import router from "./app/router";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
            
            <Toaster 
                position="top-right" 
                toastOptions={{ 
                    duration: 1500, 
                    style: { margin: "130px 90px 0 0", fontSize: "0.85rem", padding: "2px", backgroundColor: "#e65100", color: "#fff8e7" }, 
                    success: {
                        iconTheme: {
                            primary: "#fff8e7",
                            secondary: "#e65100",
                        },
                    }  }} 
            />

            
       </>
    )
}

export default App