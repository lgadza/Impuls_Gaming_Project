import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { giftCardInf } from "../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import logo from "../img/impuls logo.png";
import * as Icon from "react-bootstrap-icons";
import { format, compareAsc } from "date-fns";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
const GiftCard = () => {
  const [formData, updateFormData] = useState("");
  const [sendDate, setSendDate] = useState(new Date());
  console.log(
    format(new Date(sendDate).setDate(sendDate.getDate() + 7), "MM/dd/yyyy")
  );
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderSurname, setSenderSurname] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(undefined);
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSenderName = (e) => {
    setSenderName(e.target.value);
  };
  const handleSenderSurname = (e) => {
    setSenderSurname(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const giftFormData = {
    amount: amount,
    name: name,
    surname: surname,
    message: message,
    email: email,
    phone: phone,
    date: sendDate,
  };
  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim(),

  //   });

  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(amount);

  return (
    <Container className="main-container" fluid>
      <Row className="giftcard-preview-nav py-2 ">
        <Col className="d-flex flex-column ml-5">
          <Link className="mr-auto" to={"/"}>
            <img className="logo-img " src={logo} alt="" />
          </Link>
          <span className="mr-auto textColor">LIVE EXPIRIENCE</span>
        </Col>
      </Row>
      <Container className="  textColor">
        <Row>
          <Col
            md={12}
            lg={5}
            className="input-section gift-container mt-5  mt-5 "
          >
            <Form onSubmit={handleSubmit}>
              <h3 className="mt-2">Give a Gift</h3>
              <h6>Choose amount</h6>
              <hr />
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Amount*
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="number"
                    placeholder="10"
                    min={0}
                    required
                    // onChange={handleChange}
                    onChange={handleAmount}
                  />
                </Col>
              </Form.Group>
              <h6>Personalise</h6>
              <hr />
              <Form.Group className="d-flex flex-cart ">
                <Form.Label column sm={2}>
                  To*
                </Form.Label>

                <Row>
                  <Col md={12}>
                    <Form.Control
                      placeholder="First name"
                      required
                      onChange={handleName}
                      className="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      placeholder="Last name"
                      required
                      onChange={handleSurname}
                      className="mb-3"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="d-flex flex-cart mb-3">
                <Form.Label column sm={2}>
                  From*
                </Form.Label>

                <Row>
                  <Col md={12}>
                    <Form.Control
                      placeholder="First name"
                      required
                      // onChange={handleChange}
                      onChange={handleSenderName}
                      className="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      placeholder="Last name"
                      required
                      onChange={handleSenderSurname}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-cart align-items-center">
                <Form.Label className="mr-4">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={handleMessage}
                  maxLength={100}
                />
              </Form.Group>
              <h6>Schedule Delivery</h6>
              <hr />

              <Form.Group className="d-flex flex-cart  align-items-center">
                <Form.Label className="mr-4 text-nowrap">Send To*</Form.Label>

                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Recipient Email"
                        onChange={handleEmail}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="Recipient WhatsApp Number"
                        required
                        onChange={handlePhone}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-cart">
                <Form.Label column md={3} className="px-0">
                  Delivery Date *
                </Form.Label>
                <Col md={12} className="px-0 mx-0">
                  <div className="px-0">
                    <DatePicker
                      className="datepicker py-2 px-4"
                      selected={sendDate}
                      onChange={(date) => setSendDate(date)}
                      showTimeSelect
                      dateFormat="Pp"
                    />
                  </div>
                </Col>
              </Form.Group>
              <div className="d-flex justify-content-flex-end mt-4 mb-3">
                <PayPalScriptProvider>
                  <PayPalButtons
                    className="w-100 text-white "
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: amount,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then(function (details) {
                        alert(
                          "Gift card bought completely " +
                            details.payer.name.given_name
                        );
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </Form>
          </Col>
          <Col md={12} lg={6} className="d-none d-sm-block mt-5 mx-3">
            <h3 className="mt-5">Card Preview</h3>
            <div className="d-flex giftcard-section w-100 mx-1 py-0  mt-5 mb-5">
              <div column md={3} className="pr-2  giftcard-preview py-3 px-2">
                <img className="logo-img mb-3" src={logo} alt="impuls logo" />
                <div className="card-preview">
                  <div className=" mb-2">
                    <Icon.Phone size={20} />
                    <h6 className="py-0 my-0">Phone</h6>
                    <span>+48-79-4144-892</span>
                  </div>
                  <div className=" mb-2">
                    <Icon.GeoAltFill size={20} />
                    <h6 className="py-0 my-0">Address</h6>
                    <span>123 Ave St, Bulawayo</span>
                  </div>
                  <div>
                    <Icon.EnvelopeFill size={20} />
                    <h6 className="py-0 my-0">Email</h6>
                    <span>hello@impulsgaming.com</span>
                  </div>
                </div>
              </div>
              <div
                column
                md={9}
                className=" w-100  preview-content m-0 px-3 d-flex flex-column justify-content-center"
              >
                <div>
                  <h3 className="mb-5 pb-2">Impuls Gift Card</h3>
                  <h6
                    className="d-flex justify-content-end  "
                    style={amount ? { color: "red" } : { color: "black" }}
                  >
                    $USD <span>{amount}</span>
                  </h6>
                </div>
                <div className="card-preview-info d-flex ">
                  <span className="d-flex mr-3">To:</span>
                  <span className="recipient-info mb-0">
                    {name} {surname}{" "}
                  </span>
                </div>
                <div className="card-preview-info d-flex my-3">
                  <span className="d-flex mr-3">From:</span>
                  <span className="recipient-info mb-0">
                    {senderName} {senderSurname}{" "}
                  </span>
                </div>
                <div className="card-preview-info d-flex ">
                  <span className="d-flex mr-3">Amount: $</span>
                  <span className="recipient-info mb-0">{amount} </span>
                </div>
                <div className="card-preview-info d-flex my-3 ">
                  <span className="d-flex mr-3">Expires:</span>
                  <span className="recipient-info mb-0">
                    {format(
                      new Date(sendDate).setDate(sendDate.getDate() + 7),
                      "MM/dd/yyyy"
                    )}{" "}
                  </span>
                </div>
                {message && (
                  <div className="card-preview-info d-flex align-items-center mb-3 ">
                    <>
                      <span className="d-flex mr-3">Message:</span>
                      <span className="recipient-info mb-0 message ">
                        {message}
                      </span>
                    </>
                  </div>
                )}
              </div>
            </div>
            <Link to={"/"} className="d-flex  mb-4  justify-content-end">
              <Button
                className=" text-center px-5 primary-btn w-25   textColor "
                variant="primary"
              >
                Back
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};
export default GiftCard;
