import { Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import video from "../videos/Bunker_-_The_Gaming_Lounge__Design_Walkthrough_AdobeExpress.mp4";
import coverImg from "../img/fifa23.jpg";

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
        </div>
      </div>
      <div className="into mt-5 textColor ">
        <div className="into-content d-lg-none pt-5  pb-5">
          <h1 className="textColor3">Live experience</h1>
          <h1 className="textColor  h2-join-call">Join Impuls community </h1>
        </div>
      </div>
    </Container>
  );
};
export default Jumbotron;
