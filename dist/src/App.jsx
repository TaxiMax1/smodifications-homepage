import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./sections/Navbar.jsx";
import Footer from "./sections/Footer.jsx";
import MainSection from "./sections/Main.jsx"; 
import ProductsPage from "./sections/Products.jsx";
// import AboutPage from "./sections/AboutPage.jsx"; 
import "./App.css";

function App() {
  return (
    <Router basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <MainSection />
      <ProductsPage />
    </>
  );
}

export default App;