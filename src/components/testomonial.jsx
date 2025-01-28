import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What our Customers Say</h2>
      <div className="reviews">
        <div className="review-card">
          <p>“Amazing food and great service!”</p>
          <h4>John Doe</h4>
        </div>
        <div className="review-card">
          <p>“Best restaurant experience ever.”</p>
          <h4>Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
