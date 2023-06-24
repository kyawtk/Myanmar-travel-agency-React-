import Button from "./Button";
import './HeroSection.scss'
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="assests/beach.mp4" loop muted autoPlay></video>
      <h1>ADVENTRUES IN BURMA</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button buttonSize={"btn--large"} buttonStyle="btn--outline">
          Get Started
        </Button>
        <Button buttonSize={'btn--large'}>Watch Trailer <i className="fa-sharp fa-solid fa-circle-play"></i> </Button>
      </div>
    </div>
  );
}

export default HeroSection;
