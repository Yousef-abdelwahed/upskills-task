/** @format */

import { Col, Container, Row } from "react-bootstrap";
import Title from "../Components/Title/Title";
import Image from "react-bootstrap/Image";
import work1 from "../assets/img/work1.png";
import work2 from "../assets/img/work2.png";
import work3 from "../assets/img/work3.png";
import work4 from "../assets/img/work4.png";
import { useEffect, useState } from "react";
import ContactBtn from "../Components/ContactBtn";

import "../styles/howWork.scss";
const HowWork = () => {
  const [images, setImages] = useState([work1, work2, work3, work4]);

  useEffect(() => {
    setImages(images);
  }, [images]);

  return (
    <section id="work-section" className="work-section ">
      <Container>
        <Row>
          <Col md={8} className="work-title">
            <article>
              <Title title={"how we"} subTitle={"work"} styleColor={true} />
            </article>
          </Col>
          <Col md={4} className="work-info">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </Col>
        </Row>
        <Row className="img-row">
          {images.map((img, index) => {
            return (
              <Col key={index} className="work-img">
                <Image className="w-100" key={index} src={img} rounded />
              </Col>
            );
          })}
        </Row>
        <Row className=" me-auto text-start">
          <div className="contBtn my-4">
            <ContactBtn className="" />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HowWork;
