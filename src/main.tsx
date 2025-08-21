import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cadastro from "./pages/Register/cadastro";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Cadastro />
    </BrowserRouter>
  </StrictMode>
);
