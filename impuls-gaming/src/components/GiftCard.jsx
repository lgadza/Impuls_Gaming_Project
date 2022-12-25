import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { giftCardInf } from "../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import * as Icon from "react-bootstrap-icons";
import { format, compareAsc } from "date-fns";

const GiftCard = () => {
  const [formData, updateFormData] = useState("");
  const [sendDate, setSendDate] = useState(new Date());
  console.log(
    format(new Date(sendDate).setDate(sendDate.getDate() + 7), "MM/dd/yyyy")
  );
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(undefined);
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
    dispatch(giftCardInf(giftFormData));
  };
  const handleName = (e) => {
    setName(e.target.value);
    dispatch(giftCardInf(giftFormData));
  };
  const handleSenderName = (e) => {
    setSenderName(e.target.value);
    dispatch(giftCardInf(giftFormData));
  };
  const handleSenderSurname = (e) => {
    setSenderSurname(e.target.value);
    dispatch(giftCardInf(giftFormData));
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
    dispatch(giftCardInf(giftFormData));
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    dispatch(giftCardInf(giftFormData));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    dispatch(giftCardInf(giftFormData));
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    dispatch(giftCardInf(giftFormData));
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
    console.log(formData);
    // ... submit to API
  };

  return (
    <Container fluid>
      <Row className="giftcard-preview-nav py-2 ">
        <Col className="d-flex flex-column ml-5">
          <img className="logo-img " src={logo} alt="" />
          <span className="mr-auto">www.impulsgaming.com</span>
        </Col>
      </Row>
      <Container className="mt-5 textColor">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Col>
              <h2>Give a Gift</h2>
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
                <Col sm={4}>
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
              <Form.Group>
                <Form.Label column sm={2}>
                  To*
                </Form.Label>

                <Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      required
                      // onChange={handleChange}
                      onChange={handleName}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Last name"
                      required
                      // onChange={handleChange}
                      onChange={handleSurname}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label column sm={2}>
                  From*
                </Form.Label>

                <Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      required
                      // onChange={handleChange}
                      onChange={handleSenderName}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Last name"
                      required
                      // onChange={handleChange}
                      onChange={handleSenderSurname}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  // onChange={handleChange}
                  onChange={handleMessage}
                  maxLength={100}
                />
              </Form.Group>
              <h6>Schedule Delivery</h6>

              <Form.Group>
                <Form.Label>Send To*</Form.Label>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Email </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Recipient Email"
                        // onChange={handleChange}
                        onChange={handleEmail}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>WhatsApp Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Recipient WhatsApp Number"
                        required
                        // onChange={handleChange}
                        onChange={handlePhone}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Delivery Date *</Form.Label>
                <DatePicker
                  selected={sendDate}
                  onChange={(date) => setSendDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </Form.Group>
              <button className="checkout-btn px-3 px-4 mr-auto" type="submit">
                CheckOut
              </button>
            </Col>
          </Form>
          <Col>
            <div className="d-flex giftcard-section ml-3 py-0 pr-5">
              <div className="mr-2 giftcard-preview py-3 px-2">
                <img className="logo-img mb-5" src={logo} alt="impuls logo" />
                <div>
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
              <div className=" ml-5 d-flex flex-column justify-content-center">
                <div>
                  <h3 className="mb-5 pb-2">Impuls Gift Card</h3>
                  <h6
                    className="d-flex justify-content-end  "
                    style={amount ? { color: "red" } : { color: "black" }}
                  >
                    $USD <span className="ml-2 ">{amount}</span>
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default GiftCard;
