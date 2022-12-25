import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import giftcard from "../img/playstation_store.jpg";

const HomeUpdates = () => {
  return (
    <Container className="textColor">
      <h2>WHAT'S NEW</h2>
      <Row>
        <Col className="md-4">
          <Card>
            <Card.Img variant="top" src={giftcard} />
            <Card.Body>
              <Card.Title>Gift Cards</Card.Title>
              <Card.Text>
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-4">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-4">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeUpdates;
