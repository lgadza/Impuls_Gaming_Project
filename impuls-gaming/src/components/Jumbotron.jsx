import { Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import { useState, useRef, useCallback } from "react";

const Jumbotron = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef();

  const onReady = useCallback(() => {
    if (!isReady) {
      const timeToStart = 7 * 60 + 12.6;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);
  return (
    <Container className="jumbotron" fluid>
      <ReactPlayer
        id="video-background"
        playing={isPlaying}
        width="100%"
        height="90%"
        autoplay
        fluid
        loop
        muted
        url="https://youtu.be/pKJKH5uyHA4"
        onReady={onReady}
      />
      <div className="into py-2 my-auto">
        <h1>THE PREMIER GAMING LOUNGE</h1>
        <h6>Play, eat, enjoy in our upscale game lounge</h6>
      </div>
    </Container>
  );
};
export default Jumbotron;
