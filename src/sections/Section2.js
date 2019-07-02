import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Section2 = () => {
  return (
    <div className='section section2'>
      <Container fluid>
        <Row>
          <Col>
            <h2>What are you looking for?</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>A really good copywriter</h3>
            <p>
              Got writers&rsquo; block? I&rsquo;ve written over 5.2 million
              words in my career, so I know the good ones by now! Let&rsquo;s
              put them to work across:{" "}
            </p>
            <ul />
            Blogs &amp; social media posts Brochures, leaflets &amp; flyers Case
            studies Direct mail &amp; email Ebooks, reports &amp; whitepapers
            Editorial/advertorial features Video scripts
          </Col>
          <Col>
            <h3>Kick-arse creative ideas</h3>
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
          <Col>
            <h3>Content marketing strategy</h3>
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
            <Button>Let&rsquo;s talk shop</Button>
          </Col>
        </Row>
      </Container>
      <p>
        Can we have these as columns rather than a table. Maybe with a photo for
        each column? E.g. Copywriter -
        https://www.pexels.com/photo/yellow-orange-pink-and-blue-coloring-pens-on-white-
        notebook-998591/ Ideas – https://unsplash.com/photos/bo48lBVP-Xs
        Strategy - https://unsplash.com/photos/3BfDXcn9sqM
      </p>
    </div>
  );
};

export default Section2;
