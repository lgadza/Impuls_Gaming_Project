import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const DeleteConfirm = ({ visible, onhide, tournamentId }) => {
  const dispatch = useDispatch();
  const handleData = () => {
    // dispatch(createTournament(formValues));
    onhide();
  };

  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === tournamentId
  );
  console.log(tournament);
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
                <strong className="textColor2">
                  {tournament.tournament_name}{" "}
                </strong>
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
            {/* <Row className="mb-5 "></Row> */}
          </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};
export default DeleteConfirm;
