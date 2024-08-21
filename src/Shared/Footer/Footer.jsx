import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Rating from "react-rating";

const Footer = () => {
  return (
    <div className="bg-yellow-800 text-gray-100 mt-10 pt-10">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-10 md:gap-32">
        <div>
          <h4 className="text-center mb-4 text-xl font-medium">Join us on</h4>
          <div className="flex justify-start text-xl gap-4">
            <ImFacebook2 />
            <FaInstagram className="text-2xl" />
            <BsTwitterX />
          </div>
        </div>
        <div>
          <h4 className="text-center text-xl font-medium">Rate us</h4>
          <div>
            <Rating
              emptySymbol={<span className="text-gray-400 text-4xl">☆</span>}
              fullSymbol={<span className="text-yellow-500 text-4xl">★</span>}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 pb-5 flex justify-center items-center">
        <small>Copyright © 2024 - All right reserved by Chef World.</small>
      </div>
    </div>
  );
};

export default Footer;
