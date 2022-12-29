import React, { useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import profilePic from "../img/Louis profile .JPG";

const OffCanvas = ({ hide }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col className="align-items-center justify-content-between mx-1  ">
        <Link onClick={hide} to={``}>
          <Row>
            <Col className="d-flex justify-content-between mt-4">
              <img
                src={profilePic}
                alt=""
                className="small-profile-img2 mr-3"
              />
              <div className="d-flex flex-column text-left mr-auto">
                <span>
                  <strong>Louis Gadza</strong>
                </span>
                <span>Hi,how can I help you?...</span>
              </div>
              <span>12 min</span>
            </Col>

            <Col>
              <img className="search-profiles   " src="" alt="" />
            </Col>
          </Row>
        </Link>
      </Col>
    </>
  );
};

export default OffCanvas;
