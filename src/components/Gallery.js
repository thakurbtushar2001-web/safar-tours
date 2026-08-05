import swift from "../assets/images/swift.jpg";
import ertiga from "../assets/images/Ertiga.jpg";
import tempo from "../assets/images/tempo.jpg";
import bus from "../assets/images/bus.jpg";

function Gallery() {
  return (
    <section className="gallery">

      <h2>📸 Our Fleet Gallery</h2>

      <div className="gallery-grid">

        <img src={swift} alt="Swift" />
        <img src={ertiga} alt="Ertiga" />
        <img src={tempo} alt="Tempo Traveller" />
        <img src={bus} alt="Luxury Bus" />

      </div>

    </section>
  );
}

export default Gallery;