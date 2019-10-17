import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
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
                    inspiring. We&rsquo;re here for a good time, not a long
                    time!
                  </p>
                  <p>
                    Let&rsquo;s put some amazing ideas together... then get home
                    to our families. It&rsquo;s all about balance.
                  </p>
                </CardText>
                <Button color="primary">Give me a roar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
