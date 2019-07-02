import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Section2 = () => {
  return (
    <div className='section section2'>
      <Container>
        <Row>
          <Col>
            <h2 className='section-title'>What are you looking for?</h2>
          </Col>
        </Row>
        <Row>
          <Col xs='12' md='4'>
            <h3>A really good copywriter</h3>
            <img src='/col1-min.jpg' alt='A really good copywriter' />
            <p>
              Got writers&rsquo; block? I&rsquo;ve written over 5.2 million
              words in my career, so I know the good ones by now! Let&rsquo;s
              put them to work across:{" "}
            </p>
            <ul>
              <li>Blogs &amp; social media posts</li>
              <li>Brochures, leaflets &amp; flyers </li>
              <li>Case studies </li>
              <li>Direct mail &amp; email</li>
              <li>Ebooks, reports &amp; whitepapers </li>
              <li>Editorial/advertorial features</li>
              <li>Video scripts</li>
            </ul>
          </Col>
          <Col xs='12' md='4'>
            <h3>Kick-arse creative ideas</h3>
            <img src='/col2-min.jpg' alt='A really good copywriter' />
            <p>
              Stuck in a rut? I can shake the cobwebs away and come up with
              creative campaign ideas that will catch your prospects&rsquo; eye.
              Let&rsquo;s find a spark:
            </p>
            <ul>
              <li>Brainstorming sessions</li>
              <li>Concept development</li>
              <li>Content analysis</li>
              <li>Idea review &amp; refinement</li>
              <li>Outsourced content marketing</li>
              <li>Team building &amp; training</li>
              <li>Workshopping campaigns</li>
            </ul>
          </Col>
          <Col xs='12' md='4'>
            <h3>Content marketing strategy</h3>
            <img src='/col3-min.jpg' alt='A really good copywriter' />
            <p>
              Not sure where to start? I can clarify the bigger picture and
              define how you represent yourself in the public space. Let&rsquo;s
              talk shop:{" "}
            </p>
            <ul>
              <li>Brand &amp; tone of voice guides </li>
              <li>Content marketing plans</li> <li>Company presentations</li>{" "}
              <li>Go-to-market messaging</li> <li>Sales decks &amp; pitches</li>{" "}
              <li>Value proposition Website content</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center'>
              <Button className='text-center'>Let&rsquo;s talk shop</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
