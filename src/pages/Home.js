import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import Drivers from "../components/Drivers";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>

      <section className="hero">
        <div className="hero-content">
          <h1>Explore India With Safar Tours</h1>
          <p>Comfortable • Affordable • Trusted</p>
          
<button onClick={() => navigate("/booking")}>
  Book Now
</button>

        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-box">

          <div className="service-card">
            <h3>🚖 Cab Booking</h3>
            <p>Local & Outstation Taxi</p>
          </div>

          <div className="service-card">
            <h3>🚌 Bus Booking</h3>
            <p>Luxury Bus Tours</p>
          </div>

          <div className="service-card">
            <h3>🌍 Tour Packages</h3>
            <p>Domestic & International</p>
          </div>

          <div className="service-card">
            <h3>⭐ Premium Vehicles</h3>
            <p>Clean & Comfortable Fleet</p>
          </div>

          <div className="service-card">
            <h3>📞 24×7 Support</h3>
            <p>Always Available</p>
          </div>

        </div>
      </section>
<section className="reviews">
  <h2>⭐ What Our Customers Say</h2>

  <div className="review-container">

    <div className="review-card">
      <h3>Rahul Sharma</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <p>Excellent cab service. Driver was very professional.</p>
    </div>

    <div className="review-card">
      <h3>Priya Patel</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <p>Best tour package experience. Highly recommended.</p>
    </div>

    <div className="review-card">
      <h3>Amit Verma</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <p>Luxury bus was clean and journey was comfortable.</p>
    </div>
<Drivers />
<Gallery />
<Stats />
<Testimonials />

  </div>
</section>
<section className="contact-info">

  <h2>📍 Contact Information</h2>

  <div className="contact-cards">

    <div className="contact-card">
      <h3>📞 Call Us</h3>
      <p>+91 9356603454</p>
    </div>

    <div className="contact-card">
      <h3>📧 Email</h3>
      <p>thakurbtushar2001@gmail.com</p>
    </div>

    <div className="contact-card">
      <h3>📍 Address</h3>
      <p>Ambernath, Maharashtra</p>
    </div>

  </div>

</section>
    </div>
  );
}

export default Home;