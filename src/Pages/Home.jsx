/** @format */

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

//
import vk from "../assets/img/vk.png";
import fb from "../assets/img/fb.png";
import ig from "../assets/img/ig.png";
import tweet from "../assets/img/tweet.png";

import "../styles/home.scss";
import Tasty from "./Tasty";
import NavComponent from "../Components/NavComponent";

const Home = () => {
  const [images, setImages] = useState([vk, fb, ig, tweet]);

  useEffect(() => {
    setImages(images);
  }, [images]);
  return (
    <section className="home-section p-0 ">
      <NavComponent />
      <Tasty />
      <section className="zz p-0 mb-0">
        <Container>
          <Row classNam="flex-nowrap">
            <Col
              className=""
              md={2}
              xs={5}
              classNam="mt-auto"
              style={{ background: "white" }}
            >
              <div className="img-box">
                {images.map((img, index) => {
                  return (
                    //   <Col key={index} className="work-img">
                    <Image
                      className="logo-img mb-4"
                      key={index}
                      src={img}
                      rounded
                    />
                    //   </Col>
                  );
                })}
              </div>
            </Col>
            <Col className="telephone " md={6} xs={6}>
              <p>Telephone:+7 700 000 00 00</p>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Home;
