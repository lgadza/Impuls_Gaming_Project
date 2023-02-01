import { Col, Container, Row, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import profilePic from "../../img/Louis profile .JPG";
import Table from "./Table";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import Tournaments from "./Tournaments";
import Overview from "./Overview";
import UserProfile from "./UserProfile";

const UserPage = () => {
  const [key, setKey] = useState("activation");
  return (
    <Container fluid className="textColor user-page main-container ">
      <Row className="mb-3 px-5 w-100 py-3 d-flex align-items-center justify-content-between position-fixed giftcard-preview-nav">
        <div>
          <Link to="/" className="textColor">
            Homepage
          </Link>
          <Icon.CaretRightFill size={10} />

          <Link className="textColor">Louis Gadza</Link>
        </div>
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle>
              <img src={profilePic} className="small-profile-img" alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div>
                  <span>Louis Gadza</span>
                  <img
                    src={profilePic}
                    className="small-profile-img ml-2"
                    alt=""
                  />
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor mx-2">
                  Registrations
                </Link>
              </Dropdown.Item>
              <hr />
              <Dropdown.Item>
                <Link to="/sign-in" className="textColor mx-2">
                  Log out
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>
      <Container>
        <Row>
          <Col
            lg={4}
            className="gift-container userProfile  d-flex flex-column  mt-5 side-bar"
          >
            <UserProfile />
          </Col>

          <Col lg={8} className=" mt-5 side-bar d-none d-lg-block">
            <Tabs
              onSelect={(k) => setKey(k)}
              className="mb-3  d-flex justify-content-center  textColor w-100"
            >
              <Tab className="textColor2" eventKey="overview" title="Overview">
                <Overview />
              </Tab>
              <Tab className="w-100" eventKey="table" title="Table">
                <Table />
              </Tab>
              <Tab eventKey="fixture" title="Fixture"></Tab>
              <Tab eventKey="tournaments" title="Tournaments">
                <Tournaments />
              </Tab>
              <Tab eventKey="friends" title="Friends">
                <Chat />
              </Tab>
            </Tabs>
          </Col>
          <Col sm={12} className=" mt-5 side-bar  d-lg-none">
            <Tabs defaultActiveKey="information" className="mb-3  " justify>
              <Tab
                eventKey="information"
                title={<Icon.Speedometer2 size={20} />}
              >
                <Overview />
              </Tab>
              <Tab eventKey="matches" title={<Icon.Table size={20} />}>
                <Table />
              </Tab>
              <Tab
                eventKey="participants"
                title={<Icon.Controller size={20} />}
              >
                <Tournaments />
              </Tab>
              <Tab eventKey="rules" title={<Icon.ChatDots size={20} />}>
                <Chat />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default UserPage;
