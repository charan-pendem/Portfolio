import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, my name is{" "}
              <span className="yellow">Pendem Charan</span> and I’m from{" "}
              <span className="yellow">Chirala, India.</span>
              <br />
              <br />
              I am currently pursuing my Bachelor’s degree in{" "}
              <span className="yellow">
                Computer Science and Engineering (2022 – 2026).
              </span>
              <br />
              <br />
              I am passionate about building scalable and efficient web
              applications and enjoy solving challenging problems through
              code.
              <br />
              <br />
              I work primarily as a{" "}
              <b className="yellow">Full-Stack Developer</b> with strong
              foundations in{" "}
              <b className="yellow">JavaScript, Python, and Java</b>, and I am
              comfortable working across both frontend and backend systems.
              <br />
              <br />
              I enjoy developing applications using{" "}
              <b className="yellow">Node.js, Express.js, MongoDB</b>, and modern
              frontend libraries such as{" "}
              <b className="yellow">React.js</b>.
              <br />
              <br />
              Alongside development, I actively practice{" "}
              <b className="yellow">Data Structures and Algorithms</b> and
              participate in competitive programming to strengthen my problem
              solving skills.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={LaptopImg}
                className="img-fluid"
                alt="developer illustration"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to connect with me on these platforms.
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/charan-pendem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/charan-pendem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Charan_Pendem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
 