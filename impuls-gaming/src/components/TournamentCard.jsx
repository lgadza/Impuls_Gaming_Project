import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import tournament from "../img/tournament.webp";

const TournamentCard = () => {
  return (
    <Card className="featured-games">
      <Card.Img variant="top" src={tournament} />
      <Card.Body>
        <Card.Title className="textColor d-flex">
          <strong>FIFA 23 Tournament</strong>
        </Card.Title>
        <div className=" d-flex">
          <Icon.Calendar2Event className="pr-1 text-success" size={30} />
          <span className="text-small text-success">
            Registration Monday - Friday{" "}
          </span>
        </div>
        <Card.Text className="bg-dark py-3 my-3 px-2 textColor d-flex">
          Tournament by Impuls
          <img className="league-provider-img ml-2" src={logo} alt="logo" />
        </Card.Text>
        <Link to="/sign-up" className="w-100 d-flex justify-content-end">
          {" "}
          <Button variant="danger">Registration Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default TournamentCard;
