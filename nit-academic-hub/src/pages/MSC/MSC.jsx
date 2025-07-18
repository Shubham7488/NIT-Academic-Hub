// src/pages/MSC/MSC.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const branches = ["Physics", "Chemistry", "Mathematics"];

const MSC = () => {
    const navigate = useNavigate();

    const handleClick = (branch) => {
        const path = branch.toLowerCase().replace(/ /g, "-");
        navigate(`/msc/${path}`);
    };

    return (
        <div className="courses-section" style={{ paddingTop: "6rem" }}>
            <h2 className="section-title">Master of Science (MSc)</h2>
            <p style={{ textAlign: "center", maxWidth: "800px", margin: "1rem auto", fontSize: "1.1rem" }}>
                MSc is a postgraduate program emphasizing advanced scientific knowledge. Please select a branch to view its curriculum.
            </p>

            <div className="courses-grid" style={{ marginTop: "3rem" }}>
                {branches.map((branch, i) => (
                    <div className="course-card" key={i} onClick={() => handleClick(branch)}>
                        <h3 className="course-title">{branch}</h3>
                        <button className="course-button">View Semesters →</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MSC;
