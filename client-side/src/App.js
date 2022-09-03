import Login from "./pages/Login";
import Register from "./pages/Register";
import Notepage from "./pages/Notepage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
<<<<<<< HEAD
import MyAdmin from "./pages/MyAdmin";
=======
import Adminpage from "./pages/Adminpage";
>>>>>>> 9a2d108b23ef0327c1bd4e2df8fde68cfdf4b65d

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<MyAdmin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/notepage" element={<Notepage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin-page/*" element={<Adminpage />} />
    </Routes>
  );
}

export default App;
