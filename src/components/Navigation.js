import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const Navi = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-dark">
      <Navbar
        expand="lg"
        className={
          scrolled ? "p-1 scrolled bg-body-primary" : "bg-body-primary"
        }
      >
        <Container className="">
          <Navbar.Brand href="#home">
            <b className="text-white">MyPortfolio</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <div className="d-flex justify-content-around align-items-center">
                <div>
                  <Nav.Link
                    href="#home"
                    className={
                      activeLink === "home"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onclick={() => {
                      onUpdateActiveLink("home");
                    }}
                  >
                    Home
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link
                    href="#skills"
                    className={
                      activeLink === "skills"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onclick={() => {
                      onUpdateActiveLink("skills");
                    }}
                  >
                    Skills
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link
                    href="#project"
                    className={
                      activeLink === "project"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onclick={() => {
                      onUpdateActiveLink("projects");
                    }}
                  >
                    Projects
                  </Nav.Link>
                </div>
              </div>
            </Nav>
            <span className="social-text">
              <div className="navbar-text d-flex align-items-center">
                {/* <DropdownButton
                  id="data-bs-dark"
                  title="Language"
                  // className="connect-btn"
                  className="text-white"
                  data-bs-theme="dark"
                  variant="secondary"
                >
                  <Dropdown.Item href="#/action-2" >French</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">French</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">German</Dropdown.Item>
                </DropdownButton> */}
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/jatinbhasin1/" className="btn m-1">
                    <i class="bi bi-linkedin text-white"></i>
                  </a>
                  <a href="https://github.com/jatindecoded" className="btn m-1">
                    <i class="bi bi-github text-white"></i>
                  </a>
                  <a href="https://twitter.com/jatyyn" className="btn m-1">
                    <i class="bi bi-twitter text-white"></i>
                  </a>
                </div>
                <a
                  className="connect-btn"
                  // style={{color:"white"}}
                  href="#contact"
                  // onClick="#project"
                  // onClick={() => {
                  //   console.log("connecting");
                  // }}
                >
                  <span>Let's Connect</span>
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
