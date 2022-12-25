import GiftCard from "./GiftCard";
import HomeUpdates from "./HomeUpdates";
import Jumbotron from "./Jumbotron";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <Jumbotron />
      <HomeUpdates />
      <GiftCard />
    </div>
  );
};
export default Home;
