import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fifa23 from "../img/fifa23.jpg";

const CreateTournament = ({ visible, onhide }) => {
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght textColor"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create new tournament</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container>
          <Row className="mx-auto w-100  mb-5">
            <Form className="w-100">
              <Form.Group className="mb-3 w-100">
                <Form.Label>Tournament name</Form.Label>
                <Form.Control className="w-100" type="text" />
              </Form.Group>
            </Form>
          </Row>
          <div className="my-2">Discipline</div>
          <Row>
            {[...Array(4)].map((discipline) => (
              <Col md={2} className="mr-5">
                <img className="discipline-img" src={fifa23} alt="" />
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <Form className="w-100">
                <Form.Group className="my-3 w-100">
                  <Form.Control
                    className="w-100"
                    type="text"
                    placeholder="Chosen game"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <div className="my-2">Platform</div>
          <Row>
            <Col>
              <Button className="primary-btn textColor" size="lg">
                Playstation 5
              </Button>
            </Col>
            <Col>
              {" "}
              <Button className="primary-btn textColor" size="lg">
                Playstation 4
              </Button>
            </Col>
            <Col>
              {" "}
              <Button className="primary-btn textColor" size="lg">
                XBox
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="w-100">
                <Form.Group className="my-3 w-100">
                  <Form.Label>Size</Form.Label>
                  <Form.Control className="w-100" type="number" min={0} />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className="my-5 ">
            <div className="ml-auto">
              <Button onClick={onhide} variant="outline-primary">
                Cancel
              </Button>
              <Button className="primary-btn ml-3 textColor">
                <Icon.Plus size={30} />
                Create
              </Button>
            </div>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default CreateTournament;
