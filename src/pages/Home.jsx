import React from "react";
import banner from "../assets/toys-banner.jpg";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center">
      <img
        src={banner}
        alt="Toys Banner"
        className="w-full max-w-7xl rounded-2xl"
      />
    </div>
  );
};

export default Home;
