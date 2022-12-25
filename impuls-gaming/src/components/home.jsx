import HomeUpdates from "./HomeUpdates";
import Jumbotron from "./Jumbotron";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <Jumbotron />
      <HomeUpdates />
    </div>
  );
};
export default Home;
