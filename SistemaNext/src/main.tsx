import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/components";
import { CssBaseline } from "@mui/material";
import Clientes from "./pages/Clientes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
