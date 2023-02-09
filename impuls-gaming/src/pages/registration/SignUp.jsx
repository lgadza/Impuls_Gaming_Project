import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logInData, registerUser } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";

const LogInPage = () => {
  const signInData = useSelector((state) => state.log.data);
  console.log(signInData);
  const [formData, updateFormData] = useState("");

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(undefined);
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
  console.log(password.length);
  const handleCheck = (e) => {
    check ? setCheck(false) : setCheck(true);
  };
  const registerData = {
    name: name,
    surname: surname,
    email: email,
    phone: phone,
    password: password,
    terms: check,
  };
  const handleUserData = () => {
    dispatch(registerUser(registerData));
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
        <Col lg={4} className=" login-content">
          <div className=" ml-3 d-flex justify-content-between align-items-center">
            <h1>Sign Up</h1>
            <Link to={"/"}>
              <Icon.XLg size={20} />
            </Link>{" "}
          </div>
          <span className="d-flex ml-3 ">
            Please fill in the form to create an account
          </span>
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
          {password !== confirmPassword && (
            <span className="blink_me d-flex ml-3 mb-2">
              Password do not match*
            </span>
          )}
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
            <Link to="/user-page" className="w-100">
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
              I already have an account? <Link to={"/sign-in"}>Sign in</Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LogInPage;