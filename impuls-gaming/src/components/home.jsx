import GiftCard from "./GiftCard";
import HomeUpdates from "./HomeUpdates";
import Jumbotron from "./Jumbotron";

const Home = () => {
  return (
    <div className="home">
      <Jumbotron />
      <HomeUpdates />
      <GiftCard />
    </div>
  );
};
export default Home;
