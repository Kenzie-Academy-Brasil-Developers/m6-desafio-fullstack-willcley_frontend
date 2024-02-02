import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./providers/LoginContext.jsx";
import { ClientProvider } from "./providers/ClientContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LoginProvider>
          <ClientProvider>
            <App />
          </ClientProvider>
        </LoginProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);