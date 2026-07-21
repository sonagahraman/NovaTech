import React from "react";
import "./Gallery.css";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Layihələrimiz (Qalereya)</h2>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src={img1} alt="Veb layihəsi" />
          </div>

          <div className="gallery-item">
            <img src={img2} alt="Proqramlaşdırma layihəsi" />
          </div>

          <div className="gallery-item">
            <img src={img3} alt="UI/UX dizayn layihəsi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;