import swift from "../assets/images/swift.jpg";
import ertiga from "../assets/images/Ertiga.jpg";
import tempo from "../assets/images/tempo.jpg";
import bus from "../assets/images/bus.jpg";

function Vehicles() {
  return (
    <div className="vehicles">

      <h1>🚖 Our Premium Fleet</h1>

      <div className="vehicle-container">

        <div className="vehicle-card">
          <img src={swift} alt="Swift Dzire" />
          <h2>Swift Dzire</h2>
          <p>4 Seater • AC • Local & Outstation</p>

          <button
            className="book-btn"
            onClick={() => (window.location.href = "/booking")}
          >
            Book Now
          </button>
        </div>

        <div className="vehicle-card">
          <img src={ertiga} alt="Ertiga" />
          <h2>Ertiga</h2>
          <p>7 Seater • Family Trips</p>

          <button
            className="book-btn"
            onClick={() => (window.location.href = "/booking")}
          >
            Book Now
          </button>
        </div>

        <div className="vehicle-card">
          <img src={tempo} alt="tempo Traveller" />
          <h2>Tempo Traveller</h2>
          <p>17 Seater • Group Tours</p>

          <button
            className="book-btn"
            onClick={() => (window.location.href = "/booking")}
          >
            Book Now
          </button>
        </div>

        <div className="vehicle-card">
          <img src={bus} alt="Luxury Bus" />
          <h2>Luxury Bus</h2>
          <p>30–50 Seater • Corporate & Events</p>

          <button
            className="book-btn"
            onClick={() => (window.location.href = "/booking")}
          >
            Book Now
          </button>
        </div>

      </div>

    </div>
  );
}

export default Vehicles;