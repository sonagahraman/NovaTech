import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Haqqımızda</h2>

        <div className="about-content">
          <div className="about-left">
            <h3>Niyə bizi seçməlisiniz?</h3>

            <p>
              10 ildən artıq təcrübəmizlə layihələrinizi vaxtında və yüksək
              keyfiyyətlə təhvil veririk. Sürət, təhlükəsizlik və əlçatanlıq
              bizim əsas prinsiplərimizdir.
            </p>

            <div className="about-info">
              <h4>Texniki Dəstək Linkimiz:</h4>

              <a href="#">
                https://novatech.az/support
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="card">
              <h3>150+</h3>
              <p>Uğurlu Layihə</p>
            </div>

            <div className="card">
              <h3>99%</h3>
              <p>Müştəri Məmnuniyyəti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;