import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BranchSemesterPage = () => {
    const { branch } = useParams();
    const navigate = useNavigate();

    const readableBranch = branch
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

    return (
        <div className="courses-section" style={{ paddingTop: "6rem" }}>
            <h2 className="section-title">{readableBranch}</h2>
            <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Select a semester to view subjects offered.
            </p>

            <div style={{ textAlign: "center" }}>
                <button className="course-button" onClick={() => navigate("/btech")}>
                    ← Back to Branches
                </button>
            </div>

            <div className="courses-grid" style={{ marginTop: "2rem" }}>
                {Array.from({ length: 8 }, (_, i) => i + 1).map((sem) => (
                    <div
                        className="course-card"
                        key={sem}
                        onClick={() => navigate(`/btech/${branch}/semester/${sem}`)}
                    >
                        <h3 className="course-title">Semester {sem}</h3>
                        <button className="course-button">View Subjects →</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BranchSemesterPage;
