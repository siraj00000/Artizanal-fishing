import { LogoJoranFooter } from "../../assets";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import CustomLeafLetMap from "../Other/GoogleMap/LeafletMap";

const Footer = () => {
  return (
    <footer>
      <div className="relative md:h-[1000px] h-500 pb-5">
        <div className="p-8per z-50">
          <CustomLeafLetMap />
        </div>

        {/* Desktop View Only */}
        <div className="pt-10 pb-0 mt-16 flex items-center justify-between max-md:hidden px-8per bg-transparent w-full z-50 absolute bottom-0">
          <div className="">
            <div className="flex items-center gap-14">
              <div className="flex items-center gap-2 text-white text-36">
                <FaFacebookF className="bg-main p-1" />
                <BsTwitter className="bg-main p-1" />
                <BsInstagram className="bg-main p-1" />
              </div>

              <ul className="flex items-center gap-8 text-18 leading-24 text-white">
                <li className="blue-bullet">Home</li>
                <li className="blue-bullet">Statistics</li>
                <li className="blue-bullet">Product</li>
              </ul>
            </div>
            <p className="mt-10 text-18 leading-24 text-white">
              Copyright notice: © 2023 [Your Company Name]. All rights reserved.
            </p>
          </div>
          <img
            src={LogoJoranFooter}
            alt=""
            loading="lazy"
            className="w-184.52 h-184.52"
          />
        </div>

        {/* Mobile View Only */}
        <div className="w-full absolute bottom-0 px-8per md:hidden">
          <div className="flex items-center justify-between mb-5">
            <img
              src={LogoJoranFooter}
              alt=""
              loading="lazy"
              className="w-80 h-80"
            />
            <div className="flex items-center gap-2 text-36 text-white">
              <FaFacebookF className="bg-main p-1" />
              <BsTwitter className="bg-main p-1" />
              <BsInstagram className="bg-main p-1" />
            </div>
          </div>
          <div className="w-full">
            <ul className="flex items-center justify-center gap-8 text-18 leading-24 text-white">
              <li className="blue-bullet">Home</li>
              <li className="blue-bullet">Statistics</li>
              <li className="blue-bullet">Product</li>
            </ul>
          </div>
          <hr className="border-main my-4" />
          <div className="">
            <p className="text-13 leading-24 text-white text-center mb-5">
              Copyright notice: © 2023 [Your Company Name]. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
