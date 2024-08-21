import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Dishes = () => {
  const [allData, setAllData] = useState();

  useEffect(() => {
    axios.get("/dishes.json").then((data) => setAllData(data.data));
  }, []);
  return (
    <div className="mt-16  text-yellow-800">
      <div className="flex justify-center items-center mb-6">
        <h2 className="mt-10 mb-6 text-3xl text-yellow-800 font-semibold border-y-[3px] py-4 px-8">
          Delicious Dishes
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 lg:mx-28">
        {/* card start */}
        {allData?.map((data, id) => (
          <div key={id} className="w-56 shadow-2xl dish_div">
            <div>
              <img
                className="w-[224px] h-[152px] dish_image"
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
