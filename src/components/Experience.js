import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp2.png";
import logo1 from "../assets/img/top-trove-logo.png";
import "animate.css";
export const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx ">
              <h2>Experience</h2>
              <Container>
                <Row
                  className="experience-list"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Col xs={4} md={4} xl={2}>
                    <img className="logo" src={logo1} alt="college-icon"></img>
                  </Col>
                  <Col xs={8} md={8} xl={10}>
                    <h3>Backend Developer Intern</h3>
                    <h5 style={{ color: "#ff059b" }}>TopTrove Foundation</h5>
                    <ul>
                      <li>
                        Developed RESTful API using Node.js to efficiently
                        retrieve student details from database
                      </li>
                      <li>
                        Implemented sorting, filtering and pagination feature
                        for seamless data organization and to enhance user
                        experience.
                      </li>
                      <li>
                        Documented API endpoints and usage guidelines using
                        Swagger UI and Postman for ease of understanding and
                        future maintenance.
                      </li>
                    </ul>
                  </Col>
                </Row>
                <hr
                  className={
                    isHovered
                      ? "animate__animated animate__bounceInLeft visible"
                      : "hide"
                  }
                />
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-right"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
