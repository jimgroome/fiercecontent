import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardText
} from "reactstrap";

const Section1 = () => {
  return (
    <div className="section section1">
      <Container>
        <Row>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/fierce-content-logo-square.png"}
              alt="Fierce Content"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="site-title">Fierce Content</h1>
            <p className="site-tagline">
              Strongly worded copy for your business, brand or agency
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <CardText tag="div">
                  <p>
                    Is your tone of voice missing true personality? Does your
                    content lack that certain sparkle? Do you simply not have
                    the time to write that piece of work you so desperately
                    need?
                  </p>
                  <p>Let me help.</p>
                  <p>
                    Whether you&#39;re a brand, a business or an overstretched
                    agency, I’ll bring 10+ years of B2B and B2C copywriting
                    experience to your table. Let’s get creative!
                  </p>
                </CardText>
                <Button color="primary">Give me a roar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Container>
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <CardText tag="div">
                  <p>
                    Is your tone of voice missing true personality? Does your
                    content lack that certain sparkle? Do you simply not have
                    the time to write that piece of work you so desperately
                    need?
                  </p>
                  <p>Let me help.</p>
                  <p>
                    Whether you&#39;re a brand, a business or an overstretched
                    agency, I’ll bring 10+ years of B2B and B2C copywriting
                    experience to your table. Let’s get creative!
                  </p>
                </CardText>
                <Button color="primary">Give me a roar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Section1;
