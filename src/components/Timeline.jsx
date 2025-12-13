import { Container, Row, Col, Card } from "react-bootstrap"
import { timeline } from "../data/timeline"

export default function Timeline() {
  return (
    <section id="percorso">
      <Container className="my-5">
        <h2 className="text-center mb-5 fw-bold">Il mio percorso</h2>

        <Row className="g-4">
          {timeline.map((step) => (
            <Col key={step.id} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm timeline-card">
                <Card.Body>
                  <small className="text-muted">{step.date}</small>
                  <Card.Title className="mt-2">{step.title}</Card.Title>
                  <Card.Text className="mt-2">{step.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
