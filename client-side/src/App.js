import Login from "./pages/Login";
import Register from "./pages/Register";
import Notepage from "./pages/Notepage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Adminpage from "./pages/Adminpage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/notepage" element={<Notepage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin-page/*" element={<Adminpage />} />

    </Routes>
  );
}

export default App;
