import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import baked_chicken from "../../../../assets/banner-images/baked-chicken.jpg";
import beaf from "../../../../assets/banner-images/beaf.jpg";
import burgar from "../../../../assets/banner-images/burgar.jpg";
import chiken_skewers from "../../../../assets/banner-images/chicken-skewers.jpg";
import delicious_lobster from "../../../../assets/banner-images/delicious-lobster.jpg";
import noodles from "../../../../assets/banner-images/noodles.jpg";
import penne_pasta from "../../../../assets/banner-images/penne-pasta.jpg";
import porata from "../../../../assets/banner-images/porata.jpg";
import hungry from "../../../../assets/banner-images/hungry.png";

const Banner = () => {
  return (
    <div className=" lg:flex">
      <div className="lg:w-[70%] text-center">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div className="">
            <img src={beaf} />
          </div>
          <div>
            <img src={delicious_lobster} />
          </div>
          <div>
            <img src={baked_chicken} />
          </div>
          <div>
            <img src={burgar} />
          </div>
          <div>
            <img src={chiken_skewers} />
          </div>
          <div>
            <img src={noodles} />
          </div>
          <div>
            <img src={penne_pasta} />
          </div>
          <div>
            <img src={porata} />
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center items-center lg:ml-4">
        <div className="-rotate-12 ">
          <div className="mt-10 lg:mt-0 ml-20 text-3xl font-lobster font-medium text-yellow-600">
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
  );
};

export default Banner;
