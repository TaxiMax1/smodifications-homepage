import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar.jsx";
import Footer from "./sections/Footer.jsx";
import MainSection from "./sections/Main.jsx"; 
import ProductsPage from "./sections/Products.jsx";
import Signup from "./components/signup.jsx";
import Signin from "./components/signin.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/signup" element={<SignupOnly />} />
        <Route path="/signin" element={<SigninOnly />} />
      </Routes>
    </Router>
  );
}

function MainLayout() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

function SignupOnly() {
  return <Signup />;
}

function SigninOnly() {
  return <Signin />;
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