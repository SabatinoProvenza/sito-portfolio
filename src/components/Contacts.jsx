import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa"

export default function Contatti() {
  return (
    <>
      <h2 className="text-center fw-bold mb-5">Contatti</h2>
      <section id="contatti" className="py-5 bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="contact-card shadow-sm border-0 text-center p-4">
                <Card.Body>
                  <div className="mb-4">
                    <FaEnvelope size={32} className="text-primary mb-2" />
                    <p className="mb-0">
                      <a
                        href="mailto:sabatinoprovenza98@outlook.it"
                        className="text-decoration-none"
                      >
                        sabatinoprovenza98@outlook.it
                      </a>
                    </p>
                  </div>

                  <div className="mb-4">
                    <FaPhoneAlt size={32} className="text-success mb-2" />
                    <p className="mb-0">
                      <a
                        href="tel:+393315805304"
                        className="text-decoration-none text-success"
                      >
                        3315805304
                      </a>
                    </p>
                  </div>

                  <div className="d-flex justify-content-center gap-4 ">
                    <a
                      href="https://github.com/SabatinoProvenza"
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark fs-4"
                    >
                      <FaGithub size={32} />
                    </a>

                    <a
                      href="https://linkedin.com/in/sabatino-alessio-provenza-81803a366/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fs-4"
                    >
                      <FaLinkedin size={32} />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
