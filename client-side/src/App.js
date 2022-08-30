import Login from "./pages/Login";
import Register from "./pages/Register";
import Notepage from "./pages/Notepage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/notepage" element={<Notepage />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
