import { Container, Row, Col, Form } from "react-bootstrap";

const GiftCard = () => {
  return (
    <Container fluid>
      <Row>
        <img src="" alt="" />
        <div>
          <h1>Impuls Gaming</h1>
          <span>www.impulsgaming.com</span>
        </div>
      </Row>
      <Container>
        <Row>
          <Col>
            <h2>Give a Gift</h2>
            <h6>Choose amount</h6>
            <hr />
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Amount*
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder="10" min={0} required />
              </Col>
            </Form.Group>
            <h6>Personalise</h6>
            <Form.Group>
              <Form.Label column sm={2}>
                To*
              </Form.Label>

              <Row>
                <Col>
                  <Form.Control placeholder="First name" required />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" required />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <h6>Schedule Delivery</h6>

            <Form.Group>
              <Form.Label>Send To*</Form.Label>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Recipient Email" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>WhatsApp Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Recipient WhatsApp Number"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Delivery Date *</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Recipient WhatsApp Number"
                required
              />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
};
export default GiftCard;
