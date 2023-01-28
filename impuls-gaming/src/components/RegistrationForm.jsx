import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { registerTournament, getTournaments } from "../redux/actions";

const RegistrationForm = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );

  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();
  const [nickName, setNickName] = useState(undefined);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);
  const [email, setEmail] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const handleNickname = (e) => {
    setNickName(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTerms = (e) => {
    termsCheck ? setTermsCheck(false) : setTermsCheck(true);
  };
  const userData = {
    nickname: nickName,
    name: name,
    surname: surname,
    email: email,
    terms: termsCheck,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleUpdate = () => {
    setUpdate(true);
    dispatch(registerTournament(userData, tournament._id));
    dispatch(getTournaments());
  };
  return (
    <>
      {name && email && surname && termsCheck && nickName && update && (
        <div className="registration-card mx-auto mt-5">
          <Alert key={"success"} variant={"success"}>
            <Icon.CheckCircle size={15} />
            <span>Registration sent to the organizer</span>
          </Alert>
        </div>
      )}
      {(!name || !email || !surname || !termsCheck || !nickName || !update) && (
        <div className="registration-card mx-auto mt-5">
          <Alert key={"warning"} variant={"danger"}>
            <Icon.XCircle size={15} />
            <span>Make sure all the fields are filled</span>
          </Alert>
        </div>
      )}
      <Row>
        <Col>
          <div className="d-flex  flex-column my-3">
            <h4 className="d-flex">Tournament registration</h4>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="d-flex">Player nickname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nickname"
                onChange={handleNickname}
              />
              <span className="d-flex my-3">
                <strong>Information</strong>
              </span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-flex">Player email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                onChange={handleEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-flex">First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                onChange={handleName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-flex">Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                onChange={handleSurname}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex" id="formGridCheckbox">
              <Form.Check
                onClick={handleTerms}
                type="checkbox"
                label="I agree to the
Toornament's terms of use."
              />
            </Form.Group>
            <div className="d-flex">
              <Button
                // disabled={true}
                type="submit"
                onClick={handleUpdate}
                className="primary-btn w-25   textColor"
              >
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default RegistrationForm;
