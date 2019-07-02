import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import Carousel from "./Carousel";

const Section3 = () => {
  return (
    <div className='section section3'>
      <Container>
        <Row>
          <Col xs='12' md={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <CardTitle tag='h2' className='section-title'>
                  Who am I?
                </CardTitle>
                <CardText tag='div'>
                  <p>
                    Chelsea Groome: Fierce Content founder and experienced B2B
                    &amp; B2C copywriter.
                  </p>
                  <p>
                    I&rsquo;ve created content for big-name blue chips and
                    ambitious start-up brands alike, and partnered with many
                    agencies along the way. After 10+ years in the business, I
                    know that everybody has a story to tell; it&rsquo;s my job
                    to get the words right.
                  </p>
                  <Carousel />
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

export default Section3;
