import Footer from "../components/Footer";
import HomeUpdates from "../components/HomeUpdates";
import Jumbotron from "../components/Jumbotron";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
  return (
    <div className="home  main-container">
      <NavigationBar />
      <Jumbotron />
      <HomeUpdates />
      <Footer />
    </div>
  );
};
export default Home;
