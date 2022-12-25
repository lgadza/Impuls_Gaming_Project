import Footer from "./Footer";
import HomeUpdates from "./HomeUpdates";
import Jumbotron from "./Jumbotron";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <div className="home main-container">
      <NavigationBar />
      <Jumbotron />
      <HomeUpdates />
      <Footer />
    </div>
  );
};
export default Home;
