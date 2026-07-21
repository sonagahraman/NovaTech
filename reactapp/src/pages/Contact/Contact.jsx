import React from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Ad və soyad daxil edin";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email daxil edin";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Düzgün email daxil edin";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj daxil edin";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Mesaj uğurla göndərildi!");

      setFormData({
        fullname: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Bizimlə Əlaqə</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">
              Ad və Soyad <span>*</span>
            </label>

            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Əli Məmmədov"
              value={formData.fullname}
              onChange={handleChange}
            />

            {errors.fullname && (
              <small className="error">{errors.fullname}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Elektron poçt <span>*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <small className="error">{errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Mesajınız <span>*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Layihəniz haqqında..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {errors.message && (
              <small className="error">{errors.message}</small>
            )}
          </div>

          <button type="submit">Göndər</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;