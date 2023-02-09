import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTournament, getTournaments } from "../redux/actions";
const URL = process.env.REACT_APP_BE_PROD_URL;

const DeleteConfirm = ({ visible, onhide, tournamentId }) => {
  const dispatch = useDispatch();

  const tournaments = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournaments.tournaments.find(
    (name) => name.name === tournamentId
  );

  const handleData = async () => {
    await dispatch(deleteTournament(tournament._id));
    await onhide();
    dispatch(getTournaments());
  };

  return (
    <Modal
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght textColor"
    >
      <Modal.Body className="py-0 mt-3 px-4">
        {tournamentId && (
          <Container>
            <Row>
              <h6 className="my-5 ">
                Are you sure you want to delete{" "}
                <strong className="textColor2 mx-2">{tournamentId}</strong>
                tournament
              </h6>
              <div className="my-5 ml-auto">
                <Button onClick={onhide} variant="outline-primary">
                  Cancel
                </Button>
                <Link>
                  <Button
                    type="submit"
                    onClick={handleData}
                    className="primary-btn ml-3 textColor"
                  >
                    <Icon.Trash size={20} />
                    Delete
                  </Button>
                </Link>
              </div>
            </Row>
          </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};
export default DeleteConfirm;
