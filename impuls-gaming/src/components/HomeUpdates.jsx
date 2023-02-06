import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import giftcard from "../img/playstation_store.jpg";
import fifa23 from "../img/fifa23 .jpg";
import * as Icon from "react-bootstrap-icons";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import tournament from "../img/tournament.webp";
import mk from "../img/mk.avif";
import TournamentCard from "./TournamentCard";

const HomeUpdates = () => {
  return (
    <Container className="textColor">
      <h1 className="d-flex mb-5 featured-leagues"> Tournaments</h1>
      <Row>
        {/* <Col md={6} lg={4} className="mb-4">
          <Card className="featured-games">
            <Card.Img variant="top" src={fifa23} />
            <Card.Body>
              <Card.Title className="textColor d-flex">
                <strong>FIFA 23 Season League</strong>
              </Card.Title>
              <div className=" d-flex">
                <Icon.Calendar2Event size={30} />
                <span>Registration Friday - Sunday </span>
              </div>
              <Card.Text className="bg-dark py-4 my-3 px-2 textColor d-flex">
                League by Impuls Gaming
                <img
                  className="league-provider-img ml-2"
                  src={logo}
                  alt="logo"
                />
              </Card.Text>
              <Link to="/sign-up" className="w-100 d-flex justify-content-end">
                {" "}
                <Button variant="danger">Registration Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        */}

        <Col md={6} lg={4} className="mb-4">
          <TournamentCard />
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="featured-games">
            <Card.Img variant="top" src={mk} />
            <Card.Body>
              <Card.Title className="textColor d-flex">
                <strong>Mortal Kombat Tournament</strong>
              </Card.Title>
              <div className=" d-flex">
                <Icon.Calendar2Event size={30} />
                <span>Registration Coming Soon </span>
              </div>
              {/* <Card.Text className="bg-dark py-4 my-3 px-2 textColor d-flex">
                Tournaments by Impuls Gaming
                <img
                  className="league-provider-img ml-2"
                  src={logo}
                  alt="logo"
                />
              </Card.Text> */}
              <Link
                to="/sign-up"
                className="w-100 d-flex mt-4 justify-content-end"
              >
                {" "}
                <Button disabled variant="danger">
                  Registration Opens Soon
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2 className="my-5 d-flex featured-league">WHAT'S NEW</h2>
      <Row>
        <Col lg={4} md={6} className="mb-4 ">
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
        <Col lg={4} md={6} className="mb-4">
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
        <Col lg={4} md={6} className="mb-4">
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
        <Col lg={4} md={6} className="mb-4">
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
