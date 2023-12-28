import myKids from "../../images/kidsskincare.jpeg";
import menSkincare from "../../images/menskincare.jpeg";
import womenSkincare from "../../images/womenskincare.jpeg";
import unisex from "../../images/unisex.jpeg";
import { Link } from "react-router-dom";
import VideoMockup from "./VideoMockup";
import AboutUs from "./AboutUs";

export default function Category() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-semibold leading-7 xl:leading-9 text-neutral border-4 border-neutral p-8 ">
                Shop By Category
              </h1>
            </div>

            <div className="flex justify-between w-full">
              <Link to="/products?categoryName=WOMEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full hover:opacity-75"
                    src={womenSkincare}
                    alt="girl-image"
                  />
                  <button className="bg-neutral text-white hover:bg-neutral4 z-10 text-xl text-bold leading-none py-3 w-36 mt-5 transition duration-300 ease-in-out">
                    Women
                  </button>
                </div>
              </Link>

              <Link to="/products?categoryName=WOMEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full hover:opacity-75"
                    src={myKids}
                    alt="kids-image"
                  />
                  <button className="bg-neutral text-white hover:bg-neutral4 bottom-4 z-10 text-xl text-bold leading-none py-3 w-36 mt-5 transition duration-300 ease-in-out">
                    Kids
                  </button>
                </div>
              </Link>

              <Link to="/products?categoryName=UNISEX">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full hover:opacity-75"
                    src={unisex}
                    alt="unisex-image"
                  />
                  <button className="bg-neutral text-white hover:bg-neutral4 z-10 text-xl text-bold leading-none py-3 w-36 mt-5 transition duration-300 ease-in-out">
                    Unisex
                  </button>
                </div>
              </Link>

              <Link to="/products?categoryName=MEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full hover:opacity-75"
                    src={menSkincare}
                    alt="men-image"
                  />
                  <button className="bg-neutral text-white hover:bg-neutral4 bottom-4 z-10  text-xl text-bold leading-none py-3 w-36 mt-5 transition duration-300 ease-in-out">
                    Men
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <VideoMockup />
      <AboutUs />
    </div>
  );
}
