
import React from "react";

const CourseCard = ({ icon, title, description, onClick, isInterviewCard }) => {
  return (
    <div
      className={`course-card ${isInterviewCard ? "interview-card" : ""}`}
      onClick={onClick} // ✅ use the function passed from parent
    >
      <div className="course-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
      <button className="course-button">
        {isInterviewCard
          ? "Read Success Stories"
          : `Explore ${title} Resources`}
      </button>
    </div>
  );
};

export default CourseCard;
