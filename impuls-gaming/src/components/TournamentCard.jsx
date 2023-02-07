import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import tournamentCover from "../img/tournament.webp";
import { format, compareAsc } from "date-fns";

const TournamentCard = ({ tournament }) => {
  return (
    <Card className="featured-games">
      <Card.Img variant="top" src={tournamentCover} />
      <Card.Body>
        <Card.Title className="textColor d-flex">
          <strong>{tournament.name}</strong>
          <span className="text-small text-muted d-flex">
            {tournament.discipline_name}
          </span>
        </Card.Title>
        <div className=" d-flex">
          <Icon.Calendar2Event className="pr-1 text-success" size={30} />
          <span className="text-small text-success">
            <span className="d-flex">
              <span className="mr-2">Registration</span>
              {tournament.startDate && tournament.endDate && (
                <span className="d-flex">
                  {" "}
                  {format(new Date(tournament.startDate.toString()), "dd MMM")}
                  {" - "}
                  {format(new Date(tournament.endDate.toString()), "dd MMM ")}
                </span>
              )}
            </span>
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