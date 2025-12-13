import { Container, Alert } from "react-bootstrap"
import { FaTools } from "react-icons/fa"

export default function WorkInProgress() {
  return (
    <Alert variant="info" className="mb-0 rounded-0 text-center">
      <Container className="d-flex justify-content-center align-items-center gap-2">
        <FaTools />
        <span>
          Questo sito è in fase di sviluppo ed è in continuo aggiornamento
        </span>
      </Container>
    </Alert>
  )
}
