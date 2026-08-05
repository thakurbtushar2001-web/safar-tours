import Success from "./pages/Success";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Failed from "./pages/Failed";
import Invoice from "./pages/Invoice";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import FareCalculator from "./pages/FareCalculator";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fare" element={<FareCalculator />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/invoice" element={<Invoice />} />
        
        <Route 
  path="/admin" 
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  } 
/>
        
      </Routes>
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  );
}

export default App;