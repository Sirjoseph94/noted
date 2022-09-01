import "../main/LandingPage.css";

import "../assets/js/script";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}
