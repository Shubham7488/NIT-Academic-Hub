import React from "react";
import "../styles/FAQ.css"; // Create this file for styles if needed

const faqs = [
  {
    question: "What is the purpose of the NIT Academic Hub?",
    answer:
      "The platform is designed to provide students easy access to semester-wise study resources, including syllabi, previous year papers, and recommended books.",
  },
  {
    question: "Who can access the materials?",
    answer:
      "All students of NIT Kurukshetra can access the study materials. Guests can browse, but some resources might require login.",
  },
  {
    question: "Are the study materials official?",
    answer:
      "No, the materials are contributed by students and faculty. Always cross-check with official NIT KKR academic resources.",
  },
  {
    question: "How can I contribute resources?",
    answer:
      "You can contribute by contacting us through the 'Feedback' or 'Contact Us' section. We welcome PDFs, links, or suggestions.",
  },
  {
    question: "Will new courses be added?",
    answer:
      "Yes! We plan to expand support to B.Tech, PhD, and other programs soon.",
  },
  {
    question: "Is this platform affiliated with NIT Kurukshetra?",
    answer:
      "This platform is student-initiated and not officially affiliated. It is created to support peers.",
  },
];

const FAQ = () => {
  return (
    <div className="faq-page" style={{ paddingTop: "6rem" }}>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
