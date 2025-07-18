import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dummy data
const dummyResources = {
  
};

const BtechSubjectPage = () => {
  const { branch, number, code } = useParams();
  const navigate = useNavigate();
  const subjectResources = dummyResources[code];

  const renderSection = (title, items) => (
    <div>
      <h3 className="section-title">{title}</h3>
      <div className="courses-grid">
        {items.map((item, i) => (
          <div className="course-card" key={i}>
            <h3 className="course-title">{item.name}</h3>
            <a
              href={item.link}
              className="course-button"
              target="_blank"
              rel="noopener noreferrer"
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
      <p style={{ textAlign: "center" }}>
        {branch.replace("-", " ")} – Semester {number}
      </p>

      <div style={{ textAlign: "center" }}>
        <button
          className="course-button"
          onClick={() => navigate(`/btech/${branch}/semester/${number}`)}
        >
          ← Back to Semester {number}
        </button>
      </div>

      {subjectResources?.notes &&
        renderSection("📘 Lecture Notes", subjectResources.notes)}
      {subjectResources?.papers &&
        renderSection("🧾 Previous Year Papers", subjectResources.papers)}
    </div>
  );
};

export default BtechSubjectPage;
