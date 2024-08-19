import Dishes from "../Dishes/Dishes";
import Banner from "../Banner/Banner";
import Hungry from "../Hungry/Hungry";
// import BookATable from "./BookATable/BookATable"

const Home = () => {
  return (
    <div>
      <Banner />
      <Dishes />
      <Hungry />
    </div>
  );
};

export default Home;
