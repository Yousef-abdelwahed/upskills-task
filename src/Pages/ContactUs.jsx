
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import  "../styles/contactStyle.scss";


const ContactUs = () => {
  return (
    <section id="contact-section" className="contact-section m-auto mb-5">
      <Container className="">

        <Row className="justify-content-center">
        <h2 className="title">Contact US</h2>
                <Col md={6} className="form-part my-4">
            <Form >
            <FloatingLabel controlId="floatingInput" label="Full Name"  className="mb-3"   >
                     <Form.Control size="sm" type="text" placeholder="Full Name" />
                    </FloatingLabel>
                    

                <FloatingLabel controlId="floatingInput" label="Email address"  className="mb-3"   >
                     <Form.Control size="sm" type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhoneNumber" label="Phone Number">
                      <Form.Control size="sm"  type="text" placeholder="Phone Number" />
                    </FloatingLabel>
                    <Button variant="" className="send-btn" type="submit">send</Button>

              </Form>          
                </Col>
                <Col md={6}  className="contact-part">
                 
                  <ul className="text-muted ">
                    <li className="text-start mb-4">
               <span className="icon-message">
                  <FontAwesomeIcon icon={faEnvelope} />     
                </span>                
                        upSkilling.eg1<span className="text-decoration-underline">@gmail.com</span></li>
                    <li>
                    <span className="icon-telephone">
                      <FontAwesomeIcon icon={faPhone} />
                      </span>
                      +20 115 493 2137</li>
                  </ul>
                </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs