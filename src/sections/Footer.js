import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// library.add(faEnvelope, faTwitter, faLinkedin);

// import {
//   faEnvelope,
//   faLinkedIn,
//   faTwitter
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container fluid>
        <Row>
          <Col xs='8'>
            <p>&copy; 2019 Fierce Content</p>
          </Col>
          <Col xs='4'>
            <p className='text-right'>
              <a
                href='mailto:chelsea@fierce-content.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>{" "}
              <a
                href='https://uk.linkedin.com/company/fierce-content'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>{" "}
              <a
                href='https://twitter.com/fierce_content'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
