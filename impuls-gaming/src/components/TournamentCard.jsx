import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import logo from "../img/impuls logo.png";
import { format, compareAsc } from "date-fns";

const TournamentCard = ({ tournament }) => {
  return (
    <Card className="featured-games settings-card">
      <Card.Img
        variant="top"
        className="project-cover-img1"
        src={tournament.discipline_cover}
      />
      <Card.Body>
        <Card.Title className="textColor d-flex justify-content-between">
          <span className="tournament-name1  text-left">{tournament.name}</span>
          <span className="text-small text-nowrap text-left text-muted d-flex">
            {tournament.discipline_name}
          </span>
        </Card.Title>
        <div className=" d-flex align-items-center">
          {tournament.registration.activation.registrationOpeningDate &&
          tournament.registration.activation.registrationClosingDate &&
          new Date(
            tournament.registration.activation.registrationClosingDate
          ) >= new Date() ? (
            <>
              <Icon.Calendar2Event
                className="pr-1 pl-0 text-success ml-0"
                size={30}
              />
              <span className="d-flex text-small">
                <span className="mr-1 text-success">Registration</span>
                <span
                  className="d-flex 
text-success ml-3"
                >
                  {" "}
                  {format(
                    new Date(
                      tournament.registration.activation.registrationOpeningDate.toString()
                    ),
                    "dd MMM"
                  )}
                  {" - "}
                  {format(
                    new Date(
                      tournament.registration.activation.registrationClosingDate.toString()
                    ),
                    "dd MMM "
                  )}
                </span>
              </span>
            </>
          ) : (
            <>
              <Icon.Calendar2Event
                className="pr-1 pl-0 text-danger ml-0"
                size={30}
              />
              <span className="d-flex text-small">
                <span className="mr-1 text-danger">Registration</span>
                <span
                  className="d-flex 
text-danger ml-3"
                >
                  Closed
                </span>
              </span>
            </>
          )}
        </div>
        <Card.Text className="bg-dark py-2 my-3 px-2 textColor d-flex align-items-center">
          Sponsored by Impuls
          <img className="league-provider-img ml-2" src={logo} alt="logo" />
        </Card.Text>
        {tournament.registration.activation.registrationOpeningDate &&
        tournament.registration.activation.registrationClosingDate &&
        new Date(tournament.registration.activation.registrationClosingDate) >=
          new Date() ? (
          <Link to="/sign-in" className="w-100 d-flex justify-content-end">
            {" "}
            <Button variant="danger" className="register-btn">
              Registration Open
            </Button>
          </Link>
        ) : (
          <Link className="w-100 d-flex justify-content-end">
            {" "}
            <Button disabled={true} variant="danger">
              Registration Closed
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};
export default TournamentCard;
