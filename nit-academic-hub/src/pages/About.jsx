import React from "react";
import armaanImg from "../assets/armaan.jpg"; // Place Armaan's image in src/assets/
import shubhamImg from "../assets/shubham.jpg"; // Place Shubham's image in src/assets/

const About = () => {
  return (
    <div
      className="about-section"
      style={{ padding: "6rem 2rem", textAlign: "center" }}
    >
      <h2 className="section-title">About Us</h2>
      <div
        className="team-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          marginTop: "3rem",
        }}
      >
        <div className="member-card">
          <img
            src={armaanImg}
            alt="Armaan"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <h3>Armaan Vasal</h3>
          {<p>
          "Driven by curiosity and grounded in precision, I believe the best solutions come from asking the right questions. Every challenge is just an idea waiting to be explored."
          </p>}
        </div>

        <div className="member-card">
          <img
            src={shubhamImg}
            alt="Shubham"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <h3>Shubham Kumar Shaw</h3>
          <p>
            "Innovation isn’t about doing more — it’s about doing what matters. I strive to build systems that not only work, but make an impact."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
