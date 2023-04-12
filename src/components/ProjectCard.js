import { Col } from "react-bootstrap";
import extlink from "../assets/img/exit-top-right.png";
import github from "../assets/img/github.png";
export const ProjectCard = ({ title, description, skills, imgUrl, live_link, source_link }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} alt="screenshot" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br/>
          <span className="skill">{skills}</span>
          <div className="icons">
          <a title="Source code" href={source_link} target="_blank" rel="noreferrer"><img className="link-icon" src={github} alt="source-code" /></a>
          <a title="See Live"  href={live_link} target="_blank" rel="noreferrer"><img className="link-icon" src={extlink} alt="live" /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
