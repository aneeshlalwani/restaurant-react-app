import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Menu1 from '../../assets/images/pizza-1.jpg';
import Menu2 from '../../assets/images/pizza-2.jpg';
import Menu3 from '../../assets/images/pizza-3.jpg';
import Menu4 from '../../assets/images/burger-1.jpg';
import Menu5 from '../../assets/images/burger-2.jpg';
import Menu6 from '../../assets/images/burger-3.jpg';
const Menu = () => {
    const cardsData = [{
        title: 'Chicken Fajita Sicillian',
        menuImageUrl: `${Menu1}`,
    },
    {
        title: 'Arbian Rench Piiza',
        menuImageUrl: `${Menu2}`,
    },
    {
        title: 'Veggie Lover',
        menuImageUrl: `${Menu3}`,
    },
    {
        title: 'Chicken Spicy Burger',
        menuImageUrl: `${Menu4}`,
    },
    {
        title: 'Jalepano Chicken Burger',
        menuImageUrl: `${Menu5}`,
    },
    {
        title: 'Zinger Burger',
        menuImageUrl: `${Menu6}`,
    }
];
  return (
    <>
        <Container className='menu-container bg-dark my-2'>
            <h1 className='text-center text-white mt-4 mb-3'>Menu</h1>
            <Row className='justify-content-center'>
                {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="my-3">
            <Card className="card p-4 fw-bold text-white bg-light h-100">
              <Card.Img className="icon pt-2" variant="top" src={card.menuImageUrl} />
              <Card.Body>
                <Card.Title className='pt-3 text-dark'>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}    
            </Row>
        </Container>
    </>
  )
}

export default Menu;