import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import UserProvider from "./lib/userContext/userProvider.tsx";
import App from "./App.tsx";

let userString = localStorage.getItem("blocker_user");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider userString={userString}>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
