import { useState } from "react";
import { Col } from "react-bootstrap";
import { Card, Container, Row } from "react-bootstrap-v5";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import NewsCard from "../../components/NewsCard";
import "../../styling/news.css";
import * as Icon from "react-bootstrap-icons";

const News = () => {
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore(true);
  };
  const allComments = useSelector(
    (state) => state.reservationsComments.reservationsComments
  );
  return (
    <div className="home  main-container">
      <NavigationBar />
      <Container className="mt-5 tournament_page news-page">
        <span className="close-readMore">
          <Icon.XLg size={20} />
        </span>
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
          <Row>
            <Col md={9}>
              <div className="mb-4">
                <img
                  className="news-image"
                  src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/kh/KHDZ1QE7U7EY1666055554463.jpg"
                  alt="Call of duty"
                />
              </div>
              <h5 className="d-flex mb-3">
                New game release set to be next week Monday
              </h5>
              <div className="text-left">
                The UK regulator, the Competition and Markets Authority (CMA),
                has published an addendum to its provisional findings on
                Microsoft's Activision Blizzard acquisition and has now narrowed
                its scope of concerns. The CMA has received new evidence that
                has led it to conclude that if the acquisition is approved it
                won't significantly lessen competition in the video game console
                market in the UK. The new evidence shows that Microsoft would
                lose significant money if it were to make Call of Duty exclusive
                to Xbox consoles and this would incentivize Microsoft to
                continue to release Call of Duty games on PlayStation consoles.
                "We appreciate the CMA’s rigorous and thorough evaluation of the
                evidence and welcome its updated provisional findings," said the
                corporate vice president and deputy general counsel for
                Microsoft Rima Alaily in a statement sent to The Verge. "This
                deal will provide more players with more choice in how they play
                Call of Duty and their favourite games. We look forward to
                working with the CMA to resolve any outstanding concerns."
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
                          <small className="text-left ">
                            {comment.user.name} {comment.user.surname}
                          </small>
                          <span className="text-left mb-2 mt-1">
                            {comment.comment}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>No comments available</div>
              )}
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
        )}
      </Container>
      <Footer />
    </div>
  );
};
export default News;
