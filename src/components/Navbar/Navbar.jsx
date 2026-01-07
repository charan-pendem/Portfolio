import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          Charan
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome /> Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/skillset"
              onClick={() => updateExpanded(false)}
            >
              <GiSkills /> Skillset
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen /> Projects
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument /> Resume
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineContacts /> Get in Touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
