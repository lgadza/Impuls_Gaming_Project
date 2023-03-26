import { Card, Container } from "react-bootstrap-v5";
import Avatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import "../../styling/aboutUs.css";

const AboutUsPage = () => {
  return (
    <div className="home  main-container">
      <NavigationBar />
      <Container fluid className="px-0 mx-0">
        <div class="header">
          <img
            className="header"
            src="https://www.passengerterminaltoday.com/wp-content/uploads/2022/03/MG_9052.jpg"
            alt="Game"
          />
        </div>
      </Container>
      <Container className="textColor mt-5 tournament_page ">
        <div class="container">
          <div class="about">
            <div class="left">
              <h4>About us</h4>
              <hr style={{ backgroundColor: "white" }} />
              <p className="text-left">
                Welcome to our gaming zone! We are a business dedicated to
                providing the ultimate gaming experience to our customers. Our
                facility offers a range of video games, from classic favorites
                to the latest releases, ensuring that there is something for
                everyone to enjoy.
              </p>

              <p className="text-left">
                We understand that gaming is not just a hobby, but a passion for
                many people. That's why we've designed our space to be
                comfortable and inviting, with state-of-the-art equipment and
                plenty of room to move around. Our friendly and knowledgeable
                staff are always on hand to help you choose the perfect game or
                answer any questions you may have.
              </p>
            </div>
            <div class="right">
              <img
                src="https://element502.com/wp-content/uploads/2017/01/about-post.jpg"
                alt={"team"}
              />
            </div>
            <div class="clear"></div>
          </div>

          <div class="mission">
            <div class="left">
              <img
                src="https://www.boardeffect.com/wp-content/uploads/2021/08/Crafting-a-Good-Mission-Statement-The-Essential-Elements.jpg"
                alt={"team"}
              />
            </div>
            <div class="right">
              <h4>Mission Statement</h4>
              <hr style={{ backgroundColor: "white" }} />
              <p className="text-left">
                At our gaming zone, our mission is to create a welcoming and
                inclusive space where gamers of all ages and skill levels can
                come together to enjoy their passion. We believe that gaming is
                not just a form of entertainment, but a way to connect with
                others and build community.
              </p>

              <p className="text-left">
                To achieve our mission, we strive to provide the best possible
                gaming experience to our customers. We are committed to offering
                a wide variety of games and equipment, ensuring that there is
                something for everyone to enjoy. We also invest in the latest
                technology and equipment to ensure that our customers have
                access to the best possible gaming experience. In addition, we
                believe in fostering a sense of community among our customers.
                We regularly host tournaments and events, giving gamers the
                opportunity to connect with others who share their interests and
                build friendships.
              </p>
            </div>
            <div class="clear"></div>
          </div>

          <div class="team">
            <h4 className=" mb-3">
              {" "}
              Our Team
              <hr style={{ backgroundColor: "white" }} />
            </h4>

            <Card class="card settings-card mt-3" style={{ width: "15rem" }}>
              <Card.Header>
                <Avatar
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTo6P1b5otuJpQxDMh9qvcraV1gaWRukLMjA&usqp=CAU"
                  }
                  width={50}
                  height={50}
                  alt="TL"
                />
                <h5>Louis Gadza</h5>
                <h6>Technical Lead</h6>
              </Card.Header>
              <Card.Body>
                <span className="text-left">
                  With a strong background in software engineering, Louis Gadza
                  has a deep understanding of the technical requirements of our
                  gaming systems. He is able to identify and troubleshoot issues
                  quickly, and they work closely with other members of the team
                  to implement new features and improvements.
                </span>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default AboutUsPage;
