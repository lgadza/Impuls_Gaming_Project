import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";

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
        // onClick={clicked}
        className="d-flex justify-content-between textColor align-items-center "
      >
        <div>
          <Avatar
            src={user.avatar}
            alt="Profile Avatar"
            className="avatar"
            width={40}
            height={40}
          />
          <span className="ml-4">
            <strong>{user.nickname}</strong>
          </span>
        </div>
      </Link>
      <div className="d-flex flex-column align-items-start">
        <Link
          // onClick={profileClicked}
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
