import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ThemeProvider } from "@mui/system";
import { theme } from "../theme"

const Router = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </ThemeProvider>
);

export { Router };
