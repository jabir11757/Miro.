import React from "react";
import banner from "../../../assets/headerimage.png";
import rating from "../../../assets/rating.png";

const Banner = () => {
  return (
    <div className="flex p-6">
      <div className="h-[440px] w-[470px]">
        <p className="text-5xl font-bold text-[#050038]">
          Take ideas from better to best
        </p>
        <p className="text-lg text-gray-700 font-semibold mt-8">
          Miro is your team's visual platform to connect,
          <br /> collaborate, and create — together.
        </p>
        <div>
          <div class="sm:col-span-4">
            <div class="mt-8">
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                  className="block flex-1 border-2 rounded-3xl w-[440px] h-[48px] bg-transparent pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter your work email"
                />
                <button
                  type="submit"
                  className="bg-[#4262FF] rounded-3xl w-[440px] h-[48px] text-sm font-semibold text-[#FFFFFF] shadow-sm hover:bg-blue-500 mt-4"
                >
                  Sign up free
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-[#05003866] p-1">
          Collaborate with your team within minutes
        </p>
        <div className="mt-4">
          <img src={rating} alt="rating" />
        </div>
      </div>

      {/* banner image */}
      <div className="ml-10">
        <img src={banner} alt="bannerImage" />
      </div>
    </div>
  );
};

export default Banner;
