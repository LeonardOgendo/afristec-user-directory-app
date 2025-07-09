import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import { UserProvider } from "./features/users/userContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <UserProvider>
        <App />
    </UserProvider>
);