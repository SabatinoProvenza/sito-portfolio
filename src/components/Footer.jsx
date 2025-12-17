import { Container } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer mt-5" id="contatti">
      <Container className="py-4 text-center">
        <p className="mb-2 fw-semibold">
          © {year} — Il mio percorso da Web Developer
        </p>

        <div className="mb-2">
          <a
            href="mailto:sabatinoprovenza98@outlook.it"
            className="footer-link"
          >
            sabatinoprovenza98@outlook.it
          </a>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <a href="tel:+393315805304" className="footer-link ">
            <FaPhone />
            <span> 3315805304</span>
          </a>

          <a
            href="https://github.com/SabatinoProvenza"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link d-flex align-items-center gap-1"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/sabatino-alessio-provenza-81803a366/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link d-flex align-items-center gap-1"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </Container>
    </footer>
  )
}
