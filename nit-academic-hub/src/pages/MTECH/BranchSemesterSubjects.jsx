import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// ✅ Dummy subject data
const subjectData = {
    "Computer Engineering": {
        1: [
            { name: "Advanced Data Structures and Algorithms", code: "MTCOT-101", credits: 4 },
            { name: "Advanced Computer Architecture", code: "MTCOT-103", credits: 4 },
            { name: "Software Architecture", code: "MTCOT-105", credits: 4 },
            { name: "Topics in Computer Networks", code: "MTCOT-107", credits: 4 },
            { name: "Multimedia Technologies", code: "MTCOT-109", credits: 4 },
        ],
        2: [
            { name: "Mobile Computing", code: "MTCOT-102", credits: 4 },
            { name: "Advanced Database Systems", code: "MTCOT-104", credits: 4 },
            { name: "Natural Language Processing ", code: "MTCOT-106", credits: 4 },
            { name: "Functional Programming", code: "MTCOT-108", credits: 4 },
        ],
        3: [
            { name: "Distributed Computing Systems", code: "MTCOT-201", credits: 4 },
            { name: "Embedded Systems", code: "MTCOT-203", credits: 4 },
            { name: "Object Oriented Software Modeling", code: "MTCOT-205", credits: 4 },
        ],
        4: [
            { name: "Dissertation", code: "MTCOT-202", credits: 20 },
        ],
    },
    "Electronics Engineering": {
        1: [
            { name: "Mathematical Models for Internet", code: "MTEC-101", credits: 3.5 },
            { name: "Digital Signal Processing", code: "MTEC-102", credits: 3.5 },
            { name: "Digital Communication Systems", code: "MTEC-103", credits: 3.5 },
            { name: "Wireless Mobile Communications", code: "MTEC-104", credits: 3.5 },
            { name: "Statistical Models", code: "MTEC-106", credits: 3.5 },
        ],
        2: [
            { name: "Telecommunication Networks", code: "MTEC-201", credits: 3.5 },
            { name: "Optical Communication", code: "MTEC-202", credits: 3.5 },
            { name: "Modelling and Simulation", code: "MTEC-203", credits: 3.5 },
            { name: "Multimedia Systems", code: "MTEC-205", credits: 3.5 },
        ],
        3: [
            { name: "Security Engineering", code: "MTEC-301", credits: 4 },
            { name: "Emerging Network Technologies", code: "MTEC-305", credits: 4 },
            { name: "Object Oriented Programming", code: "MTEC-308", credits: 4 },
        ],
        4: [
            { name: "Dissertation", code: "MTEC-302", credits: 20 },
        ],
    },
    "Mechanical Engineering": {
        1: [
            { name: "Computer-Aided Design", code: "MTD-501", credits: 3.5 },
            { name: "Design of Mechanisms", code: "MTD-503", credits: 3.5 },
            { name: "Advanced Mechanical Vibrations", code: "MTD-505", credits: 3.5 },
            { name: "Advanced Fluid Engineering ", code: "MTT-501", credits: 3.5 },
            { name: "Production, Planning & Control ", code: "MTI-501", credits: 3.5 },
        ],
        2: [
            { name: "Applied Numerical Methods", code: "MTD-502", credits: 3.5 },
            { name: "Advanced Mechanics of Solids", code: "MTD-504", credits: 3.5 },
            { name: "Computational Fluid Dynamics", code: "MTT-502", credits: 3.5 },
            { name: "Mechatronics", code: "MTI-502", credits: 3.5 },
        ],
        3: [
            { name: "Industrial Robotics", code: "MTD-511", credits: 3.5 },
            { name: "Measurement and Control", code: "MTD-512", credits: 3.5 },
            { name: "Experimental Stress Analysis ", code: "MTD-513", credits: 3.5 },
        ],
        4: [
            { name: "Dissertation", code: "MTD-520", credits: 20 },
        ],
    },
    "Electrical Engineering": {
        1: [
            { name: "Advanced Power System Analysis", code: "E-501", credits: 4 },
            { name: "Power System Protection and Relaying", code: "E-503", credits: 4 },
            { name: "EHVAC Transmission", code: "E-505", credits: 4 },
            { name: "Systems Engineering", code: "E-507", credits: 4 },
            { name: "Transients in Power Systems", code: "E-701", credits: 4 },
        ],
        2: [
            { name: "Power System Operation And Control", code: "E-502", credits: 3.5 },
            { name: "Power Systems Dynamics and Stability", code: "E-504", credits: 3.5 },
            { name: "HVDC Transmission", code: "E-506", credits: 3.5 },
            { name: "Power Apparatus and Machines", code: "E-508", credits: 3.5 },
            { name: "Information Security", code: "E-510", credits: 3.5 },
        ],
        3: [
            { name: "Power Systems Reliability", code: "E-707", credits: 4 },
            { name: "Power Systems Communication", code: "E-711", credits: 4 },
        ],
        4: [
            { name: "Dissertation", code: "E-602", credits: 20 },
        ],
    },
    "Civil Engineering": {
        1: [
            { name: "Engineering Properties of Soils ", code: "CET-661", credits: 4.5 },
            { name: "Foundation Engineering", code: "CET-663", credits: 4.5 },
            { name: "Rock Mechanics -I", code: "CET-665", credits: 4.5 },
            { name: "Ground Improvement Engineering", code: "CET-668", credits: 4.5 },
        ],
        2: [
            { name: "Soil Dynamics & Machine Foundations", code: "CET-662", credits: 4.5 },
            { name: "Rock Mechanics -IIStability", code: "CET-664", credits: 4.5 },
            { name: "Earth Dams & Slope Stability", code: "CET-666", credits: 4.5 },
            { name: "Design of Foundation Systems", code: "CET-670", credits: 4.5 },
            { name: "Geotechnical Exploration and Advanced Soil Testing", code: "CET-672", credits: 4.5 },
        ],
        3: [
            { name: "Earth Pressure ", code: "CET-671", credits: 4 },
            { name: "Clay Mineralogy", code: "CET-673", credits: 4 },
            { name: "Theoretical Soil Mechanics", code: "CET-675", credits: 4 },
            { name: "Advanced Rock Mechanics", code: "CET-674", credits: 4 },
        ],
        4: [
            { name: "Dissertation", code: "CET-690", credits: 20 },
        ],
    },
    // 🔜 Add more branches like "Information Technology", "Electronics Engineering", etc.
};

const BranchSemesterSubjects = () => {
    const { branch, number } = useParams();
    const navigate = useNavigate();

    // ✅ Convert slug to readable title (e.g., "computer-engineering" → "Computer Engineering")
    const readableBranch = branch
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    // ✅ Fetch subjects using readable branch
    const subjects = subjectData[readableBranch]?.[number] || [];

    return (
        <div className="courses-section" style={{ paddingTop: "6rem" }}>
            <h2 className="section-title">
                Semester {number} – {readableBranch}
            </h2>

            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <button
                    className="course-button"
                    onClick={() => navigate(`/mtech/${branch}`)}
                >
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
                                onClick={() =>
                                    navigate(
                                        `/mtech/${branch}/semester/${number}/subject/${subj.code}`
                                    )
                                }
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

export default BranchSemesterSubjects;
