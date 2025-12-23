import { Navbar, Nav, Container } from "react-bootstrap"
import { FaCode } from "react-icons/fa"

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="md" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold d-flex align-items-center gap-2"
        >
          S.P. <FaCode size={20} className="text-primary" />
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
