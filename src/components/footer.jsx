import logo from '..//assets/images/log.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Address</h3>
          <p><MdLocationOn /> Park Avenue South, New York, 74812, United States</p>
          <p><MdEmail /> contact@016labs.com</p>
          <p><MdPhone /> 000-123-456</p>
          <p>FAQ’s | Contact Us</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Links</h3>
          <p>Home</p>
          <p>How it works</p>
          <p>Our Chefs</p>
          <p>Reviews</p>
          <p>What's new</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Subscribe to Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button><FaPaperPlane /></button>
          </div>
          <h3 className="footer-title">Our Social</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>Copyrights © 2022 O16 Labs - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;