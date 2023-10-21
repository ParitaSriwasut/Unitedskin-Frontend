import myBestSeller from "../../images/bestseller.png";
import myKids from "../../images/kidsskincare.jpeg";
import menSkincare from "../../images/menskincare.jpeg";
import womenSkincare from "../../images/womenskincare.jpeg";
import unisex from "../../images/unisex.jpeg";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="flex flex-col">
      {/* need to fix this img best seller */}
      <img className="inset-5 " alt="bestSeller" src={myBestSeller} />
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-semibold leading-7 xl:leading-9 text-natural">
                Shop By Category
              </h1>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 w-full"> */}
            <div className="flex justify-between w-full">
              <Link to="/products?categoryName=WOMEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={womenSkincare}
                    alt="girl-image"
                  />
                  <button className="bg-white text-natural focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10  text-base font-medium leading-none py-3 w-36">
                    Women
                  </button>
                  <div className="opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </Link>
              {/* <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0"> */}

              <Link to="/products?categoryName=WOMEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={myKids}
                    alt="kids-image"
                  />
                  <button className="bg-white text-natural focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10  text-base font-medium leading-none py-3 w-36">
                    Kids
                  </button>
                  <div className="opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </Link>

              <Link to="/products?categoryName=UNISEX">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={unisex}
                    alt="unisex-image"
                  />
                  <button className="bg-white text-natural focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray bottom-4 z-10  text-base font-medium leading-none py-3 w-36">
                    Unisex
                  </button>
                  <div className="opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </Link>

              <Link to="/products?categoryName=MEN">
                <div className="group flex-col justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={menSkincare}
                    alt="men-image"
                  />
                  <button className="bg-white text-natural focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10  text-base font-medium leading-none py-3 w-36">
                    Men
                  </button>
                  <div className="opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
