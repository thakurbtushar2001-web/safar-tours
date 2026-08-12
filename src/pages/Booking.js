import axios from "axios";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "",
    passengers: "",
    message: "",
    status: "pending",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handlePayment = async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/create-order",
      {
        amount: 10000, // ₹100
      }
    );

    const options = {
      key: "rzp_test_TLlH2aCfyHeYkz",
      amount: data.amount,
      currency: data.currency,
      name: "Safar Tours & Travels",
      description: "Advance Booking",
      order_id: data.id,

      handler: async function (response) {
        alert("✅ Payment Successful!");

        // Payment ke baad booking save hogi
        handleSubmit({
          preventDefault: () => {},
        });
      },

      theme: {
        color: "#0d6efd",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

 } catch (error) {
  console.error("RAZORPAY ERROR:", error);
  alert("Payment Failed: " + error.message);
}
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  await addDoc(collection(db, "bookings"), {
    ...formData,
    status: "Pending",
    createdAt: new Date(),
  });

  alert(
    `✅ Thank You ${formData.name}!\n\nYour booking request has been received.\nWe will contact you shortly on ${formData.phone}.`
  );

  setFormData({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "",
    passengers: "",
    message: "",
    status: "pending",
  });

} catch (error) {
  console.error(error);
  alert("❌ Booking failed. Please try again.");
}
};

  return (
    <div className="booking">
      <h1>Book Your Ride</h1>

      <form className="booking-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="drop"
          placeholder="Drop Location"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />

        <select
          name="vehicle"
          onChange={handleChange}
          required
        >
          <option value="">Select Vehicle</option>
          <option>Swift Dzire</option>
          <option>Ertiga</option>
          <option>Tempo Traveller</option>
          <option>Luxury Bus</option>
        </select>

        <input
          type="number"
          name="passengers"
          placeholder="Number of Passengers"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Special Request (Optional)"
          rows="4"
          onChange={handleChange}
        />

        <button
  type="button"
  onClick={handlePayment}
>
  Pay ₹100 & Book Now
</button>

      </form>
    </div>
  );
}

export default Booking;