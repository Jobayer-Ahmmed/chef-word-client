import React from "react";
import hungry from "../../../assets/banner-images/hungry.png";

const Hungry = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="hungry w-[1000px] h-[400px] mt-10 bg-fixed">
      <div className="flex justify-center items-center lg:ml-4">
        <div className="-rotate-12 ">
          <div className="mt-10 lg:mt-0 ml-20 text-3xl font-lobster font-medium text-gray-100">
            <p>Our foods</p>
            <p className="ml-20">can make you </p>
            <p className="ml-52">hungry</p>
          </div>
          <div>
            <img src={hungry} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hungry;
