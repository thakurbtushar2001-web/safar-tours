import { useState } from "react";

function FareCalculator() {
  const [distance, setDistance] = useState("");
  const rate = 18;

  const fare = distance ? distance * rate : 0;

  return (
    <div className="fare">
      <h1>Fare Calculator</h1>

      <input
        type="number"
        placeholder="Enter Distance (KM)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />

      <h2>Estimated Fare: ₹ {fare}</h2>
    </div>
  );
}

export default FareCalculator;