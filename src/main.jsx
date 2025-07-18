import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import { UserProvider } from "./features/users/userContext";
import { ThemeProvider } from "./app/context/themeContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ThemeProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </ThemeProvider>
);