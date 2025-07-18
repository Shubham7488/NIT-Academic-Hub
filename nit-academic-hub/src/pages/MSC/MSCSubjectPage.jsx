import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyMSCResources = {
};

const MSCSubjectPage = () => {
  const { branch, number, code } = useParams();
  const navigate = useNavigate();
  const subjectResources = dummyMSCResources[code];

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

  const readableBranch = branch
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="courses-section" style={{ paddingTop: "6rem" }}>
      <h2 className="section-title">Resources for {code}</h2>
      <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        {readableBranch} – Semester {number}
      </p>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <button
          className="course-button"
          onClick={() => navigate(`/msc/${branch}/semester/${number}`)}
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

export default MSCSubjectPage;
