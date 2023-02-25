import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import logo from "../../img/impuls logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { emailVerification } from "../../redux/actions";
import * as Icon from "react-bootstrap-icons";
import Spinner from "../../components/Spinner";

const EmailVerification = () => {
  const params = useParams();
  console.log(params.userId);
  const isLoading = useSelector((state) => state.emailVerification.isLoading);
  const isError = useSelector((state) => state.emailVerification.isError);
  const emailVerificationResponse = useSelector(
    (state) => state.emailVerification.response
  );
  const [signUp, setSignUp] = useState(false);
  const [response, setResponse] = useState(false);
  const dispatch = useDispatch();

  const handleVerification = async () => {
    setSignUp(true);
    await dispatch(emailVerification({ emailVerified: true }, params.userId));
    setResponse(true);
  };
  console.log(emailVerificationResponse, "ME");
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
        <Col lg={6} className=" login-content">
          <Row>
            <Col>
              <div className=" ml-3 mt-3  d-flex justify-content-between align-items-center">
                <h4>Verify email</h4>
                <Link to={"/"}>
                  <Icon.XLg className="textColor" size={20} />
                </Link>{" "}
              </div>

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
              {response && !isError && (
                <Alert variant="primary">
                  {emailVerificationResponse.message}
                </Alert>
              )}
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="d-flex mb-4">
                <Col>
                  <Form.Text>
                    <strong>Hey Name! Please verify your email.</strong>
                  </Form.Text>
                  <Button
                    onClick={handleVerification}
                    variant="primary"
                    className="w-50 my-5 sign-up-btn"
                  >
                    Verify email
                  </Button>
                  <Form.Text className="text-secondary">
                    @{new Date().getFullYear()} Impuls Gaming. All rights
                    reserved
                  </Form.Text>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default EmailVerification;
