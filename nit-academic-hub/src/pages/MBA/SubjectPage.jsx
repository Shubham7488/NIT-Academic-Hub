import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyResources = {
 
};

const SubjectPage = () => {
  const { number, code } = useParams();
  const navigate = useNavigate();
  const subjectResources = dummyResources[code];

  const renderSection = (title, items) => (
    <div>
      <h3 className="section-title" style={{ marginBottom: "1.5rem" }}>
        {title}
      </h3>
      <div className="courses-grid">
        {items.map((res, idx) => (
          <div className="course-card" key={idx}>
            <h3 className="course-title">{res.name}</h3>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="course-button"
            >
              Download PDF →
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="courses-section" style={{ paddingTop: "6rem" }}>
      <h2 className="section-title">Resources for {code}</h2>
      <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Semester {number}
      </p>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <button
          className="course-button"
          onClick={() => navigate(`/mba/semester/${number}`)}
        >
          ← Back to Semester {number}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {subjectResources?.notes &&
          renderSection("📘 Lecture Notes", subjectResources.notes)}
        {subjectResources?.papers &&
          renderSection("🧾 Previous Year Papers", subjectResources.papers)}
      </div>
    </div>
  );
};

export default SubjectPage;
