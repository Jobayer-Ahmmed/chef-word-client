import delivary from "../../../assets/delivary/delivary.png";

const Delivary = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <div>
        <div className="flex justify-center items-center  text-3xl text-yellow-800 font-semibold border-y-[3px] py-4 px-8">
          <h2>Delivary Service</h2>
        </div>
        <div className="mt-2 mb-8">
          <p>Just order us, food will come to your home</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 justify-center items-center">
        <img src={delivary} alt="" />
        <div>
          <p className="text-yellow-700 text-4xl font-medium">
            Just call us at 01XXX XXXXXXX
          </p>
          <p className="text-3xl mt-4">Food will come only 30 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Delivary;
