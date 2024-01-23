import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroSection = () => {
  return (
    <>
        <Container fluid className='hero-section'>
        <Row className="hero-section justify-content-center align-items-center">
          <Col xs={12} md={8} className="mx-auto">
            <div className="title text-center">
              <h1 className="text-white">
                A Feast for the Senses
              </h1>
              <h2 className='text-white'>Passionately Prepared, Joyfully Shared</h2>
            </div>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default HeroSection;
