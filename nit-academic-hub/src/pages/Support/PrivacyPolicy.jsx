import React from "react";
import "../../styles/PrivacyPolicy.css"; // Optional if you want custom styles

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container" style={{ padding: "6rem 2rem" }}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: June 15, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to the NIT Kurukshetra Academic Hub. This Privacy Policy
        outlines how we collect, use, and protect your information when you use
        our platform. By accessing or using our services, you agree to the
        collection and use of information in accordance with this policy.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          Name and email address when submitting feedback or contacting us
        </li>
        <li>Usage data (pages visited, interactions, etc.)</li>
        <li>Device and browser information</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>Your data may be used to:</p>
      <ul>
        <li>Improve user experience and content relevance</li>
        <li>Respond to your inquiries or feedback</li>
        <li>Ensure platform security and analytics</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        We may use cookies to enhance your experience on our platform. You can
        choose to disable cookies in your browser settings.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party sites. We are not
        responsible for the privacy practices of these websites.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement standard security measures to protect your data, but
        remember that no method of transmission over the internet is 100%
        secure.
      </p>

      <h2>7. Children’s Privacy</h2>
      <p>
        Our services are not directed at children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on this page.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, you can contact us
        at: <a href="mailto:info@nitkkr.ac.in">info@nitkkr.ac.in</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
