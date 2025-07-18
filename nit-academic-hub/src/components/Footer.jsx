// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer" id="contact">
//       <div className="footer-content">
//         {/* About Section */}
//         <div className="footer-section">
//           <h3>About NIT Kurukshetra</h3>
//           <p>
//             National Institute of Technology Kurukshetra is one of India's
//             premier technical institutions. Established in 1963, known for
//             academic excellence and innovation.
//           </p>
//           <div className="social-links">
//             <a
//               href="https://www.facebook.com/nitkurukshetraofficialpage/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-facebook-f" />
//             </a>
//             <a
//               href="https://x.com/nitkurukshetra?lang=en"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-twitter" />
//             </a>
//             <a
//               href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana/posts/?feedView=all"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-linkedin-in" />
//             </a>
//             <a
//               href="https://www.instagram.com/nitkurukshetra/?hl=en"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-instagram" />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <p>
//             <Link to="/about">About Us</Link>
//           </p>
//           <p>
//             <a
//               href="#courses"
//               onClick={(e) => {
//                 e.preventDefault();
//                 document
//                   .getElementById("courses")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               Courses
//             </a>
//           </p>
//           <p>
//             <a
//               href="https://nitkkr.ac.in/admission-2021/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Admissions
//             </a>
//           </p>
//           <p>
//             <a
//               href="https://nitkkr.ac.in/placement-statistics/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Placements
//             </a>
//           </p>
//           <p>
//             <a
//               href="https://nitkkr.ac.in/research-and-consultancy-3/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Research
//             </a>
//           </p>
//         </div>

//         {/* Support */}
//         <div className="footer-section">
//           <h3>Support</h3>
//           <p>
//             <Link to="/contact">Contact Us</Link>
//           </p>
//           <p>
//             <Link to="/feedback" target="_blank">
//               Give Feedback
//             </Link>
//           </p>
//           <p>
//             <Link to="/faq" target="_blank">
//               FAQ
//             </Link>
//           </p>
//           {/* <p>
//             <Link to="/privacy-policy">Privacy Policy</Link>
//           </p> */}
//           <p>
//             <Link to="/privacy-policy"target="_blank">Privacy Policy</Link>
//           </p>
//         </div>

//         {/* Contact Info */}
//         <div className="footer-section">
//           <h3>Contact Info</h3>
//           <p>
//             <i className="fas fa-map-marker-alt" /> NIT Kurukshetra, Haryana
//             136119
//           </p>
//           <p>
//             <i className="fas fa-phone" /> +91-1744-233208
//           </p>
//           <p>
//             <i className="fas fa-envelope" /> info@nitkkr.ac.in
//           </p>
//           <p>
//             <i className="fas fa-globe" /> www.nitkkr.ac.in
//           </p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>
//           &copy; 2024 NIT Kurukshetra Academic Hub. All rights reserved. |
//           Developed with ❤️ for students
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About NIT Kurukshetra</h3>
          <p>
            National Institute of Technology Kurukshetra is one of India's
            premier technical institutions. Established in 1963, known for
            academic excellence and innovation.
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/nitkurukshetraofficialpage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://x.com/nitkurukshetra?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.instagram.com/nitkurukshetra/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>
            <Link to="/about" target="_blank">About Us</Link>
          </p>
          <p>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Courses
            </a>
          </p>
          <p>
            <a
              href="https://nitkkr.ac.in/admission-2021/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admissions
            </a>
          </p>
          <p>
            <a
              href="https://nitkkr.ac.in/placement-statistics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Placements
            </a>
          </p>
          <p>
            <a
              href="https://nitkkr.ac.in/research-and-consultancy-3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research
            </a>
          </p>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <p>
            <Link to="/contact" target="_blank">Contact Us</Link>
          </p>
          <p>
            <Link to="/feedback" target="_blank">
              Give Feedback
            </Link>
          </p>
          <p>
            <Link to="/faq" target="_blank">
              FAQ
            </Link>
          </p>
          <p>
            <Link to="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-map-marker-alt" />{" "}
            <a
              href="https://www.google.com/maps/place/National+Institute+of+Technology,+Kurukshetra,+Haryana+136119/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIT Kurukshetra, Haryana 136119
            </a>
          </p>
          <p>
            <i className="fas fa-phone" />{" "}
            <a href="tel:+911744233208">+91-1744-233208</a>
          </p>
          {/* <p>
            <i className="fas fa-envelope" />{" "}
            <a href="mailto:info@nitkkr.ac.in">info@nitkkr.ac.in</a>
          </p> */}
          <p>
            <i className="fas fa-envelope" />{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nitkkr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@nitkkr.ac.in
            </a>
          </p>

          <p>
            <i className="fas fa-globe" />{" "}
            <a
              href="https://www.nitkkr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.nitkkr.ac.in
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 NIT Kurukshetra Academic Hub. All rights reserved. |
          Developed with ❤️ for students
        </p>
      </div>
    </footer>
  );
};

export default Footer;
