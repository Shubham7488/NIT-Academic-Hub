import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/main.css"; // Make sure this file has the avatar/dropdown styles

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <div className="logo-text">NIT Kurukshetra</div>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            <i
              className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}
              id="theme-icon"
            ></i>
          </button>

          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="/" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            {["courses", "contact"].map((link) => (
              <li key={link}>
                {location.pathname === "/" ? (
                  <a href={`#${link}`} onClick={(e) => handleScroll(e, link)}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                ) : (
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                )}
              </li>
            ))}

            {!user ? (
              <>
                <li>
                  <Link to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li className="relative" ref={dropdownRef}>
                <div onClick={() => setDropdownOpen(!dropdownOpen)}>
                  {user.photo ? (
                    <img
                      src={user.photo}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow cursor-pointer"
                    />
                  ) : (
                    <div className="navbar-avatar">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {dropdownOpen && (
                  <div className="profile-dropdown">
                    <div className="dropdown-header">
                      {user.photo ? (
                        <img
                          src={user.photo}
                          alt="user"
                          className="w-12 h-12 rounded-full border border-white"
                        />
                      ) : (
                        <div className="navbar-avatar large">
                          {user.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <p className="username">Hi, {user.name}</p>
                    </div>

                    <div className="dropdown-links">
                      <button
                        className="dropdown-link logout"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )}

            <li>
              <Link
                to="/ai-assistant"
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                🤖 AI Assistant
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
