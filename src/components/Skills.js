import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
      <Container className="">
        <Row>
          <Col>
            <div className="skill-bx ">
              <h2>Skills</h2>
              <p>
              I possess a diverse skill set encompassing languages such as C/C++, HTML/CSS, JavaScript, and SQL, along with expertise in frameworks like React and Bootstrap. Additionally, I am well-versed in utilizing developer tools such as Firebase Database, Git, and Terminal, and I have a strong understanding of graphic design and UI/UX design principles. With these skills, I am equipped to handle a wide range of development projects, delivering impactful solutions that combine functionality, aesthetics, and a seamless user experience.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}

                // draggable
                className="m-4 skill-slider w-100"
              >
                <div className="item">
                  <div className="progress-bar-container item  d-flex justify-content-around">
                    <div class="progress-bar html ">
                      <progress
                        id="css"
                        min="0"
                        max="100"
                        value="87"
                      ></progress>
                    </div>
                  </div>
                  <h5 className="m-4 text-white font-weight-bold">HTML</h5>
                </div>
                <div className="item">
                  <div className="progress-bar-container item  d-flex justify-content-around">
                    <div class="progress-bar cpp ">
                      <progress
                        id="cpp"
                        min="0"
                        max="100"
                        value="97"
                      ></progress>
                    </div>
                  </div>
                  <h5 className="m-4 text-white font-weight-bold">C++</h5>
                </div>
                <div className="item">
                  <div className="progress-bar-container item  d-flex justify-content-around">
                    <div class="progress-bar sql ">
                      <progress
                        id="cpp"
                        min="0"
                        max="100"
                        value="82"
                      ></progress>
                    </div>
                  </div>
                  <h5 className="m-4 text-white font-weight-bold">SQL</h5>
                </div>
                <div className="item">
                  <div className="progress-bar-container item  d-flex justify-content-around">
                    <div class="progress-bar python ">
                      <progress
                        id="python"
                        min="0"
                        max="100"
                        value="97"
                      ></progress>
                    </div>
                  </div>
                  <h5 className="m-4 text-white font-weight-bold">Python</h5>
                </div>
                <div className="item">
                  <div className="progress-bar-container item  d-flex justify-content-around">
                    <div class="progress-bar css ">
                      <progress
                        id="css"
                        min="0"
                        max="100"
                        value="87"
                      ></progress>
                    </div>
                  </div>
                  <h5 className="m-4 text-white font-weight-bold">CSS</h5>
                </div>
                <div className="item">
                  <div className="progress-bar-container item  d-flex justify-content-around">
                    <div class="progress-bar js ">
                      <progress
                        id="css"
                        min="0"
                        max="100"
                        value="87"
                      ></progress>
                    </div>
                  </div>
                  <h5 className="m-4 text-white font-weight-bold">
                    JavaScript
                  </h5>
                </div>
                <div className="item">
                  <div className="progress-bar-container item  d-flex justify-content-around">
                    <div class="progress-bar react">
                      <progress
                        id="css"
                        min="0"
                        max="100"
                        value="87"
                      ></progress>
                    </div>
                  </div>
                  <h5 className="m-4 text-white font-weight-bold">ReactJS</h5>
                </div>
                {/* <div className="item">
                  <img src={""} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={""} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={""} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={""} alt="Image" />
                  <h5>Web Development</h5>
                </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
