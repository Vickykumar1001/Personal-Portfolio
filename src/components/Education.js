import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp2.png";
import icon1 from "../assets/img/nit-logo.png";
import icon2 from "../assets/img/st-mary.jpg";
import icon3 from "../assets/img/icse-board.png";
import "animate.css";
export const Education = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="education-bx ">
              <h2>Education</h2>
              <Container>
                <Row
                  className="education-list"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Col xs={4} md={4} xl={2}>
                    <img className="logo" src={icon1} alt="college-icon"></img>
                  </Col>
                  <Col xs={8} md={8} xl={10}>
                    <h3>National Institute of Technology , Mizoram</h3>
                    <ul>
                      <li>
                        Bachelor of Technology in Electronics and Communication
                        Engineering
                      </li>
                      <li>December 2021 - May 2025*</li>
                      <li>
                        CGPA: 9.32 (upto 5<sup>th</sup> Sem)
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

                <Row
                  className="education-list"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  <Col xs={4} md={4} xl={2}>
                    <img className="logo" src={icon2} alt="school-icon"></img>
                  </Col>
                  <Col xs={8} md={8} xl={10}>
                    <h3>St. Mary's English High School, Jamshedpur</h3>
                    <ul>
                      <li>XII CBSE Board</li>
                      <li>
                        Physics, Chemistry, Mathematics and Computer Science
                      </li>
                      <li>April 2019 - May 2021</li>
                      <li>Grade: 90.8%</li>
                    </ul>
                  </Col>
                </Row>
                <hr
                  className={
                    isHovered2
                      ? "animate__animated animate__bounceInLeft visible"
                      : "hide"
                  }
                />
                <Row
                  className="education-list"
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                >
                  <Col xs={4} md={4} xl={2}>
                    <img className="logo" src={icon3} alt="school-icon"></img>
                  </Col>
                  <Col xs={8} md={8} xl={10}>
                    <h3>Ramakrishna Vivekananda Vidyapith School, Ghatshila</h3>
                    <ul>
                      <li>X CICSE Board</li>
                      <li>March 2019</li>
                      <li>Grade: 87.4%</li>
                    </ul>
                  </Col>
                </Row>
                <hr
                  className={
                    isHovered3
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
