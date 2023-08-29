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
import { getTournaments, logInData, signIn } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";
import Spinner from "../../components/Spinner";
import { getMe } from "../../redux/actions";
import "../../styling/signIn.css";
import SignUp from "./SignUp";
const SignIn = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  const dispatch = useDispatch();
  const [isLogInActive, setIsLogInActive] = useState(true);
  const [isSingUpActive, setIsSignUpActive] = useState(false);
  const [sign_in, setSign_in] = useState(false);
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.accessToken.isLoading);
  const isGetMeLoading = useSelector((state) => state.me.isLoading);
  const isError = useSelector((state) => state.accessToken.isError);
  const signInCredentials = useSelector(
    (state) => state.accessToken.accessToken
  );
  const handleSignUp = async () => {
    await setIsLogInActive(false);
    setIsSignUpActive(true);
  };
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
  };
  const handleSignIn = async () => {
    const token = await dispatch(signIn(loginFormData));
    setSign_in(true);
  };
  if (signInCredentials.accessToken) {
    dispatch(getMe(signInCredentials.accessToken));
    dispatch(getTournaments());
    
    if (!isGetMeLoading) {
      navigate("/user-page");
    }
  }
  return (
    <Container fluid className="login-page p-0 m-0">
      <Row className="giftcard-preview-nav py-2 ">
        <Col className="d-flex flex-column ml-5">
          <Link className="mr-auto" to={"/"}>
            <img className="logo-img " src={logo} alt="" />
          </Link>
          <span className="mr-auto textColor">LIVE EXPERIENCE</span>
        </Col>
      </Row>
      <Container fluid className="forms-section">
        <div className="login-cover"></div>
        <div className="forms">
          <Container
            className={`form-wrapper ${isLogInActive ? "is-active" : ""}`}
          >
            <button
              type="button"
              onClick={() => {
                setIsSignUpActive(false);
                setIsLogInActive(true);
              }}
              class="switcher switcher-login"
            >
              Login
              <span class="underline"></span>
            </button>
            <Row className="d-flex w-100 flex-column form form-login p-0  justify-content-center textColor">
              <Col className=" login-content fieldset ">
                <div className=" ml-3 d-flex justify-content-between align-items-center">
                  {forgotPassword && <h4 className="mb-3">Forgot Password</h4>}
                  {!forgotPassword && <h5>Sign In</h5>}
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
                          <small>Sign in</small>
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
                        <Button
                          className="px-4 sign-up-btn w-100"
                          variant="primary"
                        >
                          <Icon.Google size={15} />
                          <small>Continue with Google</small>
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
          </Container>
          <Container
            className={`form-wrapper  ${isSingUpActive ? "is-active" : ""}`}
          >
            <div>
              <button
                onClick={() => {
                  setIsSignUpActive(true);
                  handleSignUp();
                }}
                type="button"
                class="switcher switcher-signup"
              >
                Sign Up
                <span class="underline"></span>
              </button>
            </div>
            <SignUp handleSignUp={handleSignUp} />
          </Container>
        </div>
      </Container>
    </Container>
  );
};
export default SignIn;
