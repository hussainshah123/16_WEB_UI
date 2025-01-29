import { FaStar } from "react-icons/fa";
import man from '../assets/images/man.png'

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const testimonials = [
    {
      name: "William Smith",
      role: "Customer",
      image: man,
      review:
        "أنا أحب خدماتهم واستمتع بها. هذه أفضل منصة! أنا أحب خدماتهم واستمتع بها. هذه أفضل منصة!",
      rating: 4.7,
    },
    {
        name: "William Smith",
        role: "Customer",
        image: man,
        review:
          "أنا أحب خدماتهم واستمتع بها. هذه أفضل منصة! أنا أحب خدماتهم واستمتع بها. هذه أفضل منصة!",
        rating: 4.7,
      },
      {
        name: "William Smith",
        role: "Customer",
        image: man,
        review:
          "أنا أحب خدماتهم واستمتع بها. هذه أفضل منصة! أنا أحب خدماتهم واستمتع بها. هذه أفضل منصة!",
        rating: 4.7,
      },
  
  ];
const CardSlider=()=>{
    return(<>
    <div className="cardText">
        <h1>What Are <br /> <span>Customer</span> Says</h1>
    </div>
     <div className="testimonial-slider-container">
      <button className="slider-btn left"><FiChevronLeft /></button>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-review">{testimonial.review}</p>
            <div className="testimonial-rating">
              <FaStar className="star-icon" />
              <span>{testimonial.rating}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn right"><FiChevronRight /></button>
    </div>
    </>)
}
export default CardSlider;