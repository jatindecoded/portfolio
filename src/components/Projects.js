import React from "react";
import { Row, Col, Container, Nav, TabContainer, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
import img4 from "../assets/p4.png";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";


import TrackVisibility from "react-on-screen"
import  colorSharp2 from "../assets/imeei.jpeg";

export const Projects = () => {
  const projects = [
    {
      title: "CryptoWave 🚀",
      description: "Your Gateway to the World of Digital Currency and Financial Empowerment",
      imgurl: img1,
    },
    {
      title: "CryptoWave 🚀",
      description: "Your Gateway to the World of Digital Currency and Financial Empowerment",
      imgurl: img2,
    },
    {
      title: "CryptoWave 🚀",
      description: "Your Gateway to the World of Digital Currency and Financial Empowerment",
      imgurl: img3,
    },
    {
      title: "CryptoWave 🚀",
      description: "Your Gateway to the World of Digital Currency and Financial Empowerment",
      imgurl: img4,
    },
  ];
  const projects2 = [
    {
      title: "Whatsapp Chat Inititaor 💬",
      description: "Connect, Chat, and Share with Ease: Empowering Communication through WhatsApp Initiator!",
      imgurl: g1,
    },
    {
      title: "Whatsapp Chat Inititaor 💬",
      description: "Connect, Chat, and Share with Ease: Empowering Communication through WhatsApp Initiator!",
      imgurl: g2,
    },
    {
      title: "Whatsapp Chat Inititaor 💬",
      description: "Connect, Chat, and Share with Ease: Empowering Communication through WhatsApp Initiator!",
      imgurl: g3,
    },
  ];
  const projects3 = [
    {
      title: "The UniConnect 👩🏻‍💻",
      description: "Unite, Connect, and Thrive: Discover Your Campus Community with UniConnect, the Ultimate Social Media App!",
      imgurl: f1,
    },
    {
      title: "The UniConnect 👩🏻‍💻",
      description: "Unite, Connect, and Thrive: Discover Your Campus Community with UniConnect, the Ultimate Social Media App!",
      imgurl: f2,
    },
    {
      title: "The UniConnect 👩🏻‍💻",
      description: "Unite, Connect, and Thrive: Discover Your Campus Community with UniConnect, the Ultimate Social Media App!",
      imgurl: f3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CryptoWave 🚀</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Whatsapp Chat Initiator 💬</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">The UniConnect 👩🏻‍💻</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                url={"https://cryptowaves.netlify.app/"}
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
                                url = {"https://jatindecoded.github.io"}
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
                                url = {"https://github.com/jatindecoded/uniconnect"}
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    // <section className="project" id="project">
    //   <Container>
    //     <Row>
    //       <Col>
    //         <h2>Projects</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
    //           minus praesentium asperiores impedit corrupti nemo sint. Quas
    //           error obcaecati debitis provident incidunt sit minima neque
    //           accusantium mollitia, deserunt veritatis cum ullam animi porro
    //           reiciendis voluptatibus ut. Veritatis molestiae similique
    //           pariatur.
    //         </p>
    //         <Tab.Container id="projects-tab" defaultActiveKey="first">
    //           <Nav variant="pills" defaultActiveKey="first" className="">
    //             <Nav.Item>
    //               <Nav.Link eventKey="first">Business Startup Project</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link eventKey="second">
    //                 Business Startup Project
    //               </Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link eventKey="third">Business Startup Project</Nav.Link>
    //             </Nav.Item>
    //           </Nav>
    //           <br></br>
    //           <Tab.Content className="">
    //             {/* a */}
    //             <Tab.Pane eventKey="first">
    //               <Row>
    //                 {projects.map((project, index) => {
    //                   return (
    //                     <ProjectCard key={index} {...project}></ProjectCard>
    //                   );
    //                 })}
    //               </Row>
    //             </Tab.Pane>
                
    //             <Tab.Pane eventKey="second">
    //               <Row>
    //                 {projects.map((project, index) => {
    //                   return (
    //                     <ProjectCard key={index} {...project}/>
    //                   );
    //                 })}
    //               </Row>
    //             </Tab.Pane>
    //             <Tab.Pane eventKey="third">
    //               <Row>
    //                 {projects.map((project, index) => {
    //                   return (
    //                     <ProjectCard key={index} {...project}></ProjectCard>
    //                   );
    //                 })}
    //               </Row>
    //             </Tab.Pane>
    //           </Tab.Content>
    //         </Tab.Container>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
  );
};

// export default Projects
