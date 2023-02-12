import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";
import { Button } from "react-bootstrap";
const LoggedInOrganizer = ({ clicked, user, profileClicked }) => {
  const [organizerAccountClicked, setOrganizerAccountClicked] = useState(false);
  const handleOrganizerAccountClicked = () => {
    organizerAccountClicked
      ? setOrganizerAccountClicked(false)
      : setOrganizerAccountClicked(true);
  };
  return (
    <>
      <Link
        onClick={clicked}
        className="d-flex justify-content-between textColor align-items-center "
      >
        <div>
          <Avatar
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
            alt="Profile Avatar"
            className="avatar"
            width={40}
            height={40}
          />
          <span className="ml-1">{user.nickname}</span>
        </div>
        <Icon.CaretDownFill size={15} />
      </Link>
      <div className="d-flex flex-column align-items-start">
        <Link
          onClick={profileClicked}
          className={`my-3  ${organizerAccountClicked ? "" : "textColor"}`}
        >
          <span>Account</span>
        </Link>
        <Link className="textColor">
          <span>Logout</span>
        </Link>
      </div>
    </>
  );
};
export default LoggedInOrganizer;
