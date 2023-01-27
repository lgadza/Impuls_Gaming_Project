import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logInData } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";

const LogInPage = () => {
  const signInData = useSelector((state) => state.log.data);
  console.log(signInData);
  const [formData, updateFormData] = useState("");

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [check, setCheck] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(undefined);
  console.log(check);
  const handleName = (e) => {
    setName(e.target.value);
    dispatch(logInData(loginFormData));
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
    dispatch(logInData(loginFormData));
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    dispatch(logInData(loginFormData));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    dispatch(logInData(loginFormData));
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    dispatch(logInData(loginFormData));
  };
  console.log(password.length);
  const handleCheck = (e) => {
    // check ? setCheck(false) : setCheck(true);
    name &&
    surname &&
    email &&
    password === confirmPassword &&
    password.length >= 5 &&
    check
      ? setCheck(false)
      : setCheck(true);
    dispatch(logInData(loginFormData));
  };
  console.log(name);

  const loginFormData = {
    name: name,
    surname: surname,
    email: email,
    phone: phone,
    password: password,
    confirmPassword: confirmPassword,
    check: check,
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
          <Form.Group className="mb-4">
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
          <Col className=" d-flex mb-3">
            <Link to="/user-page" className="w-100">
              <Button
                disabled={check}
                className="px-4 sign-up-btn w-100"
                variant="primary"
              >
                Sign Up
              </Button>
            </Link>
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
