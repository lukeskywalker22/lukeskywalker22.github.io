import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/contactform";
import React from "react";

const Layout = () => {
  const bottomRef = React.useRef();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const contact = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`nav-container ${isMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <ul className="navlinks">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Achievements
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Gallery
              </NavLink>
            </li> */}

            {/* <li>
              <NavLink
                to="/socials"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Socials
              </NavLink>
            </li> */}

            <button className="contactbutton" onClick={contact}>
              Contact Me
            </button>
          </ul>
        </div>
      </nav>

      <Outlet className="outlet" />

      <div className="footer" ref={bottomRef}>
        <ContactForm />
        <p>Developed in ReactJS by Luke Yeo</p>
        <p>Last updated 27/11/24</p>
      </div>
    </div>
  );
};

export default Layout;
