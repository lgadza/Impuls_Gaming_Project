import { useState } from "react";
import { Col } from "react-bootstrap";
import { Button, Card, Container, Form, Row } from "react-bootstrap-v5";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import NewsCard from "../../components/NewsCard";
import "../../styling/news.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const News = () => {
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore(true);
  };
  const user = useSelector((state) => state.me.me);
  const [comment, setComment] = useState("");

  const allComments = useSelector(
    (state) => state.reservationsComments.reservationsComments
  );
  const [isPressed, setIsPressed] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const handleMouseDown = () => {
    setIsPressed(true);
    setIsAnimated(false);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const handleClick = () => {
    setIsAnimated(true);
  };
  const handlePostComment = async () => {
    // await dispatch(
    //   postComment(accessToken.accessToken, { comment, user: user._id })
    // );
    // setComment("");
    // dispatch(getComments());
  };
  return (
    <div className="home  main-container">
      <NavigationBar />
      <Container className="mt-5 tournament_page">
        {!readMore && (
          <>
            <Row>
              <Col>
                <h5 className="d-flex mb-3">Trending</h5>
              </Col>
            </Row>
            <Row>
              {[...Array(6)].map((newsCard, index) => {
                return (
                  <Col md={4} className="mb-5">
                    <NewsCard handleReadMore={handleReadMore} />
                  </Col>
                );
              })}
            </Row>
          </>
        )}
        {readMore && (
          <>
            <Row className="news-page">
              <Col md={9}>
                <span className="close-readMore d-flex justify-content-end">
                  <Link className=" close-news-btn">
                    <Icon.XLg
                      onClick={() => setReadMore(false)}
                      className="p-0 m-0"
                      size={20}
                    />
                  </Link>
                </span>
              </Col>
            </Row>
            <h5 className="d-flex mb-3">
              New game release set to be next week Monday
            </h5>
            <Row>
              <Col md={9}>
                <div className="mb-4">
                  <img
                    className="news-image"
                    src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/kh/KHDZ1QE7U7EY1666055554463.jpg"
                    alt="Call of duty"
                  />
                </div>

                <div className="text-left">
                  The UK regulator, the Competition and Markets Authority (CMA),
                  has published an addendum to its provisional findings on
                  Microsoft's Activision Blizzard acquisition and has now
                  narrowed its scope of concerns. The CMA has received new
                  evidence that has led it to conclude that if the acquisition
                  is approved it won't significantly lessen competition in the
                  video game console market in the UK. The new evidence shows
                  that Microsoft would lose significant money if it were to make
                  Call of Duty exclusive to Xbox consoles and this would
                  incentivize Microsoft to continue to release Call of Duty
                  games on PlayStation consoles. "We appreciate the CMA’s
                  rigorous and thorough evaluation of the evidence and welcome
                  its updated provisional findings," said the corporate vice
                  president and deputy general counsel for Microsoft Rima Alaily
                  in a statement sent to The Verge. "This deal will provide more
                  players with more choice in how they play Call of Duty and
                  their favourite games. We look forward to working with the CMA
                  to resolve any outstanding concerns."
                </div>
                <h4 className="text-left my-3">Comments</h4>
                {allComments.length > 0 ? (
                  <div className="my-2">
                    {allComments.map((comment, index) => {
                      return (
                        <div className="d-flex">
                          <Avatar
                            src={comment.user.avatar}
                            className="img-circle img-responsive"
                            width={20}
                            height={20}
                            alt={comment.user.name}
                          />
                          <span className="d-flex  ml-3 flex-column">
                            <span className="text-left ">
                              {comment.user.name} {comment.user.surname}
                            </span>
                            <small className="text-left mb-2 mt-1">
                              {comment.comment}
                            </small>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>No comments available</div>
                )}
                <Row>
                  <Col className="d-flex justify-content-start">
                    {user && (
                      <Card>
                        <Card.Body style={{ width: "18rem" }}>
                          <Form.Group className="mb-2  d-flex align-items-center main-container2 send-content-container ">
                            <Form.Control
                              className="main-container2"
                              placeholder="Write a comment..."
                              as="textarea"
                              rows={2}
                              onChange={(e) => setComment(e.target.value)}
                              value={comment}
                            />
                            {comment && (
                              <Icon.Send
                                onClick={handlePostComment}
                                className="send-btn-icon p-2"
                                size={30}
                              />
                            )}
                          </Form.Group>

                          <div>
                            <Link>
                              <Button
                                type="submit"
                                onClick={() => {
                                  // handleUpdate()
                                  handleClick();
                                }}
                                className={`primary-btn textColor d-flex align-items-center justify-content-center ${
                                  isPressed ? "pressed" : ""
                                }`}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                              >
                                <span
                                  className={`content ${
                                    isPressed ? "pressed" : ""
                                  }`}
                                >
                                  <small>Add comment</small>
                                </span>
                                <span
                                  className={`particles ${
                                    isAnimated ? "animate" : ""
                                  }`}
                                >
                                  <span className="particle square red"></span>
                                  <span className="particle circle green"></span>
                                  <span className="particle square yellow"></span>
                                  <span className="particle square red"></span>
                                  <span className="particle square yellow"></span>
                                  <span className="particle circle green"></span>
                                  <span className="particle circle white"></span>
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    )}
                  </Col>
                </Row>
              </Col>
              <Col md={3}>
                <Card>
                  {/* <Card.Header>Story by</Card.Header> */}
                  <Card.Body>
                    <Card.Text className="d-flex justify-content-between">
                      <span>
                        Story by <strong className="mx-1">Louis Gadza</strong>
                      </span>
                      <Avatar
                        width={20}
                        height={20}
                        src={
                          "https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-m.jpg"
                        }
                        alt="avatar"
                      />
                    </Card.Text>
                    <Card.Text className="d-flex">29 Mar 2023</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};
export default News;
