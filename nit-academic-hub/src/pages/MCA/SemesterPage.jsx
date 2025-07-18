// src/pages/SemesterPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const semesterData = {
  1: [
    { name: "Computer Programming using C", code: "MCA-101", credits: 4 },
    {
      name: "Computer Organization and Architecture",
      code: "MCA-103",
      credits: 4,
    },
    {
      name: "Discrete Mathematical Structure",
      code: "MCA-105",
      credits: 4,
    },
    { name: "Microprocessors", code: "MCA-107", credits: 4 },
    { name: "Fundamentals of Management ", code: "MCA-109", credits: 4 },
  ],
  2: [
    { name: "Data Structures", code: "MCA-102", credits: 4 },
    {
      name: "Object Oriented Programming using Java",
      code: "MCA-104",
      credits: 4,
    },
    { name: "Design & Analysis of Algorithms", code: "MCA-106", credits: 4 },
    { name: "Operating Systems", code: "MCA-108", credits: 4 },
    { name: "Organizational Behavior", code: "MCA-110", credits: 4 },
  ],
  3: [
    { name: "Database Management Systems", code: "MCA-201", credits: 4 },
    {
      name: "Software Engineering & Project Management",
      code: "MCA-203",
      credits: 4,
    },
    { name: "Computer Networks", code: "MCA-205", credits: 4 },
    {
      name: "Formal Languages and Automata Theory",
      code: "MCA-207",
      credits: 4,
    },
    { name: "Modelling and Simulation", code: "MCA-209", credits: 3 },
  ],
  4: [
    { name: "Artificial Intelligence ", code: "MCA-202", credits: 4 },
    { name: "Interoperable Web Technologies", code: "MCA-204", credits: 4 },
    { name: "Data Analytics", code: "MCA-206", credits: 4 },
    { name: "Graph Theory", code: "MCA-208", credits: 3 },
    { name: "Digital Image Processing", code: "MCA-210", credits: 3 },
  ],
  5: [
    { name: "Cloud Computing Architecture", code: "MCA-301", credits: 4 },
    { name: "Cyber Security", code: "MCA-303", credits: 4 },
    { name: "Natural Language Processing", code: "MCA-305", credits: 3 },
    { name: "Machine Learning", code: "MCA-307", credits: 3 },
    { name: "Neural Network & Fuzzy Systems", code: "MCA-309", credits: 3 },
  ],
  6: [{ name: "Industrial Project*", code: "MCA-302A", credits: 20 }],
};

const SemesterPage = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const subjects = semesterData[number];

  return (
    <div className="courses-section" style={{ paddingTop: "6rem" }}>
      <h2 className="section-title">Semester {number}</h2>

      {/* 🔙 Back to MCA Page */}
      <div style={{ textAlign: "center", margin: "1rem 0" }}>
        <button className="course-button" onClick={() => navigate("/mca")}>
          ← Back to MCA Overview
        </button>
      </div>

      {/* 📚 Subject Cards */}
      <div className="courses-grid" style={{ marginTop: "2rem" }}>
        {subjects?.map((subj, i) => (
          <div className="course-card" key={i}>
            <h3 className="course-title">{subj.name}</h3>
            <p className="course-description">Subject Code: {subj.code}</p>
            <p className="course-description">Credits: {subj.credits}</p>
            <button
              className="course-button"
              onClick={() =>
                navigate(`/mca/semester/${number}/subject/${subj.code}`)
              }
            >
              View Resources →
            </button>
          </div>
        )) || <p>No data available for this semester.</p>}
      </div>
    </div>
  );
};

export default SemesterPage;
