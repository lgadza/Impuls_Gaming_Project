import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import giftcard from "../img/playstation_store.jpg";

const HomeUpdates = () => {
  return (
    <Container className="textColor">
      <h2 className="mb-5">WHAT'S NEW</h2>
      <Row>
        <Col className="md-4">
          <Card>
            <Card.Img variant="top" src={giftcard} />
            <Card.Body>
              <Card.Title className="textColor">Gift Cards</Card.Title>
              <Card.Text className="textColor">
                Gift Cards now available to order for your loved ones
              </Card.Text>
              <Link to={"/giftcard"}>
                {" "}
                <Button variant="danger">Buy Gift Card</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-4">
          <Card>
            <Card.Img variant="top" src={giftcard} />
            <Card.Body>
              <Card.Title className="textColor">Gift Cards</Card.Title>
              <Card.Text className="textColor">
                Gift Cards now available to order for your loved ones
              </Card.Text>
              <Link to={"/giftcard"}>
                {" "}
                <Button variant="danger">Buy Gift Card</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-4">
          <Card>
            <Card.Img variant="top" src={giftcard} />
            <Card.Body>
              <Card.Title className="textColor">Gift Cards</Card.Title>
              <Card.Text className="textColor">
                Gift Cards now available to order for your loved ones
              </Card.Text>
              <Link to={"/giftcard"}>
                {" "}
                <Button variant="danger">Buy Gift Card</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-4">
          <Card>
            <Card.Img variant="top" src={giftcard} />
            <Card.Body>
              <Card.Title className="textColor">Gift Cards</Card.Title>
              <Card.Text className="textColor">
                Gift Cards now available to order for your loved ones
              </Card.Text>
              <Link to={"/giftcard"}>
                {" "}
                <Button variant="danger">Buy Gift Card</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeUpdates;
