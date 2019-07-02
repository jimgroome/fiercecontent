import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container fluid>
        <Row>
          <Col>
            <p>
              Footer with my email address, links to Twitter and LinkedIn pages
              and copyright details
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
