import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import astroimg from "../assets/astro.png";
import shape from "../assets/shapes.png";

export const Banner = () => {
  const [Loopno, setLoopno] = useState(0);
  const toRotate = [
    " Web Developer",
    " Python Developer",
    " UI/UX Designer",
    "n Undergrad at NSIT",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);
  const [text, setText] = useState("");
  const [Pt, setPt] = useState("");
  const period = 150;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  useEffect(() => {
    let dotter = setInterval(() => {
      dot();
    }, 150);

    return () => {
      clearInterval(dotter);
    };
  }, [Pt]);
  let x = 0;
  const dot = () => {
    x = 1 - x;
    if (x === 1) {
      setPt("|");
    } else {
      setPt(" ");
    }
  };
  const tick = () => {
    let i = Loopno % toRotate.length;
    let fulltext = toRotate[i];

    let updatedtext = isDeleting
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);
    setText(updatedtext);

    // if (isDeleting) {
    if (delta === 2000) {
      setDelta(period);
    }
    setDelta((prevdelta) => {
      return prevdelta / 1.09;
    });

    // }
    // if (isDeleting) {
    //     setDelta(prevdelta => prevdelta/2)
    // }
    // if (updatedtext === fulltext)
    // {
    //     let w = 0
    //     let dotter = setInterval(() => {
    //         Dot();
    //     }, period);
    //     let og = fulltext
    //     const Dot = () =>{
    //         if (w===7){
    //             clearInterval(dotter)
    //         }
    //         // console.log("dotter");
    //         if (w%2 === 0){
    //             // let ut = text+"."
    //             // console.log(og)
    //             setPt("|")
    //         }
    //         else{
    //             setPt("")
    //         }
    //         w+=1
    //     }
    // }
    if (!isDeleting && updatedtext === fulltext) {
      setIsDeleting(true);
      setDelta(2000);
      // if (i===10)
      // {
      //     clearInterval(dotter)
      // }
      // Dot();
      // setInterval(() => {
      //     console.log("hlp")
      // }, 2000);
    } else if (isDeleting && updatedtext === "") {
      setIsDeleting(false);
      setLoopno(Loopno + 1);
      setDelta(period);
    }
  };

  return (
    <section className="banner " id="home">
      <Container className="p-4 ">
        <Row className="align-items-center justify-content-center d-flex">
          <Col xs={12} md={6} xl={7}>
            <div className=" justify-content-center">
              <div className="tagline">Welcome to My Portfolio!</div>
              <div>
                <h1 className="text-start">
                  {"Hi! I'm Jatin,"}
                  <br></br>
                  <div>
                    <span className="wrap">
                      a{text}
                      <span className="text-secondary">{Pt} </span>
                    </span>
                  </div>
                </h1>
                <p>
                  Welcome to my portfolio website! I'm Jatin Bhasin, a passionate
                  developer who thrives on pushing technological boundaries.
                  Explore my collection of innovative projects that showcase my
                  commitment to excellence in web and mobile development. Join me
                  on this journey as I transform complex ideas into elegant,
                  user-centric solutions. Let's embark on a digital adventure
                  together!
                </p>
              </div>
              <div>
                <a href="#contact">
                  <button
                    className="btn btn-secondary m-auto my-4"
                    onClick={() => {
                      console.log("connecting in banner");
                    }}
                  >
                    Connect
                  </button>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="imgparent">
              <img
                src={shape}
                alt="alternative header image"
                className="image1"
              />
              
              <img
                src={astroimg}
                alt="alternative header image"
                className="image2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// export default Banner;
