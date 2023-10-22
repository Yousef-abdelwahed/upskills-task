/** @format */
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import chif from "../assets/img/chif.png";
import Title from "../Components/Title/Title";
import ContactBtn from "../Components/ContactBtn";
import "../styles/about.scss";
const About = () => {
  return (
    <section id="about-section" className="about-section m-0 p-3">
      <Container>
        <Row className="justify-content-end">
          <Col md={8} xs={8} className="about-title  ">
            <article>
              <Title title={"about"} subTitle={"us"} styleColor={true} />
              <div className="about-article ">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </article>
            <ContactBtn />
          </Col>
          <Col md={4} xs={4} className="about-img">
            <Image src={chif} className="w-100"></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
