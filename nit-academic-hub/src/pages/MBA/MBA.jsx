// src/pages/MBA.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const MBA = () => {
  const navigate = useNavigate();

  return (
    <div className="courses-section" style={{ paddingTop: "6rem" }}>
      <h2 className="section-title">Master of Business Administration (MBA)</h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "1rem auto",
          fontSize: "1.1rem",
        }}
      >
        MBA is a postgraduate program that equips students with leadership,
        strategic thinking, and business management skills. The course is
        structured over 4 semesters, with a strong focus on real-world business
        applications and case studies.
      </p>

      <div className="courses-grid" style={{ marginTop: "3rem" }}>
        {[1, 2, 3, 4].map((sem) => (
          <div
            className="course-card"
            key={sem}
            onClick={() => navigate(`/mba/semester/${sem}`)}
          >
            <h3 className="course-title">Semester {sem}</h3>
            <button className="course-button">
              View Subjects <span style={{ marginLeft: "8px" }}>&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBA;
