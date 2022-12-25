import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logInData } from "../redux/actions";

const SignIn = () => {
  const [formData, updateFormData] = useState("");

  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);
  const [email, setEmail] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
    dispatch(logInData(loginFormData));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    dispatch(logInData(loginFormData));
  };

  const handleCheck = (e) => {
    setCheck(e.target.value);
    dispatch(logInData(loginFormData));
  };

  const loginFormData = {
    email: email,
    password: password,
    check: check,
  };
  return (
    <Container fluid className="login-page">
      <Row className="giftcard-preview-nav py-2 ">
        <Col className="d-flex flex-column ml-5">
          <Link className="mr-auto" to={"/"}>
            <img className="logo-img " src={logo} alt="" />
          </Link>
          <span className="mr-auto">LIVE EXPIRIENCE</span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-4 textColor">
        <Col md={4} className=" login-content">
          <h1>Sign In</h1>
          <Link>or create an account</Link>
          <hr />

          <Form.Group className="mb-4">
            <Col>
              {" "}
              <Form.Control
                type="email"
                placeholder=" Email"
                onChange={handleEmail}
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-4">
            <Col>
              <Form.Control
                type="password"
                placeholder=" Password"
                onChange={handlePassword}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Col>
              <div className="d-flex align-items-center">
                <Form.Check
                  className="mr-2"
                  type="checkbox"
                  onClick={handleCheck}
                />
                <span>Remember me</span>
              </div>
            </Col>
          </Form.Group>
          <div className=" d-flex mb-3">
            <Button className="px-4 sign-up-btn" variant="primary">
              Sign in
            </Button>
          </div>
          <div className="mb-3">
            <span>
              <Link>Forgotten your password</Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SignIn;
