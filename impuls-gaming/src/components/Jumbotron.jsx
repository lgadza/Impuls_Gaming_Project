import { Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import video from "../videos/Bunker_-_The_Gaming_Lounge__Design_Walkthrough_AdobeExpress.mp4";
import coverImg from "../img/fifa23.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <Container className="jumbotron" fluid>
      <video id="video-background" preload autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="into  ">
        <div className="into-content d-none d-lg-block pb-5">
          <h1 className="h1-join-call ">JOIN NOW</h1>
          <h2 className="h2-join-call py-2">
            AND STAND A CHANCE TO WIN CASH PRIZE{" "}
          </h2>
          {/* <Link>
            <Button variant="danger" className="register-btn">
              Make a reservation
            </Button>
          </Link> */}
        </div>
      </div>
      <div className="into mt-5 textColor ">
        <div className="into-content d-lg-none pt-5  pb-5">
          <h1 className="textColor3">Live experience</h1>
          <h1 className="textColor  h2-join-call1">Join Impuls community </h1>
        </div>
      </div>

      <div className=" d-none d-lg-block reservation-btn-container">
        <div className="d-flex giftcard-preview-nav register-card-top  justify-content-between py-1 px-4 ">
          <div className="d-flex py-4 w-100 justify-content-center">
            <h6 className="d-flex textColor reg-border-right pr-4">
              Open stations
            </h6>
            <h6 className="d-flex text-success pl-4">5 stations</h6>
          </div>
        </div>
        <div className="bg-success justify-content-center d-flex px-3 text-white py-2">
          Reserve a station before its full{" "}
        </div>
        <div class="arrow">
          <a href=""></a>
        </div>
      </div>
    </Container>
  );
};
export default Jumbotron;
