import { Navbar, Nav, Container } from "react-bootstrap"
import { FaCode } from "react-icons/fa"
import { useState } from "react"

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false)
  return (
    <Navbar
      bg="light"
      expand="md"
      fixed="top"
      className="shadow-sm"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold d-flex align-items-center gap-2"
          onClick={() => setExpanded(false)}
        >
          S.P. <FaCode size={20} className="text-primary" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#percorso" onClick={() => setExpanded(false)}>
              Percorso
            </Nav.Link>
            <Nav.Link href="#progetti" onClick={() => setExpanded(false)}>
              Progetti
            </Nav.Link>
            <Nav.Link href="#contatti" onClick={() => setExpanded(false)}>
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
