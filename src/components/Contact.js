import React from "react";
import { Row, Col, Container, Nav, TabContainer, Tab } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import emailjs from "@emailjs/browser";
import con from "../assets/con.png";

export const Contact = () => {
  const formi = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_9c9czla",
        "template_w7wghba",
        formi.current,
        "WStbEloGD25Fy6CSU"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log("sent")
        },
        (error) => {
          // show the user an error
          console.log(error)
        }

      );
  };

  const initialformdetails = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    msg: "",
  };
  const [formdetails, setFormdetails] = useState(initialformdetails);
  const [buttontext, setButtontext] = useState("Send");
  const [status, setStatus] = useState({});

  const handlesubmit = async (e) => {
    e.preventDefault();
    setButtontext("Sending...");
    let response = await fetch("https://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formdetails),
    });
    setButtontext("Send");
    let result = response.json();
    setFormdetails(initialformdetails);
    if (result.code == 200) {
      setStatus({ success: true, message: "Message sent" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, try again.",
      });
    }
  };

  const onFormUpdate = (category, value) => {
    // event.preventDefault()
    setFormdetails({
      ...formdetails,
      [category]: value,
    });
  };
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            {/* <i class="bi bi-telephone"></i> */}
            <img src={con} alt="contact img" />
          </Col>
          <Col md={6}>  
            <h2>Get in Touch, now!</h2>
            
            <form ref={formi} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    name="fname"
                    type="text"
                    value={formdetails.fname}
                    placeholder="First Name"
                    onChange={(e) => {
                      e.preventDefault();
                      onFormUpdate("fname", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                  name="lname"
                    type="text"
                    value={formdetails.lname}
                    placeholder="Last Name"
                    onChange={(e) => {
                      e.preventDefault();
                      onFormUpdate("lname", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                  name="phone"
                    type="text"
                    value={formdetails.phone}
                    placeholder="Phone"
                    onChange={(e) => {
                      e.preventDefault();
                      onFormUpdate("phone", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                  name="email"
                    type="text" 
                    value={formdetails.email}
                    placeholder="Email Address"
                    onChange={(e) => {
                      e.preventDefault();
                      onFormUpdate("email", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                  name="msg"
                    type="text"
                    value={formdetails.msg}
                    placeholder="Message"
                    onChange={(e) => {
                      e.preventDefault();
                      onFormUpdate("msg", e.target.value);
                    }}
                  ></input>
                  <button type="submit">
                    <span>{buttontext}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
