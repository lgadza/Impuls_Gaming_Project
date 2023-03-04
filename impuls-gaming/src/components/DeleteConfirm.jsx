import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTournament,
  deleteTournamentParticipant,
  getTournaments,
} from "../redux/actions";

const DeleteConfirm = ({
  visible,
  onhide,
  tournamentId,
  from,
  participantId,
  tournamentWithParticipantId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tournaments = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournaments.tournaments.find(
    (name) => name.name === tournamentId
  );

  const handleData = async () => {
    if (from === "participants") {
      await dispatch(
        deleteTournamentParticipant(tournamentWithParticipantId, participantId)
      );
      await onhide();

      dispatch(getTournaments());
    } else {
      await dispatch(deleteTournament(tournament._id));
      await onhide();
      dispatch(getTournaments());
      if (from === "settings") {
        navigate("/backoffice");
      }
    }
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
              <span className="my-5 text-small ">
                Are you sure you want to delete{" "}
                <strong className="textColor2 text-danger mx-2">
                  {tournamentId}
                </strong>
              </span>
              <div className="my-5 ml-auto">
                <Button onClick={onhide} variant="outline-primary text-small">
                  Cancel
                </Button>
                <Link>
                  <Button
                    type="submit"
                    onClick={handleData}
                    className="primary-btn text-small ml-3 textColor"
                  >
                    <Icon.Trash size={15} />
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
