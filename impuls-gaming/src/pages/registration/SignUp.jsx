import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { registerUser } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";
import Spinner from "../../components/Spinner";

const SignUp = ({ handleSignUp }) => {
  const accessToken = useSelector((state) => state.accessToken.accessToken);
  const isLoading = useSelector((state) => state.registerUser.isLoading);
  const isError = useSelector((state) => state.registerUser.isError);
  console.log(accessToken);
  const [signUp, setSignUp] = useState(false);

  const dispatch = useDispatch();
  const [response, setResponse] = useState(false);
  const [isSingUpActive, setIsSignUpActive] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registrationResponse = useSelector(
    (state) => state.registerUser.registrationResponse
  );

  const [email, setEmail] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheck = (e) => {
    check ? setCheck(false) : setCheck(true);
  };
  const registerData = {
    name: name,
    surname: surname,
    email: email,
    password: password,
    terms: check,
  };
  const handleUserData = async () => {
    setSignUp(true);
    await dispatch(registerUser(registerData));
    setResponse(true);
  };
  return (
    <Row className="form w-100 form-signup p-0 textColor">
      <Col className="login-content fieldset">
        <div className=" ml-3  d-flex justify-content-between align-items-center">
          <h5>Sign Up</h5>
          <Link to={"/"}>
            <Icon.XLg className="textColor" size={20} />
          </Link>{" "}
        </div>
        <span className="d-flex ml-3 mb-1 all-fields text-secondary ">
          Please fill <strong className="mx-1">ALL fields</strong>
          to create an account
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
              apologies for the inconvenience caused
            </p>
          </Alert>
        )}
        {response && (
          <Alert variant="primary">{registrationResponse.message}</Alert>
        )}
        <hr />
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
                !surname
              }
              className="px-4 sign-up-btn w-100"
              variant="primary"
              onClick={handleUserData}
            >
              <small>Sign Up</small>
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
              <Icon.Google size={15} />
              <small>Continue with Google</small>
            </Button>
          </a>
        </Col>
      </Col>
    </Row>
  );
};
export default SignUp;
