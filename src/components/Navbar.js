import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚖 Safar Tours & Travels</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/fare">Fare Calculator</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;