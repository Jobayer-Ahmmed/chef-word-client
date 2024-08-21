import Dishes from "../Dishes/Dishes";
import Banner from "../Banner/Banner";
import Hungry from "../Hungry/Hungry";
import Delivary from "../Delivary/Delivary";

const Home = () => {
  return (
    <div>
      <Banner />
      <Dishes />
      <Hungry />
      <Delivary />
    </div>
  );
};

export default Home;
