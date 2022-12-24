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
        <div className="into-content py-2">
          <h1>THE PREMIER GAMING LOUNGE</h1>
          <h6 className="h6-border">
            Play, eat, enjoy in our upscale game lounge
          </h6>
        </div>
      </div>
    </Container>
  );
};
export default Jumbotron;
