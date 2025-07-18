import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const people = [
    {
      name: "Armaan Vasal",
      email: "armaan7vasal@gmail.com",
      phone: "6386238247",
    },
    {
      name: "Shubham Kumar Shaw",
      email: "shubhamshaw930@gmail.com",
      phone: "7488143473",
    },
  ];

  return (
    <div
      id="contact"
      className="contact-page"
      style={{ paddingTop: "6rem" }} // ensures it's slightly below the navbar
    >
      <h1>Contact Us</h1>
      <div className="card-grid">
        {people.map((p) => (
          <div key={p.email} className="contact-card">
            <h2>{p.name}</h2>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${p.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:+91${p.phone}`}>{p.phone}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
