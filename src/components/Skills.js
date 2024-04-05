import html from "../assets/img/skills_icons/html.svg";
import css from "../assets/img/skills_icons/CSS.svg";
import bootstrap from "../assets/img/skills_icons/bootstrap.svg";
import js from "../assets/img/skills_icons/javascript.svg";
import react from "../assets/img/skills_icons/react.svg";
import express from "../assets/img/skills_icons/express.png";
import node from "../assets/img/skills_icons/nodejs.svg";
import mongo from "../assets/img/skills_icons/mongoDB.svg";
import cprog from "../assets/img/skills_icons/c-programming.svg";
import cpp from "../assets/img/skills_icons/c++.svg";
import python from "../assets/img/skills_icons/python.svg";
import java from "../assets/img/skills_icons/java.svg";
import git from "../assets/img/skills_icons/git.svg";
import vscode from "../assets/img/skills_icons/vscode.svg";
import postman from "../assets/img/skills_icons/postman.svg";
import firebase from "../assets/img/skills_icons/firebase.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My passion for computer science is matched by my desire to
                constantly learn and grow in the field.<br></br>I have gained a
                strong foundation in various programming languages, including C,
                C++, Java and Python and am polishing my skills on DSA. <br /> I
                have also developed my skills in Web Development both Front End
                and Back End, which has allowed me to create dynamic,
                user-friendly and responsive websites.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                mouseDrag={true}
                touchDrag={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={cprog} alt="C" />
                  <h5>C-programming</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="C++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={js} alt="javascript" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="express" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={node} alt="node" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="mongo" />
                  <h5>MongoDB</h5>
                </div>

                <div className="item">
                  <img src={git} alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={vscode} alt="VScode" />
                  <h5>VS-Code</h5>
                </div>
                <div className="item">
                  <img src={postman} alt="postman" />
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="firebase" />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
