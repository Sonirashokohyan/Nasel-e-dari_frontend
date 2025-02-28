// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";
import { ThemeProvider } from "./themeProvider";
import App from "./App"; // Import App.tsx

const container = document.querySelector("#root");

if (!container) {
  throw new Error("Container was not found");
}

createRoot(container).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
