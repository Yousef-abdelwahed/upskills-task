/** @format */

// import { nanoid } from "nanoid";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../styles/testimonials.scss";
import ContactBtn from "../Components/ContactBtn";
import { nanoid } from "nanoid";
import { useState } from "react";
const Testimonials = () => {
  let arr = [];
  const text = {
    title: "Kathryn Murphy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble",
  };
  for (let i = 0; i < 4; i++) {
    arr.push(text);
  }
  return (
    <section className="testy-section">
      <Container>
        <h2 className="title mb-4">testimonials</h2>
        <Row className="justify-content-center">
          {arr.map((el) => {
            return (
              <>
                <Col
                  md={4}
                  xs={12}
                  className="testy-card mb-4 mx-3"
                  key={nanoid()}
                >
                  <div className="testy-content" key={nanoid()}>
                    <h4>{el.title}</h4>
                    <p>{el.text}</p>
                    <div className="testy-stars  ">
                      <FontAwesomeIcon icon={faStar} className="mx-1" />
                      <FontAwesomeIcon icon={faStar} className="mx-1" />
                      <FontAwesomeIcon icon={faStar} className="mx-1" />
                      <FontAwesomeIcon icon={faStar} className="mx-1" />
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
          <ContactBtn />
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
