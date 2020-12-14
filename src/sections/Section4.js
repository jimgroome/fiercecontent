import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Section4 = () => {
  return (
    <div className="section section4">
      <Container>
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <CardTitle tag="h2" className="section-title">
                  What gets me fired up?
                </CardTitle>
                <CardText tag="div">
                  <p>
                    Great work! Collaborating should be fun, energising and
                    inspiring.
                  </p>
                  <p>
                    Let&rsquo;s put some amazing ideas together... then get home
                    to our families. It&rsquo;s all about balance.
                  </p>
                </CardText>
                <p className="text-center">
                  <a
                    className="btn btn-primary"
                    href="mailto:chelsea@fierce-content.com"
                  >
                    Give me a roar
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
