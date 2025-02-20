import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar.jsx";
import Footer from "./sections/Footer.jsx";
import MainSection from "./sections/Main.jsx"; 
import ProductsPage from "./sections/Products.jsx";
import Signup from "./components/signup.jsx";
import Signin from "./components/signin.jsx";
import Success from "./components/success.jsx";
import Error from "./components/error.jsx";
import AboutPage from "./pages/about.jsx";
import ProfilePage from "./pages/profilepage.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/signup" element={<SignupOnly />} />
        <Route path="/signin" element={<SigninOnly />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<ErrorPage />} />
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

function SuccessPage() {
  return (
    <>
      <Success />
    </>
  );
}

function ErrorPage() {
  return (
    <>
      <Error />
    </>
  );
}

export default App;