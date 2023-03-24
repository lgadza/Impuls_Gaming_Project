import { Col, Row, Button } from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import CreateTournament from "./CreateTournament";
import useLocalStorage from "use-local-storage";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProjectsImgs, getTournaments, switcher } from "../../redux/actions";
import { io } from "socket.io-client";
import DeleteConfirm from "../../components/DeleteConfirm";
const DEV_URL = process.env.REACT_APP_BE_DEV_URL;
const socket = io(DEV_URL, { transports: ["websocket"] });
const Organizer = ({ projects }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [projectId, setProjectId] = useState("");
  const handleClose = () => setShow(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShow = () => {
    dispatch(getProjectsImgs());
    setShow(true);
  };
  const handleDeleteItem = () => {
    deleteItem === false ? setDeleteItem(true) : setDeleteItem(false);
  };
  const project = useSelector((state) => state.tournaments.tournaments);
  const user = useSelector((state) => state.me.me);
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  const themeColorCurrent = useSelector((state) => state.theme.theme);
  const themeColor = useSelector((state) => state.theme.theme);
  const [theme, setTheme] = useState(themeColor);

  useEffect(() => {
    dispatch(switcher(theme));
  }, [theme]);
  return (
    <>
      <div data-theme={themeColor} className="mb-4">
        <div className="d-flex justify-content-end mt-3">
          <span className="theme-switcher px-4 p-1">
            {themeColorCurrent === "light" ? (
              <Link>
                <Icon.MoonFill
                  onClick={() => {
                    setTheme("");
                  }}
                  size={20}
                  color="black"
                />
              </Link>
            ) : (
              <Link>
                <Icon.BrightnessHighFill
                  onClick={() => {
                    setTheme("light");
                  }}
                  color="white"
                  size={20}
                />
              </Link>
            )}
          </span>
        </div>
        <div className="d-flex mt-3 justify-content-between align-items-center">
          {" "}
          <h4 className="d-flex ml-5 mt-4 ">My Projects</h4>
          <Link onClick={handleDeleteItem}>
            {/* <Icon.Trash size={15} /> */}
            <span className="text-small textColor3">Delete tournament</span>
          </Link>
        </div>
        <Row id="create-btn" className="w-100">
          <div className="mx-5 mt-1 d-flex justify-content-center">
            <Button
              onClick={handleShow}
              variant="primary"
              size="lg"
              className=" d-flex justify-content-center create-btn"
            >
              <Icon.PlusLg size={20} color="green" />
              <span className=" text-success text-small text-nowrap">
                Create Project
              </span>
            </Button>
          </div>
        </Row>
        <Row className="-d-flex w-100 ml-auto organizer">
          <Col
            onClick={handleShow}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            xl={4}
            className="d-none d-lg-block"
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
                  <Icon.Trash size={15} color="red" />
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
      </div>
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
