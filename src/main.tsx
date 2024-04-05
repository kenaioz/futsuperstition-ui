import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Routes } from "./routes";

import { ThemeProvider } from "./hooks/ThemeProvider";
import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </StrictMode>
);
