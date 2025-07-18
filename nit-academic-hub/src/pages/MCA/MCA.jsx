
import React from "react";
import { useNavigate } from "react-router-dom";

const MCA = () => {
  const navigate = useNavigate();

  return (
    <div className="courses-section" style={{ paddingTop: "6rem" }}>
      <h2 className="section-title">Master of Computer Applications (MCA)</h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "1rem auto",
          fontSize: "1.1rem",
        }}
      >
        MCA is a postgraduate degree that focuses on computer science, software
        development, and application programming. The course is structured over
        6 semesters, each building a solid foundation in computing principles
        and modern technologies.
      </p>

      <div className="courses-grid" style={{ marginTop: "3rem" }}>
        {[1, 2, 3, 4, 5, 6].map((sem) => (
          <div
            className="course-card"
            key={sem}
            onClick={() => navigate(`/mca/semester/${sem}`)} // ✅ Navigate to dynamic semester route
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

export default MCA;
