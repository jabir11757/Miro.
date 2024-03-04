import React from "react";
import Facebook from "../../../assets/Facebook.png";
import Youtube from "../../../assets/Youtube.png";
import Twiteer from "../../../assets/Twitter.png";
import Span from "../../../assets/span.png";

const Footer = () => {
  const footerData = [
    {
      image: Span,
      title: "iPhone",
    },
    {
      image: Span,
      title: "Android",
    },
    {
      image: Span,
      title: "Help",
    },
    {
      image: Span,
      title: "About",
    },
    {
      image: Span,
      title: "Insights",
    },
  ];
  return (
    <div className="h-[680px]  bg-[#02033B]">
      <div className="flex item-center justify-center">
        <div className="h-[488px] w-[1056px] mt-24">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            {/* 1st column */}
            <div>
              <p className="text-lg font-bold text-[#FFFFFF] mb-10">
                Scan.Detect.Remove
              </p>
              <div className="flex">
                <a className="mr-3" href="/">
                  <img className="w-auto h-4 sm:h-6" src={Twiteer} alt="logo" />
                </a>

                <a className="mx-3" href="/">
                  <img
                    className="w-auto h-4 sm:h-6"
                    src={Facebook}
                    alt="logo"
                  />
                </a>

                <a className="mx-3" href="/">
                  <img className="w-auto h-4 sm:h-6" src={Youtube} alt="logo" />
                </a>
              </div>
              <div className="flex my-10">
                <p className="text-[#FFFFFF] text-xs underline">
                  Privacy Policy
                </p>
                <p className="text-[#FFFFFF] text-xs underline mx-6">
                  Terms of Services
                </p>
              </div>
              <div>
                <p className="text-xs text-[#FFFFFF]">
                  Copyright © 2022 Certo Software Limited | Registered in <br />
                  England & Wales No. 10072356
                </p>
                <p className="text-xs text-[#FFFFFF] my-4">
                  Designed & developed by Bigger Picture
                </p>
              </div>
            </div>

            {/* 2nd column */}
            <div>
              <p className="text-2xl font-bold text-[#FFFFFF]">Miro.</p>
              <div className="mt-12">
                {footerData.map((f_data) => (
                  <div className="flex my-6">
                    <img
                      src={f_data.image}
                      className="text-[#FFC247] h-1 w-4 mt-3"
                      alt="s"
                    />
                    <p className="text-[#FFC247] font-semibold ml-2">
                      {f_data.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3rd column */}
            <div className="flex justify-start -ml-10">
              <div className="h-[233px] w-[435px] bg-[#FFC247] rounded-3xl">
                <section class="">
                  <div class="mx-auto text-start">
                    <div className="p-8">
                      <h1 class="text-lg font-extrabold text-[#02033B]">
                        Signup to our newsletter
                      </h1>
                      <p class="mx-auto text-start text-sm mt-3 text-[#02033B]">
                        Receive the latest mobile security news, exclusive
                        discounts & offers straight to your inbox!
                      </p>
                    </div>

                    <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                      <input
                        id="email"
                        type="text"
                        class="px-4 py-2 bg-[#FFFFFF] border rounded-s-3xl sm:mx-2 0 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Email Address"
                      />

                      <button class="-ml-2 px-4 py-2 text-sm rounded-e-3xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#02033B] focus:outline-none hover:bg-blue-900">
                        Submit
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <p className="w-[550px] flex justify-start text-white text-xs mt-24">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc.
            registered in the U.S. and other countries. App Store is a service
            mark of Apple Inc. Android, Google Play and the Google Play logo are
            trademarks of Google LLC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
