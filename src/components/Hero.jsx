import React from "react";
import bulb from "../assets/bulb.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/form");
  };
  return (
    <div className="heroContainer">
      <section className="hero">
        <div className="hero-text">
          <div className="hero-text-heading">Hackathon Submissions</div>
          <div className="hero-text-desc">
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.
          </div>
          <div className="hero-text-button">
            <button className="hero-btn" onClick={handleClick}>
              Upload Submission
            </button>
          </div>
        </div>
        <div className="hero-img">
          <img src={bulb} alt="hero-img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
