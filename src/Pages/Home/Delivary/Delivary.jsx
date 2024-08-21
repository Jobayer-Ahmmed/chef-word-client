import delivary from "../../../assets/delivary/delivary.png";

const Delivary = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-56 md:mt-64 mt-40">
      <div>
        <div className="flex justify-center items-center  text-3xl text-yellow-800 font-semibold border-y-[3px] py-4 px-8">
          <h2>Delivary Service</h2>
        </div>
        <div className="mt-2 mb-8">
          <p>Just order us, food will come to your home</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 justify-center items-center md:scale-100 scale-90">
        <img src={delivary} alt="" />
        <div >
          <p className="text-yellow-700 md:text-4xl text-2xl font-medium text-center">
            Just call us at 01XXX XXXXXXX
          </p>
          <p className="md:text-3xl text-xl mt-4 text-center">Food will come only 30 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Delivary;
