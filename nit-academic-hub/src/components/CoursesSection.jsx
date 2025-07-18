import React from "react";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

const CoursesSection = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // ✅ Check login status

  const navigateToCourse = (course) => {
    if (!user) {
      alert("⚠️ Please login to explore this course.");
      navigate("/login");
      return;
    }

    switch (course) {
      case "mca":
        navigate("/mca");
        break;
      case "mba":
        navigate("/mba");
        break;
      case "msc":
        navigate("/msc");
        break;
      case "btech":
        navigate("/btech");
        break;
      case "mtech":
        navigate("/mtech");
        break;
      case "interviews":
        navigate("/interview-experiences");
        break;
      default:
        alert("Course page coming soon!");
    }
  };

  const courses = [
    {
      icon: "fa-laptop-code",
      title: "MCA",
      description: "Master of Computer Applications...",
      key: "mca",
    },
    {
      icon: "fa-cogs",
      title: "B.Tech",
      description: "Bachelor of Technology...",
      key: "btech",
    },
    {
      icon: "fa-chart-line",
      title: "MBA",
      description: "Master of Business Administration...",
      key: "mba",
    },
    {
      icon: "fa-microscope",
      title: "M.Sc",
      description: "Master of Science...",
      key: "msc",
    },
    {
      icon: "fa-microchip",
      title: "M.Tech",
      description: "Master of Technology...",
      key: "mtech",
    },
    {
      icon: "fa-comments",
      title: "Interview Experiences",
      description: "Real interview experiences...",
      key: "interviews",
      isInterviewCard: true,
    },
  ];

  return (
    <section className="courses-section" id="courses">
      <h2 className="section-title">Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.key}
            icon={course.icon}
            title={course.title}
            description={course.description}
            onClick={() => navigateToCourse(course.key)}
            isInterviewCard={course.isInterviewCard}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
