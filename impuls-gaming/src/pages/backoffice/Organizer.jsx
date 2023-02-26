import { Col, Row, Button } from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import CreateTournament from "./CreateTournament";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProjectsImgs, getTournaments } from "../../redux/actions";

import DeleteConfirm from "../../components/DeleteConfirm";
const Organizer = ({ projects }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShow = () => {
    dispatch(getProjectsImgs());
    setShow(true);
  };
  const handleDeleteItem = () => {
    deleteItem === false ? setDeleteItem(true) : setDeleteItem(false);
  };
  const project = useSelector((state) => state.tournaments.tournaments);

  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  return (
    <>
      <>
        <div className="d-flex justify-content-between align-items-center">
          {" "}
          <h1 className="d-flex ml-5 mt-4 ">My Projects</h1>
          <Link onClick={handleDeleteItem}>
            <Icon.Trash size={20} />
          </Link>
        </div>
        <Row id="create-btn" className="w-100">
          <div className="d-grid gap-2 mx-5 mt-4 d-flex justify-content-center">
            <Button
              onClick={handleShow}
              variant="primary"
              size="lg"
              className=" d-flex justify-content-center create-btn"
            >
              <Icon.PlusLg size={30} color="green" />
              <span className=" text-success">Create Project</span>
            </Button>
          </div>
        </Row>
        <Row className="-d-flex  w-100 ml-auto organizer">
          <Col
            onClick={handleShow}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            xl={4}
            className="d-xs-none d-sm-none d-md-none d-lg-block"
          >
            <span className="d-flex mt-5 align-items-center justify-content-center flex-column main-container2 plus-project  mx-4">
              <Icon.PlusLg size={100} color="green" />
              <span className="d-flex justify-content-center mx-4 align-items-center text-success">
                Create Project
              </span>
            </span>
          </Col>
          {project.tournaments.map((project, index) => (
            <Col
              className="tournament-card-edit"
              lg={6}
              md={6}
              xl={4}
              sm={6}
              xs={12}
              key={index}
            >
              {deleteItem && (
                <button
                  onClick={() => {
                    setShowDelete(true);
                    setProjectId(project);
                  }}
                  className="edit-tournament mx-auto "
                >
                  <Icon.Trash size={20} color="red" />
                </button>
              )}

              <Link to={`projects/overview/${project.name}`}>
                <span className="d-flex mt-5 align-items-center justify-content-center flex-column main-container2 plus-project  mx-4 mr-4">
                  <img
                    src={project.discipline_cover}
                    className="w-100 project-cover-img"
                    alt={project.discipline_cover}
                  />
                  <span className="d-flex justify-content-center mx-4 align-items-center py-2 textColor">
                    <strong>{project.name}</strong>
                  </span>
                </span>
              </Link>
            </Col>
          ))}
        </Row>
      </>
      <CreateTournament visible={show} onhide={handleClose} />
      <DeleteConfirm
        visible={showDelete}
        onhide={handleCloseDelete}
        tournamentId={projectId.name}
      />
    </>
  );
};
export default Organizer;
