import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      {/* <Login /> */}
      <Register />
    </>

    // <Routes>
    //  <Route  path="/" element={<Welcome/>} />
    // <Route  path="/login" element={<Login/>} />
    //  <Route  path="/register" element={<Register/>} />
    // </Routes>
  );
}

export default App;
