import React from "react";
import Walmart from "../../../assets/Walmart.png";
import Cisco from "../../../assets/cisco.png";
import Volvo from "../../../assets/Volvo.png";
import Deloitte from "../../../assets/deloitte.png";
import Okta from "../../../assets/okta.png";
import { HiArrowLongRight } from "react-icons/hi2";

const MidSection = () => {
  const companies = [
    {
      image: Walmart,
    },
    {
      image: Cisco,
    },
    {
      image: Volvo,
    },
    {
      image: Deloitte,
    },
    {
      image: Okta,
    },
  ];

  const constraintsData = [
    {
      title: "Free Forever",
      description:
        "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
    },
    {
      title: "Easy Integrations",
      description:
        "Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace .",
    },
    {
      title: "Security First",
      description:
        "We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="h-[164px] w-[1120px] my-12">
            <p className="flex justify-center text-gray-600 font-lg">
              Trusted by 45M+ users
            </p>
            <div className="flex justify-center gap-12 my-10">
              {companies.map((company) => (
                <img src={company.image} alt="walmart" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <div className="h-[168px] mt-12">
            <p className="text-5xl text-center font-bold text-[#050038]">
              Collaborate without <br /> constraints
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-[1140px] -mt-16">
            {constraintsData.map((data) => (
              <div className="h-[268px] w-[360px] p-10">
                <p className="text-[#050038] text-start text-lg font-bold">
                  {data.title}
                </p>
                <p className="text-gray-600 text-sm font-semibold">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-10">
        <button className="bg-[#4262FF] px-1 py-1 rounded-3xl">
          <a
            href="/"
            className="flex px-4 py-1 mt-2 text-[#FFFFFF] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Sign up free
            <HiArrowLongRight className="mt-1 ml-1" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default MidSection;
