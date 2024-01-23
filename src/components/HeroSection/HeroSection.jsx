import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroSection = () => {
  return (
    <>
        <Container fluid>
        <Row className="hero-section justify-content-center align-items-center">
          <Col xs={12} md={8} className="mx-auto">
            <div className="title text-center">
              <h1 className="">
                Your <span className="title-color">Vision</span>, Our{" "}
                <span className="title-color">Code</span>
              </h1>
              <h2>Hello Hello Jello Hello</h2>
            </div>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default HeroSection;
