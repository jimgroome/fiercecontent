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
    <div className='section section4'>
      <Container>
        <Row>
          <Col xs='12' md={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <CardTitle tag='h2' className='section-title'>
                  What gets me fired up?
                </CardTitle>
                <CardText tag='div'>
                  <p>
                    Great work! Collaborating should be fun, energising and
                    inspiring. We&rsquo;re here for a good time, not a long
                    time!
                  </p>
                  <p>
                    Let&rsquo;s put some amazing ideas together... then get home
                    to our families. It&rsquo;s all about balance.
                  </p>
                  <p>
                    Can we build in a function to pull through introductions to
                    a couple of blogs here, the full versions of which will be
                    hosted on a separate page?
                  </p>
                </CardText>
                <Button color='primary'>Connect with me on LinkedIn</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
