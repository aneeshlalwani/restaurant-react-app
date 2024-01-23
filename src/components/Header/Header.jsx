import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <>  
        <Navbar bg="dark" expand="md" data-bs-theme="dark">
            <Container>
          <Navbar.Brand href="#home" className='mx-auto fs-2'>🔥SpiceSphere🔥</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
