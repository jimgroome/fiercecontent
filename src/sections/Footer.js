import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container fluid>
        <Row>
          <Col xs='8'>
            <p>&copy; 2019 Fierce Content</p>
          </Col>
          <Col xs='4'>
            <ul className='text-right list-inline'>
              <li className='list-inline-item'>
                <a
                  href='mailto:chelsea@fierce-content.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://uk.linkedin.com/company/fierce-content'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://twitter.com/fierce_content'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>{" "}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
