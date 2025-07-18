// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  const scrollToCourses = () => {
    const section = document.getElementById("courses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <h1>NIT Academic Hub</h1>
      <p>
        Your one-stop destination for previous year papers, study notes,
        and interview experiences
      </p>
      <button className="cta-button" onClick={scrollToCourses}>
        Explore Courses
      </button>
    </section>
  );
};

export default HeroSection;
