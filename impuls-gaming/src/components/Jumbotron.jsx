import { Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import video from "../videos/Bunker_-_The_Gaming_Lounge__Design_Walkthrough_AdobeExpress.mp4";

const Jumbotron = () => {
  return (
    <Container className="jumbotron" fluid>
      <video id="video-background" preload autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="into  ">
        <div className="into-content pb-5">
          {/* <h1 className="h1">THE PREMIER GAMING LOUNGE</h1>
          <h6 className="h6-border ">
            Play, eat, enjoy in our upscale game lounge
          </h6> */}
          <h1 className="h1-join-call ">JOIN NOW</h1>
          <h2 className="h2-join-call">
            AND STAND A CHANCE TO WIN CASH PRIZE{" "}
          </h2>
          <span className="dollar-prize px-3">$$$</span>
        </div>
      </div>
    </Container>
  );
};
export default Jumbotron;
