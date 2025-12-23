import { Container } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer mt-5">
      <Container className="py-4 text-center">
        <p className="mb-2 fw-semibold">© {year} — Sabatino Provenza</p>
      </Container>
    </footer>
  )
}
