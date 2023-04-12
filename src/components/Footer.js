import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center">
        <Row>
          <Col sm={12} md={4} className="text-center">
           <a href="home"><img src={logo} alt="Logo" /> </a>
          </Col>
          <Col sm={12} md={4} ><p className="glow">Vicky Kumar</p></Col>
          <Col sm={12} md={4} className="text-center">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/vicky-kumar1001/"><img src={navIcon1} alt="linkedin" /></a>
            <a href="https://github.com/Vickykumar1001"><img src={navIcon2} alt="github" /></a>
            <a href="https://www.instagram.com/vicky_kumar1001/"><img src={navIcon3} alt="instagram" /></a>
            <a href="https://twitter.com/Vicky_Kumar1001"><img src={navIcon4} alt="twitter" /></a>
            </div>
          </Col>
        </Row>
        
      </Container>
    </footer>
  )
}
