import React from "react";
import Banner from "./Banner/Banner";
import MidSection from "./MidSection/MidSection";
import Constraints from "./Constraints/Constraints";

const Home = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <Banner />
      <MidSection />
      {/* <Constraints /> */}
    </div>
  );
};

export default Home;
