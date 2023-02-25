import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/impuls logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { registerUser } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";
import Spinner from "../../components/Spinner";

const OrganiserSignUp = () => {
  const accessToken = useSelector((state) => state.accessToken.accessToken);
  const isLoading = useSelector((state) => state.registerUser.isLoading);
  const isError = useSelector((state) => state.registerUser.isError);
  const [signUp, setSignUp] = useState(false);
  const [response, setResponse] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [surname, setSurname] = useState("");
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registrationResponse = useSelector(
    (state) => state.registerUser.registrationResponse
  );
  console.log("I am IsLOading", isLoading);
  const [email, setEmail] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOrganization = (e) => {
    setOrganization(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCheck = (e) => {
    check ? setCheck(false) : setCheck(true);
  };
  const registerData = {
    name,
    surname,
    email,
    password,
    terms: check,
    nickname,
    organization,
    role: "Admin",
  };
  const handleUserData = async () => {
    setSignUp(true);
    await dispatch(registerUser(registerData));
    setResponse(true);
  };
  return (
    <Container fluid className="login-page">
      <Row className="giftcard-preview-nav py-2 ">
        <Col className="d-flex flex-column ml-5">
          <Link className="mr-auto" to={"/"}>
            <img className="logo-img " src={logo} alt="" />
          </Link>
          <span className="mr-auto textColor">LIVE EXPERIENCE</span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-4 textColor">
        <Col lg={8} className=" login-content">
          <Row>
            <Col>
              <div className=" ml-3 mt-3  d-flex justify-content-between align-items-center">
                <h4>Sign Up</h4>
                <Link to={"/"}>
                  <Icon.XLg className="textColor" size={20} />
                </Link>{" "}
              </div>
              <span className="d-flex ml-3 mb-1 text-secondary ">
                Please fill <strong className="mx-1">ALL fields</strong> in the
                form to create an account
              </span>
              {password !== confirmPassword && signUp && (
                <Alert variant="danger" className="blink_me ">
                  Password and Confirm Password do not match
                </Alert>
              )}
              {isLoading && signUp && (
                <div className="  d-flex justify-content-center">
                  {" "}
                  <Spinner />
                </div>
              )}
              {isError && (
                <Alert variant="danger" className="mt-5">
                  <Alert.Heading>!You got an error!</Alert.Heading>
                  <p>
                    Something went wrong on our side, we are working on it, we
                    apologies for the inconvenience caused, please try again in
                    a moment
                  </p>
                </Alert>
              )}
              {response && !isError && (
                <Alert variant="primary">{registrationResponse.message}</Alert>
              )}
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="d-flex mb-4">
                <Col>
                  <Form.Control
                    placeholder="First name"
                    required
                    // onInput={handleChange}
                    onInput={handleName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Last name"
                    required
                    // onInput={handleChange}
                    onInput={handleSurname}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-4">
                <Col>
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder=" Nickname"
                    onInput={handleNickname}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-4">
                <Col>
                  {" "}
                  <Form.Control
                    type="email"
                    placeholder=" Email"
                    onInput={handleEmail}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-4">
                <Col>
                  <Form.Control
                    type="password"
                    placeholder=" Password"
                    onInput={handlePassword}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-2">
                <Col>
                  <Form.Control
                    type="password"
                    placeholder=" Confirm Password"
                    onInput={handleConfirmPassword}
                  />
                </Col>
              </Form.Group>
              {/* {password !== confirmPassword && (
            <span className="blink_me d-flex ml-3 mb-2">
              Password do not match*
            </span>
          )} */}
            </Col>
            <Col>
              <span className="d-flex mb-3">
                <strong>Organizer</strong>
              </span>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Impuls Gaming"
                  onChange={handleOrganization}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Position </Form.Label>
                <Form.Control
                  disabled={true}
                  type="text"
                  placeholder="Admin"
                  onChange={handleSurname}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Col>
                  <div className="d-flex align-items-center">
                    <input
                      className="mr-2"
                      label="checkbox"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <div id="checkbox">
                      <span>I accept the </span>
                      <Link className="mx-1"> Teams of Use</Link> &{" "}
                      <Link className="ml-1">Privacy Policy</Link>
                    </div>
                  </div>
                </Col>
              </Form.Group>
              <Col className=" d-flex mb-2">
                <Link to="" className="w-100">
                  <Button
                    disabled={
                      !check ||
                      password !== confirmPassword ||
                      !name ||
                      !email ||
                      !surname ||
                      !nickname
                    }
                    className="px-4 sign-up-btn w-100"
                    variant="primary"
                    onClick={handleUserData}
                  >
                    Sign Up
                  </Button>
                </Link>
              </Col>
              <span className="mb-2">
                <strong>OR</strong>
              </span>
              <Col className=" d-flex mb-3 ">
                <a
                  href={`${process.env.REACT_APP_BE_PROD_URL}/users/googleLogin`}
                  className="w-100"
                >
                  <Button className="px-4 sign-up-btn w-100" variant="primary">
                    <Icon.Google size={20} />
                    <span>Continue with Google</span>
                  </Button>
                </a>
              </Col>
              <div className="mb-3">
                <span>
                  I already have an account?{" "}
                  <Link to={"/organiser/signIn"}>Sign in</Link>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default OrganiserSignUp;
