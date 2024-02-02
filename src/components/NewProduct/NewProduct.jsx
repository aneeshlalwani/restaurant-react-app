import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Product from "../../assets/images/new-product.jpg";

const NewProduct = () => {
  return (
    <>
      <Container fluid className="py-4 about">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="my-4 mx-5">
              <h1 className="fs-1 fw-bold">New Item</h1>
              <h2 className="about-subheading fw-bold fs-3 mt-4">
                Try Our New Delicious Pizza
              </h2>

              <p className="fs-5 mt-3">
                Wood-fired for perfection, our Gourmet Fusion Pizza delivers a
                crispy crust and a burst of international flair. Perfect for any
                occasion, it is not just pizza; it is an exquisite experience.
                Dive into flavor, discover delight – try it today! 🚀🍕
              </p>
            </div>
          </Col>
          {/* Image Column */}
          <Col xs={12} md={6} className="text-center">
            <Image
              src={Product}
              alt="Profile Picture"
              fluid
              className="about-img my-4 mx-4"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewProduct;
