import Login from "./pages/Login";
import Register from "./pages/Register";
import Notepage from "./pages/Notepage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import UserDashbord from "./pages/UserDashbord";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/notepage" element={<Notepage />} />
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/todo" element={<UserDashbord/>} /> */}
    </Routes>
  );
}

export default App;
