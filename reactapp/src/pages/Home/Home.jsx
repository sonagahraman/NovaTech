import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <h1>Rəqəmsal Dünyada Sizin Güvənli Tərafdaşınız</h1>
        <p>
          Biz Biznesizniz üçün ən innovativ web və mobil həlləri sıfırdan
          hazırlayırıq{" "}
        </p>
        <a href="#contact" className="btn">
          Bizimlə Əlaqə
        </a>
      </div>
    </section>
  );
};

export default Home;
