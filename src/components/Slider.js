import { useState, useEffect } from "react";
import bus from "../assets/images/bus.jpg";
import swift from "../assets/images/swift.jpg";
import ertiga from "../assets/images/Ertiga.jpg";
import tempo from "../assets/images/tempo.jpg";

function Slider() {
  const images = [bus, swift, ertiga, tempo];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [images.length]);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <img src={images[current]} alt="Vehicle" className="slider-image" />

      <div className="slider-buttons">
        <button onClick={prevSlide}>⬅</button>
        <button onClick={nextSlide}>➡</button>
      </div>
    </div>
  );
}

export default Slider;