import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import netflix from "../assets/img/projects/netflix.png";
import todo from "../assets/img/projects/todolist.png";
import drawing from "../assets/img/projects/drawing.png";
import drumkit from "../assets/img/projects/drumkit.png";
import imageeditor from "../assets/img/projects/imageeditor.png";
import keeper from "../assets/img/projects/keeper.png";
import memorygame from "../assets/img/projects/memorygame.png";
import piano from "../assets/img/projects/piano.png";
import profile from "../assets/img/projects/profile.png";
import quote from "../assets/img/projects/quote.png";
import secret from "../assets/img/projects/secret.png";
import simon from "../assets/img/projects/simon.png";
import snake from "../assets/img/projects/snake.png";
import tictac from "../assets/img/projects/tictac.png";
import typing from "../assets/img/projects/typing.png";
import weather from "../assets/img/projects/weather.png";
import tindog from "../assets/img/projects/tindog.png";
import hyperbole from "../assets/img/projects/hyperbole.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects1 = [
    {
      title: "Profile",
      description: "This is a simple personal portfolio website with a clean and modern design made using HTML and CSS only.",
      skills: "",
      imgUrl: profile,
      source_link:"https://github.com/Vickykumar1001/My-Profile",
      live_link:"https://vickykumar1001.github.io/My-Profile/"
    },
    {
      title: "Hyperbole",
      description: "Hyperbole is a blog page where user can share their daily life, topics of interest etc.",
      skills: "HTML CSS JavaScript Node.js MongoDB",
      imgUrl: hyperbole,
      source_link:"https://github.com/Vickykumar1001/Blog-Page",
      live_link:"https://blog-0app.onrender.com/"
    },
    {
      title: "To Do List",
      description: "With this, users can easily manage their daily tasks and priorities by creating multiple lists for different categories.",
      skills: "HTML CSS JavaScript Node.js MongoDB",
      imgUrl: todo,
      source_link:"https://github.com/Vickykumar1001/To-Do-List",
      live_link:"https://todo-list-5mbr.onrender.com/"
    },
    {
      title: "Secret",
      description: "It is a secret-sharing that allows users to share their secrets anonymously and lighten their burden from heart.",
      skills: "HTML CSS JavaScript Node.js Google-OAuth Google-reCAPTCHA MongoDB",
      imgUrl: secret,
      source_link:"https://github.com/Vickykumar1001/secrets",
      live_link:"https://secrets-0n1q.onrender.com/"
    },
    {
      title: "Netflix-clone",
      description: "The app allows users to browse through a collection of movies and TV shows fetched from the TMDB API, just like the real Netflix.",
      skills: "HTML CSS React.js APIs Firebase",
      imgUrl: netflix,
      source_link:"https://github.com/Vickykumar1001/netflix-clone",
      live_link:"https://netflix-clone-vicky.netlify.app/"
    },
    {
      title: "TinDog",
      description: "Just like Tinder, this is TinDog. It is a single page fully responsive website made using HTML, CSS and Bootstrap.",
      skills: "",
      imgUrl: tindog,
      source_link:"https://github.com/Vickykumar1001/TinDog",
      live_link:"https://vickykumar1001.github.io/TinDog/"
    }
  ]
  const projects2 = [
    {
      title: "Keeper",
      description: "It is a simple yet useful online tool that allows user to take and organize notes with a clean and minimalistic interface.",
      skills: "HTML CSS React.js",
      imgUrl: keeper,
      source_link:"https://github.com/Vickykumar1001/notes",
      live_link:"https://vickykumar1001.github.io/notes/"
    },{
      title: "Weather",
      description: "This is a simple web application that provides weather information for a specified location.",
      skills: "HTML CSS JavaScript OpenWeatherMap API",
      imgUrl: weather,
      source_link:"https://github.com/Vickykumar1001/Weather",
      live_link:"https://vickykumar1001.github.io/Weather/"
    },{
      title: "Image-Editor",
      description: "This a simple web-based image editor that allows them to upload an image and apply various filters and effects to it.",
      skills: "HTML CSS JavaScript Canvas",
      imgUrl: imageeditor,
      source_link:"https://github.com/Vickykumar1001/Image-Editor",
      live_link:"https://vickykumar1001.github.io/Image-Editor/"
    },{
      title: "White-Board",
      description: "This an online whiteboard application that allows users to draw, write using a variety of tools such as pens, erasers, and shapes.",
      skills: "HTML CSS JavaScript Canvas",
      imgUrl: drawing,
      source_link:"https://github.com/Vickykumar1001/White-Board",
      live_link:"https://vickykumar1001.github.io/White-Board/"
    },{
      title: "Random-Quote-Generator",
      description: "This generates random quotes for users to read and is a fun and easy way to get a daily dose of inspiration or motivation.",
      skills: "HTML CSS JavaScript API",
      imgUrl: quote,
      source_link:"https://github.com/Vickykumar1001/Random-Quote-Generator",
      live_link:"https://vickykumar1001.github.io/Random-Quote-Generator/"
    },{
      title: "Typing-Speed",
      description: "The app allows users to practice their typing skills. It keeps track of users words per minute and accuracy, providing immediate feedback on the progress.",
      skills: "HTML CSS JavaScript",
      imgUrl: typing,
      source_link:"https://github.com/Vickykumar1001/Typing-Speed",
      live_link:"https://vickykumar1001.github.io/Typing-Speed/"
    }]
    const projects3 = [
      {
      title: "Snake Game",
      description: "It is a classic arcade game that involves controlling a snake as it moves around the screen, eating food and growing in length while avoiding obstacles.",
      skills: "HTML CSS JavaScript Canvas",
      imgUrl: snake,
      source_link:"https://github.com/Vickykumar1001/snake-game",
      live_link:"https://vickykumar1001.github.io/snake-game/"
    },
    {
      title: "Memory Card Game",
      description: "It is a fun and challenging game that involves flipping over cards to reveal hidden images and then trying to match pairs of cards with identical images.",
      skills: "HTML CSS JavaScript",
      imgUrl: memorygame,
      source_link:"https://github.com/Vickykumar1001/Memory-card-game",
      live_link:"https://vickykumar1001.github.io/Memory-card-game/"
    },
    {
      title: "Simon-Game",
      description: " is a classic game which involves repeating a series of colored button presses in the correct order to progress through the levels.",
      skills: "HTML CSS JavaScript",
      imgUrl: simon,
      source_link:"https://github.com/Vickykumar1001/Simon-Game",
      live_link:"https://vickykumar1001.github.io/Simon-Game/"
    },
    {
      title: "Tic Tac Toe",
      description: "It is an online version of the classic pen-and-paper game with the goal of getting three of their symbols in a row, either horizontally, vertically, or diagonally.",
      skills: "HTML CSS JavaScript",
      imgUrl: tictac,
      source_link:"https://github.com/Vickykumar1001/tic-tac-toe",
      live_link:"https://vickykumar1001.github.io/tic-tac-toe/"
    },
    {
      title: "Piano",
      description: "It is an online virtual piano that allows users to play melodies and chords using computer keyboard.",
      skills: "HTML CSS JavaScript",
      imgUrl: piano,
      source_link:"https://github.com/Vickykumar1001/Piano",
      live_link:"https://vickykumar1001.github.io/Piano/"
    },{
      title: "Drum-Kit",
      description: "It is an online virtual drum kit that allows user to play music using computer keyboard or mouse.",
      skills: "HTML CSS JavaScript",
      imgUrl: drumkit,
      source_link:"https://github.com/Vickykumar1001/Drum-Kit",
      live_link:"https://vickykumar1001.github.io/Drum-Kit/"
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Featured</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Games</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background img"></img>
    </section>
  )
}
