import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SocialLinks } from "../../Assets/constants";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and over the years, I've built a strong foundation in various technologies.
              <br />
              <br />
              I am fluent in languages like
              <i>
                <b className="purple"> Python, JavaScript, and Go, </b>
              </i>
              with expertise in
              <i>
                <b className="purple"> DevOps </b>
              </i>
              practices such as
              <i>
                <b className="purple"> AWS, Jenkins, CICD, Kubernetes, and Terraform. </b>
              </i>
              <br />
              <br />

              My professional interests revolve around creating robust products, particularly excelling in developing secure
              <i>
                <b className="purple"> API-driven solutions and microservices architectures.</b>
              </i>

              <br />
              <br />
              Whenever possible, I apply my passion for development by integrating backend technologies such as
              <i>
                <b className="purple"> Python, FastAPI, Django, and Cloud Services </b>
              </i>
              to build scalable and intuitive applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={SocialLinks.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SocialLinks.x}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SocialLinks.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SocialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
