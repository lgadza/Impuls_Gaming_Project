import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logInData } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";

const ChangePassword = () => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheck = (e) => {
    check ? setCheck(false) : setCheck(true);
  };

  const loginFormData = {
    password: password,
    confirmPassword: confirmPassword,
  };
  return (
    <Container fluid className="login-page ">
      <Row className="giftcard-preview-nav py-2 ">
        <Col className="d-flex flex-column ml-5">
          <Link className="mr-auto" to={"/"}>
            <img className="logo-img " src={logo} alt="" />
          </Link>
          <span className="mr-auto textColor">LIVE EXPIRIENCE</span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-4 textColor">
        <Col lg={4} className=" login-content">
          <div className=" ml-3 d-flex justify-content-between align-items-center">
            <h4 className="mb-3">Forgot Password</h4>
            <Link to={"/"}>
              <Icon.XLg size={20} className="textColor" />
            </Link>{" "}
          </div>
          {password !== confirmPassword && (
            <Alert variant="danger" className="blink_me ">
              Password and Confirm Password do not match
            </Alert>
          )}
          {/* <Alert variant="success">
                Account verification has been successfully completed
              </Alert> */}
          <hr />

          <Form.Group className="mb-4">
            <Col>
              <Form.Control
                type="password"
                placeholder=" Password"
                onChange={handlePassword}
                minLength={5}
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-4">
            <Col>
              <Form.Control
                type="password"
                placeholder=" Confirm Password"
                onChange={handleConfirmPassword}
                minLength={5}
              />
            </Col>
          </Form.Group>

          <Col className=" d-flex mb-3 ">
            <Link to="/sign-in" className="w-100">
              <Button
                disabled={!password || !confirmPassword}
                className="px-4 sign-up-btn w-100"
                variant="primary"
              >
                Change Password
              </Button>
            </Link>
          </Col>
          <div className="mb-3">
            <span>
              {" "}
              Back to! <Link to="/sign-in">Login</Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ChangePassword;
