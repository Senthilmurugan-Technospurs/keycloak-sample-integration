import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { KeycloakProvider } from "@technospurs/react-keycloak-auth";
import { tenant } from "./keycloak";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <KeycloakProvider tenant={tenant} loader={<Loader/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </KeycloakProvider>
);
