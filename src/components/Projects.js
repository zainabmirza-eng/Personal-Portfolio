import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/movie.png";
import projImg2 from "../assets/img/Barz.png";
import projImg3 from "../assets/img/Shopping.png";
import projImg4 from "../assets/img/shopping2.png";
import projImg5 from "../assets/img/barz2.png";
import projImg6 from "../assets/img/task.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg7 from "../assets/img/rice 2.png";
import projImg8 from "../assets/img/house key.png";
import projImg9 from "../assets/img/SC.png";
import projImg10 from "../assets/img/Asleef.png";
import projImg11 from "../assets/img/raparin.png";
import projImg12 from "../assets/img/Alseef2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    { title: "CinaDeLuna", description: "Design & Development", imgUrl: projImg1 },
    { title: "Barz Private School", description: "Design & Development", imgUrl: projImg2 },
    { title: "Shopping Cart Website", description: "Design & Development", imgUrl: projImg3 },
    { title: "Todo List", description: "Design & Development", imgUrl: projImg6 },
    { title: "Barz Private School", description: "Design & Development", imgUrl: projImg5 },
    { title: "Shopping Cart Website", description: "Design & Development", imgUrl: projImg4 }
  ];

  const projects2 = [
    { title: "Rice Company", description: "Design", imgUrl: projImg7 },
    { title: "Real Estate", description: "Design", imgUrl: projImg8 },
    { title: "Barz School", description: "Design", imgUrl: projImg9 },
    { title: "Agency", description: "Design", imgUrl: projImg10 },
    { title: "Barz School", description: "Design", imgUrl: projImg11 },
    { title: "Agency", description: "Design", imgUrl: projImg12 }
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
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* Websites */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Resume Download Button */}
                    <Tab.Pane eventKey="second" className="text-center">
                      <h3>Download My Resume</h3>
                      <p>Click the button below to download my latest resume.</p>
                      <Button className="resume-button" href="/Zainab-Mirza-Fattah.pdf" download>
                      Download Resume
                      </Button>

                    </Tab.Pane>

                    {/* GitHub Projects */}
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projects2.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
}
