import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cadastro from "./pages/Register/cadastro";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>
);
