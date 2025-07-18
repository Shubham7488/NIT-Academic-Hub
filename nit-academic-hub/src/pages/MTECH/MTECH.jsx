// src/pages/MTech/MTech.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const branches = [
    "Computer Engineering",
    "Electronics Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering"
];

const MTech = () => {
    const navigate = useNavigate();

    const handleClick = (branch) => {
        const path = branch.toLowerCase().replace(/ & | /g, "-");
        navigate(`/mtech/${path}`);
    };

    return (
        <div className="courses-section" style={{ paddingTop: "6rem" }}>
            <h2 className="section-title">Master of Technology (MTech)</h2>
            <p style={{ textAlign: "center", maxWidth: "800px", margin: "1rem auto", fontSize: "1.1rem" }}>
                MTech is a postgraduate degree focusing on advanced engineering principles and technologies. Please select a branch to explore its curriculum.
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

export default MTech;
