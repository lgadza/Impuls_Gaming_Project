import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/impuls logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getTournaments, logInData, adminSignIn } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";
import Spinner from "../../components/Spinner";
import { getMe } from "../../redux/actions";

const OrganizerSignIn = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  const dispatch = useDispatch();

  const [sign_in, setSign_in] = useState(false);
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.adminToken.isLoading);
  const isGetMeLoading = useSelector((state) => state.me.isLoading);
  const isError = useSelector((state) => state.adminToken.isError);
  const signInCredentials = useSelector(
    (state) => state.adminToken.accessToken
  );
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCheck = (e) => {
    check ? setCheck(false) : setCheck(true);
  };
  const handleForgetPassword = () => {
    setForgotPassword(true);
  };
  const handleKnowPassword = () => {
    setForgotPassword(false);
  };
  const loginFormData = {
    email: email,
    password: password,
    rememberSignIn: check,
    role: "Admin",
  };
  const handleSignIn = async () => {
    setSign_in(true);
    await dispatch(adminSignIn(loginFormData));
  };
  if (signInCredentials.accessToken) {
    dispatch(getMe(signInCredentials.accessToken));
    dispatch(getTournaments());
    if (!isGetMeLoading) {
      navigate("/backoffice");
    }
  }
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
          <div className=" ml-3 mt-3 d-flex justify-content-between align-items-center">
            {forgotPassword && <h4 className="mb-3">Forgot Password</h4>}
            {!forgotPassword && <h4>Sign In</h4>}
            <Link to={"/"}>
              <Icon.XLg size={20} className="textColor" />
            </Link>{" "}
          </div>
          {isLoading && sign_in ? (
            <div className="  d-flex justify-content-center">
              {" "}
              <Spinner />
            </div>
          ) : isGetMeLoading && sign_in ? (
            <div className="  d-flex justify-content-center">
              {" "}
              <Spinner />
            </div>
          ) : null}
          {isError && sign_in && (
            <Alert variant="danger">
              The email or password you provided is incorrect
            </Alert>
          )}
          {!forgotPassword && (
            <>
              {/* //TODO do not delete me I am the registration confirmation */}
              {/* <Alert variant="success">
                Account verification has been successfully completed
              </Alert> */}
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
                    minLength={5}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3">
                <Col>
                  <div className="d-flex align-items-center">
                    <input
                      className="mr-2"
                      lavel="checkbox"
                      type="checkbox"
                      onClick={handleCheck}
                    />
                    <span id="checkbox">Remember me</span>
                  </div>
                </Col>
              </Form.Group>
              <Col className=" mb-3 ">
                <Link to="" className="w-100">
                  <Button
                    disabled={!email || !password}
                    className="px-4 sign-up-btn w-100"
                    variant="primary"
                    onClick={handleSignIn}
                  >
                    Sign in
                  </Button>
                </Link>
                <div className="mb-3">
                  <span>
                    <Link onClick={handleForgetPassword}>
                      Forgotten your password
                    </Link>
                  </span>
                </div>
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
            </>
          )}
          {forgotPassword && (
            <>
              <Alert variant="primary">
                We've sent a verification link on your email address
              </Alert>
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
              <Col className=" d-flex mb-3 ">
                <Link to="" className="w-100">
                  <Button
                    disabled={!email}
                    className="px-4 sign-up-btn w-100"
                    variant="primary"
                  >
                    Send Reset Link
                  </Button>
                </Link>
              </Col>
              <div className="mb-3">
                <span>
                  {" "}
                  Back to! <Link onClick={handleKnowPassword}>Login</Link>
                </span>
              </div>
            </>
          )}
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-4 textColor">
        <Col lg={4} className=" login-content py-3">
          <span className="py-3">You don't have an account yet?</span>
          <hr />
          <Link to="/organiser/signUp">
            <Button className="px-4 sign-up-btn w-100" variant="success">
              Sign Up
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default OrganizerSignIn;
