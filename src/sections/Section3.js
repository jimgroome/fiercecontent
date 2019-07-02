import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Section3 = () => {
  return (
    <div className='section section3'>
      <Container>
        <Row>
          <Col>
            <h2 className='section-title'>Who am I?</h2>
            <p>
              Chelsea Groome: Fierce Content founder and experienced B2B &amp;
              B2C copywriter.
            </p>
            <p>
              I&rsquo;ve created content for big-name blue chips and ambitious
              start-up brands alike, and partnered with many agencies along the
              way. After 10+ years in the business, I know that everybody has a
              story to tell; it&rsquo;s my job to get the words right.
            </p>
            <p>
              [Verifone, Doddle, Intel, Microsoft, Mercedes-Benz, MotorSport
              Vision, Autosport International, SAP, ShopperTrak]
            </p>
            <p className='text-center'>
              <Button>Connect with me on LinkedIn</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
