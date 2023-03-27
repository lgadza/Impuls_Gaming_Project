import React from "react";
import { Col, Row } from "react-bootstrap-v5";
import Avatar from "./Avatar";

function TeamCard() {
  return (
    <Col className="col-sm-10 col-sm-offset-1">
      <Col className="col-md-4 col-sm-6">
        <div className="team-card-container">
          <div className="team-card">
            <div className="front">
              <div className="team-cover">
                <img
                  src="https://ct-freebies.herokuapp.com/images/rotating_card_thumb2.png"
                  alt=""
                />
              </div>
              <div className="team-user">
                <Avatar
                  src={
                    "https://ct-freebies.herokuapp.com/images/rotating_card_profile3.png"
                  }
                  width={80}
                  height={80}
                  alt="avatar"
                />
              </div>
              <div className="team-content">
                <div className="team-main">
                  <h6 className="name">Louis Gadza</h6>
                  <p className="profession">CEO</p>
                  <div className="d-flex flex-column align-items-start">
                    <spam>
                      <i className="fa fa-map-marker fa-fw text-muted"></i>
                      <small>Paris, France</small>
                    </spam>
                    <spam>
                      <i className="fa fa-building-o fa-fw text-muted"></i>
                      <small>Impuls Gaming</small>
                    </spam>
                    <span>
                      <i className="fa fa-envelope-o fa-fw text-muted"></i>
                      <small>louis@impulsgaming@com</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="header">
                <h5 className="motto">
                  To be or not to be, this is my awesome motto!
                </h5>
              </div>
              <div className="team-content">
                <div className="team main">
                  <h4 className="text-center">Experience</h4>
                  <p>In the project since 2011</p>
                  <h4 className="text-center">Areas of Expertise</h4>
                  <p>
                    Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                    others...
                  </p>
                </div>
                <div className="team-footer">
                  <div className="social-links text-center">
                    <a href="http://cretive-tim.com">
                      <i className="fa fa-facebook fa-fw"></i>
                    </a>
                    <a href="http://cretive-tim.com">
                      <i className="fa fa-google-plus fa-fw"></i>
                    </a>
                    <a href="http://cretive-tim.com">
                      <i className="fa fa-twitter fa-fw"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Col>
  );
}
export default TeamCard;
