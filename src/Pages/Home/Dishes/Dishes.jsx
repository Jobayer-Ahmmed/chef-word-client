import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Dishes = () => {
  const [allData, setAllData] = useState();

  useEffect(() => {
    axios.get("/dishes.json").then((data) => setAllData(data.data));
  }, []);
  return (
    <div className="text-yellow-800">
      <h2 className="mt-10 mb-6 text-center text-3xl text-yellow-800 font-bold">
        Delicious Dishes
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10 lg:mx-28">
        {/* card start */}
        {allData?.map((data, id) => (
          <div key={id} className="w-56 border-4 border-yellow-800 dish_div">
            <div>
              <img
                className="w-[216px] h-[152px] dish_image"
                src={data.image}
                alt=""
                style={{ transformOrigin: "center center" }}
              />
            </div>
            <p className="text-lg font-medium mt-2 ml-2">{data.foodName}</p>
            <p className="ml-2 mb-4">{data.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
