import React, { useState } from "react";
import "../../styles/Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    course: "",
    semester: "",
    subject: "",
    experience: "",
    suggestions: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      roll: "",
      course: "",
      semester: "",
      subject: "",
      experience: "",
      suggestions: "",
    });
  };

  return (
    <div className="feedback-container">
      <h1>Student Feedback Form</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Roll Number:
          <input
            type="text"
            name="roll"
            required
            value={formData.roll}
            onChange={handleChange}
          />
        </label>

        <label>
          Course:
          <select
            name="course"
            required
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
            <option value="BTech">B.Tech</option>
            <option value="M.sc">M.sc</option>
            <option value="MTech">M.Tech</option>
          </select>
        </label>

        <label>
          Semester:
          <select
            name="semester"
            required
            value={formData.semester}
            onChange={handleChange}
          >
            <option value="">Select Semester</option>
            <option value="Sem 1">Semester 1</option>
            <option value="Sem 2">Semester 2</option>
            <option value="Sem 3">Semester 3</option>
            <option value="Sem 4">Semester 4</option>
            <option value="Sem 5">Semester 5</option>
            <option value="Sem 6">Semester 6</option>
            <option value="Sem 7">Semester 7</option>
            <option value="Sem 8">Semester 8</option>
          </select>
        </label>

        <label>
          Subject:
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </label>

        <label>
          How was your experience?
          <select
            name="experience"
            required
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="">Select Experience</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </label>

        <label>
          Suggestions / Improvements:
          <textarea
            name="suggestions"
            rows="4"
            value={formData.suggestions}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
