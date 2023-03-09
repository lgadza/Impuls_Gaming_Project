import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import {
  registerTournament,
  getTournaments,
  postProfilePicture,
  getMe,
} from "../../redux/actions";
import DeleteConfirm from "../../components/DeleteConfirm";
import Avatar from "../../components/Avatar";

const OrganizerAccount = ({ user }) => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const signInCredentials = useSelector(
    (state) => state.adminToken.accessToken
  );
  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();
  const [nickName, setNickName] = useState(undefined);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);
  const [email, setEmail] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const handleNickname = (e) => {
    setNickName(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const [avatar, setAvatar] = useState(null);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTerms = (e) => {
    termsCheck ? setTermsCheck(false) : setTermsCheck(true);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.files[0]);
  };

  // formData.append("post", files[0]);
  const userData = {
    nickname: nickName,
    name: name,
    surname: surname,
    email: email,
    terms: termsCheck,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(avatar);
  const handleUpdate = () => {
    setUpdate(true);
    dispatch(registerTournament(userData, tournament._id));
    dispatch(getTournaments());
  };
  const handleData = () => {
    //  await dispatch(deleteOrganiser(tournament._id));
    //  dispatch(getTournaments());
    handleCloseDelete();
  };

  const handleAvatarUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);
    const URL = process.env.REACT_APP_BE_PROD_URL;
    axios
      .post(`${URL}/files/${user._id}/avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(getMe(signInCredentials.accessToken));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row
      className="-d-flex my-5 w-100 ml-auto 
    organizer-account pb-2 organizer"
    >
      <Col
        // onClick={handleShow}
        lg={8}
        md={8}
        sm={8}
        xs={12}
        xl={8}
        className="d-xs-none d-sm-none d-md-none d-lg-block"
      >
        {name && email && surname && termsCheck && nickName && update && (
          <div className="registration-card mx-auto mt-5">
            <Alert key={"success"} variant={"success"}>
              <Icon.CheckCircle size={15} />
              <span>Updated</span>
            </Alert>
          </div>
        )}
        {/* {(!name ||
          !email ||
          !surname ||
          !termsCheck ||
          !nickName ||
          !update) && (
          <div className="registration-card mx-auto mt-5">
            <Alert key={"warning"} variant={"danger"}>
              <Icon.XCircle size={15} />
              <span>Make sure all the fields are filled</span>
            </Alert>
          </div>
        )} */}
        <Row>
          <Col>
            <div className="d-flex  flex-column my-3">
              <h4 className="d-flex">Edit your profile</h4>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex"> Nickname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.nickname}
                  onChange={handleNickname}
                />
                <span className="d-flex my-3">
                  <strong>Information</strong>
                </span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex"> Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={user.email}
                  onChange={handleEmail}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.name}
                  onChange={handleName}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.surname}
                  onChange={handleSurname}
                />
              </Form.Group>
              <span className="d-flex my-3">
                <strong>Organizer</strong>
              </span>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Impuls Gaming"
                  onChange={handleSurname}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="d-flex">Position </Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  placeholder="Admin"
                  onChange={handleSurname}
                />
              </Form.Group>
              <div className="d-flex">
                <Button
                  // disabled={true}
                  type="submit"
                  onClick={handleUpdate}
                  className="primary-btn w-25 mr-3  textColor"
                >
                  <small>Back</small>
                </Button>
                <Button
                  // disabled={true}
                  type="submit"
                  onClick={handleUpdate}
                  className="primary-btn w-25   textColor"
                >
                  <small>Update</small>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Col>
      <Col lg={2}></Col>
      <Col lg={2} className="d-flex flex-column justify-content-between">
        <div className="mt-5">
          <Avatar
            src={user.avatar}
            alt="Profile Avatar"
            className="avatar"
            width={100}
            height={100}
          />
          <Row>
            <Col>
              <label className="textColor3 mt-2" htmlFor="profile">
                Change profile
              </label>
              <input
                id="profile"
                type="file"
                style={{ visibility: "hidden" }}
                label="Change profile picture"
                onChange={handleAvatar}
              />
              {avatar && (
                <Button
                  type="submit"
                  onClick={handleAvatarUpload}
                  className="primary-btn w-100  textColor"
                >
                  Update Profile
                </Button>
              )}
            </Col>
          </Row>
        </div>
        <Button
          // disabled={true}
          type="submit"
          onClick={() => {
            setShowDelete(true);
          }}
          className="primary-btn w-100  textColor"
        >
          <small>Delete Account</small>
        </Button>
      </Col>
      <Modal
        show={showDelete}
        size="lg"
        onHide={handleCloseDelete}
        className="modal-hieght textColor"
      >
        <Modal.Body className="py-0 mt-3 px-4">
          {/* {OrganizerAccount && ( */}
          <Container>
            <Row>
              <h6 className="my-5 ">
                Are you sure you want to delete{" "}
                <strong className="textColor2 mx-2">Louis Gadza</strong>
              </h6>
              <div className="my-5 ml-auto">
                <Button onClick={handleCloseDelete} variant="outline-primary">
                  Cancel
                </Button>
                <Link>
                  <Button
                    type="submit"
                    onClick={handleData}
                    className="primary-btn ml-3 textColor"
                  >
                    <Icon.Trash size={13} />
                    <small>Delete</small>
                  </Button>
                </Link>
              </div>
            </Row>
          </Container>
          {/* )} */}
        </Modal.Body>
      </Modal>
    </Row>
  );
};
export default OrganizerAccount;
