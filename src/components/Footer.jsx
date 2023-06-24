import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className="newsLetter">
        <h1>
          Join the Life Changing Adventures of Myanmar NewsLetter to get our
          best vacation deals
        </h1>
        <form action="#">
          <legend>You can Unsubscribe at any time</legend>
          <input placeholder="Your Email" type="email" required />
          <input type="submit" value={"Subscribe"} />
        </form>
      </div>

      <div className="links">
        <div className="aboutus-links">
          <h2 className="links-header"> About Us</h2>
          <ul>
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Investors</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            
          </ul>
        </div>
        <div className="contactus-links">
          {" "}
          <h2 className="links-header"> Contact Us</h2>
          <ul>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Destinations</Link>
            </li>
            <li>
              <Link to="/">Sponsorships</Link>
            </li>
            
          </ul>
        </div>
        <div className="video-links">
          {" "}
          <h2 className="links-header"> Videos</h2>
          <ul>
            <li>
              <Link to="/">Submit Video</Link>
            </li>
            <li>
              <Link to="/">Ambessadors</Link>
            </li>
            <li>
              <Link to="/">Agency</Link>
            </li>
            <li>
              <Link to="/">Influencer</Link>
            </li>
           
          </ul>
        </div>
        <div className="socialMedia-links">
          {" "}
          <h2 className="links-header">Social Media</h2>
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Youtube</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Reddit</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Tik Tok</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="logos">
        <h1 className="logo">Logo</h1>

        <p>CopyRight of Myanmar Citizens U+fe0f</p>
      </div>
    </footer>
  );
};
export default Footer;
