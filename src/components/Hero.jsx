import { Container, Row, Col, Button } from "react-bootstrap"

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container className="py-5">
        <Row className="align-items-center ">
          <Col md={8} className="mx-auto text-center">
            <h1 className="fw-bold mb-3">Full Stack Web Developer</h1>

            <p className="lead mb-4">
              Sto seguendo un bootcamp per diventare Full Stack Developer. In
              questo sito documento i certificati che ho conseguito e il
              percorso di crescita che sto costruendo passo dopo passo.
            </p>

            <div className="tech-marquee">
              <div className="tech-track">
                <span className="badge bg-secondary">HTML</span>
                <span className="badge bg-secondary">CSS</span>
                <span className="badge bg-secondary">JavaScript</span>
                <span className="badge bg-secondary">TypeScript</span>
                <span className="badge bg-secondary">Sass</span>
                <span className="badge bg-secondary">React</span>
                <span className="badge bg-secondary">Redux</span>
                <span className="badge bg-secondary">React Testing</span>

                {/* DUPLICAZIONE per loop fluido */}
                <span className="badge bg-secondary">HTML</span>
                <span className="badge bg-secondary">CSS</span>
                <span className="badge bg-secondary">JavaScript</span>
                <span className="badge bg-secondary">TypeScript</span>
                <span className="badge bg-secondary">Sass</span>
                <span className="badge bg-secondary">React</span>
                <span className="badge bg-secondary">Redux</span>
                <span className="badge bg-secondary">React Testing</span>
              </div>
            </div>

            <Button variant="primary" href="#percorso" size="lg">
              Scopri il mio percorso
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
