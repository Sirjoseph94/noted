import Login from "./pages/Login";
import Register from "./pages/Register";
import Notepage from "./pages/Notepage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MyAdmin from "./pages/MyAdmin";
import MyNotes from "./pages/MyNotes";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<MyAdmin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/notepage" element={<Notepage />} />
      <Route path="/notes" element={<MyNotes />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
