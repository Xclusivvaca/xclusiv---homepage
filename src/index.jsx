import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./screens/Homepage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
);
