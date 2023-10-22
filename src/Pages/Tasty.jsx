/** @format */

import { Col, Container, Row } from "react-bootstrap";
import Title from "../Components/Title/Title";
import ContactBtn from "../Components/ContactBtn";
import burger from "../assets/img/burger.png";
import quality from "../assets/img/quality.svg";
import "../styles/tasty.scss";
const Tasty = () => {
  return (
    <>
      <div className="d-flex tasty-box  ">
        <section className="tasty-section p-2 ">
          <Container className="mb-5">
            <Row className="justify-content-center align-items-center">
              <Col md={8} className=" tasty-title m-auto">
                <article className="">
                  <div>
                    <Title
                      className="mt-0"
                      title={"Tasty"}
                      subTitle={"pastries"}
                      styleColor={true}
                    ></Title>
                  </div>
                  <div className="tasty-info">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                  </div>
                </article>
                <div className="tasty-btn">
                  <ContactBtn />
                </div>
              </Col>
              <Col className="tasty-img">
                <img src={burger} className="w-100"></img>
                <div className="quality-img">
                  <img src={quality} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="second-section"></section>
      </div>
    </>
  );
};

export default Tasty;
