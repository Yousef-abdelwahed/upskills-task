/** @format */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import "../styles/nav.scss";
import { Col, Row } from "react-bootstrap";

const NavComponent = () => {
  return (
    <div className="d-flex  w-100">
      <Navbar className="nav-section px-5 ">
        <Container className="mx-5">
          <Row className=" px-5  ">
            <Col md={12}>
              <Navbar.Brand className="nav-link" href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                Peachy Pup <span style={{ display: "block" }}>Bakery</span>
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
      {/* <section className="second-section"></section> */}
    </div>
  );
};

export default NavComponent;
