import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const semesterData = {
  1: [
    { name: "Principles & Practices of Management", code: "MBA-101", credits: 4 },
    { name: "Organisational Behavior", code: "MBA-103", credits: 4 },
    { name: "Managerial Economics", code: "MBA-105", credits: 3 },
    { name: "Accounting for Managers", code: "MBA-107", credits: 4 },
    { name: "Business Environment", code: "MBA-109", credits: 4 },
    { name: "Soft Skills Development", code: "MBA-111", credits: 3 },
    { name: "Business Statistics", code: "MBA-113", credits: 4 },
    { name: "Computer Applications in Management", code: "MBA-115", credits: 4 },
  ],
  2: [
    { name: "Financial Management", code: "MBA-102", credits: 4 },
    { name: "Human Resource Management", code: "MBA-104", credits: 4 },
    { name: "Production & Operations Management", code: "MBA-106", credits: 4 },
    { name: "Marketing Management", code: "MBA-108", credits: 4 },
    { name: "TotalQualitYManagement", code: "MBA-110", credits: 3 },
    { name: "Business Ethics", code: "MBA-112", credits: 4 },
    { name: "Research MethodologY", code: "MBA-114", credits: 4 },
    { name: "Management lnformation SYstem", code: "MBA-116", credits: 3 },
  ],
  3: [
    { name: "International Business", code: "MBA-201", credits: 4 },
    { name: "Business Law & Corporate Taxation", code: "MBA-203", credits: 4 },
    { name: "Entrepreneurship Development", code: "MBA-205", credits: 4 },
    { name: "Summer Training", code: "MBA-207", credits: 4 },
    { name: "Financial Institutions & Markets", code: "MBA-213", credits: 6 },
    { name: "Merchant Banking and Financial Services", code: "MBA-223", credits: 4 },
    { name: "Security Analysis and Portfolio Management", code: "MBA-233", credits: 4 },
    { name: "Insurance and Risk Management", code: "MBA-243", credits: 4 },
    { name: "Project Finance", code: "MBA-253", credits: 4 },
    { name: "Integrated Marketing Communication", code: "MBA-215", credits: 6 },
    { name: "Sales & Distribution Management", code: "MBA-225", credits: 4 },
    { name: "Product and Brand Management", code: "MBA-235", credits: 4 },
    { name: "Consumer Behavior", code: "MBA-245", credits: 6 },
    { name: "Emerging Concepts in Marketing-I", code: "MBA-255", credits: 6 },
  ],
  4: [
    { name: "Strategic Management", code: "MBA-202", credits: 4 },
    { name: "Digital Marketing and E-Commerce", code: "MBA-204", credits: 4 },
    { name: "Project", code: "MBA-206", credits: 4 },
    { name: "lnternational Financial Management", code: "MBA-214", credits: 4 },
    { name: "Working Capital Management", code: "MBA-224", credits: 6 },
    { name: "Derivatives Management", code: "MBA-234", credits: 4 },
    { name: "Microfinance", code: "MBA-244", credits: 4 },
    { name: "Commercial Bank Management", code: "MBA-254", credits: 4 },
    { name: "Retail Management", code: "MBA-216", credits: 4 },
    { name: "Relationship Marketing", code: "MBA-226", credits: 6 },
    { name: "Marketing of Services", code: "MBA-236", credits: 4 },
    { name: "Supply Chain Management", code: "MBA-246", credits: 4 },
    { name: "Emerging Concepts in Marketing-ll", code: "MBA-256", credits: 6 },
  ],
};

const SemesterPage = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const subjects = semesterData[number];

  return (
    <div className="courses-section" style={{ paddingTop: "6rem" }}>
      <h2 className="section-title">MBA - Semester {number}</h2>

      {/* 🔙 Back to MBA Page */}
      <div style={{ textAlign: "center", margin: "1rem 0" }}>
        <button className="course-button" onClick={() => navigate("/mba")}>
          ← Back to MBA Overview
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
                navigate(`/mba/semester/${number}/subject/${subj.code}`)
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
