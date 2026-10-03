import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TechStore
        </Navbar.Brand>

        <Nav className="ms-auto d-flex flex-row align-items-center gap-3">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar