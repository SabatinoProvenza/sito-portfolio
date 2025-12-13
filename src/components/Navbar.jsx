import { Navbar, Nav, Container } from "react-bootstrap"

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Il mio percorso
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#percorso">Percorso</Nav.Link>
            <Nav.Link href="#progetti">Progetti</Nav.Link>
            <Nav.Link href="#contatti">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
