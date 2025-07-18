// src/pages/MSC/MSCBranchSubjectsPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const subjectData = {
    Physics: {
        1: [
            { name: "Classical Mechanics", code: "PHPC-5Ol", credits: 3 },
            { name: "Quantum Mechanics", code: "PHPC-5O3", credits: 3 },
            { name: "Mathematical Physics", code: "PHPC-5O5", credits: 3 },
            { name: "Electrodynamics", code: "PHPC-5O7", credits: 3 },
            { name: "Nuclear and Particle physics", code: "PHPC-5O9", credits: 3 },
        ],
        2: [
            { name: "Classical Mechanics", code: "PHPC-5Ol", credits: 3 },
            { name: "Quantum Mechanics", code: "PHPC-5O3", credits: 3 },
            { name: "Mathematical Physics", code: "PHPC-5O5", credits: 3 },
            { name: "Electrodynamics", code: "PHPC-5O7", credits: 3 },
            { name: "Nuclear and Particle physics", code: "PHPC-5O9", credits: 3 },
        ],
        3: [
            { name: "Advanced Electronics", code: "PHPC-515", credits: 3 },
            { name: "Condensed Matter physics", code: "PHPC-517", credits: 3 },
            { name: "Lasers and Spectroscopy", code: "PHPE-553", credits: 3 },
            { name: "Radiation physics and Nuclear Fragmentation", code: "PHPE-557", credits: 3 },
            { name: "Energy Materials and Devices", code: "PHOE-581", credits: 3 },
        ],
    },
    Chemistry: {
        1: [
            { name: "Structure and Reactivity of Coordination Compounds", code: "CHPC-501", credits: 3 },
            { name: "Reaction Mechanisms in Organic Chemistry", code: "CHPC-503", credits: 3 },
            { name: "Thermodynamics and Chemical Kinetics ", code: "CHPC-505", credits: 3 },
            { name: "Analytical Chemistry: Principles and Applications", code: "CHPC-507", credits: 3 },
            { name: "Organometallic Chemistry", code: "CHPC-509", credits: 3 },
        ],
        2: [
            { name: "Main Group Chemistry", code: "CHPC-502", credits: 3 },
            { name: "Organic Syntheses", code: "CHPC-504", credits: 3 },
            { name: "Quantum Chemistry and Group Theory", code: "CHPC-506", credits: 3 },
            { name: "Solid State Chemistry and Electrochemistry", code: "CHPC-508", credits: 3 },
            { name: "Heterocyclic Chemrstry", code: "CHPE-556", credits: 3 },
        ],
        3: [
            { name: "Advanced Molecular Spectroscopy and Applications", code: "CHPC-515", credits: 3 },
            { name: "Stereochemistry,Photochemistry and Pericyclic Reactions", code: "CHPC-517", credits: 3 },
            { name: "Optoelectronic Materials", code: "CHPE-562", credits: 3 },
            { name: "Crystalline Materials and X-ray Differation", code: "CHPE-558", credits: 3 },
            { name: "EnergY Materials and Devices", code: "PHOE-581", credits: 3 },
        ],
    },
    Mathematics: {
        1: [
            { name: "Real Analysis", code: "MAPC-501", credits: 3 },
            { name: "Linear Algebra", code: "MAPC-503", credits: 3 },
            { name: "Probability and Statistics", code: "MAPC-505", credits: 3 },
            { name: "Ordinary Differential Equations", code: "MAPC-507", credits: 3 },
            { name: "Computer Programming in Python", code: "MAPC-509", credits: 3 },
            { name: "Integral Transforms and Integral Equations", code: "MAPC-511", credits: 3 },
        ],
        2: [
            { name: "Complex Analysis", code: "MAPC-502", credits: 3 },
            { name: "Topology", code: "MAPC-504", credits: 3 },
            { name: "Partial Differential Equations", code: "MAPC-506", credits: 3 },
            { name: "Numerical Analysis", code: "MAPC-508", credits: 3 },
            { name: "Differential Geometry", code: "MAPE-556", credits: 3 },
            { name: "lntroduction to Machine Learning", code: "MAPE-570", credits: 3 },
        ],
        3: [
            { name: "Functional Analysis", code: "MAPC-513", credits: 3 },
            { name: "Fluid Dynamics", code: "MAPC-515", credits: 3 },
            { name: "Discrete Mathematics", code: "MAPC-517", credits: 3 },
            { name: "Numerical Solutions of Differential Equations", code: "MAPC-519", credits: 3 },
            { name: "Number Theory", code: "MAPE-552", credits: 3 },
            { name: "Measure and lntegrations", code: "MAPE-557", credits: 3 },
        ],
        4: [
            { name: "Introduction to Advanced Computing Languages", code: "MAPC-522", credits: 3 },
            { name: "Computational Fluid Dynamics", code: "MAPE-567", credits: 3 },
            { name: "Mathematics for Data Science", code: "MAPE-570", credits: 3 },
            { name: "Environmental Science & Sustainable Development", code: "OE", credits: 3 },
        ],
    },
};

const MSCBranchSubjectsPage = () => {
    const { branch, number } = useParams();
    const navigate = useNavigate();

    const readableBranch = branch
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

    const subjects = subjectData[readableBranch]?.[number] || [];

    return (
        <div className="courses-section" style={{ paddingTop: "6rem" }}>
            <h2 className="section-title">Semester {number} – {readableBranch}</h2>

            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <button className="course-button" onClick={() => navigate(`/msc/${branch}`)}>
                    ← Back to Semesters
                </button>
            </div>

            <div className="courses-grid" style={{ marginTop: "2rem" }}>
                {subjects.length > 0 ? (
                    subjects.map((subj, i) => (
                        <div className="course-card" key={i}>
                            <h3 className="course-title">{subj.name}</h3>
                            <p className="course-description">Subject Code: {subj.code}</p>
                            <p className="course-description">Credits: {subj.credits}</p>
                            <button
                                className="course-button"
                                onClick={() => navigate(`/msc/${branch}/semester/${number}/subject/${subj.code}`)}
                            >
                                View Resources →
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
                        No subjects available for this semester.
                    </p>
                )}
            </div>
        </div>
    );
};

export default MSCBranchSubjectsPage;
