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
      <VideoMockup />

      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-semibold leading-7 xl:leading-9 text-neutral border border-neutral border-4 p-8 ">
                Shop By Category
              </h1>
            </div>

            <div className="flex justify-between w-full">
              <Link to="/products?categoryName=WOMEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={womenSkincare}
                    alt="girl-image"
                  />
                  <button className="bg-neutral text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray z-10  text-xl text-bold leading-none py-3 w-36 mt-5 ">
                    Women
                  </button>
                </div>
              </Link>

              <Link to="/products?categoryName=WOMEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={myKids}
                    alt="kids-image"
                  />
                  <button className="bg-neutral text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10   text-xl text-bold leading-none py-3 w-36 mt-5">
                    Kids
                  </button>
                </div>
              </Link>

              <Link to="/products?categoryName=UNISEX">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={unisex}
                    alt="unisex-image"
                  />
                  <button className="bg-neutral text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray bottom-4 z-10   text-xl text-bold leading-none py-3 w-36 mt-5">
                    Unisex
                  </button>
                </div>
              </Link>

              <Link to="/products?categoryName=MEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={menSkincare}
                    alt="men-image"
                  />
                  <button className="bg-neutral text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10  text-xl text-bold leading-none py-3 w-36 mt-5">
                    Men
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}
