import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap-v5";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import NewsCard from "../../components/NewsCard";
import "../../styling/news.css";
const News = () => {
  return (
    <div className="home  main-container">
      <NavigationBar />
      <Container>
        <Row>
          {[...Array(6)].map((newsCard, index) => {
            return (
              <Col md={4} className="mb-3">
                <NewsCard />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default News;
