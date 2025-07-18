// src/pages/MSC/MSCBranchSemesterPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MSCBranchSemesterPage = () => {
    const { branch } = useParams();
    const navigate = useNavigate();

    const readableBranch = branch
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

    return (
        <div className="courses-section" style={{ paddingTop: "6rem" }}>
            <h2 className="section-title">{readableBranch}</h2>
            <p style={{ textAlign: "center", maxWidth: "800px", margin: "1rem auto", fontSize: "1.1rem" }}>
                Explore semester-wise subjects for {readableBranch}.
            </p>

            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <button className="course-button" onClick={() => navigate("/msc")}>
                    ← Back to MSc Branches
                </button>
            </div>

            <div className="courses-grid" style={{ marginTop: "2rem" }}>
                {[1, 2, 3, 4].map((sem) => (
                    <div
                        className="course-card"
                        key={sem}
                        onClick={() => navigate(`/msc/${branch}/semester/${sem}`)}
                    >
                        <h3 className="course-title">Semester {sem}</h3>
                        <button className="course-button">View Subjects →</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MSCBranchSemesterPage;
